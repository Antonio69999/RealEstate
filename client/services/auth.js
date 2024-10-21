import api from "./api";
import { saveToken } from "./storage";

export const login = async (username, password) => {
  try {
    const response = await api.post("/auth/login", { username, password });
    const token = response.data.token;
    await saveToken("authToken", token);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const register = async (username, password) => {
  try {
    const response = await api.post("/auth/register", { username, password });
    const token = response.data.token;
    await saveToken("authToken", token);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
