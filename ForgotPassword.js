import React from 'react';
import Navbar from './Navbar';

const ForgotPassword = () => {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2>Forgot Password</h2>
        <input type="email" placeholder="Enter your email" style={{ padding: '10px', width: '250px' }} /><br /><br />
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Send Reset Link</button>
      </div>
    </>
  );
};

export default ForgotPassword;
