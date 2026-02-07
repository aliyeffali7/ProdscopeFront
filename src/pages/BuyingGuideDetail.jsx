import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailPage.css';

const GUIDES = {
  1: {
    title: 'How to Choose the Right Wireless Earbuds in 2025',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=900',
    intro: 'Picking the right wireless earbuds depends on how you’ll use them: commuting, workouts, calls, or just music. This guide walks you through what to look for and how we pick our recommendations.',
    whatToLookFor: [
      'Battery life (earbuds + case) and quick charge',
      'Fit and ear tip options (comfort and seal)',
      'Codec support (AAC, aptX) if you care about quality',
      'Active noise cancellation (ANC) and transparency mode',
      'Water resistance (IPX4 or higher for exercise)',
    ],
    criteria: [
      'Sound quality and tuning for your music taste',
      'Call and mic quality for work or outdoors',
      'Comfort for 1–2 hour sessions',
      'Price vs. features (premium ANC vs. budget)',
    ],
    recommended: [
      { name: 'Sony WF-1000XM5', reason: 'Best overall ANC and sound', link: 'https://www.amazon.com/s?k=Sony+WF-1000XM5' },
      { name: 'Apple AirPods Pro 2', reason: 'Best for iPhone users and transparency', link: 'https://www.amazon.com/s?k=AirPods+Pro+2' },
      { name: 'Anker Soundcore Liberty 4 NC', reason: 'Best value with ANC', link: 'https://www.amazon.com/s?k=Anker+Soundcore+Liberty+4+NC' },
    ],
    ctaText: 'See our top picks',
    ctaLink: '#',
  },
  2: {
    title: 'Buying Guide: Best Standing Desks for Home Office',
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=900',
    intro: 'A good standing desk improves posture and focus. Here’s what to consider before buying: height range, stability, size, and cable management.',
    whatToLookFor: [
      'Height range (sitting and standing) for your height',
      'Stability at full height (no wobble)',
      'Desktop size and weight capacity',
      'Cable management (built-in or add-ons)',
      'Programmable height memory (optional)',
    ],
    criteria: [
      'Frame type: two-stage vs. three-stage legs',
      'Single vs. dual motor (smoothness and weight capacity)',
      'Warranty and customer support',
    ],
    recommended: [
      { name: 'Fully Jarvis', reason: 'Reliable, good range and warranty', link: 'https://www.amazon.com/s?k=Fully+Jarvis+standing+desk' },
      { name: 'Uplift V2', reason: 'Strong build and customization', link: 'https://www.amazon.com/s?k=Uplift+V2+desk' },
      { name: 'FlexiSpot E6', reason: 'Solid budget option', link: 'https://www.amazon.com/s?k=FlexiSpot+E6' },
    ],
    ctaText: 'Compare standing desks',
    ctaLink: '#',
  },
  3: {
    title: 'What to Consider When Buying a Robot Vacuum',
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900',
    intro: 'Robot vacuums save time, but features like mapping, mopping, and obstacle avoidance vary a lot. This guide helps you decide what you need and what to skip.',
    whatToLookFor: [
      'Mapping and room recognition (Lidar vs. camera)',
      'Mopping and water tank (if you want hybrid clean)',
      'Obstacle avoidance (pets and cables)',
      'Suction and brush design for your flooring',
      'App features: schedules, no-go zones, multi-floor',
    ],
    criteria: [
      'Home size and battery runtime',
      'Pet hair and allergen handling',
      'Emptying: manual vs. auto-empty dock',
    ],
    recommended: [
      { name: 'Roborock S8 Pro Ultra', reason: 'Strong all-in-one with mop and dock', link: 'https://www.amazon.com/s?k=Roborock+S8+Pro+Ultra' },
      { name: 'iRobot Roomba j9+', reason: 'Great obstacle avoidance and pet hair', link: 'https://www.amazon.com/s?k=Roomba+j9' },
      { name: 'Eufy X9 Pro', reason: 'Good value with mopping', link: 'https://www.amazon.com/s?k=Eufy+X9+Pro' },
    ],
    ctaText: 'View robot vacuum picks',
    ctaLink: '#',
  },
};

const BuyingGuideDetail = () => {
  const { id } = useParams();
  const guide = GUIDES[parseInt(id, 10)];

  if (!guide) {
    return (
      <div className="detail-page">
        <div className="detail-not-found">
          <h2>Guide not found</h2>
          <Link to="/buying-guides">← Back to Buying Guides</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <header className="detail-page-header">
        <p className="detail-breadcrumb">
          <Link to="/">Home</Link> / <Link to="/buying-guides">Buying Guides</Link>
        </p>
        <h1>{guide.title}</h1>
        <p className="detail-meta">{guide.category}</p>
      </header>

      <img src={guide.image} alt="" className="detail-hero-image" />

      <div className="detail-body">
        <p>{guide.intro}</p>

        <h2>What to look for</h2>
        <ul>
          {guide.whatToLookFor.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>Selection criteria</h2>
        <ul>
          {guide.criteria.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2>Recommended products</h2>
        <ul>
          {guide.recommended.map((item, i) => (
            <li key={i}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="detail-recommended-link">{item.name}</a>
              {' — '}{item.reason}
            </li>
          ))}
        </ul>

        <div className="detail-ctas">
          <a href={guide.ctaLink} className="detail-cta detail-cta-primary">
            {guide.ctaText} →
          </a>
          <Link to="/buying-guides" className="detail-cta detail-cta-secondary">
            ← All guides
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyingGuideDetail;
