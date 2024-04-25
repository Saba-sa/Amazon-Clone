import React from "react";
import "./Sidebar.scss";
export default function Sidebar() {
  return (
    <>
      <div className="close">close</div>
      <div className="content">
        <div className="sidebar-header">
          <p>Sign in</p>
          <p>logo of account</p>
          <h1>
            Browse <span>Amazon</span>
          </h1>
        </div>
        <div className="row">
          <div className="heading">
            <span> Amazone Home</span>
            <span className="homeicon"></span>
          </div>
        </div>
        <div className="row">
          <div className="heading">Trending</div>
          <span>Movers & Shakers</span>
        </div>
        <div className="row">
          <div className="heading">Top Departments</div>
          <span>Home</span>
          <span>Health & Household</span>
          <span>Books</span>
          <span>PC</span>
        </div>
      </div>
    </>
  );
}
