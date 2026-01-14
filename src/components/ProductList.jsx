import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ products, selectedCategory }) => {
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  if (filteredProducts.length === 0) {
    return (
      <div className="no-products">
        <p>No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

