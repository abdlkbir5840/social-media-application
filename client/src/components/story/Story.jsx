import React, { useState } from "react";
import "./story.css";

function Story() {
  const [stories, setStories] = useState([
    {
      id: 1,
      profileImage: "/assets/images/profile-2.jpg",
      storyImage: "/assets/images/story-1.jpg",
      name: "Your Story",
    },
    {
      id: 2,
      profileImage: "/assets/images/profile-3.jpg",
      storyImage: "/assets/images/story-2.jpg",
      name: "John Story",
    },
    {
      id: 3,
      profileImage: "/assets/images/profile-4.jpg",
      storyImage: "/assets/images/story-3.jpg",
      name: "Farah Story",
    },
    {
      id: 4,
      profileImage: "/assets/images/profile-5.jpg",
      storyImage: "/assets/images/story-4.jpg",
      name: "Ali Story",
    },
    {
      id: 4,
      profileImage: "/assets/images/profile-6.jpg",
      storyImage: "/assets/images/story-5.jpg",
      name: "Ali Story",
    },
    {
      id: 4,
      profileImage: "/assets/images/profile-7.jpg",
      storyImage: "/assets/images/story-6.jpg",
      name: "Ali Story",
    },
  ]);

  return (
    <div className="stories">
      {stories.map((story) => (
        <div
          key={story.id}
          className="story"
          style={{ background: `url(${story.storyImage}) no-repeat center center/cover` }}
        >
          <div className="profile-pictuer">
            <img src={story.profileImage} alt="profile" />
          </div>
          <p className="name">{story.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Story;
