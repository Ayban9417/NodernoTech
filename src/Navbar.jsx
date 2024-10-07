import React, { useState } from 'react';
import './App.css'; // Ensure this path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
    <div className="logo">
      <img src="Logo2.svg" alt="Noderno Logo" />
    </div>
    <div className="menu-toggle" onClick={toggleMenu}>
      ☰
    </div>
    <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
      <li><a href="/">Home</a></li>
     
      <li><a href="#projects">Projects</a></li>
     
      <li><a href="#contact">Contact Us</a></li>
    </ul>
  </nav>
  );
};

export default Navbar;
