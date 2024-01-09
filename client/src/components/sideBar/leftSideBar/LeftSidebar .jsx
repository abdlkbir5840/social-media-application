import React from "react";
import "./leftSidBar.css";

import ProfileSection from "../../profileSection/ProfileSection";
import MenuSection from "../../menuSection/MenuSection";
import CreatePostButton from "../../createPostButton/CreatePostButton";
function LeftSidebar() {
  return (
    <div className="left">
      <ProfileSection />
      <MenuSection />
      <CreatePostButton />
    </div>
  );
}

export default LeftSidebar;
