import axios from 'axios';

const defaultConfig = {
  timeout: 5000,
  baseURL: 'https://dfa3bfea-1464-4aad-8c30-e013d15f8de1.mock.pstmn.io',
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
      (config) => config,
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
  get(url, params) {
    return this.axiosInstance
      .get(url, params)
      .then((res) => res.data)
      .catch();
  }

  /**
   * POST请求
   */
  post(url, params) {
    return this.axiosInstance
      .post(url, params)
      .then((res) => res.data)
      .catch();
  }
}

const http = new Http();

export default http;
