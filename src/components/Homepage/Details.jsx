import React, { useContext, useEffect, useState } from "react";

import { Link, useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-stars";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Details = () => {
  // const reviews = useLoaderData() || {};

  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState(null);
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    fetch(`https://game-review-theta.vercel.app/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  

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
      username: user.displayName,
    };
    (watchList);
    setLoading(true);

    fetch(`https://game-review-theta.vercel.app/watchlist`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watchList),
    })
      .then((res) => res.json())
      .then((data) => {
        (data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Added to your WatchList!",
            icon: "success",
          });
          setLoading(false);
        } else {
          Swal.fire({
            title: "Error",
            text: "Failed to add to the WatchList.",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        ("error:", error);
        setLoading(false);
        Swal.fire({
          title: "Error",
          text: "Something went wrong!",
          icon: "error",
        });
      });
  };
  if (!reviews) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <span className="loading loading-bars loading-md mx-auto"></span>;
      </div>
    );
  }

  const ratingChanged = (newRating) => {
    (newRating);
  };
  const { photo, title, description, rating, year, genre, userName, email } =
    reviews;

  return (
    <div className=" bg-black shadow-2xl w-[100%] mx-auto  text-blue-300 pb-28 md:pb-48">
      <Helmet>
        <title>Asthetic Gamer || Details</title>
      </Helmet>
      <h1 className="text-3xl md:text-5xl pt-24 text-center font-bold  pb-10">{title}</h1>
      <div className="md:w-[80%] w-[90%] mx-auto shadow-2xl rounded-lg shadow-sky-700  pb-10">
        <div className="md:w-[1150px] md:h-[580px] object-cover mx-auto rounded-lg ">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={photo}
            alt=""
          />
        </div>

        <div className=" w-[95%]  mx-auto">
          <div className="flex justify-between gap-2 items-center mb-5">
            <h1 className="text-xl md:text-4xl text-center font-semibold pt-4 md:pt-10 pb-5">
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
          <p className="md:text-xl font-medium text-blue-100 mb-5">
            {description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="px-5 py-2 boder bg-gray-700 rounded-lg">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                isHalf={true}
                size={24}
                value={Number(rating)}
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
