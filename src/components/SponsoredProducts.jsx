import React, { useState, useEffect } from 'react';
import { useProducts, useCategories, useSubcategories } from '../hooks/useProducts';
import ProductCard from './ProductCard';
import './SponsoredProducts.css';

const SponsoredProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  
  const { categories, loading: categoriesLoading } = useCategories();
  const { subcategories, loading: subcategoriesLoading } = useSubcategories(
    selectedCategory !== 'all' ? selectedCategory : null
  );

  const filters = {
    category: selectedCategory !== 'all' ? selectedCategory : undefined,
    subcategory: selectedSubcategory !== 'all' ? selectedSubcategory : undefined,
  };

  const { products, loading: productsLoading } = useProducts(filters);
  
  // Filter for sponsored products only
  const sponsoredProducts = products.filter(p => p.sponsored);

  return (
    <section id="sponsored-products" className="sponsored-section">
      <div className="sponsored-container">
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
                setSelectedSubcategory('all');
              }}
              className="filter-select"
              disabled={categoriesLoading}
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
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
              disabled={subcategoriesLoading || selectedCategory === 'all' || subcategories.length === 0}
              className="filter-select"
            >
              <option value="all">All Subcategories</option>
              {subcategories.map((sub) => (
                <option key={sub.id} value={sub.id}>
                  {sub.name}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-results">
            <span className="results-count">
              {productsLoading ? 'Loading...' : `${sponsoredProducts.length} ${sponsoredProducts.length === 1 ? 'product' : 'products'}`}
            </span>
          </div>
        </aside>

        <div className="sponsored-content">
          <div className="sponsored-grid">
            {productsLoading ? (
              <div className="sponsored-empty">
                <p>Loading products...</p>
              </div>
            ) : sponsoredProducts.length === 0 ? (
              <div className="sponsored-empty">
                <p>No sponsored products match these filters yet.</p>
              </div>
            ) : (
              sponsoredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsoredProducts;
