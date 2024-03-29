import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginSignup.css';

import user_icon from './Assets/person.png';
import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    const navigate = useNavigate(); // Gunakan useNavigate untuk mendapatkan objek navigasi


    // Fungsi untuk menangani navigasi ke tampilan home
    const goToHome = () => {
        navigate('/home'); // Gunakan navigate untuk navigasi
    };

    return(
        <div className="container">
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:<div className="input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Name" />
                </div>}
                <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder='Email Id'/>
                </div>
                <div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span> click Here</span></div>}
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={goToHome}>Login</div>
            </div>
        </div>
    );
}

export default LoginSignup;
