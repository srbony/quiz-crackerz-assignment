import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import logo from '../../images/header.jpg'
import './Topics.css'

const Topics = () => {
    const topicsData = useLoaderData()
    // console.log(topicsData);
    // const topicsData = useLoaderData()
    const topics = topicsData.data;
    console.log(topics);
    return (
        <div>
            <div className='header-logo'>
                <img src={logo} alt="" />
            </div>

            <div className='topics grid  md:grid-cols-3 sm:grid-cols-1'>
                {
                    topics.map(topic => <Topic
                        topic={topic}
                        key={topic.id}

                    >

                    </Topic>)
                }
            </div>



        </div>
    );
};

export default Topics;