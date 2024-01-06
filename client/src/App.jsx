import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Login from "./auth/Login";
import Header from "./components/header/Header";
import Main from "./views/main/Main";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/social"></Route>
    //   </Routes>
    // </BrowserRouter>
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
