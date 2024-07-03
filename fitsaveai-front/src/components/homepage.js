import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <main className="hero">
                <h1>Build Workouts Faster</h1>
                <p>FitSaverAI is an AI-powered workout builder for building workouts fast.</p>
                <div className="cta-buttons">
                    <Link to="/login" className="btn btn-secondary">Sign In</Link>
                    <Link to="/register" className="btn btn-primary">Register</Link>
                </div>
            </main>
        </div>
    );
};

export default HomePage;