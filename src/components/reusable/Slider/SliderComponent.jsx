import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "./Slider.scss";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";
const SliderComponent = ({ data, title, dataFromApi = false }) => {
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SamplePrevArrow() {
    return <div style={{ display: "none" }} />;
  }
  function SampleNextArrow() {
    return <div style={{ display: "none" }} />;
  }

  return (
    <section className="max-width slider">
      <h1>{title}</h1>
      {data.length > 0 ? (
        <Slider {...settings} className="slider">
          {data?.map((item) => {
            return (
              <div>
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
              </div>
            );
          })}
        </Slider>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default SliderComponent;
