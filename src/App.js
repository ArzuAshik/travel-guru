import React, { useState, createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login';
import ConfirmBooking from './Components/ConfirmBooking/ConfirmBooking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({ email: '' });

  return (
    <Router>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/booking-:locationID'>
            <Booking />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/confirm-booking-:locationID'>
            <ConfirmBooking />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
