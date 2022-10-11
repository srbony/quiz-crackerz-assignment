import React from 'react';

const Blog = () => {
    return (
        <div>
            <div >
                <div className='bg-slate-500 m-8 p-8 rounded-lg text-white'>
                    <h2>What is the purpose of React Router?</h2>
                    <p>Answer:React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
                </div>
                <div className='bg-slate-500 m-8 p-8 rounded-lg text-white mt-4'>
                    <h2>How does context API works?</h2>
                    <p>Conext api  pass data from parent to children nested deep down the component tree directly,It is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. </p>


                </div>

            </div>

        </div>
    );
};

export default Blog;