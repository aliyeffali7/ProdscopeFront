import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailPage.css';

const POSTS = {
  1: {
    title: '5 Ways to Get the Most Out of Your Smart Home Devices',
    date: 'Jan 15, 2025',
    image: 'https://images.unsplash.com/photo-1558002038-10559092a2d2?w=900',
    content: [
      'Smart home devices can save time and add convenience—if you set them up with a clear plan. Here are five ways to get more from your existing gear.',
      'First, group devices by room or routine in your app. Use scenes or automations so one tap or voice command controls several devices at once.',
      'Second, focus on privacy: disable features you don’t need, use local options where possible, and keep firmware updated.',
      'Third, stick to one or two ecosystems (e.g. Alexa + compatible devices, or Apple Home) so everything works together without extra hubs.',
      'Fourth, add sensors (motion, door, temperature) to trigger automations—lights, thermostat, or security—instead of controlling everything manually.',
      'Fifth, revisit your setup every few months: remove unused devices, update routines, and add one or two new automations so the system stays useful.',
    ],
    recommended: [
      { name: 'Amazon Echo (4th Gen)', reason: 'Solid Alexa hub and speaker', link: 'https://www.amazon.com/s?k=Amazon+Echo+4th+gen' },
      { name: 'Philips Hue Starter Kit', reason: 'Reliable smart lighting', link: 'https://www.amazon.com/s?k=Philips+Hue+starter' },
      { name: 'Google Nest Hub', reason: 'Smart display and control', link: 'https://www.amazon.com/s?k=Google+Nest+Hub' },
    ],
    ctaText: 'See smart home picks',
    ctaLink: 'https://www.amazon.com/s?k=smart+home',
  },
  2: {
    title: 'Sustainable Shopping: What to Look For in 2025',
    date: 'Jan 8, 2025',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=900',
    content: [
      'Shopping more sustainably doesn’t mean buying less—it means choosing products and brands that are transparent about materials, labor, and impact.',
      'Look for certifications (e.g. B Corp, Fair Trade, GOTS for textiles) and clear claims about recycled content, durability, and end-of-life (recyclable or repairable).',
      'Prefer brands that share where and how products are made, and that offer repair, take-back, or refill options where it makes sense.',
      'We choose eco-friendly picks by checking these factors and only recommend products we’d use ourselves. Where relevant, we use affiliate links to vetted options.',
    ],
    recommended: [
      { name: 'Patagonia Better Sweater', reason: 'Certified Fair Trade, repairable', link: 'https://www.amazon.com/s?k=Patagonia+better+sweater' },
      { name: 'Allbirds Wool Runners', reason: 'Sustainable materials, B Corp', link: 'https://www.amazon.com/s?k=Allbirds+wool+runners' },
      { name: 'Stasher Reusable Bags', reason: 'Silicone, long-lasting', link: 'https://www.amazon.com/s?k=Stasher+reusable+bag' },
    ],
    ctaText: 'Browse sustainable picks',
    ctaLink: 'https://www.amazon.com/s?k=sustainable+products',
  },
  3: {
    title: 'Best Gifts for Remote Workers Under $100',
    date: 'Dec 20, 2024',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=900',
    content: [
      'Remote work is here to stay, and a few thoughtful upgrades can make the home office more comfortable and productive. Here’s our curated list of gifts under $100.',
      'Desk setup: a good desk lamp with adjustable brightness, a monitor arm to free up space, or a quality mouse and keyboard combo.',
      'Comfort: a supportive seat cushion, footrest, or a small heater for cold rooms.',
      'Focus: noise-cancelling earbuds, a simple white-noise machine, or a dedicated notepad for offline thinking.',
      'We’ve included buying links where it helps—all picks we’d give to our own team.',
    ],
    recommended: [
      { name: 'Anker PowerConf Speakerphone', reason: 'Clear calls for meetings', link: 'https://www.amazon.com/s?k=Anker+PowerConf' },
      { name: 'Blue Light Blocking Glasses', reason: 'Reduce eye strain', link: 'https://www.amazon.com/s?k=blue+light+glasses' },
      { name: 'Logitech MX Master 3S', reason: 'Comfortable productivity mouse', link: 'https://www.amazon.com/s?k=Logitech+MX+Master+3S' },
    ],
    ctaText: 'View gift list',
    ctaLink: 'https://www.amazon.com/s?k=remote+work+gifts',
  },
};

const BlogPostDetail = () => {
  const { id } = useParams();
  const post = POSTS[parseInt(id, 10)];

  if (!post) {
    return (
      <div className="detail-page">
        <div className="detail-not-found">
          <h2>Post not found</h2>
          <Link to="/blog">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <header className="detail-page-header">
        <p className="detail-breadcrumb">
          <Link to="/">Home</Link> / <Link to="/blog">Blog</Link>
        </p>
        <h1>{post.title}</h1>
        <p className="detail-meta">{post.date}</p>
      </header>

      <img src={post.image} alt="" className="detail-hero-image" />

      <div className="detail-body">
        {post.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}

        {post.recommended && post.recommended.length > 0 && (
          <>
            <h2>Recommended products</h2>
            <ul>
              {post.recommended.map((item, i) => (
                <li key={i}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="detail-recommended-link">{item.name}</a>
                  {' — '}{item.reason}
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="detail-ctas">
          <a href={post.ctaLink} className="detail-cta detail-cta-primary">
            {post.ctaText} →
          </a>
          <Link to="/blog" className="detail-cta detail-cta-secondary">
            ← All posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
