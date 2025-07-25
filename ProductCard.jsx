import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Carbon Footprint:</strong> {product.carbonFootprint}</p>
      <p><strong>Water Usage:</strong> {product.waterUsage}</p>
      <p><strong>Disposal:</strong> {product.disposalImpact}</p>
      <p><strong>Eco Rating:</strong> {product.ecoRating} / 5</p>
      <p className="description"><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

export default ProductCard;
