import React from 'react';
import './Challenge.css';
import TestContainer from '../TestContainer/TestContainer';

const Challenge = ({
    selectedParagraph,
    words,
    character,
    wpm,
    timeRemaining,
    timerStarted
}) => {
    return (
        <div className="challengeContainer">
            <h1 data-aos="fade-down" className="challengeHeader">
                Take a speed test now!
            </h1>
            <TestContainer
                selectedParagraph={selectedParagraph}
                timeRemaining={timeRemaining} 
                words={words} 
                character={character} 
                wpm={wpm} 
            />
        </div>
    )
}

export default Challenge
