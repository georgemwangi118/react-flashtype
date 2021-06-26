import React from 'react';
import './TryAgain.css';

const TryAgain = ({ words, character, wpm, startAgain }) => {
    return (
        <div className="tryAgainContainer">
            <h1>Test Results</h1>
            <div className="resultContainer">
                <p>
                    <b>character:</b> {character}
                </p>

                <p>
                    <b>words:</b> {words}
                </p>

                <p>
                    <b>speed:</b> {wpm} wpm
                </p>
            </div>
            <div>
                <button
                    onClick={() => startAgain()}
                    className="end-buttons retry-btn">
                    Retry
                </button>

                <button
                    onClick={() => {
                        window.open("https://www.facebook.com/sharer/sharer.php?u=checkitout", "facebook-share-dialog","width=800, height=600")
                    }}
                    className="end-buttons share-btn">
                        Share
                    </button>

                <button
                    onClick={() => {
                        window.open("https://www.twitter.com/intent/tweet?text=checkitout", "twitter","width=800, height=600")
                    }}
                    className="end-buttons tweet-btn">
                    Tweet
                </button>
            </div>
        </div>
    )
}

export default TryAgain;
