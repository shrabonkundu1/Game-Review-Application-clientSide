import React from "react";
import photo1 from '../../assets/coc.jpg'
import photo2 from '../../assets/ff.jpg'
import photo3 from '../../assets/pubg.jpg'
import photo4 from '../../assets/adventure.jpg'
import photo5 from '../../assets/e-football.jpg'
import photo6 from '../../assets/scrating.jpg'
import photo7 from '../../assets/sports.jpg'
import photo8 from '../../assets/racing.jpg'
import photo9 from '../../assets/daram.webp'
import ReactStars from "react-stars";
import Marquee from "react-fast-marquee";

const MPGame = () => {
  return (
    <div className="bg-gradient-to-r from-[#060c3b] to-[#010314] mb-24 py-16 rounded-lg">
      <h2 className="text-5xl font-semibold text-blue-300 text-center mb-24">
        Most Popular Games
      </h2>
      <div>
        <Marquee pauseOnHover={true} speed={60} className="">
            {/* 1 */}
        <div className="card mr-16 rounded-lg bg-[#1d232a] shadow-xl w-[280px] py-10 border-2 border-blue-300 hover:border-black hover:scale-105">
          <figure className="px-5 pt-5 object-cover flex justify-center items-center">
            <img src={photo1} alt="" className="rounded-full w-32 h-32 " />
          </figure>
          <div className="card-body py-3 px-5 items-center text-center space-y-2">
            <h2 className="card-title text-2xl text-blue-300 font-semibold ">
              Clash Of Clans
            </h2>
                  <p className="text-gray-500">Clash of Clans is a 2012 free-to-play mobile strategy video game. </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-xl gap-2 mt-2 justify-center ">
                <ReactStars
                  count={5}
                //   onChange={ratingChanged}
                  isHalf={true}
                  size={24}
                  value={5}
                  activeColor="#001aff"
                />
              </div>

            </div>
            <p className="text-blue-50">12/08/2012</p>
          </div>
        </div>
            {/* 2 */}
        <div className="card mr-16 rounded-lg bg-[#1d232a] shadow-xl w-[280px] py-10 border-2 border-blue-300 hover:border-black hover:scale-105">
          <figure className="px-5 pt-5 object-cover flex justify-center items-center">
            <img src={photo2} alt="" className="rounded-full w-32 h-32 " />
          </figure>
          <div className="card-body py-3 px-5 items-center text-center space-y-2">
            <h2 className="card-title text-2xl text-blue-300 font-semibold ">
              Free Fire
            </h2>
                  <p className="text-gray-500">Clash of Clans is a 2012 free-to-play mobile strategy video game. </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-xl gap-2 mt-2 justify-center ">
                <ReactStars
                  count={5}
                //   onChange={ratingChanged}
                  isHalf={true}
                  size={24}
                  value={5}
                  activeColor="#001aff"
                />
              </div>

            </div>
            <p className="text-blue-50">12/08/2012</p>
          </div>
        </div>
            {/* 3 */}
        <div className="card mr-16 rounded-lg bg-[#1d232a] shadow-xl w-[280px] py-10 border-2 border-blue-300 hover:border-black hover:scale-105">
          <figure className="px-5 pt-5 object-cover flex justify-center items-center">
            <img src={photo3} alt="" className="rounded-full w-32 h-32 " />
          </figure>
          <div className="card-body py-3 px-5 items-center text-center space-y-2">
            <h2 className="card-title text-2xl text-blue-300 font-semibold ">
              PubG
            </h2>
                  <p className="text-gray-500">Clash of Clans is a 2012 free-to-play mobile strategy video game. </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-xl gap-2 mt-2 justify-center ">
                <ReactStars
                  count={5}
                //   onChange={ratingChanged}
                  isHalf={true}
                  size={24}
                  value={5}
                  activeColor="#001aff"
                />
              </div>

            </div>
            <p className="text-blue-50">12/08/2015</p>
          </div>
        </div>
            {/* 4 */}
        <div className="card mr-16 rounded-lg bg-[#1d232a] shadow-xl w-[280px] py-10 border-2 border-blue-300 hover:border-black hover:scale-105">
          <figure className="px-5 pt-5 object-cover flex justify-center items-center">
            <img src={photo6} alt="" className="rounded-full w-32 h-32 " />
          </figure>
          <div className="card-body py-3 px-5 items-center text-center space-y-2">
            <h2 className="card-title text-2xl text-blue-300 font-semibold ">
              Racing
            </h2>
                  <p className="text-gray-500">Clash of Clans is a 2012 free-to-play mobile strategy video game. </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-xl gap-2 mt-2 justify-center ">
                <ReactStars
                  count={5}
                //   onChange={ratingChanged}
                  isHalf={true}
                  size={24}
                  value={5}
                  activeColor="#001aff"
                />
              </div>

            </div>
            <p className="text-blue-50">12/05/2002</p>
          </div>
        </div>
            {/* 5 */}
        <div className="card mr-16 rounded-lg bg-[#1d232a] shadow-xl w-[280px] py-10 border-2 border-blue-300 hover:border-black hover:scale-105">
          <figure className="px-5 pt-5 object-cover flex justify-center items-center">
            <img src={photo5} alt="" className="rounded-full w-32 h-32 " />
          </figure>
          <div className="card-body py-3 px-5 items-center text-center space-y-2">
            <h2 className="card-title text-2xl text-blue-300 font-semibold ">
            E-Football
            </h2>
                  <p className="text-gray-500">Clash of Clans is a 2012 free-to-play mobile strategy video game. </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-xl gap-2 mt-2 justify-center ">
                <ReactStars
                  count={5}
                //   onChange={ratingChanged}
                  isHalf={true}
                  size={24}
                  value={4}
                  activeColor="#001aff"
                />
              </div>

            </div>
            <p className="text-blue-50">19/08/2022</p>
          </div>
        </div>
        </Marquee>
      </div>
      
    </div>
  );
};

export default MPGame;
