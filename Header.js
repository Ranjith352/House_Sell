// src/components/Header.js
import React from 'react';
import logo from '../assets/logo.png'; // Ensure this path is correct

const Header = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img src={logo} alt="Logo" style={{ width: '120px', height: 'auto' }} />
    </div>
  );
};

export default Header;
