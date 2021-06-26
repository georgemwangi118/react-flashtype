import React from 'react';
import './TestLetter.css';

const TestLetter = ({ individualLetterInfo }) => {
    const { status } = individualLetterInfo;
    
    const statusClass = {
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted",
    }[status];

    return (
        <span className={`testLetter ${statusClass}`}>{individualLetterInfo.testLetter}
        </span>
    )
}

export default TestLetter;
