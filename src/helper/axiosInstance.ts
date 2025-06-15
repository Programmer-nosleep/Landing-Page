import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { BASE_URL } from './apiPaths.tsx';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  }

  (error: AxiosError): Promise<never> => {
    if(error.response) {
      const status = error.response.status;

      // if (status === 401) {
      //   window.location.href = "/register";
      // } else if (status === 500) {
      //   console.error("Server error. Please try again later.");
      // }

      (status === 401) ? window.location.href = "/register" : (status === 500) ? console.error("Server error. Please try again later.") : null;

    } else if (error.code === "ECONNABORTED") {
      console.error("Request timeout. Please try again.");
    }
  }
);
