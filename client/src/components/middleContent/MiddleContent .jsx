import React, { useEffect } from "react";
import "./middleContent.css";
import Story from "../story/Story";
import Feed from "../feed/Feed";
import CreatePost from "../createPost/CreatePost";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, selectPosts } from "../../store/post.slice";


function MiddleContent() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const fetchData = async () => {
    try {
      await dispatch(getPosts())
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="middle">
      <Story />
      <CreatePost />
      {posts && posts.length > 0 && <Feed posts={posts} />}
    </div>
  );
}

export default MiddleContent;
