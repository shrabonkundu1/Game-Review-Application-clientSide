import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const ReviewCard = ({review}) => {


    const {_id,photo,title, rating, year} =review;


    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
    
  return (
    <div className="">
      <div className="card  rounded-lg bg-[#1d232a] shadow-xl w-max hover:scale-105 hover:shadow-sky-700">
        <figure className="px-5 pt-5 w-[330px] h-[260px] object-cover">
          <img
            src={photo}
            alt=""
            className="rounded-lg w-full h-full "
          />
        </figure>
        <div className="card-body py-3 px-5 text-center space-y-2">
          <h2 className="card-title text-2xl text-blue-300 font-semibold ">{title}</h2>
         <div className="flex justify-between items-center">
            <div className="flex items-center text-xl gap-2 mt-2 justify-center ">
          <ReactStars
            count={5}
            onChange={ratingChanged}
            isHalf={true}
            size={24}
            value={Number(rating)}
            activeColor="#001aff"
          />
          <span className="text-gray-500  ">({rating})</span>
        </div>
            <button className="text-xl font-semibold text-blue-300">{year}</button>
         </div>
          <div className="card-actions py-3 ">
           <Link to={`/details/${_id}`}>
           <button className="btn btn-primary bg-gradient-to-r from-[#060c3b] to-[#010314] font-semibold text-[18px] hover:bg-gradient-to-r hover:from-[#4a0ee3] hover:to-[#0a0e32] text-blue-300 hover:text-slate-300">Explore Details</button></Link>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
