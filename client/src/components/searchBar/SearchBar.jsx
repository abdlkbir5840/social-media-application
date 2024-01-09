import React from "react";
import "./searchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="search" placeholder="Search messages" id="message-search" />
    </div>
  );
}

export default SearchBar;
