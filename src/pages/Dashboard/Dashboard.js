// pages/Dashboard.js
import React from 'react';
import '../Pages.css';

const Dashboard = () => {
  return (
    <div className="page-container">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard! This is a protected route that only logged-in users can see.</p>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Users</h3>
          <p className="stat-number">342</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p className="stat-number">$12,543</p>
        </div>
        <div className="stat-card">
          <h3>Engagement</h3>
          <p className="stat-number">87%</p>
        </div>
      </div>
      
      <div className="dashboard-recent">
        <h2>Recent Activity</h2>
        <ul className="activity-list">
          <li>User John signed up - 2 hours ago</li>
          <li>Payment received from Sarah - 5 hours ago</li>
          <li>New comment on project Alpha - Yesterday</li>
          <li>System update completed - 2 days ago</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;