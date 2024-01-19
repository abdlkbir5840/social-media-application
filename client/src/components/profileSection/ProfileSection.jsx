import React, { useEffect } from "react";
import './profileSelection.css'
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, selectCurrentUser } from "../../store/auth.slice";

function ProfileSection() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const profileImgSrc = currentUser?.profileImg
    ? `/assets/images/${currentUser.profileImg}`
    : "/assets/images/social logo.png";

  return (
    <a href="" className="profile">
      <div className="profile-pictuer">
        <img src={profileImgSrc} alt="profile" />
      </div>
      <div className="handle">
        <h6>{currentUser?.firstName} {currentUser?.lastName}</h6>
        <p className="text-muted">@{currentUser?.firstName}</p>
      </div>
    </a>
  );
}

export default ProfileSection;
