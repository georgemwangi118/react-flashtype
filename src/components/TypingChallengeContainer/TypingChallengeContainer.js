import React from 'react';
import './TypingChallengeContainer.css';
import DetailsCard from '../DetailsCard/DetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';

const TypingChallengeContainer = ({ 
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange 
}) => {
    return (
        <div className="typingChallengeContainer">
            {/* Details section */}
            <div className="detailsContainer">
                {/* Words typed */}
                <DetailsCard cardName="Words" cardValue={words} />
                {/* characters typed */}
                <DetailsCard cardName="Characters" cardValue={characters} />
                {/*speed*/}
                <DetailsCard cardName="WPM" cardValue={wpm} />
            </div>

            {/* The real challenge*/}
            <div className="typewriterContainer">
                <TypingChallenge 
                    testInfo={testInfo}
                    selectedParagraph={selectedParagraph}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                    onInputChange={onInputChange}
                />
            </div>
        </div>
    )
}

export default TypingChallengeContainer;
