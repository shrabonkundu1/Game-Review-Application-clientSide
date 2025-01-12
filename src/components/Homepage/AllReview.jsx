import React from "react";
import ReviewCard from "./ReviewCard";
import { useLoaderData } from "react-router-dom";

const AllReview = () => {
  const reviews = useLoaderData();
  return (
    <div className="mt-16 mb-24">
      <h1 className="text-4xl text-blue-900 text-center font-bold mb-10">All Review</h1>

      <div className="grid grid-cols-4 gap-10 w-[90%] mx-auto ">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
