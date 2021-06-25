import React from 'react';
import './DetailsCard.css';

const DetailsCard = ({ cardName, cardValue }) => {
    return (
        <div className="detailsCardContainer">
            <div className="cardName">{cardName}</div>
            <div className="cardValue">{cardValue}</div>
        </div>
    )
}

export default DetailsCard;
