import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import { useNavigate } from 'react-router-dom';
import Carousel from'./carousel';

const HomePage = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    {token && (
        navigate('/dashboard')
    )}

    useEffect(() => {
        const handleScroll = () => {
            const reveals = document.querySelectorAll('.reveal');
            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('active');
                } else {
                    reveals[i].classList.remove('active');
                }
            }
        };

        const setEqualHeight = () => {
            const boxes = document.querySelectorAll('.box');
            let maxHeight = 0;

            boxes.forEach(box => {
                box.style.height = 'auto'; 
                if (box.offsetHeight > maxHeight) {
                    maxHeight = box.offsetHeight;
                }
            });

            boxes.forEach(box => {
                box.style.height = `${maxHeight}px`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', setEqualHeight);
        setEqualHeight();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', setEqualHeight);
        };
    }, []);

    return (
        <div className="home-page">
            <main className="hero">
                <h1>Build Workouts Faster</h1>
                <p>FitSaveAI.org is an AI-powered workout builder for building workouts fast.</p>
                <div className="cta-buttons">
                    <Link to="/login" className="btn btn-secondary">Sign In</Link>
                    <Link to="/register" className="btn btn-primary">Register</Link>
                </div>
                <carousel />
                <div className="boxes-container">
                    <div className="box reveal">
                        <h2>Chest Day</h2>
                        <p>Description of Chest workouts...</p>
                    </div>
                    <div className="box reveal">
                        <h2>Arms</h2>
                        <p>Description of Arm workouts...</p>
                    </div>
                    <div className="box reveal">
                        <h2>Legs</h2>
                        <p>Description of Legs workouts...</p>
                    </div>
                </div>
            </main>
            <section className="additional-content reveal">
                <h2>Why Choose FitSaveAI?</h2>
                <p>Our AI-driven platform tailors workouts to your needs...</p>
            </section>
            <footer className="footer">
                <div className="footer-contact">
                    <p>Contact Us: something@fitsaverai.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>
                <div className="footer-cta">
                    <Link to="/register" className="btn btn-primary">Get Started</Link>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
