import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, selectCurrentUser } from "../../store/auth.slice";
import { useEffect } from "react";
import ImageAvatars from "../badgeAvatars/ImageAvatars";

function CreateComment({authorPost}) {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    useEffect(() => {
        dispatch(getCurrentUser());
      }, []);
  const profileImgSrc = currentUser?.profileImg
    ? `/assets/images/${currentUser.profileImg}`
    : "/broken-image.jpg";
  return (
    <form className="create-post" style={{padding:" 0.4rem Opx"}} >
      <ImageAvatars profileImage={profileImgSrc} />
      <input
        type="text"
        name=""
        id="create-post"
        placeholder={"Add comment to "+authorPost +"'s post"}
      />
    </form>
  );
}

export default CreateComment;
