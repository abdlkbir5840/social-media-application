import React from 'react'
import LeftSidebar from '../components/sideBar/leftSideBar/LeftSidebar '

function CommonLayout ({children }) {
  return (
    <div className="custom-container">
        <LeftSidebar />
        {children}
    </div>
  )
}

export default CommonLayout 
