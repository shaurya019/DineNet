import axios, { AxiosRequestConfig } from "axios";

export interface IRequest extends AxiosRequestConfig {}

export const requestHandler = (request: IRequest) => {
  return axios(request).then((response) => response.data);
};
