import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('Attempting registration...');
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', { name, email, password }, {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' }
            });
            console.log('Raw response:', response);
            setMessage('Registration successful: ' + JSON.stringify(response.data));
        } catch (error) {
            console.error('Error object:', error);
            setMessage('Error: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default RegisterPage;