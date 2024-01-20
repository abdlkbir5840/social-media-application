import Feed from "../../components/feed/Feed";
import LeftSidebar from "../../components/sideBar/leftSideBar/LeftSidebar ";
import ProfileHeader from "./ProfileHeader";
import "./profile.css";
import { useEffect } from "react";
import CreatePost from "./CreatePost";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  selectIsLoading,
  selectProfile,
} from "../../store/profile.slice";
import { BeatLoader } from "react-spinners";
import { selectCurrentUser } from "../../store/auth.slice";

const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { id } = useParams();
  const profileInfo = useSelector(selectProfile);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile(id));
  }, [dispatch, id]);
  if (isLoading || profileInfo === null || profileInfo.userId===null) {
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
    <div className="custom-container profile-container">
      <LeftSidebar />
      <div className="profil-main">
        <ProfileHeader
          userProfile={profileInfo}
          currentUserId={currentUser.userId}
        />
        {currentUser.userId === profileInfo.userId && <CreatePost />}
        <Feed />
      </div>
    </div>
  );
};

export default Profile;
