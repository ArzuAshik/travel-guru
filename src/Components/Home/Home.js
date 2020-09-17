import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css'
import LocationDetails from '../LocationDetails/LocationDetails';
import SliderCard from '../SliderCard/SliderCard';
import { fakeData } from '../../fakeData';

const Home = () => {
    const [locationInfo, setLocationInfo] = useState(fakeData);
    const [isActiveCard, setIsActiveCard] = useState(0);
    
    return (
        <div style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${fakeData[isActiveCard].thumbnail})`}} className='home-page'>
            <Navbar/>

            <div className="home-content">
                <div className="location-details">
                    <LocationDetails LocationID={isActiveCard} />
                </div>
                <div className="location-slider">
                    {
                        locationInfo.map(location => <SliderCard key={location.id} location={location} isActive={[isActiveCard, setIsActiveCard]}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;