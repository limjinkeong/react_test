import React, { useState } from 'react';
import Question from '../components/Question';
import Result from '../components/Result';

function TestPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const questions = [
        {
            question: 'Question 1',
            options: ['Option 1', 'Option 2', 'Option 3'],
        },
        {
            question: 'Question 2',
            options: ['Option A', 'Option B', 'Option C'],
        },
        // Add more questions as needed
    ];
    const progressBarWidth = ((currentQuestion + 1) / questions.length) * 100;

    const handleNextQuestion = (selectedOption) => {
        setAnswers([...answers, selectedOption]);
        setCurrentQuestion(currentQuestion + 1);
    };

    const getResult = () => {
        const result = answers.join('');
        // 여기에서 결과에 따라 다른 메시지를 반환합니다.
        if (result.includes('Option 1') && result.includes('Option B')) {
            return 'You got AB result!';
        } else if (result.includes('Option 2') && result.includes('Option C')) {
            return 'You got BC result!';
        } else {
            return 'Other result';
        }
    };

    const result = getResult();

    return (
        <div>
            <div style={{ width: '100%', height: '20px', background: '#ccc' }}>
                <div
                    style={{
                        width: `${progressBarWidth}%`,
                        height: '100%',
                        background: 'blue',
                    }}
                />
            </div>
            {currentQuestion < questions.length ? (
                <Question
                    question={questions[currentQuestion].question}
                    options={questions[currentQuestion].options}
                    onNext={handleNextQuestion}
                />
            ) : (
                <Result result={result} />
            )}
        </div>
    );
}

export default TestPage;
