// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="nav-links">
        <Link to="/login">Register</Link>
        <Link to="/forgot">Forgot Password</Link>
        <Link to="/about">About</Link>
        <Link to="/compare">Compare</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </nav>
  );
};

export default Navbar;
