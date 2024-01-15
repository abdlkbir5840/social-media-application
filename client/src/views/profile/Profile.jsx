import Feed from "../../components/feed/Feed";
import LeftSidebar from "../../components/sideBar/leftSideBar/LeftSidebar ";
import ProfileHeader from "./ProfileHeader";
import "./profile.css";

const Profile = () => {
  return (
    <div className="custom-container profile-container">
      <LeftSidebar />
      <div className="profil-main">
        <ProfileHeader />
        <Feed />
      </div>
    </div>
  );
};

export default Profile;
