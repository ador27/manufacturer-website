import React from 'react';

const MyReview = () => {
    const handleAddReview = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const toolname = event.target.toolname.value;
        const review = event.target.review.value;
        const rating = event.target.rating.value;
        const reviews = { name, toolname, review, rating };


        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Review added successfully!!!');
                event.target.reset();
            })

    }
    return (
        <div>
            <form onSubmit={handleAddReview}>
                <input className='border-2 h-10 w-30 m-2' type="text" name='name' placeholder='Name' required /> <br />
                <input className='border-2 h-10 w-30 m-2' type="text" name='toolname' placeholder='Tool Name' required /> <br />
                <input className='border-2 h-10 w-30 m-2' type="text" name='review' placeholder='Review' required /> <br />
                <input className='border-2 h-10 w-30 m-2' type="number" name='rating' placeholder='Rating' required /> <br />
                <input className='border-2 text-white bg-slate-600 px-4 py-1' type="submit" value="Add Review" />

            </form>
        </div>
    );
};

export default MyReview;