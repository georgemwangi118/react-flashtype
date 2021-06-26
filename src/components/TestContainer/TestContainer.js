import React from 'react';
import './TestContainer.css';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';

const TestContainer = ({ 
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
    startAgain
}) => {

    return (
        <div className="testContainer">
            {/* Show the try again or start screen */}
            {
                timeRemaining > 0 
                ? 
                (<div data-aos="fade-up" className="typingContainer">
                    <TypingChallengeContainer 
                        selectedParagraph={selectedParagraph}
                        timeRemaining={timeRemaining} 
                        timerStarted={timerStarted}
                        words={words} 
                        characters={characters} 
                        wpm={wpm} 
                        testInfo={testInfo} 
                        onInputChange={onInputChange}
                    />
                </div>)
                : 
                (<div className="tryAgainContainer">
                    <TryAgain 
                        words={words} 
                        characters={characters} 
                        wpm={wpm} 
                        startAgain={startAgain}
                    />
                </div>)
            }
            
        </div>
    )
}

export default TestContainer;
