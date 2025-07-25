// src/components/FeaturesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './FeaturesSection.css';

const features = [
  {
    title: 'Transparent Impact Scores',
    description: 'Every product comes with a clear eco-score so you know what you’re buying into.',
    icon: '🌱',
  },
  {
    title: 'Verified Sustainable Sources',
    description: 'We only list products from verified environmentally-conscious companies.',
    icon: '✅',
  },
  {
    title: 'Community-Driven Ratings',
    description: 'Real users, real reviews — sustainability ranked by the people.',
    icon: '👥',
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">✨ Why GreenPrint?</h2>
      <div className="features-grid">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="feature-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
