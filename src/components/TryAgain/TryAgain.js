import React from 'react';
import './TryAgain.css';

const TryAgain = ({ words, characters, wpm, startAgain }) => {
    return (
        <div data-aos="fade-up" className="tryAgainContainer">
            <h1>Test Results</h1>
            <div className="resultContainer">
                <p>
                    <b>Characters:</b> {characters}
                </p>

                <p>
                    <b>Words:</b> {words}
                </p>

                <p>
                    <b>Speed:</b> {wpm} wpm
                </p>
            </div>

            <div>
                <button
                    onClick={() => startAgain()}
                    className="end-buttons retry-btn">
                    Re-try
                </button>

                <button
                    onClick={() => {
                        window.open("https://www.facebook.com/sharer/sharer.php?u=checkitout", "facebook-share-dialog","width=800, height=600")
                    }}
                    className="end-buttons share-btn"
                >
                    Share
                </button>

                <button
                    onClick={() => {
                        window.open("https://www.twitter.com/intent/tweet?text=checkitout", "twitter","width=800, height=600")
                    }}
                    className="end-buttons tweet-btn"
                >
                    Tweet
                </button>
            </div>
        </div>
    )
}

export default TryAgain;
