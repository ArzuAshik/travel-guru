import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css'
import LocationDetails from '../LocationDetails/LocationDetails';
import SliderCard from '../SliderCard/SliderCard';
import { fakeData } from '../../fakeData';

const Home = () => {
    const [locationInfo, setLocationInfo] = useState(fakeData);
    
    return (
        <div className='home-page'>
            <Navbar/>

            <div className="home-content">
                <div className="location-details">
                    <LocationDetails />
                </div>
                <div className="location-slider">
                    {
                        locationInfo.map(location => <SliderCard key={location.id} location={location}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;