import React from "react";
import { useNavigate } from "react-router-dom";
import "./Oneitem.scss";
const Oneitem = ({ data, dataFromApi = false }) => {
  const navi = useNavigate();
  if (data !== undefined) {
    const { category, title, image, id, name, img } = data;

    return (
      <div className="oneItem-section">
        {dataFromApi ? <h1>{category}</h1> : <h1>{name}</h1>}
        <div className="game-data">
          <div
            className="child"
            onClick={() =>
              navi(`/Products/${id}`, {
                state: dataFromApi ? "yes" : "no",
              })
            }
          >
            {dataFromApi ? (
              <img src={image} alt={title} />
            ) : (
              <img src={require(`../../assets/products/${img}`)} alt={name} />
            )}
          </div>
          <span>See more</span>
        </div>
      </div>
    );
  }
};

export default Oneitem;
