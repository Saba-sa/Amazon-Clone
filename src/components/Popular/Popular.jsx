import React from "react";
import Oneitem from "../reusable/Oneitem";
import Fouritems from "../reusable/Fouritems";
const Popular = ({ sty }) => {
  if (sty === "1") {
    return (
      <div>
        <Oneitem />
        <Fouritems />
        <Oneitem />
      </div>
    );
  } else {
    return (
      <div>
        <Oneitem />
        <Oneitem />
        <Fouritems />
      </div>
    );
  }
};
export default Popular;
