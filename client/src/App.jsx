import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import PublicRoutes from "./routes/Public.routes";
import ProtectedRoutes from "./routes/Protected.routes";

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
