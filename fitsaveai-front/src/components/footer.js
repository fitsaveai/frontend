import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import './terms.css';
import { useNavigate } from 'react-router-dom';
import Carousel from'./carousel';

const footer = () => {
    const token = localStorage.getItem('token');
    // const navigate = useNavigate();
    // {token && (
    //     navigate('/dashboard')
    // )}

    
    return (
        <div className="home-page">
            <footer className="footer">
                <div className="footer-contact">
                    <p className='footerp'>Contact Us: info@fitsaveai.org</p>
                    <Link to="/terms-of-service" className="btn3 btn-secondary5">Terms Of Serivce</Link>
                    <br></br>
                    <Link to="/privacy-policy" className="btn3 btn-secondary5">Privacy Policy</Link>
                    {/* <p>Phone: +1 234 567 890</p> */}
                </div>
                <div className="footer-cta">
                {token ? (
                    <>
                    </>
                ) : (
                    <>
                    <Link to="/register" className="btn btn-primary">Get Started</Link>
                    </>
                )}
                </div>
            </footer>
        </div>
    );
};

export default footer;
