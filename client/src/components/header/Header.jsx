import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './header.css'
import SearchBar from "../searchBar/SearchBar";
function Header() {
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
            <div className="profile-pictuer">
                <img src="/assets/images/profile-1.jpg" alt="profile" />
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
