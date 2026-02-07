import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct, trackProductView, trackLinkView, getImageUrl } from '../services/api';
import './ProductDetail.css';

const EXAMPLE_PRODUCT_DETAILS = {
  1: {
    id: 1,
    name: 'Sony WH-1000XM5 Headphones',
    image1: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900',
    image2: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200',
    short_description: 'Industry-leading noise cancellation and 30-hour battery. Best for travelers and commuters.',
    long_description: 'The Sony WH-1000XM5 set the standard for wireless over-ear headphones. With best-in-class ANC, multipoint Bluetooth, and all-day comfort, they are our top pick for frequent travelers and anyone who values silence and sound quality. The 30mm drivers deliver clear, balanced audio, and the integrated mic works great for calls.',
    category_name: 'Audio',
    product_link: 'https://www.amazon.com/s?k=Sony+WH-1000XM5',
  },
  2: {
    id: 2,
    name: 'Dyson V15 Detect Cordless Vacuum',
    image1: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900',
    short_description: 'Laser dust detection and strong suction. Ideal for pet owners and large homes.',
    long_description: 'The Dyson V15 Detect uses a laser to reveal fine dust on hard floors and delivers strong suction across all surfaces. With a HEPA filter and multiple attachments, it is ideal for pet owners and larger homes. Runtime is up to 60 minutes in eco mode.',
    category_name: 'Home',
    product_link: 'https://www.amazon.com/s?k=Dyson+V15+Detect',
  },
  3: {
    id: 3,
    name: 'Kindle Paperwhite (2024)',
    image1: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900',
    short_description: 'Crisp 6.8" display, waterproof, weeks of battery. Perfect for readers.',
    long_description: 'The latest Kindle Paperwhite offers a sharp 6.8" 300 ppi display with adjustable warm light, IPX8 waterproofing, and weeks of battery life. It is our top choice for commuters and anyone who reads regularly. Storage options go up to 16 GB.',
    category_name: 'Tech',
    product_link: 'https://www.amazon.com/s?k=Kindle+Paperwhite',
  },
  4: {
    id: 4,
    name: 'Apple AirPods Pro 2',
    image1: 'https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=900',
    short_description: 'Best-in-class transparency mode and ANC. Seamless with iPhone.',
    long_description: 'AirPods Pro 2 deliver excellent noise cancellation and a standout transparency mode. They pair seamlessly with iPhone and support spatial audio and Find My. Battery life is up to 6 hours with ANC on, and the case supports MagSafe and USB-C.',
    category_name: 'Audio',
    product_link: 'https://www.amazon.com/s?k=AirPods+Pro+2',
  },
  5: {
    id: 5,
    name: 'Roborock S8 Pro Ultra',
    image1: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900',
    short_description: 'Robot vacuum with mop and auto-empty dock. Set it and forget it.',
    long_description: 'The Roborock S8 Pro Ultra combines strong vacuuming with mopping and an auto-empty, auto-wash dock. It maps your home with LiDAR and avoids obstacles and cables. Ideal for hands-off daily cleaning when you do not want to run a traditional vacuum.',
    category_name: 'Home',
    product_link: 'https://www.amazon.com/s?k=Roborock+S8+Pro+Ultra',
  },
  6: {
    id: 6,
    name: 'Logitech MX Master 3S',
    image1: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=900',
    short_description: 'Comfortable productivity mouse with fast scrolling and multiple devices.',
    long_description: 'The MX Master 3S is built for long work sessions with a comfortable shape, quiet clicks, and a MagSpeed scroll wheel. It connects to up to 3 devices and works on most surfaces. A top pick for anyone who uses a mouse all day.',
    category_name: 'Tech',
    product_link: 'https://www.amazon.com/s?k=Logitech+MX+Master+3S',
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const data = await getProduct(id);
        setProduct(data);
        try {
          await trackProductView(id);
        } catch (_) {}
      } catch (err) {
        const example = EXAMPLE_PRODUCT_DETAILS[parseInt(id, 10)];
        if (example) {
          setProduct(example);
          setError(null);
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
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
              src={product.image1?.startsWith('http') ? product.image1 : getImageUrl(product.image1)} 
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
              src={product.image2?.startsWith('http') ? product.image2 : getImageUrl(product.image2)} 
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
