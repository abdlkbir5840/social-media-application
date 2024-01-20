import React, { useState } from "react";
import "./menuSection.css";
import Notifications from "../notifications/Notifications";
import FriendRequests from "../friendRequests/FriendRequests";
import { Link } from "react-router-dom";

function MenuSection() {
  const [activeMenuItem, setActiveMenuItem] = useState("home"); // Initial active menu item

  const handleMenuItemClick = (menuItem) => {
    console.log(activeMenuItem)
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="sidbar">
      <Link
        to="/main"
        className={`menu-item ${activeMenuItem === "home" ? "active" : ""}`}
        onClick={() => handleMenuItemClick("home")}
      >
        <span>
          <i className="fa-solid fa-house"></i>
        </span>
        <h3>Home</h3>
      </Link>
      <Notifications />
      <Link
        to="messenger"
        className={`menu-item ${
          activeMenuItem === "messages" ? "active" : ""
        }`}
        id="messages-notofications"
        onClick={() => handleMenuItemClick("messages")}
      >
        <span className="position-relative ">
          <i className="fa-regular fa-envelope"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-sm">
            7+
            <span className="visually-hidden">unread messages</span>
          </span>
        </span>
        <h3>Messages</h3>
      </Link>
      <Link
        to="/main"
        className={`menu-item ${
          activeMenuItem === "bookmarks" ? "active" : ""
        }`}
        onClick={() => handleMenuItemClick("bookmarks")}
      >
        <span>
          <i className="fa-regular fa-bookmark"></i>
        </span>
        <h3>Bookmarks</h3>
      </Link>
      <FriendRequests />
      <Link
        to="/main"
        className={`menu-item ${activeMenuItem === "settings" ? "active" : ""}`}
        onClick={() => handleMenuItemClick("settings")}
      >
        <span>
          <i className="fa-solid fa-gear"></i>
        </span>
        <h3>Settings</h3>
      </Link>
    </div>
  );
}

export default MenuSection;
