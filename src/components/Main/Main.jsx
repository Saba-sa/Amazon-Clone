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
    <section className="max-width main-section relative z-10 mt-[-400px] pt-24 mb-24 md:mt-[-300px] md:mb-20 lg:mb-40">
      <div className="content">
        <div className="flex flex-col justify-center overflow-hidden">
          <div className="mx-auto max-w-screen-2xl px-4 w-full">
            <div className="grid justify-center w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Gaming Accessories Section */}
              <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 max-w-sm">
                <Fouritems heading="Gaming accessories" data={Game.data} />
              </div>

              {/* One Item from Game Data */}
              <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 max-w-sm">
                <Oneitem data={Game.data[0]} dataFromApi={false} />
              </div>

              {/* Refresh Your Space Section */}
              <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 max-w-sm">
                <Fouritems heading="Refresh your space" data={Fragarences.data} />
              </div>

              {/* Amazon Gadget Store Section */}
              <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 max-w-sm">
                <OnebyThree heading="Amazon Gadget Store" data={Amazonegadget.data} />
              </div>

              {/* Shop Deals in Fashion Section */}
              <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 max-w-sm">
                <Fouritems heading="Shop deals in Fashion" data={Shopdetail.data} />
              </div>

              {/* One Item from Game Data */}
              <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 max-w-sm">
                <Oneitem data={Game.data[3]} dataFromApi={false} />
              </div>

              {/* Fashion Trends Section */}
              <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 max-w-sm">
                <Fouritems heading="Fashion trends you like" data={Fashon.data} />
              </div>

              {/* One Item from Game Data */}
              <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 max-w-sm">
                <Oneitem data={Game.data[1]} dataFromApi={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
