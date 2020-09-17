import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login';
import ConfirmBooking from './Components/ConfirmBooking/ConfirmBooking';

function App() {
  

  return (
    <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/booking'>
            <Booking/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/confirm-booking'>
            <ConfirmBooking/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
