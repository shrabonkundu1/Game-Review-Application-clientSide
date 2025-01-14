import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.webp";
import { FcNext } from "react-icons/fc";


const Banner = () => {
  var settings = {
    arrows:false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  return (
    <Slider {...settings} className="mt-16 ">
      <div className="h-[243px] w-full  md:h-full md:max-h-[550px] right-0">
        <img className="h-full w-full object-cover right-0"  src={slider3} alt="" />
      </div>
      <div className="h-[243px] md:h-full  max-h-[550px]">
        <img className="h-full w-full object-cover" src={slider2} alt="" />
      </div>
      <div className="h-[243px] md:h-full  max-h-[550px]">
        <img  className="h-full w-full object-cover" src={slider1} alt="" />
      </div>
    </Slider>
  );
};

export default Banner;
