import React from "react";
import "./messenger.css";
import MessengerSideBar from "./MessengerSideBar";
import ChatCard from "./ChatCard";
function Messenger() {
  return (
    <main class="content">
      <div class="container p-0">
        <div class="d-flex justify-content-between">
          <MessengerSideBar />
          <ChatCard />
        </div>
      </div>
    </main>
  );
}

export default Messenger;
