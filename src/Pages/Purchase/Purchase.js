import React, { useEffect, useState } from 'react';

const Purchase = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    return (
        <div>
            <h1 className='text-4xl m-10 font-semibold text-center'>Purchase Tool : {tools.length}</h1>

        </div>
    );
};

export default Purchase;