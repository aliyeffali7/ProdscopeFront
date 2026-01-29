import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '../services/api';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="product-image-container">
        {product.sponsored && (
          <div className="product-badge">Recommended</div>
        )}
        <img 
          src={getImageUrl(product.image1)} 
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=Product+Image';
          }}
        />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.short_description || ''}</p>
        <div className="product-footer">
          {product.category_name && (
            <span className="product-category">{product.category_name}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
