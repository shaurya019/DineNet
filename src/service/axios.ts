import axios, { AxiosInstance } from "axios";
import { store } from "./store/cartStore";
import { signOutUser } from "./Slice/userSlice";
import FingerprintJS from '@fingerprintjs/fingerprintjs';

interface IAxios {
  client: AxiosInstance;
}

export default class Axios implements IAxios {
  client: AxiosInstance;
  deviceId: string;
  constructor() {
    this.client = axios.create();
    this.deviceId = "";

    this.client.interceptors.request.use(async (request) => {
      const authToken = await window.localStorage.getItem("authToken");
  
        if (authToken == null) {
          try {
            const fp = await FingerprintJS.load();
            const result = await fp.get();
            window.localStorage.setItem("deviceId", result.visitorId);
            this.deviceId = result.visitorId;
            console.log("FingerprintJS", result.visitorId);
          } catch (err:any) {
            console.log("FingerprintJS", err.message);
          }
        }
  
      
      if (authToken) {
        let token = authToken.split(' ').at(-1);
        request.headers.set("authorization", "Bearer " + token);
      } else {
        request.headers.set("authorization", "");
      }

      const deviceid = this.deviceId;
      console.log("deviceid", deviceid);
      if (deviceid) {
        console.log("userId", deviceid);
        request.headers.set("x-device-id", deviceid);
      }
      
     return await request;

    });

    this.client.interceptors.response.use(
      (response) => {
        console.log("user status", response.status);
        if (response.status === 401) {
          console.log("user status", response.status);
          window.localStorage.removeItem("authToken");
          window.localStorage.removeItem("firebaseToken");
          store.dispatch(signOutUser())
          return response
        }
        //@ts-ignore
        const authToken = response?.headers?.getAuthorization();
        window.localStorage.removeItem('persist:root');
        if (authToken)
          window.localStorage.setItem("authToken", authToken.split(" ").at(-1));
        return response;
      },
      (error) => {
        if (error.response && error.message) {
          console.log("Response data:", error.response.data);
          console.log("Response status:", error.response.status);
          console.log("Response message:", error?.response?.data?.message || error.message);
          if (error.response.status === 401) {
            console.log("user", error.response.status);
            window.localStorage.removeItem("authToken");
            window.localStorage.removeItem("firebaseToken");
            store.dispatch(signOutUser())
            return error.response
          }
        }

        window.localStorage.setItem("error", JSON.stringify({ type: "error", message: error?.response?.data?.message || error.message }) as any);

      }
    );
  }
}
