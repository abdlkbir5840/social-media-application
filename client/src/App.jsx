import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import PublicRoutes from "./routes/Public.routes";
import ProtectedRoutes from "./routes/Protected.routes";
import Login from "./auth/Login";

function App() {
  return (
    <BrowserRouter>
      <>
        <PublicRoutes />

        <ProtectedRoutes />
      </>
    </BrowserRouter>
  );
}

export default App;
