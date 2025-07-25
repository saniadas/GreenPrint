import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Carbon Footprint:</strong> {product.carbonFootprint}</p>
      <p><strong>Water Usage:</strong> {product.waterUsage}</p>
      <p><strong>Waste Generated:</strong> {product.wasteGenerated}</p>
      <p><strong>Energy Consumption:</strong> {product.energyConsumption}</p>
      <p><strong>Eco Alternatives:</strong> {product.ecoAlternatives}</p>
    </div>
  );
}

export default ProductDetails;
