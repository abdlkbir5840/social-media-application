import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Main from "./views/main/Main";
import Login from "./auth/Login";
import Layout from "./layout/Layout";
import Messenger from "./views/messenger/Messenger";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/main/*"
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route index element={<Main />} />
          <Route path="messenger" element={<Messenger />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
