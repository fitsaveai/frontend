import React from 'react';
import './homepage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <nav className="navbar">
                <div className="nav-left">
                    <a href="/" className="nav-logo">FitSaverAI</a>
                    <a href="/" className="nav-link">Home</a>
                    <a href="/explore" className="nav-link">Explore</a>
                </div>
                <div className="nav-right">
                    <button className="btn btn-secondary">Sign In</button>
                    <button className="btn btn-primary">Register</button>
                </div>
            </nav>
            <main className="hero">
                <h1>Build Workouts Faster</h1>
                <p>FitSaverAI is an AI-powered workout builder for building workouts fast.</p>
                <div className="cta-buttons">
                    <button className="btn btn-secondary1">Sign In</button>
                    <button className="btn btn-primary1">Register</button>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
