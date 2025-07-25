import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">GreenPrint</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#impact">Impact</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
