import React, { useState, useMemo } from 'react';
import { useProducts, useCategories, useSubcategories } from '../hooks/useProducts';
import ProductCard from './ProductCard';
import './RecommendedProducts.css';

const EXAMPLE_CATEGORIES = [
  { id: 'audio', name: 'Audio' },
  { id: 'home', name: 'Home' },
  { id: 'tech', name: 'Tech' },
];

const EXAMPLE_PRODUCTS = [
  { id: 1, name: 'Sony WH-1000XM5 Headphones', image1: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600', short_description: 'Industry-leading noise cancellation and 30-hour battery. Best for travelers and commuters.', category_name: 'Audio', category: 'audio', sponsored: true },
  { id: 2, name: 'Dyson V15 Detect Cordless Vacuum', image1: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600', short_description: 'Laser dust detection and strong suction. Ideal for pet owners and large homes.', category_name: 'Home', category: 'home', sponsored: true },
  { id: 3, name: 'Kindle Paperwhite (2024)', image1: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600', short_description: 'Crisp 6.8" display, waterproof, weeks of battery. Perfect for readers.', category_name: 'Tech', category: 'tech', sponsored: true },
  { id: 4, name: 'Apple AirPods Pro 2', image1: 'https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=600', short_description: 'Best-in-class transparency mode and ANC. Seamless with iPhone.', category_name: 'Audio', category: 'audio', sponsored: false },
  { id: 5, name: 'Roborock S8 Pro Ultra', image1: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600', short_description: 'Robot vacuum with mop and auto-empty dock. Set it and forget it.', category_name: 'Home', category: 'home', sponsored: false },
  { id: 6, name: 'Logitech MX Master 3S', image1: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600', short_description: 'Comfortable productivity mouse with fast scrolling and multiple devices.', category_name: 'Tech', category: 'tech', sponsored: false },
];

const RecommendedProducts = ({ useExampleData = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');

  const apiCategories = useCategories();
  const apiSubcategories = useSubcategories(selectedCategory !== 'all' ? selectedCategory : null);
  const apiProducts = useProducts({
    category: selectedCategory !== 'all' ? selectedCategory : undefined,
    subcategory: selectedSubcategory !== 'all' ? selectedSubcategory : undefined,
  });

  const categories = useExampleData ? EXAMPLE_CATEGORIES : (Array.isArray(apiCategories.categories) ? apiCategories.categories : []);
  const subcategories = useExampleData ? [] : (Array.isArray(apiSubcategories.subcategories) ? apiSubcategories.subcategories : []);
  const categoriesLoading = useExampleData ? false : apiCategories.loading;
  const subcategoriesLoading = useExampleData ? false : apiSubcategories.loading;
  const productsLoading = useExampleData ? false : apiProducts.loading;

  const products = useMemo(() => {
    if (useExampleData) {
      if (selectedCategory === 'all') return EXAMPLE_PRODUCTS;
      return EXAMPLE_PRODUCTS.filter((p) => p.category === selectedCategory);
    }
    return Array.isArray(apiProducts.products) ? apiProducts.products : [];
  }, [useExampleData, selectedCategory, apiProducts.products]);

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
                setSelectedSubcategory('all');
              }}
              className="filter-select"
              disabled={categoriesLoading}
            >
              <option value="all">All Categories</option>
              {(categories || []).map((category) => (
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
              disabled={subcategoriesLoading || selectedCategory === 'all' || !subcategories || subcategories.length === 0}
              className="filter-select"
            >
              <option value="all">All Subcategories</option>
              {(subcategories || []).map((sub) => (
                <option key={sub.id} value={sub.id}>
                  {sub.name}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-results">
            <span className="results-count">
              {productsLoading ? 'Loading...' : `${products.length} ${products.length === 1 ? 'product' : 'products'}`}
            </span>
          </div>
        </aside>

        <div className="recommended-content">
          <header className="recommended-header">
            <h2>Recommended Products</h2>
            <p>Curated picks based on what people love the most.</p>
          </header>

          <div className="recommended-grid">
            {productsLoading ? (
              <div className="recommended-empty">
                <p>Loading products...</p>
              </div>
            ) : !products || products.length === 0 ? (
              <div className="recommended-empty">
                <p>No products match these filters yet.</p>
              </div>
            ) : (
              products.map((product) => (
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

