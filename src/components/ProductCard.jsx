import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const handleClick = () => {
    window.open(product.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="product-image-container">
        {product.recommended && (
          <div className="product-badge">Recommended</div>
        )}
        <img 
          src={product.image} 
          alt={product.title}
          className="product-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=Product+Image';
          }}
        />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">{product.price}</span>
          <span className="product-category">{product.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
