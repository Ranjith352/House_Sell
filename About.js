import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>About Us</h2>
        <p>We are a real estate platform helping users compare rental listings and make informed choices.</p>
      </div>
    </>
  );
};

export default About;
