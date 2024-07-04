import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Navigation from './components/Navigation';
import HomePage from './components/homepage';
import ExplorePage from './components/explorepage';
import Dashboard from './components/dashboard';
import LoginPage from './components/loginpage';
import RegisterPage from './components/registerpage';
import PromptPage from './components/prompt';

//Chat Gpt
import './App.css';

function App() {


  //normal
  const token = sessionStorage.getItem('token')
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/prompt" element={<PromptPage />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute> 
            } />
            {token === null ? (
              <>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </>
            ) : (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
              </>
            )}

          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

const ProtectedRoute = ({ children }) => {
  const { user, loading } = React.useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  return user ? children : <Navigate to="/login" />;
};

export default App;
