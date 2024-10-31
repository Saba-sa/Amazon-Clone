import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.scss";
import { useNavigate } from "react-router-dom";
const Slider = ({ data, title, dataFromApi = false }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const navi = useNavigate();
  return (
    <section className="max-width slider">
      <h1>{title}</h1>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows={true}
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container"
        dotListClass=""
        draggable={true}
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl={true}
        minimumTouchDrag={80}
        pauseOnHover={true}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
      >
        {data?.map((item) => {
          return (
            <div
              className="card"
              key={item.id}
              onClick={() =>
                navi(`/Products/${item.id}`, {
                  state: dataFromApi ? "yes" : "no",
                })
              }
            >
              {dataFromApi ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="product--image"
                />
              ) : (
                <img
                  src={require(`../../../assets/products/${item.img}`)}
                  alt={item.title}
                  className="product--image"
                />
              )}
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Slider;
