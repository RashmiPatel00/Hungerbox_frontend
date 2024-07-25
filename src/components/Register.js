// components/Register.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add('blur-background');
        return () => {
            document.body.classList.remove('blur-background');
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            employeeName: userName,
            emailId: email,
            password: password,
            role: type
        };

        try {
            const response = await fetch('http://localhost:8081/hungerBox/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();
            setMessage(data.message);

            if (data.status) {
                setIsSuccess(true);
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Registration failed');
            setIsSuccess(false);
        }
    };

    return (
        <div className="register_page">
            <div className="form-container">
                <h3>Register Here</h3>
                {message && (
                    <p className="message" style={{ color: isSuccess ? 'green' : 'red' }}>{message}</p>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="inputGroup">
                        <label htmlFor="userName"></label>
                        <input
                            type="text"
                            placeholder="User Name"
                            id="userName"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <label htmlFor="email"></label>
                        <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password"></label>
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="UserRole"></label>
                        <select id="UserRole" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="">Select Role</option>
                            <option value="employee">Employee</option>
                            <option value="vendor">Vendor</option>
                        </select>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
