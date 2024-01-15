import React from "react";
import EditeProfile from "./EditeProfile";

function ProfileHeader() {
  return (
    <div className="row">
      <div className="col-12 grid-margin">
        <div className="profile-header">
          <div className="cover">
            <div className="gray-shade"></div>
            <figure>
              <img
                src="/assets/images/feed-1.jpg"
                className="img-fluid"
                alt="profile cover"
              />
            </figure>
            <div className="cover-body d-flex justify-content-between align-items-center">
              <div>
                <img
                  className="profile-pic"
                  src="/assets/images/profile-1.jpg"
                  alt="profile"
                />
                <span className="profile-name">Amiah Burton</span>
              </div>
            </div>
          </div>
          <div className="header-links">
            <ul className="links d-flex  align-items-center mt-3 mt-md-0">
              <li className="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                <i className="fa-solid fa-users"></i>
                <a className="m-2 text-muted pt-1px d-none d-md-block" href="#">
                  +3,765
                </a>
              </li>
              <li className="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                <i className="fa-solid fa-image"></i>
                <a className="m-2 text-muted pt-1px d-none d-md-block" href="#">
                  Photos
                </a>
              </li>
              <li className="header-link-item ml-3 pl-3 border-left d-flex align-items-center">
                <i className="fa-solid fa-video"></i>
                <a className="m-2 text-muted pt-1px d-none d-md-block" href="#">
                  Reels
                </a>
              </li>
            </ul>
            <div classNameName="edit-profile">
              <EditeProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
