    import axios from 'axios';
    import './registerpage.css';
    import React, { useState, useContext } from 'react';
    import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
    import { AuthContext } from '../context/AuthContext';
    import { Link } from 'react-router-dom';


    const RegisterPage = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [message, setMessage] = useState('');
        const token = localStorage.getItem('token');
        // const navigate = useNavigate();
        // {token && (
        //     navigate('/dashboard')
        // )}

        const handleSubmit = async (e) => {
            e.preventDefault();

            if (password !== confirmPassword) {
                setMessage('Error: Passwords do not match');
                return;
            }

            setMessage('Attempting registration...');
            try {
                const response = await axios.post('http://localhost:5000/api/auth/register',
                    { name, email, password },
                    {
                        withCredentials: true,
                        headers: { 'Content-Type': 'application/json' }
                    }
                );
                console.log('Raw response:', response);
                setMessage('Registration successful: ' + JSON.stringify(response.data));
            } catch (error) {
                console.error('Error object:', error);
                setMessage('Error: ' + (error.response?.data?.message || error.message));
            }
        };

        return (
            <div className="register-page">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        required
                    />
                    <button type="submit">Register</button>
                </form>
                <p>{message}</p>
                <p className="login-text">Already have an account? <Link to="/login" className="login-link">Login here</Link></p>

            </div>
        );
    };

    export default RegisterPage;