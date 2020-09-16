import React from 'react';
import './Navbar.css';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../Image/Logo.png';
import { Link } from 'react-router-dom';
import { Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

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
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    }
}));


const orangeTheme = createMuiTheme({ palette: { primary: orange } })

const Navbar = () => {
    const classes = useStyles();
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="container">
            <AppBar style={{ padding: '10px' }} color='transparent' position="static">
                <Toolbar>
                    <Link to='/'>
                        <img style={{ height: '50px' }} src={logo} alt="Logo" />
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

                    <div className="nav-link">
                        <Link to='news'>News</Link>
                        <Link to='destination'>Destination</Link>
                        <Link to='blog'>Blog</Link>
                        <Link to='contact'>Contact</Link>
                        <MuiThemeProvider theme={orangeTheme}>
                            <Link to='/login'>
                                <Button color="primary" variant="contained">Login</Button>
                            </Link>
                        </MuiThemeProvider>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;