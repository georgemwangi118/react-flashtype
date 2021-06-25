import React from 'react';
import './Landing.css'
import Typewriter from 'typewriter-effect';

const Landing = () => {
    return (
        <div className="page-container">
            <div data-aos="fade-right" className="left">
                <h1 className="page-header">Can you type...</h1>
                <div className="typewriter-container">
                    <Typewriter
                        options={{
                            strings: ['Fast?', 'Correct?', 'Quick?'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="right">
                <img data-aos="fade-left" className="heroImage" src="./images/hero.png" alt="hero" />
            </div>
        </div>
    )
}

export default Landing
