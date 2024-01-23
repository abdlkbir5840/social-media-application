import * as React from "react";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faMinus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./chatWindow.css";
import BadgeAvatars from "../badgeAvatars/BadgeAvatars";
import ImageAvatars from "../badgeAvatars/ImageAvatars";
const style = {
  position: "fixed",
  bottom: "0",
  end: "0",
  margin: "10px",
  right: "0",
  width: 350,
  boxShadow: 24,
  p: 0,
  zIndex: 10,
};

export default function ChatWindow({
  profileImage,
  active,
  userName,
  isOpen,
  onClose,
}) {
  const [messageSender, setMessageSender] = React.useState("");
  const [bodyStyle, setBodyStyle] = React.useState({
    maxHeight: "300px",
    overflowY: "auto",
  });
  const handleClose = () => {
    onClose();
    setBodyStyle({ ...bodyStyle, maxHeight: "300px" });
  };
  const handleMinus = () => {
    setBodyStyle({ ...bodyStyle, maxHeight: "0px" });
  };
  const handleChat = () => {
    setBodyStyle({ ...bodyStyle, maxHeight: "300px" });
  };
  const uservatar = active ? (
    <BadgeAvatars profileImage={profileImage} />
  ) : (
    <ImageAvatars profileImage={profileImage} />
  );
  const [messages, setMessages] = React.useState([
    {
      user: "You",
      content: "Hello Ahmed, How are you doing",
      timestamp: "2:34 am",
    },
    {
      user: "Ahmed",
      content: "Hi Don, How are you doing",
      timestamp: "2:34 am",
    },
  ]);
  const handleSend = () => {
    setMessages([
      ...messages,
      { user: "You", content: messageSender, timestamp: "2:40 am" },
    ]);
    setMessageSender("");
    setBodyStyle({ ...bodyStyle, maxHeight: "300px" });
  };
  return (
    <div>
      {isOpen && (
        <Box sx={style}>
          <div class="modal-content border-0">
            <div class="modal-header chat-pop-up-header text-white">
              <h5 class="modal-title" id="exampleSideModal2">
                {uservatar}
                <span className="text-light">{userName}</span>
              </h5>
              <div className="chat-pop-actions">
                <span>
                  <FontAwesomeIcon icon={faComments} onClick={handleChat} />
                </span>
                <span>
                  <FontAwesomeIcon onClick={handleMinus} icon={faMinus} />
                </span>
                <span onClick={handleClose}>
                  <FontAwesomeIcon icon={faXmark} />
                </span>
              </div>
            </div>
            <div class="modal-body" style={bodyStyle}>
              <div class="row">
                <div class="col-md-12 mb-4">
                  {messages.map((message, index) => (
                    <div 
                      key={index}
                      class={`${
                        message.user === "You"
                          ? "chat-message-right pb-4"
                          : "chat-message-left pb-4"
                      }`}
                    >
                      <div
                        class={`flex-shrink-1 rounded py-2 px-3 ${
                          message.user === "You"
                            ? "bg-light mr-3"
                            : "text-light bg-primary ml-3"
                        }`}
                      >
                        <div class="small font-weight-bold mb-1">
                          {message.user}{" "}
                          <span class="small text-nowrap m-2">
                            {message.timestamp}
                          </span>
                        </div>
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <input
                type="text"
                className="input-message"
                placeholder="Your Message ..."
                value={messageSender}
                onChange={(e) => setMessageSender(e.target.value)}
              />
              <input
                type="submit"
                name=""
                id=""
                value="Send"
                className="custom-btn custom-btn-primary"
                onClick={handleSend}
              />
            </div>
          </div>
        </Box>
      )}
    </div>
  );
}
