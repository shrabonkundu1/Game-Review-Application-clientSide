import React from 'react';
import ReviewCard from './ReviewCard';
import { useLoaderData } from 'react-router-dom';

const AllReview = () => {
    const reviews = useLoaderData();
    return (
        <div className='grid grid-cols-4 gap-10 w-[90%] mx-auto '>
        {
            reviews.map(review=> <ReviewCard key={review._id} review={review}></ReviewCard>)
        }
    </div>
    );
};

export default AllReview;