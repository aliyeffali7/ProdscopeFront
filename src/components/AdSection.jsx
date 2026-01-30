import React, { useState, useEffect } from 'react';
import { getAds, getImageUrl } from '../services/api';
import './AdSection.css';

const AdSection = () => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getAds();
        setAds(data);
      } catch (err) {
        setError(err.message);
        setAds([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  if (loading) {
    return (
      <div className="ad-section">
        <div className="ad-section-inner">
          <p className="ad-section-loading">Loading ads...</p>
        </div>
      </div>
    );
  }

  if (error || ads.length === 0) {
    return null;
  }

  return (
    <div className="ad-section">
      <div className="ad-section-inner">
        <div className="ad-section-list">
          {ads.map((ad) => (
            <div key={ad.id} className="ad-section-item">
              <img
                src={getImageUrl(ad.image)}
                alt={`Ad ${ad.id}`}
                className="ad-section-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdSection;
