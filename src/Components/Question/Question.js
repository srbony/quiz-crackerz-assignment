import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOption from '../QuizOption/QuizOption';


const Question = () => {
    const questionData = useLoaderData()
    const questions = questionData.data.questions
    console.log(questionData)

    console.log(questions)

    return (
        < div >
          
            <h2>{questionData.data.name}</h2>
            {
                questions.map(quiz => <QuizOption
                    quiz={quiz}
                    key={quiz.id}
                ></QuizOption>)
            }


        </div >
    );
};

export default Question;