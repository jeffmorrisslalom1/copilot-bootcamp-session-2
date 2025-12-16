import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/today', label: 'Today', icon: '📅' },
    { path: '/upcoming', label: 'Upcoming', icon: '📆' },
    { path: '/all-tasks', label: 'All Tasks', icon: '📝' },
    { path: '/lists', label: 'Lists', icon: '📋' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-header">
        <h1 className="nav-logo">✅ TODO App</h1>
      </div>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.path} className="nav-item">
            <Link
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-footer">
        <Link to="/settings" className="nav-link">
          <span className="nav-icon">⚙️</span>
          <span className="nav-label">Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
