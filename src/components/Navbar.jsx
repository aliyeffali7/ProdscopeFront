import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <h1>ProdScoop</h1>
        </NavLink>

        <div className="navbar-links">
          <NavLink
            to="/recommended"
            className="nav-link"
          >
            Recommended Products
          </NavLink>
          <NavLink
            to="/our-mission"
            className="nav-link"
          >
            Our Mission
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

