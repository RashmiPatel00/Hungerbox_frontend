// components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
            emailId: emailId,
            password: password
        };

        try {
            const response = await fetch('http://localhost:8081/hungerBox/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            const data = await response.json();
            setMessage(data.message);

            if (data.status) {
                navigate('/home');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Login failed');
        }
    };

    return (
        <div className="login_page">
            <div className="form form-container">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input_box">
                        <input
                            type="email"
                            placeholder="Email Id"
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input_box">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="forgot_password">
                        <a href="#">Forgot password?</a>
                    </div>
                    <div className='button'>
                        <button type="submit">Login</button>

                    </div>

                    {message && <p className="message">{message}</p>}
                    <div className="register">
                        <p>
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
