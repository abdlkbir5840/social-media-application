import instance from "../api/apiConfig";
import { PROFILE_URL } from "../utils";

const authService = {
  register: async (userData) => {
    try {
      const response = await instance.post("/auth/signup", userData);
      return response.data;
    } catch (error) {
    console.log(error.response.data.message)
    console.log(error)
      throw error;
    }
  },

  login: async (credentials) => {
    try {
      const response = await instance.post("/auth/signin", credentials);
      return response.data;
    } catch (error) {
    console.log(error.response.data.message)
    console.log(error)
      throw error;
    }
  },
  logout: async (cookies) => {
    try {
      const [, , removeCookie] = cookies;
      removeCookie("authToken");
    } catch (error) {
    console.log(error)
      throw error;
    }
  },
  
  getCurrentUser: async () => {
    try {
      const response = await instance.get(`${PROFILE_URL}/profileSelection`);
      return response.data;
    } catch (error) {
    console.log(error.response.data.message)
    console.log(error)
      throw error;
    }
  },
};

export default authService;
