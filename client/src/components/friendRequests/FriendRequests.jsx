import React, { useState } from "react";
import "./friendRequests.css";
function FriendRequests() {
  const [isFriendRequestsVisible, setIsFriendRequestsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const toggleFriendRequests = () => {
    setIsActive((prev) => !prev);
    setIsFriendRequestsVisible((prev) => !prev);
  };
  return (
    <div
      className={`menu-item ${isActive ? "active" : ""}`}
      onClick={toggleFriendRequests}
    >
      <span className="position-relative ">
        <i className="fa-solid fa-user-plus"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-sm">
          7+
          <span className="visually-hidden">unread messages</span>
        </span>
      </span>
      <h3>Request</h3>
      {isFriendRequestsVisible && (
        <div className="friend-requests">
          <div className="request">
            <div className="info">
              <div className="profile-pictuer">
                <img src="/assets/images/profile-17.jpg" alt="" />
              </div>
              <div>
                <h5>John Snow</h5>
                <p className="text-muted">8 mutual friends</p>
              </div>
            </div>
            <div className="action">
              <div className="custom-btn custom-btn-primary">Accept</div>
              <div className="custom-btn">Decline</div>
            </div>
          </div>
          <div className="request">
            <div className="info">
              <div className="profile-pictuer">
                <img src="/assets/images/profile-17.jpg" alt="" />
              </div>
              <div>
                <h5>John Snow</h5>
                <p className="text-muted">8 mutual friends</p>
              </div>
            </div>
            <div className="action">
              <div className="custom-btn custom-btn-primary">Accept</div>
              <div className="custom-btn">Decline</div>
            </div>
          </div>
          <div className="request">
            <div className="info">
              <div className="profile-pictuer">
                <img src="/assets/images/profile-17.jpg" alt="" />
              </div>
              <div>
                <h5>John Snow</h5>
                <p className="text-muted">8 mutual friends</p>
              </div>
            </div>
            <div className="action">
              <div className="custom-btn custom-btn-primary">Accept</div>
              <div className="custom-btn">Decline</div>
            </div>
          </div>
          <div className="request">
            <div className="info">
              <div className="profile-pictuer">
                <img src="/assets/images/profile-17.jpg" alt="" />
              </div>
              <div>
                <h5>John Snow</h5>
                <p className="text-muted">8 mutual friends</p>
              </div>
            </div>
            <div className="action">
              <div className="custom-btn custom-btn-primary">Accept</div>
              <div className="custom-btn">Decline</div>
            </div>
          </div>
          <div className="request">
            <div className="info">
              <div className="profile-pictuer">
                <img src="/assets/images/profile-17.jpg" alt="" />
              </div>
              <div>
                <h5>John Snow</h5>
                <p className="text-muted">8 mutual friends</p>
              </div>
            </div>
            <div className="action">
              <div className="custom-btn custom-btn-primary">Accept</div>
              <div className="custom-btn">Decline</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FriendRequests;
