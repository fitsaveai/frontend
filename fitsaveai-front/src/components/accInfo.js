import React from 'react';
import './accInfo.css';
import { useContext, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ExplorePage = () => {
    const [type, setEmail] = useState('');
    const [newName, setNewName] = useState('');
    const tokenCopy = document.getElementById('token');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    
    
    return (
        <div className="profile-page">
            <main className="profile-content">
                <h1>Account Info</h1>
                <div className="workout-grid">
                    <div key='1' className="workout-card">
                        <h2>Name:{name}</h2>
                        <input type='text'                    
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)} id='NameChange'/>
                        <button className="btn btn-primary">Change Name</button>
                    </div>
                    <div key='2' className="workout-card">
                            <h2>Email: {email}</h2>
                            <input type='text' id='EmailChange'/>
                            <button className="btn btn-primary" type="submit" onClick={() =>console.log("Hi")}>Change Email</button>
                    </div>
                </div>
                <div className="workout-grid">
                <div key='3' className="workout-card1">
                            <h2>Token</h2> 
                            <input type='text' value={token} id='token' maxLength='4000'/>
                            <button className="btn btn-primary" onClick={() => {navigator.clipboard.writeText(tokenCopy.value)}}>Copy Token</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ExplorePage;