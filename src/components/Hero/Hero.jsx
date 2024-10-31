import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import banner5 from "../../assets/banner5.jpg";
import "./Home.scss";
const Home = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
    <section className="max-width">
      <div className="content">
        <Slider {...settings} className="Slider">
          <div className="slide">
            <img src={banner1} alt="banner" className="slider-img" />
          </div>
          <div className="slide">
            <img src={banner2} alt="banner" className="slider-img" />
          </div>
          <div className="slide">
            <img src={banner3} alt="banner" className="slider-img" />
          </div>
          <div className="slide">
            <img src={banner4} alt="banner" className="slider-img" />
          </div>
          <div className="slide">
            <img src={banner5} alt="banner" className="slider-img" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Home;
