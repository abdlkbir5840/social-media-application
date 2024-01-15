import React from "react";
import "./middleContent.css";
import Story from "../story/Story";
import Feed from "../feed/Feed";
function MiddleContent() {
  return (
    <div className="middle">
      <Story />
      {/*================================= CREATE POST ================================= */}
      <form className="create-post" action="">
        <div className="profile-pictuer">
          <img src="/assets/images/profile-1.jpg" alt="profile" />
        </div>
        <input
          type="text"
          name=""
          id="create-post"
          placeholder="What's on your mind, Ahmed"
        />
        <input
          type="submit"
          name=""
          id=""
          value="Post"
          className="custom-btn custom-btn-primary"
        />
      </form>
      <Feed />
    </div>
  );
}

export default MiddleContent;
