import React from 'react';
import './ConfirmBooking.css';
import Navbar from '../Navbar/Navbar';
import Hotel from '../Hotel/Hotel';
import { useParams } from 'react-router-dom';
import { fakeData } from '../../fakeData';
import GMap from '../GMap/GMap';

const ConfirmBooking = () => {
    const { locationID } = useParams();
    const { locationTitle, hotels, mapLocation } = fakeData[locationID];
    return (
        <>
            <Navbar logo='black' />
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <p>252 stays Apr 13-17 3 guests</p>
                <h4>Stay in {locationTitle}</h4>
            </div>
            <div className="confirm-booking-container">
                <div className="hotels">
                    {
                        hotels.map(hotel => <Hotel key={hotel.hotelID} hotel={hotel} />)
                    }
                </div>
                <div className="map">
                    <GMap mapLocation={mapLocation}/>
                </div>
            </div>
        </>
    );
};

export default ConfirmBooking;