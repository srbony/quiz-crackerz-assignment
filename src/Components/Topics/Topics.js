import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import logo from '../../images/header.jpg'
import './Topics.css'

const Topics = () => {
    const topicsData = useLoaderData()
    console.log(topicsData);
    // const topicsData = useLoaderData()
    const topics = topicsData.data;
    console.log(topics);
    return (
        <div className='min-h-screen bg-white flex flex-col justify-center py-6 sm:py-12' >


            {/* <div className='topics grid '>
                {
                    topics.map(topic => <Topic
                        topic={topic}
                        key={topic.id}

                    >

                    </Topic>)
                }
            </div> */}

            <div className='p-6 container mx-auto'>
                <div className='md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12 '>
                    {
                        topics?.map(topic => <Topic

                            topic={topic}
                            key={topic.id}
                        ></Topic>)
                    }
                </div>

            </div>



        </div>
    );
};

export default Topics;