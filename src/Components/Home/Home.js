import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import logo from '../../images/header.jpg'
import './Home.css'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
const Home = () => {
    const loaderData = useLoaderData()
    const data = loaderData.data
    // console.log(data)
    return (
        <div>
            <section className='{styles.bacfground} md:w-full md:text-normal sm:text-center sm:max-w-full' style={{ backgroundImage: `url(${logo})` }}>
                <p className='text text-amber-300 text-2xl text italic font-semibold'>In this project i create some quizes for React,Javascript,CSS and Git.</p>


            </section>
            <div className='topics-name'>
                <div className='grid md:grid-cols-4 mt-8 gap-3 sm:grid-cols-12'>
                    {
                        data.map(dt => <div className=' border pb-4 rounded-xl m-8 shadow-2xl'>

                            <img src={dt.logo} alt="" className='bg-cyan-400  ' border />
                            <div className='flex items-center justify-evenly '>
                                <h3 className=' text-cyan-500 text-1xl  font-semibold'>{dt.name}</h3>
                               
                                <Link to='/topics'>
                                    <button className='ml-10 bg-indigo-600 px-3 py-2 mt-3 rounded-md flex items-center '> <small className='text-white text-1xl '>Start Practice</small><ArrowLongRightIcon className="h-4 w-4 text-white ml-2" /> </button>
                                </Link>

                            </div>

                        </div>)
                    }

                </div>

            </div>

        </div>
    );
};

export default Home;