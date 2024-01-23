import Feed from "../../components/feed/Feed";
import LeftSidebar from "../../components/sideBar/leftSideBar/LeftSidebar ";
import ProfileHeader from "./ProfileHeader";
import "./profile.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  selectIsLoading,
  selectProfile,
} from "../../store/profile.slice";
import { BeatLoader } from "react-spinners";
import { selectCurrentUser } from "../../store/auth.slice";
import IntroSection from "./IntroSection ";
import CreatePost from "../../components/createPost/CreatePost";


const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { id } = useParams();
  const profileInfo = useSelector(selectProfile);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile(id));
  }, [dispatch, id]);
  return (
    <>
      {isLoading ||
        profileInfo == undefined ||
        (profileInfo === null && (
          <BeatLoader color="#36d7b7" className="spinner" />
        ))}
      <div className="custom-container profile-container">
        <LeftSidebar />
        <div className="profil-main">
          <ProfileHeader
            userProfile={profileInfo ? profileInfo : null}
            currentUserId={currentUser?.userId}
          />
          <IntroSection
            city={profileInfo?.city}
            country={profileInfo?.country}
            address={profileInfo?.address}
            telephone={profileInfo?.telephone}
            gender={profileInfo?.gender}
            birthday={profileInfo?.birthday}
          />
          {currentUser?.userId === profileInfo?.userId && (
            <CreatePost name={profileInfo?.firstName} />
          )}
  
          <Feed />
        </div>
      </div>
    </>
  );
};

export default Profile;
