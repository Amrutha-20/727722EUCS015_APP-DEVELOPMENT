import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleUserLogin = () => {
    navigate('/login');
  };

  const handleAdminLogin = () => {
    navigate('/admin-login');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
  };

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setUsername(user);
  };

  return (
    <nav className="navbar">
      <div className="websitename">PARTYDELIGHT</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/themes">Themes</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isAuthenticated ? username : '🙍🏻‍♂️ Login'}
          {isHovered && (
            <div className="dropdown-menu">
              {!isAuthenticated ? (
                <>
                  <div onClick={handleUserLogin}>User Login</div>
                  <div onClick={handleAdminLogin}>Admin Login</div>
                </>
              ) : (
                <div onClick={handleLogout}>Logout</div>
              )}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
