import "./Feed.css";
import ImageAvatars from "../badgeAvatars/ImageAvatars";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/auth.slice";
import { likePost } from "../../store/post.slice";
import { formatDistanceToNow } from "date-fns";
import CreateComment from "../comments/CreateComment";
import DisplayComments from "../comments/DisplayComments";

function Feed({ posts }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const handleLikeClick = async (postId) => {
    dispatch(likePost(postId));
  };
  return (
    <div className="feeds">
      {posts &&
        posts.length > 0 &&
        Object.values(posts)?.map((feed) => (
          <div key={feed.id} className="feed">
            <div className="head">
              <div className="user">
                <ImageAvatars
                  profileImage={"/assets/images/" + feed.user.profileImage}
                />
                <div className="info">
                  <h3>{feed.user.firstName} {feed.user.lastName}</h3>
                  <small className="text-muted">{formatDistanceToNow(new Date(feed.createdAt), { addSuffix: true })} Agadir</small>
                </div>
              </div>
              <span className="edit">
                <i className="fa-solid fa-ellipsis"></i>
              </span>
            </div>

            <div className="photo">
              <img src={"/assets/images/" + feed.image} alt="photo" />
            </div>
            <div className="action-buttons">
              <div className="interaction-buttons">
                {feed.likes.length > 0 ? (
                  feed.likes.some(
                    (likedUser) => likedUser.id === currentUser.userId
                  ) ? (
                    <span onClick={() => handleLikeClick(feed.id)}>
                      <i className="fa-solid fa-heart text-danger"></i>
                    </span>
                  ) : (
                    <span onClick={() => handleLikeClick(feed.id)}>
                      <i className="fa-regular fa-heart"></i>
                    </span>
                  )
                ) : (
                  <span onClick={() => handleLikeClick(feed.id)}>
                    <i className="fa-regular fa-heart"></i>
                  </span>
                )}
                <span>
                  <i className="fa-regular fa-comment"></i>
                </span>
                <span>
                <i class="fa-regular fa-share-from-square"></i>
                </span>
              </div>
              <div className="bookmark">
                <span>
                  <i className="fa-regular fa-bookmark"></i>
                </span>
              </div>
            </div>
            <div className="liked-by">
              {feed.likes.slice(0, 3).map((likedUser, index) => (
                <span key={index}>
                  <img
                    src={"/assets/images/" + likedUser.profileImage}
                    alt=""
                  />
                </span>
              ))}
              <p>
                Liked by <b>{feed?.likes[0]?.firstName}</b> and{" "}
                <b>{feed.countPostLikes} others</b>
              </p>
            </div>
            <div className="caption">
              <p>
                {feed.caption}
                <span>
                  <div className="harsh-tag">#lifestyle</div>
                </span>
              </p>
            </div>
            <CreateComment authorPost={feed.user.firstName}/>
            {/* <div className="comments text-muted">
              View all {feed.countPostComments} comments
            </div> */}
            <DisplayComments feed={feed}/>
          </div>
        ))}
      
    </div>
  );
}

export default Feed;
