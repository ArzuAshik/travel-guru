import React, { useContext } from 'react';
import './Navbar.css';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import LogoWhite from '../../Image/Logo.png';
import LogoBlack from '../../Image/Logo2.png';

import { Link } from 'react-router-dom';
import { Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import { UserContext } from '../../App';

import * as firebase from "firebase/app";
import "firebase/auth";

const useStyles = makeStyles((theme) => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        border: '1px solid #fafafa',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    },
    inputRoot: {
        color: '#fff',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    }
}));


const orangeTheme = createMuiTheme({ palette: { primary: orange } })

const Navbar = ({ logo }) => {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleLogout = () => {
        firebase.auth().signOut().then(function() {
            setLoggedInUser({email: ''});
          })
          .catch(function(error) {
          });          
    }
    return (
        <div className="navbar">
            <AppBar style={{ padding: '10px' }} color='transparent' position="static">
                <Toolbar>
                    <Link to='/'>
                        <img style={{ height: '50px' }} src={logo ? LogoBlack : LogoWhite} alt="Logo" />
                    </Link>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <div className={logo ? "nav-link-black" : "nav-link"}>
                        <Link to='news'>News</Link>
                        <Link to='destination'>Destination</Link>
                        <Link to='blog'>Blog</Link>
                        <Link to='contact'>Contact</Link>
                        <MuiThemeProvider theme={orangeTheme}>
                            {
                                loggedInUser.email ?
                                    <Button onClick={handleLogout} color="primary" variant="contained">Logout</Button>
                                    :
                                    <Link to='/login'>
                                        <Button color="primary" variant="contained">Login</Button>
                                    </Link>
                            }
                        </MuiThemeProvider>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;