import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { useLoaderData } from "react-router-dom";
import { Cursor, Typewriter } from "react-simple-typewriter";

const AllReview = () => {
  // const reviews = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState();
  const [sortedData,setSortedData] = useState('rating-asc')
  const [filterGenre,setFilterGenre] = useState('')
  const [genres,setGenres] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://game-review-theta.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        const Genres = [...new Set(data.map(review => review.genre).flat())];
        setGenres(Genres);
        setLoading(false);
      });
  }, []);

  const handelSorted = (event) =>{
    setSortedData(event.target.value)
  }
  const handelGenre = (event) =>{
    setFilterGenre(event.target.value)
  }

  const sortedReviews = () =>{
    let sorted = [...reviews];
    if(sortedData === 'rating-asc'){
      sorted = sorted.sort((a, b) => a.rating - b.rating);
    }else if(sortedData === 'rating-desc'){
      sorted = sorted.sort((a, b) => b.rating - a.rating);
    }else if(sortedData === 'year-asc'){
      sorted = sorted.sort((a, b) => a.year - b.year);
    }else if (sortedData === 'year-desc'){
      sorted = sorted.sort((a, b) => b.year - a.year);
    }
    return sorted;
  }
  
  const filteredReviews = () => {
    return sortedReviews().filter((review) => {
      const matchesGenre = filterGenre ? review.genre.includes(filterGenre) : true;
      return matchesGenre;
    });
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <span className="loading loading-bars loading-md mx-auto"></span>;
      </div>
    );
  }
  return (
    <div className="mt-16 mb-24">
      <div>
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
      </div>
      <div className="flex flex-col gap-4 md:flex md:flex-row justify-between mb-6 px-4 md:w-10/12 mx-auto">
      <div className="flex flex-col justify-start lg:flex lg:flex-row lg:items-center ">
          <label className="mr-4 text-lg">Sort By:</label>
          <select
            value={sortedData}
            onChange={handelSorted}
            className="border border-[#273496] rounded-md p-2"
          >
            <option value="rating-asc">Rating (Low to High)</option>
            <option value="rating-desc">Rating (High to Low)</option>
            <option value="year-asc">Year (Old to New)</option>
            <option value="year-desc">Year (New to Old)</option>
          </select>
        </div>
        <div className="flex flex-col justify-start lg:flex lg:flex-row lg:items-center">
          <label className="mr-4 text-lg">Filter by Genre:</label>
          <select
            value={filterGenre}
            onChange={handelGenre}
            className= 'border border-[#242e93] rounded-md p-2'
          >
            <option value="">All Genres</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10 w-[90%] mx-auto ">
        {filteredReviews().map((review, index) => (
          <ReviewCard key={index} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
