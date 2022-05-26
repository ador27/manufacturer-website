import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://young-peak-15744.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-yellow-700 m-12 text-center'>Reviews</h1>

            <div className='m-10'>
                {
                    reviews.map(review => <div className='border-4 m-10 flex-row flex p-5'>
                        <div className='text-left'>
                            <h2><span className='text-cyan-600'>Name: </span> {review.name}</h2>
                            <h2><span className='text-red-600'>ToolName: </span> {review.toolname}</h2>
                            <h2><span className='text-purple-600'>Review:</span> {review.review}</h2>
                            <h2><span className='text-yellow-600'>Rating:</span> {review.rating} star</h2>
                        </div>

                    </div>)
                }

            </div>


        </div>
    );
};

export default Review;