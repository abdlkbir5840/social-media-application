import instance from "../api/apiConfig";
import { POST_URL } from "../utils";

export const postService = {
  getPosts: async () => {
    try {
      const response = await instance.get(`${POST_URL}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  getUserPosts: async (userId) => {
    try {
      const response = await instance.get(`${POST_URL}/userPosts/${userId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  createPost: async ({formData}) => {
    try {
      const response = await instance.post(`${POST_URL}`, formData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
};
