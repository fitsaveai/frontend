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