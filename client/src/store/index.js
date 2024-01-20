import { configureStore } from "@reduxjs/toolkit";
import { auth } from "./auth.slice";
import { profile } from "./profile.slice";

const store = configureStore({
  reducer: {
    auth: auth,
    profile: profile
  },
});

export default store;