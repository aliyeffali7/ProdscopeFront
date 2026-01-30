import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts, getImageUrl, getHeroImage } from '../services/api';
import './Hero.css';

const HERO_IMAGE_FALLBACK = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600';

const Hero = () => {
  const navigate = useNavigate();
  const [sponsoredProducts, setSponsoredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [heroImageUrl, setHeroImageUrl] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(1); // Start at 1 because we duplicate first slide
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderTrackRef = useRef(null);

  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        const data = await getHeroImage();
        if (data && data.image) {
          const url = data.image.startsWith('http') ? data.image : getImageUrl(data.image);
          setHeroImageUrl(url);
        }
      } catch (_) {
        // Keep fallback
      }
    };
    fetchHeroImage();
  }, []);

  useEffect(() => {
    const fetchSponsoredProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts({});
        // Get sponsored products (first 3)
        const sponsored = data.products.filter(p => p.sponsored).slice(0, 3);
        setSponsoredProducts(sponsored);
      } catch (error) {
        console.error('Error fetching sponsored products:', error);
        setSponsoredProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSponsoredProducts();
  }, []);

  // Create duplicated slides for infinite loop
  const slides = sponsoredProducts.length > 0 ? [
    sponsoredProducts[sponsoredProducts.length - 1], // Last slide at start
    ...sponsoredProducts, // Original slides
    sponsoredProducts[0], // First slide at end
  ] : [];

  const totalSlides = slides.length;
  const realSlidesCount = sponsoredProducts.length;

  useEffect(() => {
    const track = sliderTrackRef.current;
    if (!track) return;

    // Handle loop transitions
    if (currentSlide === 0) {
      // Jump to last real slide (without transition)
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(realSlidesCount);
      }, 400);
    } else if (currentSlide === totalSlides - 1) {
      // Jump to first real slide (without transition)
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 400);
    } else {
      setIsTransitioning(true);
    }
  }, [currentSlide, totalSlides, realSlidesCount]);

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index + 1); // +1 because first slide is duplicate
  };

  // Get the real slide index for dots (0 to realSlidesCount - 1)
  const getRealSlideIndex = () => {
    if (currentSlide === 0) return realSlidesCount - 1;
    if (currentSlide === totalSlides - 1) return 0;
    return currentSlide - 1;
  };

  return (
    <section id="top" className="hero-section">
      <div className="hero-inner">
        <div className="hero-image-wrapper">
          <img
            src={heroImageUrl || HERO_IMAGE_FALLBACK}
            alt="Discover unique products curated for you"
            className="hero-image"
            onError={(e) => {
              e.target.src = HERO_IMAGE_FALLBACK;
            }}
          />
          <div className="hero-overlay">
            <div className="hero-content-wrapper">
              <div className="hero-left">
                <h1 className="hero-trust-title">TRUST OUR RECOMMENDATION</h1>
                <p className="hero-subtitle">
                  Handpicked affiliate products from across the web. We spotlight unique, useful, and fun items so there's always something new to discover.
                </p>
              </div>
              <div className="hero-right">
                <div className="hero-slider">
                  <button className="slider-button slider-button-left" onClick={prevSlide}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6"/>
                    </svg>
                  </button>
                  <div className="slider-container">
                    <div 
                      ref={sliderTrackRef}
                      className={`slider-track ${isTransitioning ? 'transition' : ''}`}
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {loading ? (
                        <div className="slider-card">
                          <div className="slider-card-content">
                            <p>Loading...</p>
                          </div>
                        </div>
                      ) : slides.length > 0 ? (
                        slides.map((product, index) => (
                          <div 
                            key={`${product.id}-${index}`} 
                            className="slider-card"
                            onClick={() => navigate(`/product/${product.id}`)}
                          >
                            <div className="slider-card-image">
                              <img src={getImageUrl(product.image1)} alt={product.name} />
                            </div>
                            <div className="slider-card-content">
                              <h3 className="slider-card-title">{product.name}</h3>
                              <p className="slider-card-description">{product.short_description || ''}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="slider-card">
                          <div className="slider-card-content">
                            <p>No products available</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <button className="slider-button slider-button-right" onClick={nextSlide}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </button>
                </div>
                {sponsoredProducts.length > 0 && (
                  <div className="slider-dots">
                    {sponsoredProducts.map((_, index) => (
                      <button
                        key={index}
                        className={`slider-dot ${index === getRealSlideIndex() ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
