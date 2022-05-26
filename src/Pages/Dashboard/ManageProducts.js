import React, { useEffect, useState } from 'react';
import ProductList from '../Dashboard/ProductList';

const ManageProducts = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://young-peak-15744.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    return (
        <div>
            <h1 className='text-3xl m-6'>All Tools: {tools.length} </h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map(tool => <ProductList
                                key={tool._id}
                                tool={tool}
                            ></ProductList>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;