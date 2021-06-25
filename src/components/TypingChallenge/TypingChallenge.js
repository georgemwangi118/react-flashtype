import React from 'react';
import './TypingChallenge.css';

const TypingChallenge = ({ 
    selectedParagraph,
    timeRemaining,
    timerStarted
}) => {
    return (
        <div className="typingChallenge">
            <div className="timerContainer">
                <p className="timer">
                    00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
                </p>
                <p className="timerInfo">
                    {!timerStarted && "Start typing to start the timer"}
                </p>
            </div>
            <div className="textareaContainer">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        {selectedParagraph}
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea className="textarea" placeholder="Start typing here"></textarea>
                </div>
            </div>
        </div>
    )
}

export default TypingChallenge
