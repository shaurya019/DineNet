import axios, { AxiosInstance } from "axios";
interface IAxios {
  client: AxiosInstance;
}
export default class Axios implements IAxios {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create();

    this.client.interceptors.request.use(async (request) => {
      const authToken = await window.localStorage.getItem("authToken");
      if (authToken) {
        let token=authToken.split(' ').at(-1)
        request.headers.set("authorization", "Bearer " + token);
      }
      return request;
    });

    this.client.interceptors.response.use((response) => {
      //@ts-ignore
      const authToken = response?.headers?.getAuthorization();
      window.localStorage.setItem("authToken", authToken.split(' ').at(-1));
      return response;
    });
  }
}
