import { AsyncStorage } from "react-native";

export const saveToken = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log("Error saving token", error);
  }
};

export const getToken = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log("Error retrieving token", error);
  }
};

export const removeToken = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("Error deleting token", error);
  }
};
