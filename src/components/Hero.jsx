import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="top" className="hero-section">
      <div className="hero-inner">
        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600"
            alt="Discover unique products curated for you"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h1 className="hero-title">Discover Amazing Products</h1>
            <p className="hero-subtitle">
              Hand-picked products that combine quality, value, and innovation. 
              Find your next favorite thing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
