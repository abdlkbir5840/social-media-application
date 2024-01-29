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
import { getUserPosts, selectPosts } from "../../store/post.slice";

const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { id } = useParams();
  const profileInfo = useSelector(selectProfile);
  const userPosts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      await dispatch(getProfile(id))
        .then(() => dispatch(getUserPosts(currentUser.userId)))
        .catch((error) => console.error("Error fetching data:", error));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id, currentUser?.userId]);
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
          {userPosts && userPosts.length > 0 && <Feed posts={userPosts} />}
        </div>
      </div>
    </>
  );
};

export default Profile;
