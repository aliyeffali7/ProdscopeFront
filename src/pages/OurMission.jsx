import React from 'react';
import './OurMission.css';

const OurMission = () => {
  return (
    <section className="our-mission-page-section">
      <div className="our-mission-page-header">
        <p className="page-breadcrumb">Home / Our Mission</p>
        <h1>Our Mission</h1>
        <p className="page-subtitle">
          Learn about what drives us and how we help you discover amazing products.
        </p>
      </div>

      <div className="section-inner our-mission-layout">
        <div className="our-mission-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200"
            alt="Team curating unique products"
            className="our-mission-image"
          />
        </div>
        <div className="our-mission-content">
          <h2>What We Do</h2>
          <p>
            We discover and curate unique, high-quality products from across the web,
            so you can spend less time searching and more time enjoying what you buy.
          </p>
          <p>
            Every item is hand-picked with a focus on originality, usefulness, and
            value. We scan hundreds of sources so you can quickly find standout
            products for yourself, your friends, and your audience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;


