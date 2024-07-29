import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './navigation.css'
import logoStatic from '../assets/logoStatic.png';
import logoAnimated from '../assets/logoAnimated.gif';

const Navigation = () => {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const { user } = useContext(AuthContext);
    console.log(name);
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setTimeout(() => {
            setIsHovered(false);
        }, 2000);
    };

    const logout = () => {
        localStorage.removeItem('token');
    };

    const logoClick = () => {
        if (token) {
            navigate('/dashboard');
        } else {
            navigate('/');
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
            <img
                        src={isHovered ? logoAnimated : logoStatic}
                        alt="FitSaverAI Logo"
                        className="nav-logo-img"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                    {token ? (
                    <>
                    <Link to="/dashboard" className="nav-logo">
                    <span className="fit">Fit</span><span className="saveai">SaveAI</span><span className="dot-org">.org</span>
                    </Link>
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        <Link to="/oasis" className="nav-link">Oasis</Link>
                    </>
                ) : (
                    <>
                    {/* <a href="/" className="nav-link">Home</a> */}
                    <Link to="/" className="nav-logo">
                    <span className="fit">Fit</span><span className="saveai">SaveAI</span><span className="dot-org">.org</span>
                    </Link>
                    </>
                )}
            </div>
            <div className="nav-right">
                {token ? (
                    <>
                        <div className="dropdown">
                            <button className="btn btn-tertiary">{name}</button>
                            <div className="dropdown-content">
                                <Link to='/profile'>Profile</Link>
                                <Link to='/accInfo'>Account Info</Link>
                                <a href="#" className='last' onClick={handleLogout}>Log Out</a>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="btn btn-secondary">Sign In</Link>
                        <Link to="/register" className="btn btn-primary">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navigation;