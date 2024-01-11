import React, { useState } from "react";
import "./message.css";

function Message() {
  const [messages, setMessages] = useState([
    { id: 1, profileImage: "./assets/images/profile-7.jpg", name: "Eden John", message: "Just woke up bruh", active: false },
    { id: 2, profileImage: "./assets/images/profile-8.jpg", name: "Eden John", message: "Just woke up bruh", active: true },
    { id: 3, profileImage: "./assets/images/profile-10.jpg", name: "Eden John", message: "Just woke up bruh", active: false },
    { id: 4, profileImage: "./assets/images/profile-9.jpg", name: "Eden John", message: "Just woke up bruh", active: true },
  ]);

  return (
    <>
      {messages.map((message) => (
        <div key={message.id} className={`message${message.active ? ' active' : ''}`}>
          <div className="profile-pictuer">
            <img src={message.profileImage} alt="profile" />
            {message.active && <div className="active"></div>}
          </div>
          <div className="message-body">
            <h5>{message.name}</h5>
            <p className="text-muted">{message.message}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Message;


