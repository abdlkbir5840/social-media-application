import React, { useEffect, useState } from "react";
import "./message.css";
import ChatWindow from "../chatWindow/ChatWindow";
import BadgeAvatars from "../badgeAvatars/BadgeAvatars";
import ImageAvatars from "../badgeAvatars/ImageAvatars";

function Message() {
  const [selecteduser, SetSelectedUser] = useState();
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      profileImage: "/assets/images/profile-7.jpg",
      name: "John selva",
      message: "Just woke up bruh",
      active: false,
    },
    {
      id: 2,
      profileImage: "/assets/images/profile-8.jpg",
      name: "Eden John",
      message: "Just woke up bruh",
      active: true,
    },
    {
      id: 3,
      profileImage: "/assets/images/profile-10.jpg",
      name: "Ahmed molo",
      message: "Just woke up bruh",
      active: false,
    },
    {
      id: 4,
      profileImage: "/assets/images/profile-9.jpg",
      name: "Coffe Badjo",
      message: "Just woke up bruh",
      active: true,
    },
  ]);
  const handelSlectedUser = async(message) => {
    await SetSelectedUser(message)
    await setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message${message.active ? " active" : ""}`}
          onClick={() => handelSlectedUser(message)}
        >
          {message.active ? (
            <BadgeAvatars profileImage={message.profileImage} />
          ) : (
            <ImageAvatars profileImage={message.profileImage} />
          )}
          <div className="message-body">
            <h5>{message.name}</h5>
            <p className="text-muted">{message.message}</p>
          </div>
        </div>
      ))}
      <ChatWindow
        profileImage={selecteduser?.profileImage}
        active={selecteduser?.active}
        userName={selecteduser?.name}
        isOpen={isOpen}
        onClose={handleClose}
      />
    </>
  );
}

export default Message;
