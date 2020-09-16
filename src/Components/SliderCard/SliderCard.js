import React from 'react';
import './SliderCard.css'

const SliderCard = () => {
    return (
        <div className='slider-card'>
            <img style={{ height: '100%', width: '100%'}} src={process.env.PUBLIC_URL + '/Image/Sajek.png'} alt=""/>
            <h3>COX'S BAZAR</h3>
        </div>
    );
};

export default SliderCard;