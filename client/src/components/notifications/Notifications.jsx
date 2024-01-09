import React from 'react'
import './notifications.css'
function Notifications() {
  return (
    <a href="" className="menu-item" id="notifications">
    <span class="position-relative">
      <i class="fa-regular fa-bell"></i>

      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-sm">
        99+
        <span class="visually-hidden">unread messages</span>
      </span>
    </span>
    <h3>Norifications</h3>
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
                    <img src="./assets/images/profile-2.jpg" alt="" />
                  </div>
                  <div className="notification-body">
                    <b>ahmed kamal</b> accpet your friend request
                    <small className="text-muted">2 DAYS AGO</small>
                  </div>
                </div>
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
  </a>
    
  )
}

export default Notifications
