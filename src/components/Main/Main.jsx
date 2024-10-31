import React from "react";
import Oneitem from "../reusable/Oneitem";
import Fouritems from "../reusable/Fouritems";
import Game from "../../data/Game_accessories.json";
import Fragarences from "../../data/Fragarences.json";
import Amazonegadget from "../../data/Amazonegadget.json";
import OnebyThree from "../reusable/OnebyThree";
import Shopdetail from "../../data/Shopdetail.json";
import Fashon from "../../data/Fashon.json";

const Main = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-10 z-20 relative -mt-20 lg:-mt-80">

      <div className="flex flex-col items-center overflow-hidden">
        <div className="w-full grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          <div className="relative flex flex-col shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 w-full sm:w-[22rem] md:w-[18rem]">
            <Fouritems heading="Gaming accessories" data={Game.data} />
          </div>

          <div className="relative flex flex-col shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 max-w-full">
            <Oneitem data={Game.data[0]} dataFromApi={false} />
          </div>

          <div className="relative flex flex-col shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 max-w-full">
            <Fouritems heading="Refresh your space" data={Fragarences.data} />
          </div>

          <div className="relative flex flex-col shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 max-w-full">
            <OnebyThree heading="Amazon Gadget Store" data={Amazonegadget.data} />
          </div>

          <div className="relative flex flex-col shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 max-w-full">
            <Fouritems heading="Shop deals in Fashion" data={Shopdetail.data} />
          </div>

          <div className="relative flex flex-col shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 max-w-full">
            <Oneitem data={Game.data[3]} dataFromApi={false} />
          </div>

          <div className="relative flex flex-col shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 max-w-full">
            <Fouritems heading="Fashion trends you like" data={Fashon.data} />
          </div>

          <div className="relative flex flex-col shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 max-w-full">
            <Oneitem data={Game.data[1]} dataFromApi={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
