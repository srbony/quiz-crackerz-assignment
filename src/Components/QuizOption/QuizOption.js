import React from 'react';

const QuizOption = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    console.log(quiz)
    // const { options, question } = props;
    // console.log(question)
    return (
        <div>
            <h2>{question}</h2>
            {/* <h3>{question}</h3> */}
            <div className='bg-indigo-300 rounded-lg m-8 p-8 flex items-center sm:grid-cols-1 justify-items-center'>

                <label htmlFor="">{options.options}</label>
                <div>
                    {
                        options.map(option => <div>
                            <input type="radio" id="html" name="fav_language" value={option} />{option}



                            {/* <p>{option}</p> */}
                        </div>)
                    }

                </div>

            </div>
        </div>
    );
};

export default QuizOption;