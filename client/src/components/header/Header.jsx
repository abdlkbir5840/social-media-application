import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import authService from "../../service/auth.service";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, selectCurrentUser } from "../../store/auth.slice";
import { BeatLoader } from "react-spinners";
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
  if (currentUser === null) {
    return (
      <div
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center w-100 "
      >
        <BeatLoader color="#36d7b7" />
      </div>
    );
  }
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
          <div className="dropdown">
            <div
              className="profile-pictuer"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={profileImgSrc} alt="profile" />
            </div>
            {currentUser && (
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <Link
                    className="dropdown-item"
                    to={`profile/${currentUser.userId}`}
                  >
                    <i className="fa-solid fa-user"></i>
                    <span className="m-2">Profile</span>
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={handleLogout}>
                    <i className="fa-solid fa-right-from-bracket"></i>{" "}
                    <span className="m-2">Logout</span>
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
