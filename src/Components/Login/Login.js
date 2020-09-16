import React from 'react';
import './Login.css';
import Navbar from '../Navbar/Navbar';
import { TextField, FormControlLabel, Checkbox } from '@material-ui/core';

import facebookIcon from '../../Icon/fb.png';
import googleIcon from '../../Icon/google.png';

const Login = () => {
    return (
        <div>
            <Navbar logo='black' />
            <div className="login-form">
                <form action="#">
                    <h3>Login</h3>
                    <TextField fullWidth label="Email" type='email' />
                    <br />
                    <TextField fullWidth label="password" type='password' />
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
                    <button style={{ display: 'block', backgroundColor: 'orange', padding: '10px 20px', width: '100%', cursor: 'pointer' }} type='submit'>Login</button>
                    <p style={{ textAlign: 'center' }}>Don’t have an account? <span style={{ color: 'orange', textDecoration: 'underline', cursor: 'pointer' }}>Create an account</span></p>
                </form>
                <p style={{ textAlign: 'center' }}>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;  or &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</p>
                <div className="social-login">
                    <p>
                        <img className='social-icon' src={facebookIcon} alt="Facebook" />
                        <span>Continue with Facebook</span>
                    </p>
                </div>
                <div className="social-login">                    
                    <p>
                        <img className='social-icon' src={googleIcon} alt="Google" />
                        <span>Continue with Google</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;