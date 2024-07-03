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
                    <button className="btn btn-secondary">Sign In</button>
                    <button className="btn btn-primary">Register</button>
                </div>
                <div className="boxes-container">
                    <div className="box">
                        <h2>Chest Day</h2>
                        <p>Description of Chest workouts...</p>
                    </div>
                    <div className="box">
                        <h2>Arms</h2>
                        <p>Description of Arm workouts...</p>
                    </div>
                    <div className="box">
                        <h2>Legs</h2>
                        <p>Description of Legs workouts...</p>
                    </div>
                </div>
            </main>

            <footer className="footer">
            
            <div className="footer-contact">
                    <p>Contact Us: something@fitsaverai.com</p>
                    < p>Phone: +1 234 567 890</p>
                </div>
                <div className="footer-cta">
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
