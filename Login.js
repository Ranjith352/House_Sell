// src/components/Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration successful!');
    navigate('/compare');
  };

  return (
    <>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required style={{ padding: '10px', width: '250px' }} /><br /><br />
          <input type="email" placeholder="Email" required style={{ padding: '10px', width: '250px' }} /><br /><br />
          <input type="tel" placeholder="Phone Number" required style={{ padding: '10px', width: '250px' }} /><br /><br />
          <input type="password" placeholder="Password" required style={{ padding: '10px', width: '250px' }} /><br /><br />
          <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>Register</button>
        </form>
      </div>
    </>
  );
};

export default Login;
