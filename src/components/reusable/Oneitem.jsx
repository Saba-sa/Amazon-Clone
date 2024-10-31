import React from "react";
import { useNavigate } from "react-router-dom";
const Oneitem = ({ data, dataFromApi = false }) => {
  const navi = useNavigate();
  if (data !== undefined) {
    const { category, title, image, id, name, img } = data;

    return (
      <div className=" h-[400px] bg-white flex text-center justify-center flex-col overflow-hidden p-5 w-full">
        <div className=" flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50  sm:py-12">
          {dataFromApi ? (
            <h1 className="mb-6">{category}</h1>
          ) : (
            <h1 h1 className="mb-6">
              {name}
            </h1>
          )}
          <div className="max-w-screen-md mx-auto w-full">
            <div className="grid grid-cols-1 gap-6 text-center w-full">
              <div
                className="w-full"
                onClick={() =>
                  navi(`/Products/${id}`, {
                    state: dataFromApi ? "yes" : "no",
                  })
                }
              >
                <div className="w-full">
                  {dataFromApi ? (
                    <img src={image} alt={title} className="w-52" />
                  ) : (
                    <img
                      src={require(`../../assets/products/${img}`)}
                      alt={name}
                      className="w-96"
                    />
                  )}
                </div>

                <div className=" w-full flex justify-center">
                  <span className="text-blue-800">
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
