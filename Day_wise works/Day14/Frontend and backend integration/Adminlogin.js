import React, { useState } from 'react';
import './auth.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLoginForm = () => {
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      // Initial login attempt
      const loginResponse = await axios.post('http://localhost:8080/api/users/login', {
        email: adminUsername,
        password: adminPassword,
      });
      console.log(loginResponse);
      // Cross-check admin credentials using the GET request to /role/ADMIN
      const verifyResponse = await axios.get('http://localhost:8080/api/users/role/ADMIN');
      const isAdmin = verifyResponse.data.some(user => user.email === adminUsername);

      if (isAdmin) {
        console.log('Admin logged in and verified successfully');
        navigate('/dashboard');
      } else {
        console.log('Invalid admin credentials');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Admin Login</h2>
        <form onSubmit={handleAdminLogin}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Admin Username"
              value={adminUsername}
              onChange={(e) => setAdminUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Admin Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
            />
          </div>
          <button className="new_button" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
