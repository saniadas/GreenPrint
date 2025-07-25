import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p><strong>Impact:</strong> {product.impact}</p>
        <p><strong>Eco Rating:</strong> {product.rating}</p>
        <p><strong>Description:</strong> This product is an eco-conscious choice designed to reduce environmental damage and promote sustainability.</p>
      </div>
    </div>
  );
};

export default ProductModal;
