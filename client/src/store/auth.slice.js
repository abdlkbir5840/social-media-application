import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../service/auth.service";

export const getCurrentUser = createAsyncThunk(
  "auth/profileSelection",
  async () => {
    try {
      const data = await authService.getCurrentUser();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  user: null,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const auth = authSlice.reducer;
export const selectCurrentUser = (state) => state.auth.user;
