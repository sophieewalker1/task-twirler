// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages.css';

const Home = () => {
  return (
    <div className="page-container">
      <h1>Welcome to Your App</h1>
      <p>This is the home page of our application. Everyone can access this page.</p>
      <div className="action-buttons">
        <Link to="/login" className="btn btn-primary">Login to Dashboard</Link>
      </div>
    </div>
  );
};

export default Home;