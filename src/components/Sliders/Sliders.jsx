import React from "react";
import "./Sliders.scss";
import SliderComponent from "../reusable/Slider/SliderComponent";
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
          <SliderComponent
            data={data_Electronics}
            title={"Electronics"}
            dataFromApi={true}
          />
        </div>
        <div className="slider2">
          <SliderComponent
            data={data_Jewleries}
            title={"Jewelery"}
            dataFromApi={true}
          />
        </div>
        <div className="slider3">
          <Oneitem data={data_menClothing[0]} dataFromApi={true} />
          <Oneitem data={data_Electronics[1]} dataFromApi={true} />
          <Oneitem data={data_menClothing[2]} dataFromApi={true} />
          <Oneitem data={data_womenClothing[3]} dataFromApi={true} />
        </div>
        <div className="slider4">
          <SliderComponent
            data={data_womenClothing}
            title={"Women's Clothes"}
            dataFromApi={true}
          />
        </div>
        <div className="slider5">
          <SliderComponent
            data={data_menClothing}
            title={"Men's Clothes"}
            dataFromApi={true}
          />
        </div>
        <div className="slider6">
          <Oneitem data={data_menClothing[3]} dataFromApi={true} />
          <Oneitem data={data_womenClothing[2]} dataFromApi={true} />
          <Fouritems heading="Eat" data={[...data.data]} />
        </div>
        <div className="slider7">
          <SliderComponent
            data={data_Jewleries}
            title={"Jewelery"}
            dataFromApi={true}
          />
        </div>
        <div className="slider8">
          <SliderComponent
            data={data_womenClothing}
            title={"Women's Clothes"}
            dataFromApi={true}
          />
        </div>
        <div className="slider9">
          <SliderComponent
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
