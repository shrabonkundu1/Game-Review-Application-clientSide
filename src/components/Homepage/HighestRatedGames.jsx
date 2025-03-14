import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { Cursor, Typewriter } from "react-simple-typewriter";

const HighestRatedGames = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  // const {text}= useTypewriter({
  //   words: ['Highest Rated Games', 'Top Rated Games'],
  //   loop: true,
  //   typeSpeed:120,
  //   deleteSpeed: 80,
  // })
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
      <h1 className="text-3xl lg:text-6xl font-semibold mb-16 text-center">
        <span className="text-blue-900 dark:text-blue-300">
          <Typewriter
            words={["Highest Rated Games", "Top Rated Games"]}
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 w-[90%] mx-auto mb-24">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default HighestRatedGames;
