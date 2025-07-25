import React from "react";
import "./DashboardStats.css";

const DashboardStats = () => {
  // Dummy data (you can replace with real backend values later)
  const totalProducts = 12;
  const totalCO2Saved = 368; // in kg
  const avgImpact = (totalCO2Saved / totalProducts).toFixed(1);

  return (
    <section className="dashboard-stats-section">
      <h2 className="dashboard-heading">📊 Dashboard Summary</h2>
      <div className="stats-cards">
        <div className="stat-card">
          <h3>{totalProducts}</h3>
          <p>Total Products</p>
        </div>
        <div className="stat-card">
          <h3>{totalCO2Saved} kg</h3>
          <p>Total CO₂ Saved</p>
        </div>
        <div className="stat-card">
          <h3>{avgImpact} kg</h3>
          <p>Avg. Impact/Product</p>
        </div>
      </div>
    </section>
  );
};

export default DashboardStats;
