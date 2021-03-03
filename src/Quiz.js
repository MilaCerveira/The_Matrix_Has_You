import React from 'react';
import { Grid } from "semantic-ui-react";
import { useState, useEffect } from 'react';


const mockData = [
    {
        id: '1',
        description: 'What is React?',
        answers: [
            {
                id: '1',
                description: 'a language'
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
            
        </div>
    );
}
export default Quiz;