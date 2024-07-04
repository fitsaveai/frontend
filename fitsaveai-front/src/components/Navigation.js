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
            <img src={require('../img/logoFitnessSaveAi.png')} alt='logo'className="nav-logo-img"/>
                    <a href="/" className="nav-logo">FitSaverAI</a>
                    <a href="/" className="nav-link">Home</a>
                    <a href="/explore" className="nav-link">Explore</a>
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