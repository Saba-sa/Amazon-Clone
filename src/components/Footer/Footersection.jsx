import React from "react";
import FooterOptions from "./FooterOptions.jsx";
const Footersection = () => {
  const scroller = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <div
        className="w-full bg-slate-700 p-5 text-white text-center"
        onClick={scroller}
      >
        Back to top
      </div>
      <FooterOptions />
    </footer>
  );
};

export default Footersection;
