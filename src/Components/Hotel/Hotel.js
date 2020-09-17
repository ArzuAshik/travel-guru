import React from 'react';
import './Hotel.css';

const Hotel = ({hotel}) => {
    const {hotelImage, price, rating} = hotel;
    console.log(hotelImage);
    return (
        <div className='hotel'>
            <div className="hotel-image">
                <img src={hotelImage} alt="Hotel Thumbnail"/>
            </div>
            <div className="hotel-details">
                <h5>Light bright airy stylish apt & safe peaceful stay</h5>
                <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                <p>Wif Air conditioning Kitchen</p>
                <p>Cancellation fexibility availiable</p>
                <p>{rating} <strong>{price}</strong>/Night</p>
            </div>
        </div>
    );
};

export default Hotel;