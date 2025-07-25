import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const EditProductForm = ({ product, onClose, fetchProducts }) => {
  const [formData, setFormData] = useState({
    name: product.name,
    brand: product.brand,
    carbonFootprint: product.carbonFootprint,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/products/${product._id}`, formData);
      toast.success("✏️ Product updated!");
      fetchProducts();
      onClose();
    } catch (err) {
      toast.error("❌ Failed to update.");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
      />
      <input
        type="number"
        name="carbonFootprint"
        value={formData.carbonFootprint}
        onChange={handleChange}
      />
      <button type="submit">✅ Save</button>
      <button type="button" onClick={onClose}>❌ Cancel</button>
    </form>
  );
};

export default EditProductForm;
