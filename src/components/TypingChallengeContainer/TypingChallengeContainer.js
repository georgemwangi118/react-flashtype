import React from 'react';
import './TypingChallengeContainer.css';
import DetailsCard from '../DetailsCard/DetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';

const TypingChallengeContainer = ({ 
    selectedParagraph,
    words,
    character,
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
                <DetailsCard cardName="words" cardValue={words} />
                {/* Characters typed */}
                <DetailsCard cardName="characters" cardValue={character} />
                {/*speed*/}
                <DetailsCard cardName="speed" cardValue={wpm} />
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
