import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css'
import LocationDetails from '../LocationDetails/LocationDetails';
import SliderCard from '../SliderCard/SliderCard';

const Home = () => {
    return (
        <div className='home-page'>
            <Navbar/>

            <div className="home-content">
                <div className="location-details">
                    <LocationDetails />
                </div>
                <div className="location-slider">
                    <SliderCard/>
                    <SliderCard/>
                    <SliderCard/>
                </div>
            </div>
        </div>
    );
};

export default Home;