import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailPage.css';

const REVIEWS = {
  1: {
    title: 'Sony WH-1000XM5 Headphones Review: Best Noise Cancellation in 2025?',
    product: 'Sony WH-1000XM5',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900',
    description: 'The Sony WH-1000XM5 remain the reference for wireless over-ear headphones. We put them through real-world use: commuting, office work, and travel. Here’s our full take on sound, comfort, battery life, and whether they’re worth the price.',
    pros: ['Industry-leading noise cancellation', 'Excellent battery life (30h ANC on)', 'Comfortable for long sessions', 'Great call quality and multipoint'],
    cons: ['No folding case, bulkier to carry', 'Premium price'],
    specs: [
      { name: 'Driver', value: '30mm' },
      { name: 'Battery (ANC on)', value: 'Up to 30 hours' },
      { name: 'Bluetooth', value: '5.2, multipoint' },
      { name: 'Weight', value: '250 g' },
    ],
    whoItIsFor: 'Best for frequent travelers, commuters, and anyone who wants the strongest noise cancellation and all-day comfort. Worth it if you prioritize silence and sound quality over portability.',
    ctaText: 'Check price on Amazon',
    ctaLink: 'https://www.amazon.com/s?k=Sony+WH-1000XM5',
  },
  2: {
    title: 'Dyson V15 Detect Cordless Vacuum: Real-World Testing',
    product: 'Dyson V15 Detect',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=900',
    description: 'We tested the Dyson V15 Detect in homes with pets and high traffic. Laser dust detection, runtime, and attachments: here’s what matters and what doesn’t.',
    pros: ['Laser reveals fine dust on hard floors', 'Strong suction and filtration', 'Useful attachments and runtime'],
    cons: ['Heavy; not ideal for stairs', 'Premium cost'],
    specs: [
      { name: 'Runtime (eco)', value: 'Up to 60 min' },
      { name: 'Dustbin', value: '0.76 L' },
      { name: 'Filter', value: 'Whole-machine HEPA' },
      { name: 'Weight', value: '3.2 kg' },
    ],
    whoItIsFor: 'Ideal for pet owners and larger homes with mixed flooring. Choose it if you want top suction and don’t mind the weight and price.',
    ctaText: 'See Dyson V15',
    ctaLink: 'https://www.amazon.com/s?k=Dyson+V15+Detect',
  },
  3: {
    title: 'Kindle Paperwhite (2024) Review: Still the Best E-Reader?',
    product: 'Kindle Paperwhite',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900',
    description: 'The latest Kindle Paperwhite keeps the formula that works: a sharp, front-lit screen and waterproof build. We look at battery, reading experience, and how it compares to the rest of the lineup.',
    pros: ['Crisp 6.8" display, warm light', 'Waterproof (IPX8)', 'Weeks of battery life', 'Affordable for the features'],
    cons: ['No physical page buttons', 'USB-only charging'],
    specs: [
      { name: 'Display', value: '6.8" 300 ppi' },
      { name: 'Battery', value: 'Weeks per charge' },
      { name: 'Storage', value: '8 GB / 16 GB' },
      { name: 'Waterproof', value: 'IPX8' },
    ],
    whoItIsFor: 'Perfect for commuters and night readers who want a no-fuss e-reader with a great screen and long battery. Best value in the Kindle range.',
    ctaText: 'View on Amazon',
    ctaLink: 'https://www.amazon.com/s?k=Kindle+Paperwhite',
  },
};

const ProductReviewDetail = () => {
  const { id } = useParams();
  const review = REVIEWS[parseInt(id, 10)];

  if (!review) {
    return (
      <div className="detail-page">
        <div className="detail-not-found">
          <h2>Review not found</h2>
          <Link to="/product-reviews">← Back to Product Reviews</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <header className="detail-page-header">
        <p className="detail-breadcrumb">
          <Link to="/">Home</Link> / <Link to="/product-reviews">Product Reviews</Link>
        </p>
        <h1>{review.title}</h1>
        <p className="detail-meta">
          {review.product} · <span className="rating-big"><span className="stars">★★★★★</span> {review.rating}</span>
        </p>
      </header>

      <img src={review.image} alt={review.product} className="detail-hero-image" />

      <div className="detail-body">
        <p>{review.description}</p>

        <h2>Pros & Cons</h2>
        <div className="pros-cons-grid">
          <div className="pros-box">
            <h3>Pros</h3>
            <ul>{review.pros.map((p, i) => <li key={i}>{p}</li>)}</ul>
          </div>
          <div className="cons-box">
            <h3>Cons</h3>
            <ul>{review.cons.map((c, i) => <li key={i}>{c}</li>)}</ul>
          </div>
        </div>

        <h2>Technical specs</h2>
        <div className="specs-table-wrap">
          <table className="specs-table">
            <tbody>
              {review.specs.map((s, i) => (
                <tr key={i}>
                  <td>{s.name}</td>
                  <td>{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="who-for-box">
          <h3>Who it’s for</h3>
          <p>{review.whoItIsFor}</p>
        </div>

        <div className="detail-ctas">
          <a href={review.ctaLink} className="detail-cta detail-cta-primary">
            {review.ctaText} →
          </a>
          <Link to="/product-reviews" className="detail-cta detail-cta-secondary">
            ← All reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductReviewDetail;
