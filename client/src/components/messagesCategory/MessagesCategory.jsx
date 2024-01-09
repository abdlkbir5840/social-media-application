import React from "react";
import "./messagesCategory.css";

function MessagesCategory() {
  return (
    <div className="category">
      <h6 className="active">Primary</h6>
      <h6>General</h6>
      <h6 className="messages-requests">Requests(7)</h6>
    </div>
  );
}

export default MessagesCategory;
