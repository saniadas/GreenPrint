// src/components/StatsSection.jsx
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './StatsSection.css';

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="stats-section" ref={ref}>
      <h2 className="stats-heading">🌱 Our Positive Impact</h2>
      <div className="stats-grid">
        <div className="stat-box">
          <h3>
            {inView && <CountUp end={25000} duration={2} separator="," />}+
          </h3>
          <p>kg CO₂ Saved</p>
        </div>
        <div className="stat-box">
          <h3>
            {inView && <CountUp end={1200} duration={2} />}+
          </h3>
          <p>Trees Saved</p>
        </div>
        <div className="stat-box">
          <h3>
            {inView && <CountUp end={450} duration={2} />}+
          </h3>
          <p>Products Rated</p>
        </div>
        <div className="stat-box">
          <h3>
            {inView && <CountUp end={95} duration={2} />}%
          </h3>
          <p>Users Recommend</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
