import React, { useEffect, useState } from 'react';

const Purchase = () => {
    const handleAddOrder = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const quantity = event.target.quantity.value;
        const number = event.target.number.value;
        console.log(name, quantity, number);
    }
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch(`https://young-peak-15744.herokuapp.com/tools/:{_id}`)
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    return (
        <div>
            <h1 className='text-4xl m-10 font-semibold text-center'>Purchase Tool : {tools.name}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Tool Name</th>
                            <th>Description</th>
                            <th>Price (Per Unit)</th>
                            <th>Minimum Order</th>
                            <th>Available Tools</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{tools.name}</td>
                            <td>{tools.description}</td>
                            <td>{tools.price}</td>
                            <td>{tools.minimum}</td>
                            <td>{tools.available}</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <form onSubmit={handleAddOrder} className='m-20'>
                <input className='border-2 border-gray-500 h-10 w-96 m-2' type="text" name='address' placeholder='Your Address' required /> <br />
                <input className='border-2 border-gray-500 h-10 w-96 m-2' type="number" name='quantity' placeholder='Order Quantity' required /> <br />
                <input className='border-2 border-gray-500 h-10 w-96 m-2' type="number" name='number' placeholder='Mobile Number' required /> <br />
                <input className='border-2 text-white bg-slate-600 px-4 py-1 m-2' type="submit" value="Purchase" />
            </form>
        </div>
    );
};

export default Purchase;