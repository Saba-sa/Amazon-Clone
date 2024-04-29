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
    <section className="max-width main-section">
      <div className="content">
        <div className="relative top-[-100px] sm:top-[-150px] lg:top-[-300px] xl:top-[-400px] flex min-h-screen flex-col justify-center overflow-hidden  sm:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 w-full">
            <div className="grid justify-center w-full sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                <div className="h-auto overflow-hidden">
                  <Fouritems heading="Gaming accessories" data={Game.data} />{" "}
                </div>
              </div>
              <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                <div className="h-auto overflow-hidden">
                  <Oneitem data={Game.data[0]} dataFromApi={false} />
                </div>
              </div>
              <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                <div className="h-auto overflow-hidden">
                  <Fouritems
                    heading="Refresh your space"
                    data={Fragarences.data}
                  />
                </div>
              </div>

              <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                <div className="h-auto overflow-hidden">
                  <OnebyThree
                    heading="Amazone Gadget Store"
                    data={Amazonegadget.data}
                  />
                </div>
              </div>
              <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                <div className="h-auto overflow-hidden">
                  <Fouritems
                    heading="Shop deals in Fashion"
                    data={Shopdetail.data}
                  />
                </div>
              </div>
              <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                <div className="h-auto overflow-hidden">
                  <Oneitem data={Game.data[3]} dataFromApi={false} />{" "}
                </div>
              </div>
              <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                <div className="h-auto overflow-hidden">
                  <Fouritems
                    heading="Fashion trends you like"
                    data={Fashon.data}
                  />
                </div>
              </div>
              <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                <div className="h-auto overflow-hidden">
                  <Oneitem data={Game.data[1]} dataFromApi={false} />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
