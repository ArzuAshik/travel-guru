import React, { useState, useContext } from 'react';
import './Login.css';
import Navbar from '../Navbar/Navbar';
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import { UserContext } from '../../App';

import facebookIcon from '../../Icon/fb.png';
import googleIcon from '../../Icon/google.png';

import { useHistory, useLocation } from 'react-router-dom';
import { testValid } from './validator';
import { firebaseEmailSignIn, firebaseCreateUser, firebaseFacebookLogin, firebaseGoogleLogin } from './authManager';

const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [formInput, setFormInput] = useState({ email: '', password: '', name: '', confirmPassword: '' });
    const [isNewUser, setIsNewUser] = useState(false);
    const [message, setMessage] = useState({ success: '', msg: '' });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // handling input
    const handleFormInput = (e) => {
        const isInputValid = testValid(e.target, formInput.password);
        if (isInputValid) {
            const newInput = { ...formInput };
            newInput[e.target.name] = e.target.value;
            setFormInput(newInput);
        }
    }

    // login or creat account
    const handleFormSubmit = (e) => {
        if (!isNewUser) {
            firebaseEmailSignIn(formInput.email, formInput.password)
                .then(res => {
                    if (res.email) {
                        setLoggedInUser({ email: res.email });
                        history.replace(from);
                    } else {
                        setMessage({ msg: res.err, success: false });
                    }
                });
        } else if (isNewUser) {
            firebaseCreateUser(formInput.email, formInput.password, formInput.confirmPassword, formInput.name)
                .then(res => {
                    if (res.success) {
                        setMessage({ msg: 'Account created successfully.', success: true });
                        setIsNewUser(false);
                    } else {
                        setMessage({ msg: res.msg, success: false });
                    }
                });
        }
        e.preventDefault();
    }

    // facebook signin
    const handleFacebookLogin = () => {
        firebaseFacebookLogin()
            .then(res => {
                if (res.success) {
                    setLoggedInUser({ email: res.email });
                    history.replace(from);
                } else {
                    setMessage({ msg: res.msg, success: false });
                }
            });

    }

    // google signin
    const handleGoogleLogin = () => {
        firebaseGoogleLogin()
            .then(res => {
                if (res.success) {
                    setLoggedInUser({ email: res.email });
                    history.replace(from);
                } else {
                    setMessage({ msg: res.msg, success: false });
                }
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