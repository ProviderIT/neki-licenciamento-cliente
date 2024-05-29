import axios, { AxiosInstance } from "axios";

const URL_API: string = 'http://129.148.46.26:8081/api/' ?? "";

const http: AxiosInstance = axios.create({
  baseURL: URL_API,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
})
http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      return new Error(error.response);
    }
  }
);

export { http };
