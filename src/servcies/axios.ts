import axios from "axios";

import endPoint from "./endpoints.ts";

const baseURL = endPoint.endPoint;
const Axios = axios.create({ baseURL });

Axios.defaults.baseURL = baseURL;

// Response interceptor to handle unauthorized requests and server errors
Axios.interceptors.response.use(
  function (response) {
    // if (response?.status === 401) {
    // }
    return response;
  },
  function (error) {
    if (error?.response?.status === 401) {
      // handle unauthorized requests
    } else if (error?.response?.status >= 500) {
      // handle
    }
    return Promise.reject(error);
  }
);
export default Axios;
