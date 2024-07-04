import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from '../context/AuthContext';
import { logout } from '../context/AuthContext';
import './navigation.css';

const Navigation = () => {
    const token = window.sessionStorage.getItem('token')
    const {user} = useContext(AuthContext); // Call useContext here
    console.log(user)
    const navigate = useNavigate();
    
    const logout = () => {
        window.sessionStorage.removeItem('token');
        // setUser(null);
    };
    const handleLogout= () => {
        logout();
        navigate('/');
    }
    
    const UserName = sessionStorage.getItem('User');
    return (
        <nav className="navbar">
            <div className="nav-left">
            <img src={require('../img/logoFitnessSaveAi.png')} alt='logo'className="nav-logo-img"/>
                    <a href="/" className="nav-logo">FitSaverAI</a>
                    <a href="/" className="nav-link">Home</a>
                    {token ? (
                    <>
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    </>
                ) : (
                    <>
                        <a href="/explore" className="nav-link">Explore</a>
                    </>
                )}
            </div>
            <div className="nav-right">
                {token ? (
                    
                    <>
                    <div class="dropdown">
                        <button class="btn btn-secondary">{UserName}</button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                        {/* <button onClick={handleLogout} className="btn btn-secondary">Logout</button> */}
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