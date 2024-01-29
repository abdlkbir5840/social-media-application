import instance from "../api/apiConfig";
import { LIKE_URL } from "../utils";

export const likeSerive = {
  likePost: async (postId) => {
    try {
      const response = await instance.post(`${LIKE_URL}/post/${postId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
