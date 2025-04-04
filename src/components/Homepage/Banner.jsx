import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from "../../assets/slider3.webp";
import slider2 from "../../assets/banner2.jpg";
import slider3 from "../../assets/banner3.jpg";
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
      <div className="h-[243px] w-full  md:h-full md:max-h-[650px] right-0">
        <img className="h-full w-full object-cover right-0"  src={slider1} alt="" />
      </div>
      <div className="h-[243px] md:h-full  max-h-[650px]">
        <img className="h-full w-full object-cover" src={slider2} alt="" />
      </div>
      <div className="h-[243px] md:h-full  md:max-h-[650px]">
        <img  className="h-full w-full git" src='https://www.operationsports.com/wp-content/uploads/2023/09/efootball-2024-latest-mobile-menu-v0-t1i8bb900fmb1.jpg?fit=2388%2C1344' alt="" />
      </div>
    </Slider>
  );
};

export default Banner;
// 