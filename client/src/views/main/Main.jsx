import {
  faBell,
  faBookmark,
  faChartLine,
  faCompass,
  faEnvelope,
  faGear,
  faHome,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./main.css";
function Main() {
  return (
    <main>
      <div className="custom-container">
        {/* ================================= LEFT ================================= */}
        <div className="left">
          <a href="" className="profile">
            <div className="profile-pictuer">
              <img src="./assets/images/profile-1.jpg" alt="" />
            </div>
            <div className="handle">
              <h6>Ahmed Kamal</h6>
              <p className="text-muted">@ahmed</p>
            </div>
          </a>
          <div className="sidbar">
            <a href="" className="menu-item active">
              <span>
                <i class="fa-regular fa-compass"></i>
              </span>
              <h3>Home</h3>
            </a>
            <a href="" className="menu-item">
              <span>
                <i class="fa-regular fa-compass"></i>
              </span>
              <h3>Explore</h3>
            </a>
            <a href="" className="menu-item" id="notifications">
              <span class="position-relative">
                <i class="fa-regular fa-bell"></i>

                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-sm">
                  99+
                  <span class="visually-hidden">unread messages</span>
                </span>
              </span>
              <h3>Norifications</h3>
              {/* ======================== NOTIFICATION POPUP ======================== */}
              <div className="notifications-popup">
                <div>
                  <div className="profile-pictuer">
                    <img src="./assets/images/profile-2.jpg" alt="" />
                  </div>
                  <div className="notification-body">
                    <b>ahmed kamal</b> accpet your friend request
                    <small className="text-muted">2 DAYS AGO</small>
                  </div>
                </div>
                <div>
                  <div className="profile-pictuer">
                    <img src="./assets/images/profile-3.jpg" alt="" />
                  </div>
                  <div className="notification-body">
                    <b>ahmed kamal</b> accpet your friend request
                    <small className="text-muted">2 DAYS AGO</small>
                  </div>
                </div>
                <div>
                  <div className="profile-pictuer">
                    <img src="./assets/images/profile-4.jpg" alt="" />
                  </div>
                  <div className="notification-body">
                    <b>ahmed kamal</b> accpet your friend request
                    <small className="text-muted">2 DAYS AGO</small>
                  </div>
                </div>
                <div>
                  <div className="profile-pictuer">
                    <img src="./assets/images/profile-5.jpg" alt="" />
                  </div>
                  <div className="notification-body">
                    <b>ahmed kamal</b> accpet your friend request
                    <small className="text-muted">2 DAYS AGO</small>
                  </div>
                </div>
                <div>
                  <div className="profile-pictuer">
                    <img src="./assets/images/profile-6.jpg" alt="" />
                  </div>
                  <div className="notification-body">
                    <b>ahmed kamal</b> accpet your friend request
                    <small className="text-muted">2 DAYS AGO</small>
                  </div>
                </div>
              </div>
              {/* ======================== END NOTIFICATION POPUP ======================== */}
            </a>
            <a href="" className="menu-item" id="messages-notofications">
              <span class="position-relative ">
                <i class="fa-regular fa-envelope"></i>

                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-sm">
                  99+
                  <span class="visually-hidden">unread messages</span>
                </span>
              </span>
              <h3>Messages</h3>
            </a>
            <a href="" className="menu-item">
              <span>
                <i class="fa-regular fa-bookmark"></i>
              </span>
              <h3>Bookmarks</h3>
            </a>
            <a href="" className="menu-item">
              <span>
                <i class="fa-solid fa-chart-line"></i>
              </span>{" "}
              <h3>Analytics</h3>
            </a>
            <a href="" className="menu-item">
              <span>
              <i class="fa-solid fa-palette"></i>
              </span>
              <h3>Theme</h3>
            </a>
            <a href="" className="menu-item">
              <span>
              <i class="fa-solid fa-gear"></i>
              </span>
              <h3>Settings</h3>
            </a>
          </div>
          <label
            className="custom-btn custom-btn-primary"
            htmlFor="create-post"
          >
            Create Post
          </label>
        </div>
        {/* ================================= MIDDLE ================================= */}
        <div className="middle"></div>
        {/* ================================= RIGHT ================================= */}
        <div className="raight"></div>
      </div>
    </main>
  );
}

export default Main;
