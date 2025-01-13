import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const HighestRatedGames = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState();
  useEffect(() => {
    setLoading(true);
    fetch("https://game-review-theta.vercel.app/highestRatedGames")
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
    <div className="mt-24">
      <h1 className="text-6xl font-semibold mb-16 text-center">
        Highest Rated Game
      </h1>
      <div className="grid grid-cols-4 gap-8 w-[90%] mx-auto mb-24">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>

      
    </div>
  );
};

export default HighestRatedGames;
