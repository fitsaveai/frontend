import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; 

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = window.sessionStorage.getItem('token');
        if (token) {
            try {
                console.log(token)
                const decodedToken = jwtDecode(token);
                console.log(decodedToken)
                if (decodedToken.exp * 1000 < Date.now()) {
                    localStorage.removeItem('token');
                    setUser(null);
                } else {
                    setUser(decodedToken);
                }
            } catch (error) {
                console.error('Error decoding token:', error);
                window.sessionStorage.removeItem('token');
                setUser(null);
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            window.sessionStorage.setItem('token', res.data.token);
            setUser(jwtDecode(res.data.token));
            return true;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    };

    const register = async (name, email, password) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
            window.sessionStorage.setItem('token', res.data.token);
            setUser(jwtDecode(res.data.token));
            return true;
        } catch (error) {
            console.error('Registration error:', error);
            return false;
        }
    };

    const logout = () => {
        window.sessionStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, /*logout,*/ loading }}>
            {children}
        </AuthContext.Provider>
    );
};