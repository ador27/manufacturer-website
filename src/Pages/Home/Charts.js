import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = () => {
    const data = [
        {
            "month": "Mar",
            "toolsUnit": 12500,
            "sell": 8900
        },
        {
            "month": "Apr",
            "toolsUnit": 14500,
            "sell": 11000
        },
        {
            "month": "May",
            "toolsUnit": 15500,
            "sell": 10200
        },
        {
            "month": "Jun",
            "toolsUnit": 11500,
            "sell": 10100
        },
        {
            "month": "Jul",
            "toolsUnit": 13200,
            "sell": 11000
        },
        {
            "month": "Aug",
            "toolsUnit": 13000,
            "sell": 9900
        }
    ]
    return (
        <div>
            <h1 className='text-3xl text-purple-700 text-center'>Total Tools and Sells Tools Unit in Month</h1>
            <div className="barchart grid grid-cols-1 lg:grid-cols-2 m-16">
                <BarChart width={520} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey={'toolsUnit'} fill="#8884d8"></Bar>
                    <Bar dataKey={"sell"} fill="#82ca9d"></Bar>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </BarChart>

                <LineChart width={530} height={300} data={data} className="linechart">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Line type={"monotone"} dataKey={"toolsUnit"} stroke="#8884d8"></Line>
                    <Line type="monotone" dataKey={"sell"} stroke="#82ca9d" />

                </LineChart>
            </div>
        </div>

    );

};

export default Charts;