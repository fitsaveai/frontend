import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from '../context/AuthContext';
import { logout } from '../context/AuthContext';

const Navigation = () => {
    const token = window.sessionStorage.getItem('token')
    console.log(token)
    const {user} = useContext(AuthContext); // Call useContext here
    const navigate = useNavigate();
    // console.log(user)
    // const AuthProvider = useContext(AuthProvider)
    const logout = useContext(AuthProvider)
    console.log(logout)
    
    // const handleLogout = () => {
    //     logout();
    //     navigate('/');
    // };

    const handleLogout= () => {
        logout();
        navigate('/');
    }
    

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/" className="nav-logo">FitSaverAI</Link>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/explore" className="nav-link">Explore</Link>
            </div>
            <div className="nav-right">
                {token ? (
                    
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