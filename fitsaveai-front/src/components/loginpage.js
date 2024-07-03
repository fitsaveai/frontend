import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('Attempting login...');
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password }, {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' }
            });
            console.log('Raw response:', response);
            setMessage('Login successful: ' + JSON.stringify(response.data));
        } catch (error) {
            console.error('Error object:', error);
            setMessage('Error: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default LoginPage;