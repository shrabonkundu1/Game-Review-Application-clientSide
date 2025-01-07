import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.webp";


const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="max-h-[550px]">
        <img className="h-full w-full object-cover" src={slider3} alt="" />
      </div>
      <div className="max-h-[550px]">
        <img className="h-full w-full object-cover" src={slider2} alt="" />
      </div>
      <div className="max-h-[550px]">
        <img  className="h-full w-full object-cover" src={slider1} alt="" />
      </div>
    </Slider>
  );
};

export default Banner;
