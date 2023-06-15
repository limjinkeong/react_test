import React, { useState } from 'react';

function Question({ question, options, onNext }) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleNext = () => {
        onNext(selectedOption);
    };

    return (
        <div className="page-wrap">
            <h3>{question}</h3>
            {options.map((option, index) => (
                <label key={index}>
                    <input
                        type="radio"
                        value={option}
                        checked={selectedOption === option}
                        onChange={handleOptionChange}
                    />
                    {option}
                </label>
            ))}
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

export default Question;