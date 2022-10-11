import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizOption = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    // console.log(quiz)


    const handleOption = (option) => {

        // console.log(option)
        if (option === correctAnswer) {
            toast('Answer is correct')
        }
        else {
            toast('Answer is Incorrect')
        }


    }


    return (
        <div>
            <h2>{question}</h2>
            {/* <h3>{question}</h3> */}
            <div className='bg-indigo-300 rounded-lg m-8 p-8 flex items-center sm:grid-cols-1 justify-items-center sm:w-full'>

                <label htmlFor="">{options.options}</label>
                <div>
                    {
                        options.map(option => <div>
                            <input onClick={() => handleOption(option)} type="radio" name="fav_language" />{option}
                            <ToastContainer />


                            {/* <p>{option}</p> */}
                        </div>)
                    }

                </div>

            </div>
        </div>
    );
};

export default QuizOption;