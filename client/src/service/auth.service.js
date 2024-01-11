import instance from "../api/apiConfig";

const authService = {
  register: async (userData) => {
    try {
      const response = await instance.post("/auth/signup", userData);
      return response.data;
    } catch (error) {
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
      throw error;
    }
  },
};

export default authService;
