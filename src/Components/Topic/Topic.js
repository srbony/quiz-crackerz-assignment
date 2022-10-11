import React from 'react';
import './Topic.css'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo } = topic;
    return (
        <div className='single-topic'>
            <img src={logo} alt="" />
            <h4 className='text-blue-500 text-1xl font-semibold'>{name}</h4>
            {/* <button>Start Practice <p>   <ArrowLongRightIcon className="h-4 w-4 text-blue-500" /></p> </button> */}
            <Link to={`/topic/${id}`}>
                <button className='bg-blue-500 px-8 mt-2 rounded-md flex items-center ml-5 py-2'>Start Price
                    <ArrowLongRightIcon className="h-4 w-4 text-white ml-2" />

                </button>

            </Link>







        </div>
    );
};

export default Topic;