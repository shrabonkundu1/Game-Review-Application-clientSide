import React from "react";
import gamer1 from "../../assets/totalGaming.jpg";
import gamer2 from "../../assets/ohYeahGaming.jpg";
import gamer3 from "../../assets/omgGaming.jpg";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { Cursor, Typewriter } from "react-simple-typewriter";

const TopGamers = () => {
  return (
    <div className="mb-24  rounded-lg p-16  mx-auto bg-gradient-to-r from-[#060c3b] to-[#010314] ">
      <h1 className="text-center font-semibold text-3xl lg:text-5xl text-blue-300">
        <span className="text-blue-800">Top</span>
        <span>
          <Typewriter
            words={[" 3 Gamers"]}
            loop={8}
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={2000}
          ></Typewriter>
        </span>
        <span className="text-blue-900">
          <Cursor cursorStyle="_"></Cursor>
        </span>
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center w-[80%] mx-auto gap-8 mt-16">
        <div className="card  rounded-lg bg-[#1d232a] shadow-2xl w-max hover:border-2 hover:border-blue-300 hover:scale-105 ">
          <figure className="px-5 pt-5 w-[330px] h-[260px] object-cover">
            <img src={gamer1} alt="" className="rounded-lg w-full h-full " />
          </figure>
          <div className="card-body py-3 px-5 text-center space-y-2">
            <h2 className=" text-2xl text-blue-200 font-semibold text-center">
              Total Gaming
            </h2>

            <div className="card-actions py-3 flex justify-center items-center gap-8 text-3xl text-white">
              <a href="https://www.facebook.com/totalgaming093/">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com/@TotalGaming093">
                <IoLogoYoutube />
              </a>
              <a href="https://www.instagram.com/totalgaming_official/?hl=en">
                {" "}
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="card  rounded-lg bg-[#1d232a] shadow-xl w-max hover:border-2 hover:border-blue-300 hover:scale-105">
          <figure className="px-5 pt-5 w-[330px] h-[260px] object-cover">
            <img src={gamer2} alt="" className="rounded-lg w-full h-full " />
          </figure>
          <div className="card-body py-3 px-5 text-center space-y-2">
            <h2 className=" text-2xl text-blue-200 font-semibold text-center">
              OH YEAH Gaming
            </h2>

            <div className="card-actions py-3 flex justify-center items-center gap-8 text-3xl text-white">
              <a href="https://www.facebook.com/ohyeahhaming">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com/@ohyeahgaming6576">
                <IoLogoYoutube />
              </a>
              <a href="https://www.instagram.com/ohyeah_gaming/?hl=en">
                {" "}
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="card  rounded-lg bg-[#1d232a] shadow-xl w-max hover:border-2 hover:border-blue-300 hover:scale-105">
          <figure className="px-5 pt-5 w-[330px] h-[260px] object-cover">
            <img src={gamer3} alt="" className="rounded-lg w-full h-full " />
          </figure>
          <div className="card-body py-3 px-5 text-center space-y-2">
            <h2 className=" text-2xl text-blue-300 font-semibold text-center">
              OMG Gaming
            </h2>

            <div className="card-actions py-3 flex justify-center items-center gap-8 text-3xl text-white">
              <a href="https://www.facebook.com/profile.php?id=100069241404652">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com/@OMGGAMING992">
                <IoLogoYoutube />
              </a>
              <a href="https://www.instagram.com/omg___gaming/?hl=en">
                {" "}
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopGamers;
