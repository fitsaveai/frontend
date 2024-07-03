import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navigation = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/" className="nav-logo">FitSaverAI</Link>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/explore" className="nav-link">Explore</Link>
            </div>
            <div className="nav-right">
                {user ? (
                    <>
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
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