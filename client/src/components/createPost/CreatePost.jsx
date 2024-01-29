import { useDispatch, useSelector } from "react-redux";
import "./createPost.css";
import { getCurrentUser, selectCurrentUser } from "../../store/auth.slice";
import ImageAvatars from "../badgeAvatars/ImageAvatars";
import { BeatLoader } from "react-spinners";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ProfileSection from "../profileSection/ProfileSection";
import {
  faImage,
  faLocationDot,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createPost } from "../../store/post.slice";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
};
function CreatePost() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    caption: "",
    image: null,
  });
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files.length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      setPreviewImage(imageUrl);
    }
    const newValue = type === "file" ? files[0].name : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
  const profileImgSrc = currentUser?.profileImg
    ? `/assets/images/${currentUser.profileImg}`
    : "/broken-image.jpg";
    const handlePublish = async() => {
      // const response  = await postService.createPost({formData})
      dispatch(createPost({formData}))
    }
  return (
    <>
      {currentUser == undefined ||
        (currentUser === null && (
          <BeatLoader color="#36d7b7" className="spinner" />
        ))}
      <form className="create-post" onClick={handleOpen}>
        <ImageAvatars profileImage={profileImgSrc} />
        <input
          type="text"
          name=""
          id="create-post"
          value=""
          placeholder={`What's on your mind, ${currentUser?.firstName}`}
        />
      </form>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div class="modal-content">
              <div class="modal-header custom-bg-primary text-white">
                <h5 class="modal-title" id="exampleSideModal2">
                  Create a post
                </h5>
                <button
                  type="button"
                  onClick={handleClose}
                  class="btn-close btn-close-white"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <ProfileSection />
                  </div>
                </div>
                <div class="row">
                  {previewImage && (
                    <div class="col-md-6 mb-4">
                      <div
                        class="bg-image hover-overlay ripple shadow-2-strong"
                        data-mdb-ripple-init=""
                        data-mdb-ripple-color="light"
                      >
                        <img
                          src={previewImage}
                          class="img-fluid"
                          alt="Hollywood Sign"
                        />
                      </div>
                    </div>
                  )}
                  <div class={previewImage ? "col-md-6" : "col-md-12"}>
                    <textarea
                      id="caption"
                      name="caption"
                      className=" create-post-input"
                      placeholder={`What's on your mind, ${currentUser?.firstName}`}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 add-to-post">
                    <span>Add to your post</span>
                    <div className="icons">
                      <span className="f-icon">
                        <label for="image">
                          <FontAwesomeIcon icon={faImage} />
                        </label>
                        <input
                          id="image"
                          name="image"
                          class="form-control"
                          type="file"
                          hidden
                          onChange={handleInputChange}
                        />
                      </span>
                      <span className="f-icon">
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                      <span className="f-icon">
                        <FontAwesomeIcon icon={faUserTag} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="custom-btn custom-btn-primary w-100 not-allowed"
                  data-mdb-ripple-init=""
                  onClick={handlePublish}
                  disabled={!formData.image}
                  style={formData.image ? {} : { cursor: 'not-allowed' }}
                >
                  Publish
                </button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default CreatePost;
