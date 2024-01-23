import React, { useState } from "react";
import "./notifications.css";
import Badge from "@mui/material/Badge";
import ImageAvatars from "../badgeAvatars/ImageAvatars";
function Notifications() {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const toggleNotification = () => {
    setIsActive((prev) => !prev);
    setIsNotificationVisible((prev) => !prev);
  };
  const notificationsData = [
    {
      id: 1,
      profileImage: "/assets/images/profile-2.jpg",
      userName: "Ahmed Kamal",
      timeAgo: "2 DAYS AGO",
    },
    {
      id: 2,
      profileImage: "/assets/images/profile-3.jpg",
      userName: "Another User",
      timeAgo: "3 DAYS AGO",
    },
    {
      id: 3,
      profileImage: "/assets/images/profile-4.jpg",
      userName: "Another User",
      timeAgo: "3 DAYS AGO",
    },
    {
      id: 4,
      profileImage: "/assets/images/profile-5.jpg",
      userName: "Another User",
      timeAgo: "3 DAYS AGO",
    },
    {
      id: 5,
      profileImage: "/assets/images/profile-6.jpg",
      userName: "Another User",
      timeAgo: "3 DAYS AGO",
    },
    {
      id: 6,
      profileImage: "/assets/images/profile-7.jpg",
      userName: "Another User",
      timeAgo: "3 DAYS AGO",
    },
  ];
  return (
    <div
      className={`menu-item ${isActive ? "active" : ""}`}
      id="notifications"
      onClick={toggleNotification}
    >
      <Badge color="error" badgeContent={75}>
        <i className="fa-regular fa-bell"></i>
      </Badge>
      <h3>Norifications</h3>
      {isNotificationVisible && (
        <div className="notifications-popup">
          {notificationsData.map((notification) => (
            <div key={notification.id}>
              <ImageAvatars profileImage={notification.profileImage} />

              <div className="notification-body">
                <b>{notification.userName}</b> accpet your friend request
                <small className="text-muted">{notification.timeAgo}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Notifications;
