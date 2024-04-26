import React from "react";
import { useNavigate } from "react-router-dom";
import "./Fouritem.scss";
const Fouritems = ({ heading = "example", data = [] }) => {
  const navi = useNavigate();
  return (
    <div className="fourItem-section">
      <div className=" flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <h1 className="mb-6">{heading}</h1>
        <div className="max-w-screen-md mx-auto">
          <div className="grid grid-cols-2 gap-6">
            {data?.map((item) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => navi(`/Products/${item.id}`)}
                >
                  <div className="group   overflow-hidden">
                    <div className=" " />
                    <img
                      src={require(`../../assets/products/${item.img}`)}
                      alt={item.name}
                    />
                    <div className=" w-full flex justify-center">
                      <span className="text-white">
                        <p className="mt-2">{item.name}</p>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fouritems;
