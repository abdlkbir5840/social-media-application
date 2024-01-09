import React from "react";
import "./rightSidebar.css";
import SearchBar from "../../searchBar/SearchBar";
import MessagesCategory from "../../messagesCategory/MessagesCategory";
import Message from "../../message/Message";

function RightSidebar() {
  return (
    <div className="right">
      <div className="messages">
        <div className="heading">
          <h4>Messages</h4>
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
        <SearchBar />
        <MessagesCategory />
        <Message />
      </div>
    </div>
  );
}

export default RightSidebar;
