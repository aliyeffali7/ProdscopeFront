import React from 'react';
import Hero from '../components/Hero';
import RecommendedProducts from '../components/RecommendedProducts';
import SponsoredProducts from '../components/SponsoredProducts';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      
      <section className="sponsored-section-home">
        <div className="section-container">
          <div className="section-header">
            <h2>Sponsored Products</h2>
            <p>Hand-picked favorites that our community loves</p>
          </div>
          <SponsoredProducts />
        </div>
      </section>

      <section className="recommended-section-home">
        <div className="section-container">
          <div className="section-header">
            <h2>Recommended for You</h2>
            <p>Curated selections based on quality and value</p>
          </div>
          <RecommendedProducts />
        </div>
      </section>
    </div>
  );
};

export default Home;
