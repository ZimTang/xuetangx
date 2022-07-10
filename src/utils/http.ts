import axios, { AxiosRequestConfig } from 'axios';

const defaultConfig = {
  timeout: 5000,
  baseURL: import.meta.env.VITE_SERVER,
};

class Http {
  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }

  axiosInstance = axios.create(defaultConfig);

  /**
   * 请求拦截
   */
  httpInterceptorsRequest() {
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => config,
      (err) => Promise.reject(err)
    );
  }

  /**
   * 响应拦截
   */
  httpInterceptorsResponse() {
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (err) => Promise.reject(err)
    );
  }

  /**
   * GET请求
   */
  get(url: string, params?: object) {
    return this.axiosInstance
      .get(url, params)
      .then((res) => res.data)
      .catch();
  }

  /**
   * POST请求
   */
  post(url: string, params: object) {
    return this.axiosInstance
      .post(url, params)
      .then((res) => res.data)
      .catch();
  }
}

const http = new Http();

export default http;
