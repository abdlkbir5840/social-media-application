import React, { useState } from "react";
import "./notifications.css";
function Notifications() {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const toggleNotification = () => {
    setIsActive((prev) => !prev);
    setIsNotificationVisible((prev) => !prev);
  };
  return (
    <div className={`menu-item ${isActive ? "active" : ""}`} id="notifications" onClick={toggleNotification}>
      <span className="position-relative">
        <i className="fa-regular fa-bell"></i>

        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-sm">
          99+
          <span className="visually-hidden">unread messages</span>
        </span>
      </span>
      <h3>Norifications</h3>
      {isNotificationVisible && (
      <div className="notifications-popup">
        <div>
          <div className="profile-pictuer">
            <img src="/assets/images/profile-2.jpg" alt="" />
          </div>
          <div className="notification-body">
            <b>ahmed kamal</b> accpet your friend request
            <small className="text-muted">2 DAYS AGO</small>
          </div>
        </div>
        <div>
          <div className="profile-pictuer">
            <img src="/assets/images/profile-2.jpg" alt="" />
          </div>
          <div className="notification-body">
            <b>ahmed kamal</b> accpet your friend request
            <small className="text-muted">2 DAYS AGO</small>
          </div>
        </div>
        <div>
          <div className="profile-pictuer">
            <img src="/assets/images/profile-2.jpg" alt="" />
          </div>
          <div className="notification-body">
            <b>ahmed kamal</b> accpet your friend request
            <small className="text-muted">2 DAYS AGO</small>
          </div>
        </div>
        <div>
          <div className="profile-pictuer">
            <img src="/assets/images/profile-2.jpg" alt="" />
          </div>
          <div className="notification-body">
            <b>ahmed kamal</b> accpet your friend request
            <small className="text-muted">2 DAYS AGO</small>
          </div>
        </div>
        <div>
          <div className="profile-pictuer">
            <img src="/assets/images/profile-3.jpg" alt="" />
          </div>
          <div className="notification-body">
            <b>ahmed kamal</b> accpet your friend request
            <small className="text-muted">2 DAYS AGO</small>
          </div>
        </div>
        <div>
          <div className="profile-pictuer">
            <img src="/assets/images/profile-4.jpg" alt="" />
          </div>
          <div className="notification-body">
            <b>ahmed kamal</b> accpet your friend request
            <small className="text-muted">2 DAYS AGO</small>
          </div>
        </div>
        <div>
          <div className="profile-pictuer">
            <img src="/assets/images/profile-5.jpg" alt="" />
          </div>
          <div className="notification-body">
            <b>ahmed kamal</b> accpet your friend request
            <small className="text-muted">2 DAYS AGO</small>
          </div>
        </div>
        <div>
          <div className="profile-pictuer">
            <img src="/assets/images/profile-6.jpg" alt="" />
          </div>
          <div className="notification-body">
            <b>ahmed kamal</b> accpet your friend request
            <small className="text-muted">2 DAYS AGO</small>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default Notifications;
