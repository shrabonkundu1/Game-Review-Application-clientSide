import React, { useContext } from "react";

import { Link, useLoaderData } from "react-router-dom";
import ReactStars from "react-stars";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
  const reviews = useLoaderData() || {};

  const { user } = useContext(AuthContext);

  const handleAddToWatchList = () => {
    if (!user) {
      Swal.fire({
        title: "Error",
        title: "Please Login Fast",
        text: "You must be logged in to add to the watchlist!",
        icon: "error",
        icon: "warning",
      });
      return;
    }

    const watchList = {
      ...reviews,
      email: user.email,
      username: user.userName,
    };
    console.log(watchList);

    fetch(`http://localhost:5000/gamewatchlist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watchList),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Added to your WatchList!",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Failed to add to the WatchList.",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.log("error:", error);
        Swal.fire({
          title: "Error",
          text: "Something went wrong!",
          icon: "error",
        });
      });
  };

  if (!reviews) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#A91D3A]"></div>
      </div>
    );
  }

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const { photo, title, description, rating, year, genre, userName, email } =
    reviews;

  return (
    <div className=" bg-black shadow-2xl w-[100%] mx-auto  text-blue-300 pb-48">
      <h1 className="text-daxl text-center font-bold pt-20 pb-10">
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


            {user ? (
              <button
                onClick={handleAddToWatchList}
                className="btn btn-primary bg-gradient-to-r from-[#060c3b] to-[#010314] font-semibold text-[18px] hover:bg-gradient-to-r hover:from-[#4a0ee3] hover:to-[#0a0e32] text-blue-300 hover:text-slate-300"
              >
                Add to WatchList
              </button>
            ) : (
              <button
                className="px-4 py-2  bg-[#908d8e] text-white rounded-md shadow-lg hover:bg-[#6f6c6d] transition-all"
                onClick={handleAddToWatchList}
              >
                Add to WatchList
              </button>
            )}

            
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
              <p className="text-xl font-medium text-blue-50">{genre}</p>
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
