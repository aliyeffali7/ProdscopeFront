import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './HomeRecommended.css';

const EXAMPLE_PRODUCTS = [
  {
    id: 1,
    name: 'Sony WH-1000XM5 Headphones',
    image1: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
    short_description: 'Industry-leading noise cancellation and 30-hour battery. Best for travelers and commuters.',
    category_name: 'Audio',
    sponsored: true,
  },
  {
    id: 2,
    name: 'Dyson V15 Detect Cordless Vacuum',
    image1: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600',
    short_description: 'Laser dust detection and strong suction. Ideal for pet owners and large homes.',
    category_name: 'Home',
    sponsored: true,
  },
  {
    id: 3,
    name: 'Kindle Paperwhite (2024)',
    image1: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600',
    short_description: 'Crisp 6.8" display, waterproof, weeks of battery. Perfect for readers.',
    category_name: 'Tech',
    sponsored: true,
  },
  {
    id: 4,
    name: 'Apple AirPods Pro 2',
    image1: 'https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=600',
    short_description: 'Best-in-class transparency mode and ANC. Seamless with iPhone.',
    category_name: 'Audio',
    sponsored: false,
  },
  {
    id: 5,
    name: 'Roborock S8 Pro Ultra',
    image1: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600',
    short_description: 'Robot vacuum with mop and auto-empty dock. Set it and forget it.',
    category_name: 'Home',
    sponsored: false,
  },
  {
    id: 6,
    name: 'Logitech MX Master 3S',
    image1: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600',
    short_description: 'Comfortable productivity mouse with fast scrolling and multiple devices.',
    category_name: 'Tech',
    sponsored: false,
  },
];

const HomeRecommended = () => {
  return (
    <section className="home-recommended">
      <div className="home-recommended-inner">
        <div className="home-recommended-intro">
          <p className="home-recommended-lead">
            Our editors and community vote on the products that deliver the best value and experience. 
            Here are some favorites—explore the full list for more picks and filters.
          </p>
          <Link to="/recommended" className="home-recommended-cta">
            View all recommendations →
          </Link>
        </div>
        <div className="home-recommended-grid">
          {EXAMPLE_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeRecommended;
