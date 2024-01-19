import Feed from "../../components/feed/Feed";
import LeftSidebar from "../../components/sideBar/leftSideBar/LeftSidebar ";
import ProfileHeader from "./ProfileHeader";
import "./profile.css";
import { useEffect } from "react";
import instance from "../../api/apiConfig";
import CreatePost from "./CreatePost";

const Profile = () => {

  useEffect(() => {
    console.log("from profile");
    const fetch = async () => {
      const response = await instance.get(`/api/v1/profile/profile/${1}`);
      console.log(response.data);
    };
    fetch();
  }, []);
  return (
    <div className="custom-container profile-container">
      <LeftSidebar />
      <div className="profil-main">
        <ProfileHeader />
        <CreatePost />
        <Feed />
      </div>
    </div>
  );
};

export default Profile;
