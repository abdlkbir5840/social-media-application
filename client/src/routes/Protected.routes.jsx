import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Layout from "../layout/Layout";
import Main from "../views/main/Main";
import Messenger from "../views/messenger/Messenger";
import RequireAuth from "../auth/RequireAuth";
const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route
        path="/main/*"
        element={
          <RequireAuth>
            <Layout>
              <Outlet />
            </Layout>
          </RequireAuth>
        }
      >
        <Route index element={<Main />} />
        <Route path="messenger" element={<Messenger />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
