// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]); 
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  return (
    <BrowserRouter>
      <div>
        <Header 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/login" 
              element={
                isLoggedIn ? 
                <Navigate to="/dashboard" /> : 
                <Login onLoginSuccess={handleLogin} />
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                isLoggedIn ? 
                <Dashboard /> : 
                <Navigate to="/login" />
              } 
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;