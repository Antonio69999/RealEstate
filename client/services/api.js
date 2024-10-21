import axios from "axios";
import { API_URL } from "@env";
import { getToken } from "./storage";

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
      // si il y a un token, on l'envoie dans le header de la requête
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
