import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import banner5 from "../../assets/banner5.jpg";
import "./Home.scss";
const Home = () => {
  return (
    <section className="max-width">
      <div className="content">
        <Carousel
          autoPlay
          infiniteLoop
          swipeable
          stopOnHover
          dynamicHeight
          emulateTouch
          autoFocus
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          <div>
            <img src={banner1} alt="banner" />
          </div>
          <div>
            <img src={banner2} alt="banner" />
          </div>
          <div>
            <img src={banner3} alt="banner" />
          </div>
          <div>
            <img src={banner4} alt="banner" />
          </div>
          <div>
            <img src={banner5} alt="banner" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
