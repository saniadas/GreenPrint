import React from 'react';
import './ImpactSection.css';

function ImpactSection() {
  return (
    <section id="impact" className="impact-section">
      <div className="impact-content">
        <h2>Our Environmental Impact</h2>
        <p>
          GreenPrint helps consumers understand the hidden environmental cost of everyday products.
          We analyze carbon emissions, water usage, and waste impact to create a complete eco-profile.
        </p>

        <div className="impact-cards">
          <div className="impact-card">
            <h3>Carbon Footprint</h3>
            <p>Track how much CO₂ each product emits during production and usage.</p>
          </div>
          <div className="impact-card">
            <h3>Water Usage</h3>
            <p>Know how many liters of water are consumed from farm to shelf.</p>
          </div>
          <div className="impact-card">
            <h3>Disposal Impact</h3>
            <p>Understand how a product affects the environment when thrown away.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
