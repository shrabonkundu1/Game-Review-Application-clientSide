import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import TopGamers from './TopGamers';
import MPGame from './MPGame';
import HighestRatedGames from './HighestRatedGames';

const Home = () => {

    const reviews = useLoaderData();
    return (
        <div>
            <Banner></Banner>
           
            {/* <div className='mt-24'>
                <h1 className='text-6xl font-semibold mb-16 text-center'>Highest Rated Game</h1>
            <div className='grid grid-cols-4 gap-8 w-[90%] mx-auto mb-24'>
                {
                    reviews.map(review=> <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </div>
            
            </div> */}
            <HighestRatedGames></HighestRatedGames>
            <TopGamers></TopGamers>
            <MPGame></MPGame>
        </div>
    );
};

export default Home;