import React, { useEffect } from "react";
import "./profileSelection.css";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, selectCurrentUser } from "../../store/auth.slice";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import ImageAvatars from "../badgeAvatars/ImageAvatars";

function ProfileSection() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const profileImgSrc = currentUser?.profileImg
    ? `/assets/images/${currentUser.profileImg}`
    : "/broken-image.jpg";

  return (
    <>
      {currentUser == undefined ||
        (currentUser === null && (
          <BeatLoader color="#36d7b7" className="spinner" />
        ))}

      <Link to={`/main/profile/${currentUser?.userId}`} className="profile">
        <ImageAvatars profileImage={profileImgSrc} />
        <div className="handle">
          <h6>
            {currentUser?.firstName} {currentUser?.lastName}
          </h6>
          <p className="text-muted">@{currentUser?.firstName}</p>
        </div>
      </Link>
    </>
  );
}

export default ProfileSection;
