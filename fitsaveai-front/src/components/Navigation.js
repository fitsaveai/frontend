import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './navigation.css'

const Navigation = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };
    const name = localStorage.getItem('name');
    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/" className="nav-logo">FitSaverAI</Link>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/explore" className="nav-link">Explore</Link>
                {user && <Link to="/dashboard" className="nav-link">Dashboard</Link>}
            </div>
            <div className="nav-right">
                {user ? (
                    <>
                    <div class="dropdown">
                        <button class="btn btn-tertiary">{name}</button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#" className='last'>Link 3</a>
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