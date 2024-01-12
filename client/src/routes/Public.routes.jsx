import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../auth/Login";


const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default PublicRoutes;
