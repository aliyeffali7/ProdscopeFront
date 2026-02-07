import React from 'react';
import { Link } from 'react-router-dom';
import './ContentPage.css';

const EXAMPLE_GUIDES = [
  {
    id: 1,
    title: 'How to Choose the Right Wireless Earbuds in 2025',
    category: 'Audio',
    excerpt: 'What to look for: battery life, fit, codecs, and ANC. Our selection criteria and top picks with affiliate links.',
    image: 'https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=600',
  },
  {
    id: 2,
    title: 'Buying Guide: Best Standing Desks for Home Office',
    category: 'Office',
    excerpt: 'Height range, stability, and cable management. Structured by budget and desk size. Recommended products inside.',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600',
  },
  {
    id: 3,
    title: 'What to Consider When Buying a Robot Vacuum',
    category: 'Home',
    excerpt: 'Mapping, mopping, and pet hair. Key decision points and our curated list with affiliate options.',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600',
  },
];

const BuyingGuidesPage = () => (
  <div className="content-page">
    <header className="content-page-header">
      <p className="content-page-breadcrumb">Home / Buying Guides</p>
      <h1>Buying Guides</h1>
      <p className="content-page-subtitle">
        Step-by-step guides to help you choose: what to look for, selection criteria, and recommended products.
      </p>
    </header>
    <div className="content-page-grid">
      {EXAMPLE_GUIDES.map((item) => (
        <article key={item.id} className="content-card">
          <div className="content-card-image-wrap">
            <img src={item.image} alt="" className="content-card-image" />
          </div>
          <div className="content-card-body">
            <span className="content-card-meta">{item.category}</span>
            <h2 className="content-card-title">{item.title}</h2>
            <p className="content-card-excerpt">{item.excerpt}</p>
            <Link to={`/buying-guides/${item.id}`} className="content-card-cta">
              Read guide →
            </Link>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default BuyingGuidesPage;
