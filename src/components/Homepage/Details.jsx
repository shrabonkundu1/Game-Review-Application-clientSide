import React from "react";

import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-stars";

const Details = () => {
  const reviews = useLoaderData();
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const { photo, title, description, rating, year, genres, userName, email } =
    reviews;
  return (
    <div className=" bg-black shadow-2xl w-[100%] mx-auto  text-blue-300 pb-48">
      <h1 className="text-5xl text-center font-semibold pt-20 pb-10">
        {title}
      </h1>
      <div className="w-[80%] mx-auto shadow-2xl rounded-lg shadow-sky-700  pb-10">
        <div className="w-[1150px] h-[580px] object-cover mx-auto rounded-lg border">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={photo}
            alt=""
          />
        </div>

        <div className=" w-[95%]  mx-auto">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-5xl text-center font-semibold pt-10 pb-5">
              {title}
            </h1>
            <Link>
              <button className="btn btn-primary bg-gradient-to-r from-[#060c3b] to-[#010314] font-semibold text-[18px] hover:bg-gradient-to-r hover:from-[#4a0ee3] hover:to-[#0a0e32] text-blue-300 hover:text-slate-300">
                Add to WatchList
              </button>
            </Link>
          </div>
          <p className="text-xl font-medium text-blue-100 mb-5">
            {description}
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="px-5 py-2 boder bg-gray-700 rounded-lg">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                isHalf={true}
                size={24}
                value={rating}
                activeColor="#001aff"
              />
            </div>
            <div className="flex gap-2 px-5 py-2 boder bg-gray-700 rounded-lg justify-start items-center">
              <p className="text-xl font-medium text-blue-200">Year:</p>
              <p className="text-xl font-medium text-blue-50">{year}</p>
            </div>
            <div className="flex gap-2 px-5 py-2 boder bg-gray-700 rounded-lg justify-start items-center">
              <p className="text-xl font-medium text-blue-200">Genre:</p>
              <p className="text-xl font-medium text-blue-50">{genres}</p>
            </div>
            <div className="flex gap-2 px-5 py-2 boder bg-gray-700 rounded-lg justify-start items-center">
              <p className="text-xl font-medium text-blue-200">Reviewer:</p>
              <p className="text-xl font-medium text-blue-50">{userName}</p>
            </div>
            <div className="flex gap-2 px-5 py-2 boder bg-gray-700 rounded-lg justify-start items-center">
              <p className="text-xl font-medium text-blue-200">Email:</p>
              <p className="text-xl font-medium text-blue-50">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
