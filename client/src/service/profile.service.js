import instance from "../api/apiConfig";
import { PROFILE_URL } from "../utils";

export const profileService = {
  getProfile: async (userId) => {
    try {
      const response = await instance.get(`${PROFILE_URL}/${userId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  editProfile: async ({profileDto, profileId, currentUserId}) => {
    console.log(profileDto)
    console.log(profileId)
    console.log(currentUserId)
    try {
      const response = await instance.put(`${PROFILE_URL}/${profileId}/${currentUserId}`, profileDto);
      // return response.data;
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }
};
