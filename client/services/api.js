import axios from "axios";
import { API_URL } from "@env";
import { getToken } from "./storage";

console.log(API_URL);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await getToken("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("Request Config:", config);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Response Error:", error);
    return Promise.reject(error);
  }
);

export default api;
