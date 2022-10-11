import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const topicsData = useLoaderData()
    const topics = topicsData.data;
    console.log(topics);
    return (
        <div>
            <h2>this is topics</h2>
            <p>topics data{topics.length}</p>
        </div>
    );
};

export default Topics;