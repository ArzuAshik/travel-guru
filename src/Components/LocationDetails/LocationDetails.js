import React from 'react';
import { Button, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { orange } from '@material-ui/core/colors';
import { fakeData } from '../../fakeData';

const LocationDetails = ({ LocationID }) => {
    const orangeTheme = createMuiTheme({ palette: { primary: orange } })
    const {locationTitle, shortDescription} = fakeData[LocationID];
    return (
        <>
            <h1>{locationTitle}</h1>
            <p>{shortDescription}</p>
            <MuiThemeProvider theme={orangeTheme}>
                <Link to={'/booking-' + LocationID}>
                    <Button style={{textTransform: 'capitalize'}} color="primary" variant="contained">Booking &#8594;</Button>
                </Link>
            </MuiThemeProvider>
        </>
    );
};

export default LocationDetails;