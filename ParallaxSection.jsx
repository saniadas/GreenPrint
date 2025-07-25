// src/components/ParallaxSection.jsx
import React from 'react';
import './ParallaxSection.css';

const ParallaxSection = () => {
  return (
    <section className="parallax-section">
      <div className="leaf leaf1"></div>
      <div className="leaf leaf2"></div>
      <div className="leaf leaf3"></div>
      <div className="parallax-content">
        <h2>🌍 Every choice counts</h2>
        <p>Shop smarter, live greener with GreenPrint.</p>
      </div>
    </section>
  );
};

export default ParallaxSection;
