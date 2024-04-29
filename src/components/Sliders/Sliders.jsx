import React from "react";
import "./Sliders.scss";
import SliderComponent from "../reusable/Slider/SliderComponent";
import Oneitem from "../reusable/Oneitem";
import Fouritems from "../reusable/Fouritems";
import OnebyThree from "../reusable/OnebyThree.jsx";
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
    <section className="max-width  relative top:0 lg:top-[-300px] xl:top-[-380px]">
      <div className="content flex flex-col w-full gap-6">
        <div className="slider1 w-full">
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
        <div className=" sm:w-full px-10 flex gap-4 flex-col items-center sm:flex-row justify-center overflow-hidden w-10/12 ">
          <div>
            <Oneitem data={data_menClothing[0]} dataFromApi={true} />
          </div>
          <div>
            <Oneitem data={data_Electronics[1]} dataFromApi={true} />
          </div>
          <div>
            <Oneitem data={data_menClothing[2]} dataFromApi={true} />
          </div>
          <div className="hidden md:inline w-80 ">
            <OnebyThree heading="Eat" data={[...data.data]} />
          </div>
          <div className="hidden lg:inline">
            <Oneitem data={data_womenClothing[3]} dataFromApi={true} />
          </div>
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
        <div className="slider6 overflow-hidden px-10 sm:w-full flex flex-col sm:flex-row gap-4 justify-center w-10/12 ">
          <div>
            <Oneitem data={data_menClothing[3]} dataFromApi={true} />
          </div>
          <div>
            <Oneitem data={data_menClothing[1]} dataFromApi={true} />
          </div>
          <div className="hidden md:inline">
            <Fouritems heading="Eat" data={[...data.data]} />
          </div>
          <div>
            <Oneitem data={data_menClothing[2]} dataFromApi={true} />
          </div>
          <div>
            <Oneitem data={data_menClothing[0]} dataFromApi={true} />
          </div>
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
