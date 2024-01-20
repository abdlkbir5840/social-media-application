import React, { useEffect } from "react";
import "./profileSelection.css";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, selectCurrentUser } from "../../store/auth.slice";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

function ProfileSection() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const profileImgSrc = currentUser?.profileImg
    ? `/assets/images/${currentUser.profileImg}`
    : "/assets/images/social logo.png";

  if (currentUser === null) {
    return (
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center w-100 "
      >
        <BeatLoader color="#36d7b7" />
      </div>
    );
  }
  return (
    <Link to={`/main/profile/${currentUser.userId}`} className="profile">
      <div className="profile-pictuer">
        <img src={profileImgSrc} alt="profile" />
      </div>
      <div className="handle">
        <h6>
          {currentUser?.firstName} {currentUser?.lastName}
        </h6>
        <p className="text-muted">@{currentUser?.firstName}</p>
      </div>
    </Link>
  );
}

export default ProfileSection;
