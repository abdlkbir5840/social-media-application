
import { useDispatch, useSelector } from "react-redux";
import "./createPost.css";
import { getCurrentUser, selectCurrentUser } from "../../store/auth.slice";
import ImageAvatars from "../badgeAvatars/ImageAvatars";
import { BeatLoader } from "react-spinners";
import { useEffect } from "react";
function CreatePost({name}) {
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
      <form className="create-post">
        <ImageAvatars profileImage={profileImgSrc} />
        <input
          type="text"
          name=""
          id="create-post"
          placeholder={`What's on your mind, ${name}`}
          disabled
        />
      </form>
    </>
  );
}

export default CreatePost;
