import React, { useState } from "react";
import "./friendRequests.css";
import { Badge } from "@mui/material";
import ImageAvatars from "../badgeAvatars/ImageAvatars";
function FriendRequests() {
  const [isFriendRequestsVisible, setIsFriendRequestsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const toggleFriendRequests = () => {
    setIsActive((prev) => !prev);
    setIsFriendRequestsVisible((prev) => !prev);
  };
  const [friendsRequests, setFriendsRequests] = useState([
    {
      id: 1,
      name: "John Snow",
      mutualFriends: 8,
      imageSrc: "/assets/images/profile-2.jpg",
    },
    {
      id: 2,
      name: "Arya Stark",
      mutualFriends: 5,
      imageSrc: "/assets/images/profile-3.jpg",
    },
    {
      id: 2,
      name: "Arya Stark",
      mutualFriends: 5,
      imageSrc: "/assets/images/profile-4.jpg",
    },
  ]);
  return (
    <div
      className={`menu-item ${isActive ? "active" : ""}`}
      onClick={toggleFriendRequests}
    >
      <Badge color="error" badgeContent={6}>
        <i className="fa-solid fa-user-plus"></i>
      </Badge>
      <h3>Requests</h3>
      {isFriendRequestsVisible && (
        <div className="friend-requests">
          {friendsRequests.map((request) => (
            <div key={request.id} className="request">
              <div className="info">
                <ImageAvatars profileImage={request.imageSrc} />
                <div>
                  <h5>{request.name}</h5>
                  <p className="text-muted">{request.mutualFriends} mutual friends</p>
                </div>
              </div>
              <div className="action">
                <div className="custom-btn custom-btn-primary">Accept</div>
                <div className="custom-btn">Decline</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FriendRequests;
