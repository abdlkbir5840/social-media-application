import React from "react";
import './menuSection.css'
import Notifications from "../notifications/Notifications";
import FriendRequests from "../friendRequests/FriendRequests";
import { Link } from "react-router-dom";
function MenuSection() {
  return (
    <div className="sidbar">
      <a href="" className="menu-item active">
        <span>
          <i class="fa-solid fa-house"></i>
        </span>
        <h3>Home</h3>
      </a>
      <Notifications />
      <Link to="messenger" className="menu-item" id="messages-notofications">
        <span class="position-relative ">
          <i class="fa-regular fa-envelope"></i>

          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-sm">
            7+
            <span class="visually-hidden">unread messages</span>
          </span>
        </span>
        <h3>Messages</h3>
      </Link>
      <a href="" className="menu-item">
        <span>
          <i class="fa-regular fa-bookmark"></i>
        </span>
        <h3>Bookmarks</h3>
      </a>
      <FriendRequests />
      <a href="" className="menu-item">
        <span>
          <i class="fa-solid fa-gear"></i>
        </span>
        <h3>Settings</h3>
      </a>
    </div>
  );
}

export default MenuSection;
