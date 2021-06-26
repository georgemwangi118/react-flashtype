import React from 'react';
import './TypingChallenge.css';
import TestLetter from '../TestLetter/TestLetter';

const TypingChallenge = ({ 
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange
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
                        {/*{selectedParagraph}*/}
                        {testInfo.map((individualLetterInfo, index) => {
                            return( 
                                <TestLetter key={index} individualLetterInfo={individualLetterInfo} /> 
                            );
                        })}
                    </div>
                </div>
                <div className="textarea-right">
                    <textarea 
                        onChange={(e) => onInputChange(e.target.value)}
                        className="textarea" placeholder="Start typing here"
                    ></textarea>
                </div>
            </div>
        </div>
    )
}

export default TypingChallenge
