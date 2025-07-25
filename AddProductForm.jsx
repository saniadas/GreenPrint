import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./AddProductForm.css"; // Import custom CSS

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    carbonFootprint: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.brand || !formData.carbonFootprint) {
      return toast.error("Please fill all fields");
    }

    try {
      await axios.post("http://localhost:5000/api/products", formData);
      toast.success("Product added successfully!");
      setFormData({ name: "", brand: "", carbonFootprint: "" });
    } catch (error) {
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="add-product-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={formData.brand}
          onChange={handleChange}
        />
        <input
          type="number"
          name="carbonFootprint"
          placeholder="Carbon Footprint (kg CO₂)"
          value={formData.carbonFootprint}
          onChange={handleChange}
        />
        <button type="submit">➕ Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
