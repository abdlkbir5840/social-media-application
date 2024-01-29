import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { postService } from "../service/post.service ";
import { likeSerive } from "../service/like.service";

export const getUserPosts = createAsyncThunk(
  "post/getUserPosts",
  async ( userId ) => {
    try {
      const data = await postService.getUserPosts( userId );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getPosts = createAsyncThunk(
    "post/getPosts",
    async () => {
      try {
        const data = await postService.getPosts();
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  );

  export const likePost = createAsyncThunk(
    "post/likePost",
    async (postId) => {
      try {
        const data = await likeSerive.likePost(postId);
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  );
export const createPost = createAsyncThunk(
  "post/create",
  async ({ formData }) => {
    try {
      const data = await postService.createPost({ formData });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};
const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
      })
      .addCase(getUserPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.isLoading = false;
        toast.success("post created successfuly");
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(likePost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        const updatedPosts = state.posts.map((post) => {
            if (post.id === action.payload.id) {
              return action.payload;
            }
            return post;
          });
          state.posts = updatedPosts;
          state.isLoading = false;
      })
      .addCase(likePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const post = postSlice.reducer;
export const selectPosts = (state) => state.post.posts;
export const selectIsLoading = (state) => state.post.isLoading;
