import React, { useState, useEffect } from 'react';
import { getMission, getImageUrl } from '../services/api';
import './OurMission.css';

const OurMission = () => {
  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMission = async () => {
      try {
        setLoading(true);
        const data = await getMission();
        setMission(data);
      } catch (error) {
        console.error('Error fetching mission:', error);
        // Set default content if API fails
        setMission({
          text: 'We discover and curate unique, high-quality products from across the web, so you can spend less time searching and more time enjoying what you buy. Every item is hand-picked with a focus on originality, usefulness, and value. We scan hundreds of sources so you can quickly find standout products for yourself, your friends, and your audience.'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMission();
  }, []);

  return (
    <section className="our-mission-page-section">
      <div className="our-mission-page-header">
        <p className="page-breadcrumb">Home / Our Mission</p>
        <h1>Our Mission</h1>
        <p className="page-subtitle">
          Learn about what drives us and how we help you discover amazing products.
        </p>
      </div>

      <div className="section-inner our-mission-layout">
        {loading ? (
          <div className="mission-loading">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            {mission?.image && (
              <div className="our-mission-image-wrapper">
                <img
                  src={getImageUrl(mission.image)}
                  alt="Our Mission"
                  className="our-mission-image"
                />
              </div>
            )}
            <div className="our-mission-content">
              <h2>What We Do</h2>
              {mission?.text ? (
                <div className="mission-text">
                  {mission.text.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <p>No mission content available.</p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default OurMission;


