import React from 'react';
import './TestContainer.css';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';

const TestContainer = ({ 
    selectedParagraph,
    words,
    character,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
    startAgain
}) => {

    return (
        <div className="testContainer">
            {
                timeRemaining > 0 
                ? 
                (<div data-aos="fade-up" className="typingContainer">
                    <TypingChallengeContainer 
                        selectedParagraph={selectedParagraph}
                        timeRemaining={timeRemaining} 
                        timerStarted={timerStarted}
                        words={words} 
                        character={character} 
                        wpm={wpm} 
                        testInfo={testInfo} 
                        onInputChange={onInputChange}
                    />
                </div>)
                : 
                (<div className="tryAgainContainer">
                    <TryAgain 
                        words={words} 
                        character={character} 
                        wpm={wpm} 
                        startAgain={startAgain}
                    />
                </div>)
            }
            
        </div>
    )
}

export default TestContainer;
