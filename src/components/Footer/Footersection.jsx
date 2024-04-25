import React from "react";
import FooterOptions from "./FooterOptions.jsx";
import "./Footer.scss";
const Footersection = () => {
  const scroller = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <div className="btt" onClick={scroller}>
        Back to top
      </div>
      <FooterOptions />
    </footer>
  );
};

export default Footersection;
