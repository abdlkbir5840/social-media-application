import React, { useState } from 'react';
import './Feed.css';

function Feed() {
  const [feeds, setFeeds] = useState([
    {
      id: 1,
      user: {
        profileImage: './assets/images/profile-2.jpg',
        name: 'Lana Rose',
      },
      location: 'Errachidia, 15 MINUTES AGO',
      photo: './assets/images/feed-1.jpg',
      interactionButtons: ['fa-regular fa-heart', 'fa-regular fa-comment', 'fa-solid fa-share'],
      bookmark: 'fa-regular fa-bookmark',
      likedBy: [
        './assets/images/profile-1.jpg',
        './assets/images/profile-2.jpg',
        './assets/images/profile-3.jpg',
      ],
      likeCount: 275,
      caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      commentsCount: 277,
    },
    {
      id: 2,
      user: {
        profileImage: './assets/images/profile-2.jpg',
        name: 'Lana Rose',
      },
      location: 'Errachidia, 15 MINUTES AGO',
      photo: './assets/images/feed-2.jpg',
      interactionButtons: ['fa-regular fa-heart', 'fa-regular fa-comment', 'fa-solid fa-share'],
      bookmark: 'fa-regular fa-bookmark',
      likedBy: [
        './assets/images/profile-1.jpg',
        './assets/images/profile-2.jpg',
        './assets/images/profile-3.jpg',
      ],
      likeCount: 275,
      caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      commentsCount: 277,
    },
    {
      id: 3,
      user: {
        profileImage: './assets/images/profile-2.jpg',
        name: 'Lana Rose',
      },
      location: 'Errachidia, 15 MINUTES AGO',
      photo: './assets/images/feed-3.jpg',
      interactionButtons: ['fa-regular fa-heart', 'fa-regular fa-comment', 'fa-solid fa-share'],
      bookmark: 'fa-regular fa-bookmark',
      likedBy: [
        './assets/images/profile-1.jpg',
        './assets/images/profile-2.jpg',
        './assets/images/profile-3.jpg',
      ],
      likeCount: 275,
      caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      commentsCount: 277,
    },
    {
      id: 4,
      user: {
        profileImage: './assets/images/profile-2.jpg',
        name: 'Lana Rose',
      },
      location: 'Errachidia, 15 MINUTES AGO',
      photo: './assets/images/feed-4.jpg',
      interactionButtons: ['fa-regular fa-heart', 'fa-regular fa-comment', 'fa-solid fa-share'],
      bookmark: 'fa-regular fa-bookmark',
      likedBy: [
        './assets/images/profile-1.jpg',
        './assets/images/profile-2.jpg',
        './assets/images/profile-3.jpg',
      ],
      likeCount: 275,
      caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      commentsCount: 277,
    },
    {
      id: 5,
      user: {
        profileImage: './assets/images/profile-2.jpg',
        name: 'Lana Rose',
      },
      location: 'Errachidia, 15 MINUTES AGO',
      photo: './assets/images/feed-5.jpg',
      interactionButtons: ['fa-regular fa-heart', 'fa-regular fa-comment', 'fa-solid fa-share'],
      bookmark: 'fa-regular fa-bookmark',
      likedBy: [
        './assets/images/profile-1.jpg',
        './assets/images/profile-2.jpg',
        './assets/images/profile-3.jpg',
      ],
      likeCount: 275,
      caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      commentsCount: 277,
    },
  ]);

  return (
    <div className="feeds">
      {feeds.map((feed) => (
        <div key={feed.id} className="feed">
          <div className="head">
            <div className="user">
              <div className="profile-pictuer">
                <img src={feed.user.profileImage} alt="profile" />
              </div>
              <div className="info">
                <h3>{feed.user.name}</h3>
                <small>{feed.location}</small>
              </div>
            </div>
            <span className="edit">
              <i className="fa-solid fa-ellipsis"></i>
            </span>
          </div>

          <div className="photo">
            <img src={feed.photo} alt="photo" />
          </div>
          <div className="action-buttons">
            <div className="interaction-buttons">
              {feed.interactionButtons.map((button, index) => (
                <span key={index}>
                  <i className={button}></i>
                </span>
              ))}
            </div>
            <div className="bookmark">
              <span>
                <i className={feed.bookmark}></i>
              </span>
            </div>
          </div>
          <div className="liked-by">
            {feed.likedBy.map((likedUser, index) => (
              <span key={index}>
                <img src={likedUser} alt="" />
              </span>
            ))}
            <p>
              Liked by <b>Johen Oli</b> and <b>{feed.likeCount} others</b>
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
          <div className="comments text-muted">View all {feed.commentsCount} comments</div>
        </div>
      ))}
    </div>
  );
}

export default Feed;
