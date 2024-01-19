import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import authService from "../../service/auth.service";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUser,
  selectCurrentUser,
} from "../../store/auth.slice";
function Header() {
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);
  const currentUser = useSelector(selectCurrentUser);
  const handleLogout = async () => {
    authService.logout([cookies, setCookie, removeCookie]);
  };
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  const profileImgSrc = currentUser?.profileImg
  ? `/assets/images/${currentUser.profileImg}`
  : "/assets/images/social logo.png";
  return (
    <header>
      <div className="custom-container">
        <h2 className="logo">SoclialMedia</h2>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="search"
            placeholder="Search for creators, insperation, and projects"
          />
        </div>
        <div className="create">
          <label
            className="custom-btn custom-btn-primary"
            htmlFor="create-post"
          >
            Create
          </label>
          <div class="dropdown">
            <div
              className="profile-pictuer"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
             
                <img
                  src={profileImgSrc}
                  alt="profile"
                />
            </div>
            {currentUser &&
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link class="dropdown-item" to={`profile/${currentUser.userId}`}>
                <i class="fa-solid fa-user"></i>
                <span className="m-2">Profile</span>
              </Link>
            </li>
            <li>
              <a class="dropdown-item" href="#" onClick={handleLogout}>
                <i class="fa-solid fa-right-from-bracket"></i>{" "}
                <span className="m-2">Logout</span>
              </a>
            </li>
          </ul>
            }
            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
