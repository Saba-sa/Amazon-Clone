import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Footersection from "./components/Footer/Footersection.jsx";
// import { data } from "./data/AllData.jsx";
// import Sidebar from "./components/sidebar/Sidebar.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app ">
      <Header />
      <Outlet />
      <Footersection />
    </div>
  );
};

export default App;
