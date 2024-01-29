import ImageAvatars from "../badgeAvatars/ImageAvatars";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/auth.slice";
import { likePost } from "../../store/post.slice";
import { formatDistanceToNow } from "date-fns";
import CreateComment from "../comments/CreateComment";
import { Divider } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  overflowY: "scroll",
  borderRadius: 6,
};
function DisplayComments({ feed }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [feeds, setFeeds] = useState([
    {
      id: 1,
      user: {
        profileImage: "/assets/images/profile-2.jpg",
        name: "Lana Rose",
      },
      location: "Errachidia, 15 MINUTES AGO",
      photo: "/assets/images/feed-1.jpg",
      interactionButtons: [
        "fa-regular fa-heart",
        "fa-regular fa-comment",
        "fa-solid fa-share",
      ],
      bookmark: "fa-regular fa-bookmark",
      likedBy: [
        "/assets/images/profile-1.jpg",
        "/assets/images/profile-2.jpg",
        "/assets/images/profile-3.jpg",
      ],
      likeCount: 275,
      caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      commentsCount: 277,
    },
  ]);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const handleLikeClick = async (postId) => {
    dispatch(likePost(postId));
  };
  return (
    <>
      <div className="comments text-muted" onClick={handleOpen}>
        View all {feed.countPostComments} comments
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="bg-light">
            <div class="modal-content border-light bg-light">
              <div key={feed.id} className="feed">
                <div className="head">
                  <div className="user">
                    <ImageAvatars
                      profileImage={"/assets/images/" + feed.user.profileImage}
                    />
                    <div className="info">
                      <h3>
                        {feed.user.firstName} {feed.user.lastName}
                      </h3>
                      <small className="text-muted">
                        {formatDistanceToNow(new Date(feed.createdAt), {
                          addSuffix: true,
                        })}{" "}
                        Agadir
                      </small>
                    </div>
                  </div>
                  <div className="bookmark" style={{ cursor: "pointer" }}>
                    <span>
                      <i className="fa-regular fa-bookmark"></i>
                    </span>
                  </div>
                </div>
                <div className="caption mt-3">
                  <p>
                    {feed.caption}
                    <span>
                      <div className="harsh-tag">#lifestyle</div>
                    </span>
                  </p>
                </div>
                <div className="photo">
                  <img src={"/assets/images/" + feed.image} alt="photo" />
                </div>
                <div className="interaction-buttons-comments">
                  <span>
                    87 j'aime
                  </span>
                  <div className="d-flex justify-content-between gap-3 ">
                    <span>87 comment</span>
                    <span>87 share</span>
                  </div>
                </div>
                <div class="bg-secondary w-100" style={{ padding: 0.5 }}></div>
                <div className="action-buttons">
                  <div className="interaction-buttons-comments">
                    {feed.likes.length > 0 ? (
                      feed.likes.some(
                        (likedUser) => likedUser.id === currentUser.userId
                      ) ? (
                        <span onClick={() => handleLikeClick(feed.id)}>
                          j'aime
                          <i className="fa-solid fa-heart text-danger"></i>
                        </span>
                      ) : (
                        <span onClick={() => handleLikeClick(feed.id)}>
                          j'aime
                          <i className="fa-regular fa-heart"></i>
                        </span>
                      )
                    ) : (
                      <span onClick={() => handleLikeClick(feed.id)}>
                        j'aime
                        <i className="fa-regular fa-heart"></i>
                      </span>
                    )}
                    <span>
                      comment
                      <i className="fa-regular fa-comment"></i>
                    </span>
                    <span>
                      share
                      <i class="fa-regular fa-share-from-square"></i>
                    </span>
                  </div>
                </div>
                <div class="bg-secondary w-100" style={{ padding: 0.5 }}></div>
                <CreateComment authorPost={feed.user.firstName} />
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default DisplayComments;
