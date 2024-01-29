import { configureStore } from "@reduxjs/toolkit";
import { auth } from "./auth.slice";
import { profile } from "./profile.slice";
import { post } from "./post.slice";

const store = configureStore({
  reducer: {
    auth: auth,
    profile: profile,
    post: post,
  },
});

export default store;