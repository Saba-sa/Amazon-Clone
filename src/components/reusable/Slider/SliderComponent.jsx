import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "./Slider.scss";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";
const SliderComponent = ({ data, title, dataFromApi = false }) => {
  const responsive = {
    xxl: {
      breakpoint: { min: 1537 },
      items: 6,
    },
    xl: {
      breakpoint: { max: 1536, min: 1024 },
      items: 5,
    },
    lg: {
      breakpoint: { max: 1024, min: 769 },
      items: 3,
    },
    sm: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
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
