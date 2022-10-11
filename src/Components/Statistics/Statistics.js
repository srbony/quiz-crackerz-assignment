import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const loadData = useLoaderData()
    const data = loadData.data
    console.log(loadData.data)
    return (
        <div className='mt-8'>
            {/* <h2>this is statistics</h2> */}
            <LineChart width={500} height={300} data={data}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

            </LineChart>
        </div>
    );
};

export default Statistics;