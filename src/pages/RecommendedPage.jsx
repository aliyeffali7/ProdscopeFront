import React from 'react';
import RecommendedProducts from '../components/RecommendedProducts';
import './RecommendedPage.css';

const RecommendedPage = () => {
  return (
    <section className="recommended-page-section">
      <div className="recommended-page-header">
        <p className="page-breadcrumb">Home / Recommended Products</p>
        <h1>Recommended Products</h1>
        <p className="page-subtitle">
          Discover hand-picked products that people love. Curated with care for quality and value.
        </p>
      </div>
      <RecommendedProducts useExampleData />
    </section>
  );
};

export default RecommendedPage;

