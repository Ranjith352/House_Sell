import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" style={{ padding: '10px', width: '250px' }} /><br /><br />
          <input type="email" placeholder="Your Email" style={{ padding: '10px', width: '250px' }} /><br /><br />
          <textarea placeholder="Your Message" rows="4" style={{ padding: '10px', width: '250px' }} /><br /><br />
          <button style={{ padding: '10px 20px', fontSize: '16px' }}>Send</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
