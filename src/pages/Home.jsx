import React from 'react';
import Hero from '../components/Hero';
import HeroAdBanner from '../components/HeroAdBanner';
import HomeRecommended from '../components/HomeRecommended';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero useExampleData />
      <HeroAdBanner useExampleData />

      <section className="recommended-section-home">
        <div className="section-container">
          <div className="section-header">
            <h2>Recommended Products</h2>
            <p>Curated picks based on quality and value. Hand-picked favorites our community loves.</p>
          </div>
          <HomeRecommended />
        </div>
      </section>
    </div>
  );
};

export default Home;
