import React from 'react';
import './Topic.css'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo } = topic;
    return (
        // <div className='single-topic '>
        //     <div className='flex '>
        //         <img src={logo} alt="" className='w-full border ' />
        //     </div>

        //     <div className='flex justify-evenly items-center'>
        //         <h4 className='text-blue-500 text-1xl font-semibold'>{name}</h4>

        //         <Link to={`/topic/${id}`}>
        //             <button className='bg-blue-500 px-8 mt-2 rounded-md flex items-center ml-5 py-2'>Start Price
        //                 <ArrowLongRightIcon className="h-4 w-4 text-white ml-2" />

        //             </button>

        //         </Link>

        //     </div>








        // </div>
        <article class="p-6 mb-6 border border-sky-200 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer ">
            <Link href="#1" class="absolute opacity-0 top-0 right-0 left-0 bottom-0"></Link>
            <div class="relative mb-4 rounded-2xl bg-slate-400">

                <img src={logo} alt="" className='max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105' />
                <Link class="flex justify-center items-center bg-indigo-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100" href="#" target="_blank" rel="noopener noreferrer" >
                    Read article <svg class="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                </Link>
            </div>

            <div class="flex justify-between items-center w-full pb-4 mb-auto">
                <div class="flex items-center">


                    <div className="flex justify-evenly items-center">
                        <h4 className='text-blue-500 text-1xl font-semibold'>{name}</h4>

                        <Link to={`/topic/${id}`}>
                            <button className='bg-blue-500 px-8 mt-2 rounded-md flex items-center ml-5 py-2'>Start Price
                                <ArrowLongRightIcon className="h-4 w-4 text-white ml-2" />

                            </button>

                        </Link>
                    </div>
                </div>


            </div>

        </article>

    );
};

export default Topic;