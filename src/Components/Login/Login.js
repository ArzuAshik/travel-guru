import React, { useState, useContext } from 'react';
import './Login.css';
import Navbar from '../Navbar/Navbar';
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import { UserContext } from '../../App';

import facebookIcon from '../../Icon/fb.png';
import googleIcon from '../../Icon/google.png';

import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebaseConfig/firebaseConfig';

import { useHistory, useLocation } from 'react-router-dom';
import { testValid } from './validator';

const Login = () => {
    let history = useHistory();
    let location = useLocation();  
    let { from } = location.state || { from: { pathname: "/" } };
  
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();



    const [formInput, setFormInput] = useState({ email: '', password: '', name: '', confirmPassword: '' });
    const [isNewUser, setIsNewUser] = useState(false);
    const [message, setMessage] = useState({ success: '', msg: '' });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleFormInput = (e) => {
        const isInputValid = testValid(e.target, formInput.password);
        if (isInputValid) {
            const newInput = { ...formInput };
            newInput[e.target.name] = e.target.value;
            setFormInput(newInput);
        }
    }

    const handleFormSubmit = (e) => {
        if (!isNewUser) {
            if (formInput.email && formInput.password) {
                firebase.auth().signInWithEmailAndPassword(formInput.email, formInput.password)
                    .then(() => {
                        setLoggedInUser({ email: formInput.email });
                        history.replace(from);
                    })
                    .catch(function (error) {
                        var errorMessage = error.message;
                        setMessage({ msg: errorMessage, success: false });
                    });
            } else {
                console.log('login form else', formInput);
            }
        } else if (isNewUser) {
            if (formInput.email && formInput.password && formInput.confirmPassword && formInput.name) {
                firebase.auth().createUserWithEmailAndPassword(formInput.email, formInput.password)
                    .then(() => {
                        setMessage({ msg: 'User created successfully.', success: true });
                    })
                    .catch(function (error) {
                        var errorMessage = error.message;
                        setMessage({ msg: errorMessage, success: false });
                    });
            }
        }
        e.preventDefault();
    }

    const handleFacebookLogin = () => {
        firebase.auth().signInWithPopup(facebookProvider)
            .then(function (result) {
                const user = result.user;
                setLoggedInUser({ email: user.email });
                history.replace(from);
            })
            .catch(function (error) {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }
    const handleGoogleLogin = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(function (result) {
                const user = result.user;
                setLoggedInUser({ email: user.email });
                history.replace(from);
            })
            .catch(function (error) {
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }


    return (
        <div>
            <Navbar logo='black' />
            <div className="login-form">
                {message.msg && <h4 className={message.success ? 'success-message' : 'error-message'}>{message.msg}</h4>}
                
                <form onSubmit={handleFormSubmit}>
                    <h3>{isNewUser ? 'Create an account' : 'Login'}</h3>
                    {
                        isNewUser && <TextField onBlur={handleFormInput} name='name' fullWidth label="Full Name" type='text' />
                    }
                    <TextField onBlur={handleFormInput} name='email' fullWidth label="Email" type='email' />
                    <TextField onBlur={handleFormInput} name='password' fullWidth label="Password" type='password' />
                    {
                        isNewUser && <TextField onBlur={handleFormInput} name='confirmPassword' fullWidth label="Confirm Password" type='password' />
                    }

                    {
                        !isNewUser &&
                        <>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={false}
                                        onChange='{handleChange}'
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Remember Me"
                            />
                            <span style={{ color: 'orange', textDecoration: 'underline', cursor: 'pointer' }}>Forgot Password</span>
                        </>
                    }

                    <button style={{ display: 'block', backgroundColor: 'orange', padding: '10px 20px', width: '100%', cursor: 'pointer' }} type='submit'>{isNewUser ? 'Create an account' : 'Login'}</button>
                    {
                        isNewUser ?
                            <p style={{ textAlign: 'center' }}>
                                Already have an account? <span onClick={() => setIsNewUser(!isNewUser)}>Login</span>
                            </p>
                            :
                            <p style={{ textAlign: 'center' }}>
                                Don’t have an account? <span onClick={() => setIsNewUser(!isNewUser)}>Create an account</span>
                            </p>
                    }
                </form>
                <p style={{ textAlign: 'center' }}>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;  or &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</p>
                <div className="social-login">
                    <p onClick={handleFacebookLogin}>
                        <img className='social-icon' src={facebookIcon} alt="Facebook" />
                        <span>Continue with Facebook</span>
                    </p>
                </div>
                <div className="social-login">
                    <p onClick={handleGoogleLogin}>
                        <img className='social-icon' src={googleIcon} alt="Google" />
                        <span>Continue with Google</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;