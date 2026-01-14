import React, { useMemo, useState } from 'react';
import { categories, subcategoriesByCategory, products } from '../data/products';
import ProductCard from './ProductCard';
import './RecommendedProducts.css';

const RecommendedProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');

  const availableSubcategories = useMemo(() => {
    if (selectedCategory === 'All') return ['All'];
    return ['All', ...(subcategoriesByCategory[selectedCategory] || [])];
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (!product.recommended) return false;
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      if (
        selectedSubcategory !== 'All' &&
        product.subcategory !== selectedSubcategory
      ) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, selectedSubcategory]);

  return (
    <section id="recommended-products" className="recommended-section">
      <div className="recommended-container">
        <aside className="filter-sidebar">
          <div className="sidebar-header">
            <h3>Filters</h3>
          </div>
          
          <div className="filter-group">
            <label htmlFor="category-filter">Category</label>
            <select
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedSubcategory('All');
              }}
              className="filter-select"
            >
              <option value="All">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="subcategory-filter">Subcategory</label>
            <select
              id="subcategory-filter"
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              disabled={availableSubcategories.length <= 1}
              className="filter-select"
            >
              {availableSubcategories.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-results">
            <span className="results-count">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </span>
          </div>
        </aside>

        <div className="recommended-content">
          <header className="recommended-header">
            <h2>Recommended Products</h2>
            <p>Curated picks based on what people love the most.</p>
          </header>

          <div className="recommended-grid">
            {filteredProducts.length === 0 ? (
              <div className="recommended-empty">
                <p>No recommended products match these filters yet.</p>
              </div>
            ) : (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;

