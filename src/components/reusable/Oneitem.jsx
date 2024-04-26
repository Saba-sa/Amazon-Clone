import React from "react";
import { useNavigate } from "react-router-dom";
import "./Oneitem.scss";
const Oneitem = ({ data, dataFromApi = false }) => {
  const navi = useNavigate();
  if (data !== undefined) {
    const { category, title, image, id, name, img } = data;

    return (
      <div className="oneItem-section">
        <div className=" flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50  sm:py-12">
          {dataFromApi ? (
            <h1 className="mb-6">{category}</h1>
          ) : (
            <h1 h1 className="mb-6">
              {name}
            </h1>
          )}
          <div className="max-w-screen-md mx-auto w-full">
            <div className="grid grid-cols-1 gap-6">
              <div
                className="child"
                onClick={() =>
                  navi(`/Products/${id}`, {
                    state: dataFromApi ? "yes" : "no",
                  })
                }
              >
                <div className="w-full">
                  {dataFromApi ? (
                    <img src={image} alt={title} />
                  ) : (
                    <img
                      src={require(`../../assets/products/${img}`)}
                      alt={name}
                    />
                  )}
                </div>

                <div className=" w-full flex justify-center">
                  <span className="text-white">
                    <p className="mt-2 cursor-pointer">see more</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Oneitem;
