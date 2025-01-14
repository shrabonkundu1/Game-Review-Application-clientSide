import React from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import TopGamers from "./TopGamers";
import MPGame from "./MPGame";
import HighestRatedGames from "./HighestRatedGames";

const Home = () => {
  const reviews = useLoaderData();
  return (
    <div className="bg-white dark:bg-[#1d232a] text-black dark:text-white">
      <Banner></Banner>
      <HighestRatedGames></HighestRatedGames>
      <TopGamers></TopGamers>
      <MPGame></MPGame>
      <div className="text-white dark:text-black">.</div>
    </div>
  );
};

export default Home;
