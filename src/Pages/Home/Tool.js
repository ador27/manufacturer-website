import React from 'react';

const Tool = ({ tool }) => {
    const { name, description, picture, price, minimum, available } = tool;
    return (
        <div class="card w-96 bg-base-100 shadow-xl mb-12">
            <figure>
                <img className='object-cover h-48 w-96 ...' src={picture} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p><span className='text-cyan-600'>Description:</span> {description}</p>
                <p> <span className='text-red-800'>Price Per Unit:</span> {price}</p>
                <p><span className='text-green-600'>Minimum Order:</span> {minimum}</p>
                <p><span className='text-purple-600'>Available Unit:</span> {available}</p>
                <button class="btn btn-outline">Purchase</button>
            </div>
        </div>
    );
};

export default Tool;