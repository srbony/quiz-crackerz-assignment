import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='sm:flex md:flex'>
                <div className='bg-sky-500 m-8 p-8 rounded-lg text-white text-start'>
                    <h2 className='font-bold text-2xl mb-2'>What is the purpose of React Router?</h2>
                    <p>Answer:React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
                </div>
                <div className='bg-sky-500 m-8 p-8 rounded-lg text-white mt-4 text-start'>
                    <h2 className='font-bold text-2xl mb-2'>How does context API works?</h2>
                    <p>Conext api  pass data from parent to children nested deep down the component tree directly,It is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. </p>


                </div>
                <div className='bg-sky-500 m-8 p-8 rounded-lg text-white mt-4 text-start'>
                    <h2 className='font-bold text-2xl mb-2'>useRef Hook</h2>
                    <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object.</p>
                </div>

            </div>

        </div>
    );
};

export default Blog;