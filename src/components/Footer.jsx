import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-column footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-mark">P</span>
            <span className="footer-logo-text">ProdScoop</span>
          </div>
          <p className="footer-description">
            Curated affiliate products from across the web. We highlight unique,
            useful and fun items so you can discover something new every day.
          </p>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/recommended">Recommended Products</NavLink></li>
            <li><NavLink to="/product-reviews">Product Reviews</NavLink></li>
            <li><NavLink to="/buying-guides">Buying Guides</NavLink></li>
            <li><NavLink to="/comparisons">Comparisons</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/our-mission">Our Mission</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Partners</h4>
          <p>No any partner yet.</p>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-contact">
            <li>info@prodscoop.com</li>
            <li>Remote / Worldwide</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Desinftec. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;

