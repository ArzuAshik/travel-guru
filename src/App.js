import React from 'react';
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
        </Switch>
    </Router>
  );
}

export default App;
