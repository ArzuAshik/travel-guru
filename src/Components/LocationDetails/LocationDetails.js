import React from 'react';
import { Button, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { orange } from '@material-ui/core/colors';

const LocationDetails = ({ LocationID }) => {
    const orangeTheme = createMuiTheme({ palette: { primary: orange } })
    return (
        <>
            <h1>COX'S BAZAR</h1>
            <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
            <MuiThemeProvider theme={orangeTheme}>
                <Link to='/booking'>
                    <Button style={{textTransform: 'capitalize'}} color="primary" variant="contained">Booking &#8594;</Button>
                </Link>
            </MuiThemeProvider>
        </>
    );
};

export default LocationDetails;