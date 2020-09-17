import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Booking.css'
import { TextField, Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { orange } from '@material-ui/core/colors';
import { useParams } from 'react-router-dom';
import { fakeData } from '../../fakeData';

const Booking = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const { locationID } = useParams();
    const { locationTitle, destination } = fakeData[locationID];

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const orangeTheme = createMuiTheme({ palette: { primary: orange } })
    return (
        <div className='booking'>
            <Navbar />
            <div className="booking-container">
                <div className="booking-details">
                    <h1>{locationTitle}</h1>
                    <p>{destination}</p>
                </div>
                <div className="booking-form">
                    <form className='' noValidate autoComplete="off">
                        <TextField fullWidth label="Origin" variant="filled" />
                        <br />
                        <br />
                        <TextField fullWidth label="Destination" variant="filled" />
                        <br />
                        <br />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="From"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="To"
                                    format="MM/dd"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider >
                        <MuiThemeProvider theme={orangeTheme}>
                            <Button type="submit" style={{ textTransform: 'capitalize', display: 'block', width: '100%' }} color="primary" variant="contained">Start Booking</Button>
                        </MuiThemeProvider>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;