import React from "react";
import "./Sliders.scss";
import Slider from "../reusable/Slider/Slider";
import Oneitem from "../reusable/Oneitem";
import Fouritems from "../reusable/Fouritems";
import { Datafetch } from "../../dataFetch/Datafetch.js";
import data from "../../data/Fashon.json";
const Sliders = () => {
  const data_Jewleries = Datafetch({ url: "products/category/jewelery" });
  const data_Electronics = Datafetch({ url: "products/category/electronics" });

  const data_menClothing = Datafetch({
    url: "products/category/men's clothing",
  });
  const data_womenClothing = Datafetch({
    url: "products/category/women's clothing",
  });
  return (
    <section className="max-width slider-section">
      <div className="content">
        <div className="slider1">
          <Slider
            data={data_Electronics}
            title={"Electronics"}
            dataFromApi={true}
          />
        </div>
        <div className="slider2">
          <Slider data={data_Jewleries} title={"Jewelery"} dataFromApi={true} />
        </div>
        <div className="slider3">
          <Oneitem data={data_menClothing[0]} dataFromApi={true} />
          <Oneitem data={data_Electronics[1]} dataFromApi={true} />
          <Oneitem data={data_menClothing[2]} dataFromApi={true} />
          <Oneitem data={data_womenClothing[3]} dataFromApi={true} />
        </div>
        <div className="slider4">
          <Slider
            data={data_womenClothing}
            title={"Women's Clothes"}
            dataFromApi={true}
          />
        </div>
        <div className="slider5">
          <Slider
            data={data_menClothing}
            title={"Men's Clothes"}
            dataFromApi={true}
          />
        </div>
        <div className="slider6">
          <Oneitem data={data_menClothing[4]} dataFromApi={true} />
          <Oneitem data={data_womenClothing[1]} dataFromApi={true} />
          <Fouritems heading="Eat" data={[...data.data]} />
        </div>
        <div className="slider7">
          <Slider data={data_Jewleries} title={"Jewelery"} dataFromApi={true} />
        </div>
        <div className="slider8">
          <Slider
            data={data_womenClothing}
            title={"Women's Clothes"}
            dataFromApi={true}
          />
        </div>
        <div className="slider9">
          <Slider
            data={data_menClothing}
            title={"Men's Clothes"}
            dataFromApi={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Sliders;
