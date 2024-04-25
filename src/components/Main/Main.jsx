import React from "react";
import Oneitem from "../reusable/Oneitem";
import Fouritems from "../reusable/Fouritems";
import "./Main.scss";
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
        <Fouritems heading="Gaming accessories" data={Game.data} />
        <Oneitem data={Game.data[0]} dataFromApi={false} />
        <Fouritems heading="Refresh your space" data={Fragarences.data} />
        <OnebyThree heading="Amazone Gadget Store" data={Amazonegadget.data} />

        <Fouritems heading="Shop deals in Fashion" data={Shopdetail.data} />
        <Oneitem data={Game.data[3]} dataFromApi={false} />
        <Fouritems heading="Fashion trends you like" data={Fashon.data} />
        <Oneitem data={Game.data[1]} dataFromApi={false} />
      </div>
    </section>
  );
};

export default Main;
