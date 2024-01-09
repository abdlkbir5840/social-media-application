import React from "react";
import './profileSelection.css'
function ProfileSection() {
  return (
    <a href="" className="profile">
      <div className="profile-pictuer">
        <img src="./assets/images/profile-1.jpg" alt="" />
      </div>
      <div className="handle">
        <h6>Ahmed Kamal</h6>
        <p className="text-muted">@ahmed</p>
      </div>
    </a>
  );
}

export default ProfileSection;
