import React from "react";
import "./OnebyThree.scss";
import { useNavigate } from "react-router-dom";

const OnebyThree = ({ heading, data }) => {
  const navi = useNavigate();
  return (
    <div className="OnebyThree-section">
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
      <span>See more from Amazone Gadgets</span>
    </div>
  );
};

export default OnebyThree;
