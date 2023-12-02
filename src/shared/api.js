import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

class APP_API {
  TODO = "todos";
}

export const API = new APP_API();
