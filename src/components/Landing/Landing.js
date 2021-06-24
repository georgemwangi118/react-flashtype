import React from 'react';
import './Landing.css'

const Landing = () => {
    return (
        <div className="page-container">
            <div className="left">
                <h1 className="page-header">Can you type...</h1>
                <div className="typewriter-container">
                    <p>Fast?</p>
                    <p>Correct?</p>
                    <p>Quick?</p>
                </div>
            </div>
            <div className="right">
                <img className="heroImage" src="./images/hero.png" alt="hero" />
            </div>
        </div>
    )
}

export default Landing
