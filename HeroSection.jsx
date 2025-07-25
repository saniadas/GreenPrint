import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const handleExploreClick = () => {
    const productSection = document.getElementById("product-list");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>GreenPrint</h1>
        <p>Discover the environmental impact of everyday products</p>
        <button className="explore-btn" onClick={handleExploreClick}>
          Explore Products
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
