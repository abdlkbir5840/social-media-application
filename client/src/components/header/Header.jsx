import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./header.css";
import SearchBar from "../searchBar/SearchBar";
import { useCookies } from "react-cookie";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
  const [cookies, setCookie, removeCookie] = useCookies(["authToken"]);
  const handleLogout = () => {
    removeCookie("authToken");
  };
  return (
    <header>
      <div className="custom-container">
        <h2 className="logo">SoclialMedia</h2>
        {/* <SearchBar /> */}
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="search"
            placeholder="Search for creators, insperation, and projects"
          />
        </div>
        <div className="create">
            <label className="custom-btn custom-btn-primary" htmlFor="create-post">Create</label>
            <div class="dropdown">
          <div
            className="profile-pictuer"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="/assets/images/profile-1.jpg" alt="profile" />
          </div>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link class="dropdown-item" to="profile">
              <i class="fa-solid fa-user"></i><span className="m-2">Profile</span> 
              </Link>
            </li>
            <li>
              <a class="dropdown-item" href="#" onClick={handleLogout}>
              <i class="fa-solid fa-right-from-bracket"></i> <span className="m-2">Logout</span> 
              </a>
            </li>
          </ul>
        </div>
        </div>
        
      </div>
    </header>
  );
}

export default Header;
