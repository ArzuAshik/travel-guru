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

const Booking = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const orangeTheme = createMuiTheme({ palette: { primary: orange } })
    return (
        <div className='booking'>
            <Navbar />
            <div className="booking-container">
                <div className="booking-details">
                    <h1>COX'S Bazar</h1>
                    <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                </div>
                <div className="booking-form">
                    <form className='' noValidate autoComplete="off">
                        <TextField style={{width: '100%'}} label="Origin" variant="filled" />
                        <br />
                        <br />
                        <TextField style={{width: '100%'}} label="Destination" variant="filled" />
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
                            <Button type="submit" style={{ textTransform: 'capitalize', display: 'block', width: '100%'}} color="primary" variant="contained">Start Booking</Button>
                        </MuiThemeProvider>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;