import React from 'react';
import { Link } from 'react-router-dom';
import './ContentPage.css';

const EXAMPLE_POSTS = [
  {
    id: 1,
    title: '5 Ways to Get the Most Out of Your Smart Home Devices',
    date: 'Jan 15, 2025',
    excerpt: 'Tips on automation, privacy, and compatibility. Plus product recommendations we love.',
    image: 'https://images.unsplash.com/photo-1558002038-10559092a2d2?w=600',
  },
  {
    id: 2,
    title: 'Sustainable Shopping: What to Look For in 2025',
    date: 'Jan 8, 2025',
    excerpt: 'How we choose eco-friendly picks and which brands are stepping up. Affiliate links to vetted options.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600',
  },
  {
    id: 3,
    title: 'Best Gifts for Remote Workers Under $100',
    date: 'Dec 20, 2024',
    excerpt: 'Desk setup, comfort, and productivity. Our curated list with buying links.',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600',
  },
];

const BlogPage = () => (
  <div className="content-page">
    <header className="content-page-header">
      <p className="content-page-breadcrumb">Home / Blog</p>
      <h1>Blog</h1>
      <p className="content-page-subtitle">
        Tips, guides, and product picks. Structured articles with affiliate links where it makes sense.
      </p>
    </header>
    <div className="content-page-grid">
      {EXAMPLE_POSTS.map((item) => (
        <article key={item.id} className="content-card">
          <div className="content-card-image-wrap">
            <img src={item.image} alt="" className="content-card-image" />
          </div>
          <div className="content-card-body">
            <span className="content-card-meta">{item.date}</span>
            <h2 className="content-card-title">{item.title}</h2>
            <p className="content-card-excerpt">{item.excerpt}</p>
            <Link to={`/blog/${item.id}`} className="content-card-cta">
              Read more →
            </Link>
          </div>
        </article>
      ))}
    </div>
  </div>
);

export default BlogPage;
