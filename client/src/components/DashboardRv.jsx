import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardRv.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'Guest';

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/sign-in');
  };

  return (
    <div className="dashboard-page">
      <div className="side-panel">
        <h3>Overview</h3>
        <ul>
          <li onClick={() => navigate('/your-account')}>Your Account</li>
          <li onClick={() => navigate('/all-users')}>All Users</li>
          <li onClick={() => navigate('/add-users')}>Add Users</li>
          <li onClick={() => navigate('/insights')}>Insights</li>
          <li onClick={() => navigate('/settings')}>Settings</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="welcome-message">
          Welcome back, {username}!
        </div>
        
        <div className="dashboard-container">
          <div className="dashboard-tile">
            <h2>Accident Reporting</h2>
            <p>Report and manage accidents.</p>
            <button className="tile-button">Go to Accident Reporting</button>
          </div>
          <div className="dashboard-tile">
            <h2>Complaint Management</h2>
            <p>Manage and track the complaints.</p>
            <button className="tile-button">Go to Complaint Management</button>
          </div>
          <div className="dashboard-tile">
            <h2>Report</h2>
            <p>Generate and view reports for your organization.</p>
            <button className="tile-button">Go to Reports</button>
          </div>
          <div className="dashboard-tile">
            <h2>Principle Changers</h2>
            <p>Manage and track principle changes in your organization.</p>
            <button className="tile-button">Go to Principle Changers</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
