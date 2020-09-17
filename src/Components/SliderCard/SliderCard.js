import React from 'react';
import './SliderCard.css'

const SliderCard = (props) => {
    const { id, locationTitle, thumbnail } = props.location;
    const [isActiveCard, setIsActiveCard] = props.isActive;

    const handleActiveCard = (cardID) =>{
        setIsActiveCard(cardID);
    }
    return (
        <div onClick={() => {handleActiveCard(id)}} className={isActiveCard === id ? 'active-card slider-card' : 'slider-card'}>
            <img style={{ height: '100%', width: '100%' }} src={thumbnail} alt={locationTitle} />
            <h3>{locationTitle}</h3>
        </div>
    );
};

export default SliderCard;