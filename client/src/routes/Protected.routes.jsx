import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Main from "../views/main/Main";
import Messenger from "../views/messenger/Messenger";
import RequireAuth from "../auth/RequireAuth";
import MainLayout from "../layout/MainLayout";
import Profile from "../views/profile/Profile";
import CommonLayout from "../layout/CommonLayout ";
const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route
        path="/main/*"
        element={
          <RequireAuth>
            <MainLayout>
              <Outlet />
            </MainLayout>
          </RequireAuth>
        }
      >
        <Route index element={<Main />} />
        <Route path="messenger" element={<Messenger />} />
        <Route path="profile/:id" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
