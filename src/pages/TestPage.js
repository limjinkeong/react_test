import React, { useState } from 'react';
import Question from '../components/Question';
import Result from '../components/Result';

function TestPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const questions = [
        {
            question: '궁금한게 생겼을때',
            options: ['바로 다른 사람한테 물어본다.', '최대한 혼자 해보려고 한다.'],
        },
        {
            question: '업무 실수를 해서 혼났을 때',
            options: ['자책은 하지만 빨리 잊어버린다.', '실수 했던 상황이 계속 떠오른다.'],
        },
        {
            question: '후배 직원이 실수 했을 때',
            options: ['자책하지만 빨리 잊는 편이다.', '실수 했던 상황이 계속 떠오른다'],
        },
        {
            question: '원래 하지 않았던 업무를 갑자기 맡게 됐을 때',
            options: ['새로운 일을 배우니까 좋다!', '갑자기? 스트레스 받는다.'],
        },
        {
            question: '업무 할때',
            options: ['딴 생각 안하고 업무에만 올인한다.', '딴 생각하다가 다시 업무로 돌아가는 편'],
        },
        {
            question: '새로운 직원이 왔을 때',
            options: ['어색할거같으니 먼저 말을 걸어준다.', '어색하겠다.. 알아서 적응하겠지.'],
        },
        {
            question: '내 일을 도와주려다 큰 실수를 한 동료 직원에게',
            options: ['날 도와주려던 거니까 참는다..', '앞으로는 혼자 하겠다고 한다.'],
        },
        {
            question: '지각을',
            options: ['어쩌다 한번 씩 하는 편', '해본적 없다.'],
        },
        {
            question: '야근할때',
            options: ['이왕 야근하니까 얘기도 하자!', '빨리 끝내고 집에 가야지!'],
        },
        {
            question: '나한테 맞는 업무는?',
            options: ['지루하지만 반복 업무', '아이디어 뿜뿜!'],
        },
        {
            question: '나한테 맞는 후배는?',
            options: ['대화가 잘 통하고 센스있는', '묵묵히 자기 할일 하는'],
        },
        {
            question: '어떤 업무 스타일을 갖고 있는가?',
            options: ['그날 그날 정하는 편', '나름 루틴이 있는 스타일'],
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
