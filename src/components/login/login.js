import React from 'react';
import './Login.css';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.png'

const login = () => {
    return (
        <>
            <div className="login-page">
                <div className="left">
                    <img src={img1} alt="Not Found" />
                </div>
                <div className="right">
                    <div className="content">
                        <div className="heading">
                            <div className="header">
                                <h2>Curate with</h2>
                            </div>
                            <div className="tagline">
                                <img src={img2} alt="Not Found" />
                                <div className="topp"><h5>ZONE</h5></div>
                            </div>
                        </div>
                        <div className="google">
                            <button>Continue with Google</button>
                        </div>
                        <div className="blank"></div>
                        <div className="inputs">
                            <div className="txt_field">
                                <input type="text" placeholder="jexxxxxx3@gmail.com" name="email" id='email' autoComplete='off' />
                                <span></span>
                                {/* <label>Email</label> */}
                            </div>
                            <div className="txt_field">
                                <input type="text" placeholder="Password" name="password" id='password' autoComplete='off' />
                                <span></span>
                                {/* <label>Password</label> */}
                            </div>
                        </div>
                        <div className="ff" >
                            <button>Create Account</button>
                        </div>  
                        <div className="info">
                            <div className="upper">
                                <p>By clicking “Create account” or “Continuing with Google”, you agree to Creatvise’s <span>Terms of Usage</span> . Read our <span>Privacy Policy.</span></p>
                            </div>
                            <div className="lower">
                                <p>Already have an account?<span>Log in.</span></p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default login;