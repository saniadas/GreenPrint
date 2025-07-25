// src/components/CTASection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './CTASection.css';

const CTASection = () => {
  return (
    <motion.section
      className="cta-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="cta-title">Be the Change. 🌍</h2>
      <p className="cta-subtext">Discover how your daily choices impact the planet.</p>
      <button className="cta-button">Explore Products</button>
    </motion.section>
  );
};

export default CTASection;
