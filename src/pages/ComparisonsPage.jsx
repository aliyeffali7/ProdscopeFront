import React from 'react';
import { Link } from 'react-router-dom';
import './ContentPage.css';

const EXAMPLE_COMPARISONS = [
  {
    id: 1,
    title: 'iPhone 15 vs Samsung Galaxy S24',
    productA: 'iPhone 15',
    productB: 'Samsung Galaxy S24',
    excerpt: 'Specs side-by-side, key differences, and which one wins by price, camera, and battery. Final recommendation inside.',
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600',
  },
  {
    id: 2,
    title: 'MacBook Air M3 vs Dell XPS 13',
    productA: 'MacBook Air M3',
    productB: 'Dell XPS 13',
    excerpt: 'Comparison table, pros and cons, and who each is best for. Verdict and affiliate CTAs.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
  },
  {
    id: 3,
    title: 'Nespresso Vertuo vs Keurig K-Classic',
    productA: 'Nespresso Vertuo',
    productB: 'Keurig K-Classic',
    excerpt: 'Brew style, cost per cup, and taste. Winner by criteria and our pick for most buyers.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600',
  },
];

const ComparisonsPage = () => (
  <div className="content-page">
    <header className="content-page-header">
      <p className="content-page-breadcrumb">Home / Comparisons</p>
      <h1>Comparisons</h1>
      <p className="content-page-subtitle">
        Side-by-side product comparisons: specs, key differences, and who each option is best for.
      </p>
    </header>
    <div className="content-page-grid content-page-grid-comparisons">
      {EXAMPLE_COMPARISONS.map((item) => (
        <article key={item.id} className="content-card comparison-card">
          <div className="content-card-image-wrap">
            <img src={item.image} alt="" className="content-card-image" />
          </div>
          <div className="content-card-body">
            <span className="comparison-vs">VS</span>
            <h2 className="content-card-title">{item.title}</h2>
            <p className="content-card-excerpt">{item.excerpt}</p>
            <Link to={`/comparisons/${item.id}`} className="content-card-cta">
              Compare in detail →
            </Link>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default ComparisonsPage;
