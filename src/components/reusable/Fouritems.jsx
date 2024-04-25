import React from "react";
import { useNavigate } from "react-router-dom";
import "./Fouritem.scss";
const Fouritems = ({ heading = "example", data = [] }) => {
  const navi = useNavigate();
  return (
    <div className="fourItem-section">
      <h1>{heading}</h1>
      <div className="game-data">
        {data?.map((item) => {
          return (
            <div
              className="child"
              key={item.id}
              onClick={() => navi(`/Products/${item.id}`)}
            >
              <img
                src={require(`../../assets/products/${item.img}`)}
                alt={item.name}
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <span>See more</span>
    </div>
  );
};

export default Fouritems;
