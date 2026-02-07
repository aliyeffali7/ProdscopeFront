import React from 'react';
import { Link } from 'react-router-dom';
import './ContentPage.css';

const EXAMPLE_REVIEWS = [
  {
    id: 1,
    title: 'Sony WH-1000XM5 Headphones Review: Best Noise Cancellation in 2025?',
    product: 'Sony WH-1000XM5',
    rating: 4.8,
    excerpt: 'In-depth look at battery life, comfort, and sound quality. Who they’re best for and whether they’re worth the price.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
  },
  {
    id: 2,
    title: 'Dyson V15 Detect Cordless Vacuum: Real-World Testing',
    product: 'Dyson V15 Detect',
    rating: 4.6,
    excerpt: 'Pros, cons, and key specs. Ideal for pet owners and large homes. See our verdict and where to buy.',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600',
  },
  {
    id: 3,
    title: 'Kindle Paperwhite (2024) Review: Still the Best E-Reader?',
    product: 'Kindle Paperwhite',
    rating: 4.7,
    excerpt: 'Display, battery, and reading experience. Perfect for commuters and night readers. Full breakdown inside.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600',
  },
];

const ProductReviewsPage = () => (
  <div className="content-page">
    <header className="content-page-header">
      <p className="content-page-breadcrumb">Home / Product Reviews</p>
      <h1>Product Reviews</h1>
      <p className="content-page-subtitle">
        Honest, detailed reviews with pros & cons, specs, and who each product is best for.
      </p>
    </header>
    <div className="content-page-grid">
      {EXAMPLE_REVIEWS.map((item) => (
        <article key={item.id} className="content-card">
          <div className="content-card-image-wrap">
            <img src={item.image} alt="" className="content-card-image" />
          </div>
          <div className="content-card-body">
            <span className="content-card-meta">
              {item.product} · ★ {item.rating}
            </span>
            <h2 className="content-card-title">{item.title}</h2>
            <p className="content-card-excerpt">{item.excerpt}</p>
            <Link to={`/product-reviews/${item.id}`} className="content-card-cta">
              Read full review →
            </Link>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default ProductReviewsPage;
