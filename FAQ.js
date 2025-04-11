import React from 'react';
import Navbar from './Navbar';

const FAQ = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Frequently Asked Questions</h2>
        <p><strong>Q:</strong> How do I register?</p>
        <p><strong>A:</strong> Use the register page from the navigation menu.</p>
        <p><strong>Q:</strong> Can I compare properties?</p>
        <p><strong>A:</strong> Yes! Use the Compare section to explore options.</p>
      </div>
    </>
  );
};

export default FAQ;
