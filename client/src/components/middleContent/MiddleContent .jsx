import React from "react";
import "./middleContent.css";
import Story from "../story/Story";
import Feed from "../feed/Feed";
import CreatePost from "../createPost/CreatePost";


function MiddleContent() {
  return (
    <div className="middle">
      <Story />
      <CreatePost />
      <Feed />
    </div>
  );
}

export default MiddleContent;
