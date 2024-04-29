import React from "react";
import "./OnebyThree.scss";
import { useNavigate } from "react-router-dom";

const OnebyThree = ({ heading, data }) => {
  const navi = useNavigate();
  return (
    <div className=" h-[400px] w-full flex flex-col justify-center bg-white px-4 py-8 xl:gap-4">
      <h1>{heading}</h1>
      <div className=" flex flex-wrap gap-2 cursor-pointer p-2">
        {data?.map((item) => {
          return (
            <div
              className="child w-20"
              key={item.id}
              onClick={() => navi(`/Products/${item.id}`)}
            >
              <img
                src={require(`../../assets/products/${item.img}`)}
                alt={item.name}
                className="w-full sm:w-1/2  md:w-8/12 lg:w-11/12  xl:w-9/12"
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
      <span className="text-blue-800">See more from Amazone Gadgets</span>
    </div>
  );
};

export default OnebyThree;
