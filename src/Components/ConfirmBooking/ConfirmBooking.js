import React from 'react';
import './ConfirmBooking.css';
import Navbar from '../Navbar/Navbar';
import Hotel from '../Hotel/Hotel';

const ConfirmBooking = () => {
    return (
        <>
            <Navbar logo='black' />
            <div style={{ maxWidth: '1200px', margin: '0 auto'}}>
                <p>252 stays Apr 13-17 3 guests</p>
                <h4>Stay in Cox’s Bazar</h4>
            </div>
            <div className="confirm-booking-container">
                <Hotel />
                <div className="map">
                    Google Map
                </div>
            </div>
        </>
    );
};

export default ConfirmBooking;