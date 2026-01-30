import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct, trackProductView, trackLinkView, getImageUrl } from '../services/api';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getProduct(id);
        setProduct(data);
        
        // Track product view
        try {
          await trackProductView(id);
        } catch (trackError) {
          console.error('Error tracking view:', trackError);
          // Don't fail the page if tracking fails
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="product-detail-page">
        <div className="product-loading">
          <p>Loading product...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="product-detail-page">
        <div className="product-not-found">
          <h2>{error || 'Product not found'}</h2>
          <button onClick={() => navigate('/')}>Go back to home</button>
        </div>
      </div>
    );
  }

  const handleGoToProduct = async () => {
    try {
      await trackLinkView(id);
    } catch (err) {
      console.warn('track_link_view failed:', err.message);
    }
    if (product.product_link) {
      window.open(product.product_link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        {/* Product Overview Section */}
        <section className="product-overview">
          <div className="product-media">
            <img 
              src={getImageUrl(product.image1)} 
              alt={product.name}
              className="product-main-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x600?text=Product+Image';
              }}
            />
          </div>
          <div className="product-info-section">
            <div className="product-name-badge">
              <h1 className="product-name">{product.name}</h1>
            </div>
            <div className="product-short-description">
              <p>{product.short_description}</p>
            </div>
            <div className="product-meta">
              {product.category_name && (
                <span className="product-category-badge">{product.category_name}</span>
              )}
              {product.subcategory_name && (
                <span className="product-subcategory-badge">{product.subcategory_name}</span>
              )}
            </div>
            <button className="go-to-product-button" onClick={handleGoToProduct}>
              Go to the product
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="button-arrow">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </section>

        {/* Product Detailed Description Section */}
        <section className="product-description-section">
          <h2>Product Details</h2>
          <div className="product-detailed-description">
            {product.long_description ? (
              <p>{product.long_description}</p>
            ) : (
              <>
                <p>
                  {product.short_description || `Discover ${product.name}, a premium product designed to meet your needs.`}
                </p>
                <p>
                  Our team has thoroughly reviewed this product to ensure it meets our high standards for quality, functionality, and user satisfaction. We only recommend products that we believe will provide genuine value to our community.
                </p>
                <p>
                  When you click "Go to the product", you'll be taken to the official product page where you can learn more, read customer reviews, and make your purchase. We may earn a commission from qualifying purchases, which helps us continue to bring you great product recommendations.
                </p>
              </>
            )}
          </div>
        </section>

        {/* Additional Product Photo Section */}
        {product.image2 && (
          <section className="product-additional-photo">
            <img 
              src={getImageUrl(product.image2)} 
              alt={`${product.name} - Additional view`}
              className="product-second-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/1200x600?text=Product+Image';
              }}
            />
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
