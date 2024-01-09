import React from "react";
import "./main.css";
import LeftSidebar from "../../components/sideBar/leftSideBar/LeftSidebar ";
import MiddleContent from "../../components/middleContent/MiddleContent ";
import RightSidebar from "../../components/sideBar/rightSidebar/RightSidebar ";
function Main() {
  return (
    <main>
      <div className="custom-container">
        <LeftSidebar />
        <MiddleContent />
        <RightSidebar />
      </div>
    </main>
  );
}

export default Main;
