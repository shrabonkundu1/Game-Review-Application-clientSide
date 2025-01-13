import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { useLoaderData } from "react-router-dom";
import { Cursor, Typewriter } from "react-simple-typewriter";

const AllReview = () => {
  // const reviews = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    fetch("https://game-review-theta.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <span className="loading loading-bars loading-md mx-auto"></span>;
      </div>
    );
  }
  return (
    <div className="mt-16 mb-24">
      <h1 className="text-4xl text-blue-900 text-center font-bold mb-10">
        All
        <span>
          <Typewriter
            words={[" Review"]}
            loop={8}
            typeSpeed={100}
            deleteSpeed={80}
          ></Typewriter>
        </span>
        <span className="text-blue-900">
          <Cursor cursorStyle="_"></Cursor>
        </span>
      </h1>

      <div className="grid grid-cols-4 gap-10 w-[90%] mx-auto ">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
