import React, { useState, useEffect } from 'react';
import { getAds, getImageUrl } from '../services/api';
import './HeroAdBanner.css';

const HeroAdBanner = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        setLoading(true);
        const data = await getAds();
        setAds(data);
      } catch (_) {
        setAds([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  const adsWithImage = ads.filter((ad) => ad.image);
  const showPlaceholder = !loading && adsWithImage.length === 0;

  return (
    <section className="hero-ad-banner" aria-label="Ad space">
      <div className="hero-ad-banner-inner">
        {loading ? (
          <div className="hero-ad-banner-loading">
            <span className="hero-ad-banner-loading-dot" />
            <span className="hero-ad-banner-loading-dot" />
            <span className="hero-ad-banner-loading-dot" />
            <span>Loading…</span>
          </div>
        ) : showPlaceholder ? (
          <div className="hero-ad-banner-placeholder-box">
            <div className="hero-ad-banner-placeholder-icon" aria-hidden>
              📢
            </div>
            <div className="hero-ad-banner-placeholder-text">
              <span className="hero-ad-banner-placeholder-title">Your ad could be here</span>
              <span className="hero-ad-banner-placeholder-sub">Reach our audience</span>
            </div>
          </div>
        ) : (
          <div className="hero-ad-banner-list">
            {adsWithImage.map((ad) => (
              <div key={ad.id} className="hero-ad-banner-item">
                <img
                  src={getImageUrl(ad.image)}
                  alt={`Ad ${ad.id}`}
                  className="hero-ad-banner-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroAdBanner;
