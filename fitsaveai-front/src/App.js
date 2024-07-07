import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Navigation from './components/Navigation';
import HomePage from './components/homepage';
import ExplorePage from './components/explorepage';
import Dashboard from './components/dashboard';
import LoginPage from './components/loginpage';
import RegisterPage from './components/registerpage';
import ProfilePage from './components/profile';
import AccountPage from './components/accInfo';
import DetailsPage from './components/details';
//notes: make appinfo protectd
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<SignedProtectedRoute><ExplorePage /></SignedProtectedRoute>} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
          <Route path="/profile" element={
            <ProtectedRoute><ProfilePage /></ProtectedRoute>
            } />
            <Route path="/details" element={
            <ProtectedRoute><DetailsPage /></ProtectedRoute>
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/accInfo" element={<AccountPage />} />
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

const SignedProtectedRoute = ({ children }) => {
  const { user, loading } = React.useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  return !user ? children : <Navigate to="/dashboard" />;
};

export default App;