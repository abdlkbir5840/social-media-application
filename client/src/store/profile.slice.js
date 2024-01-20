import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { profileService } from "../service/profile.service";


export const getProfile = createAsyncThunk(
  "profile/userId",
  async (userId) => {
    try {
      const data = await profileService.getProfile(userId);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  profileInfo: null,
  isLoading: false,
  error: null,
};
const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getProfile.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getProfile.fulfilled, (state, action) => {
      state.profileInfo = action.payload;
      state.isLoading = false;
    })
    .addCase(getProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const profile = profileSlice.reducer;
export const selectProfile= (state) => state.profile.profileInfo;
export const selectIsLoading= (state) => state.profile.isLoading;
