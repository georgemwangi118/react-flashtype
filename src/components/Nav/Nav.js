import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src="./images/logo.png" alt="logo" />
                <p className="flash-logo-text">FlashType</p>
            </div>
            <div className="nav-right">
                <a
                    target="_blank"
                    className="nav-link"
                    href="#nav"
                    rel="noreferrer"
                >
                    Linkedin Profile
                </a>
            </div>
        </div>
    )
}

export default Nav;
