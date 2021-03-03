import React from 'react';
import { Grid } from "semantic-ui-react";
import { useState, useEffect } from 'react';
import './Quiz.css'

const mockData = [
    {
        id: '1',
        description: 'What is React?',
        answers: [
            {
                id: '1',
                description: 'a programming language'
            },
            {
                id: '2',
                description: 'a framework'
            },
            {
                id: '3',
                description: 'a JS library'
            },
            {
                id: '4',
                description: 'a compiler'
            }
        ],
        correctAnswer: '3'
    },
    {
        id: '2',
        description: 'This is the second question?',
        answers: [
            {
                id: '5',
                description: 'an answer'
            },
            {
                id: '6',
                description: 'an answer'
            },
            {
                id: '7',
                description: 'an answer'
            },
            {
                id: '8',
                description: 'an answer'
            }
        ],
        correctAnswer: '1'
    }
    
]

export const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        // do the following when component first mounts
        // this is where you call your APIs
        setQuestions(mockData);
    }, [])

    if (questions.length === 0) {
        return <div>loading the Matrix...</div>
    }
    return (
        <div>
            <img src='https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/celebrity-matrix-morpheus-512.png' width="200" height="200" alt="Morpehus" />

            <div className={'container'}>
                <Grid >
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <div>
                                {questions[activeQuestion].description}
                        </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            {questions[activeQuestion].answers[0].description}
                    </Grid.Column>
                        <Grid.Column>
                        {questions[activeQuestion].answers[1].description}
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                        {questions[activeQuestion].answers[2].description}
                    </Grid.Column>
                        <Grid.Column>
                        {questions[activeQuestion].answers[3].description}
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
                <div>Question {activeQuestion + 1} out of {questions.length}</div>
            </div>
            
            <img src="https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/celebrity-matrix-neo-man-white-512.png"  width="200" height="200" alt="Neo"/>

        </div>
    );
}
export default Quiz;