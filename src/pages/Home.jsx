import React from 'react';
import Hero from '../components/Hero';
import RecommendedProducts from '../components/RecommendedProducts';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const featuredProducts = products.filter(p => p.recommended).slice(0, 6);

  return (
    <div className="home-page">
      <Hero />
      
      <section className="featured-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Hand-picked favorites that our community loves</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
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
