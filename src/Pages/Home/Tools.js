import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('https://young-peak-15744.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data));
    }, [])
    return (
        <div>
            <div className='m-5'>
                <h1 className='text-3xl text-red-700 text-center mt-8'>Affinity Electronics Tools</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }

            </div>

        </div>
    );
};

export default Tools;