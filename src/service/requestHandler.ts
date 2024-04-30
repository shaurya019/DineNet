import { AxiosRequestConfig } from "axios";
import Axios from "./axios";

export interface IRequest extends AxiosRequestConfig {}

const AxiosInstance = new Axios();

export const requestHandler = (request: IRequest) => {
  return AxiosInstance.client(request).then((response) => response.data);
};
