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
            <span className="footer-logo-text">ProdScope</span>
          </div>
          <p className="footer-description">
            Curated affiliate products from across the web. We highlight unique,
            useful and fun items so you can discover something new every day.
          </p>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/recommended">Recommended Products</NavLink>
            </li>
            <li>
              <NavLink to="/our-mission">Our Mission</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Partners</h4>
          <ul className="footer-links">
            <li>Amazon Associates</li>
            <li>Other affiliate networks</li>
            <li>Brand collaborations</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-contact">
            <li>+1 (000) 000 0000</li>
            <li>hello@prodscope.com</li>
            <li>Remote / Worldwide</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ProdScope. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;

