import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailPage.css';

const COMPARISONS = {
  1: {
    title: 'iPhone 15 vs Samsung Galaxy S24',
    productA: 'iPhone 15',
    productB: 'Samsung Galaxy S24',
    imageA: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400',
    imageB: 'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=400',
    table: [
      { spec: 'Display', valueA: '6.1" Super Retina XDR', valueB: '6.2" Dynamic AMOLED 2X', winner: null },
      { spec: 'Chip', valueA: 'A16 Bionic', valueB: 'Snapdragon 8 Gen 3', winner: 'b' },
      { spec: 'Battery (typical)', valueA: 'Up to 20h video', valueB: 'Up to 28h video', winner: 'b' },
      { spec: 'Camera (main)', valueA: '48MP', valueB: '50MP', winner: null },
      { spec: 'Price (base)', valueA: 'From $799', valueB: 'From $799', winner: null },
      { spec: 'Ecosystem', valueA: 'Apple (iOS, Mac, Watch)', valueB: 'Android, Samsung, Google', winner: null },
    ],
    keyDifferences: [
      'iPhone 15 has the Apple ecosystem and longer software support; S24 has a brighter display and more flexible Android.',
      'S24 typically wins on battery in mixed use; iPhone leads on video playback efficiency.',
      'Both have strong cameras; iPhone excels in video, S24 in zoom and some stills.',
      'Choose iPhone if you’re already in Apple’s ecosystem; choose S24 if you want Android and more hardware options.',
    ],
    conclusion: 'If you’re mainly using the phone for personal use, messaging, and media, and you already use a Mac or iPad, choose the iPhone 15 for a seamless experience. If you need the best battery life, a more open OS, or you’re on Android, the Samsung Galaxy S24 is the better fit.',
    conclusionTable: [
      { useCase: 'Personal use, Apple ecosystem (Mac/iPad)', pick: 'iPhone 15' },
      { useCase: 'Best battery, Android, more flexibility', pick: 'Samsung Galaxy S24' },
    ],
    ctaA: 'View iPhone 15',
    ctaB: 'View Galaxy S24',
    linkA: 'https://www.amazon.com/s?k=iPhone+15',
    linkB: 'https://www.amazon.com/s?k=Samsung+Galaxy+S24',
  },
  2: {
    title: 'MacBook Air M3 vs Dell XPS 13',
    productA: 'MacBook Air M3',
    productB: 'Dell XPS 13',
    imageA: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    imageB: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400',
    table: [
      { spec: 'Processor', valueA: 'Apple M3', valueB: 'Intel Core Ultra 7', winner: 'a' },
      { spec: 'RAM (base)', valueA: '8 GB', valueB: '16 GB', winner: 'b' },
      { spec: 'Battery life', valueA: 'Up to 18h', valueB: 'Up to 12h', winner: 'a' },
      { spec: 'Weight', valueA: '1.24 kg', valueB: '1.2 kg', winner: null },
      { spec: 'OS', valueA: 'macOS', valueB: 'Windows 11', winner: null },
      { spec: 'Price (base)', valueA: 'From $1,099', valueB: 'From $1,299', winner: 'a' },
    ],
    keyDifferences: [
      'M3 offers better battery life and often better performance per watt; XPS 13 gives you Windows and more RAM by default.',
      'MacBook Air is the go-to for students and creatives in the Apple ecosystem; XPS 13 suits Windows users and business.',
      'Build and keyboards are both excellent; MacBook has a larger trackpad and quieter thermals.',
    ],
    conclusion: 'For personal use, study, and creative work—especially if you use an iPhone or iPad—choose the MacBook Air M3 for battery life and simplicity. For work that requires Windows, corporate software, or more RAM out of the box, choose the Dell XPS 13.',
    conclusionTable: [
      { useCase: 'Personal use, study, creative work', pick: 'MacBook Air M3' },
      { useCase: 'Windows, corporate software, more RAM', pick: 'Dell XPS 13' },
    ],
    ctaA: 'View MacBook Air M3',
    ctaB: 'View Dell XPS 13',
    linkA: '#',
    linkB: '#',
  },
  3: {
    title: 'Nespresso Vertuo vs Keurig K-Classic',
    productA: 'Nespresso Vertuo',
    productB: 'Keurig K-Classic',
    imageA: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    imageB: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400',
    table: [
      { spec: 'Brew style', valueA: 'Espresso & coffee (centrifugal)', valueB: 'Single-serve drip (K-Cup)', winner: null },
      { spec: 'Cup size', valueA: 'Espresso to alto', valueB: '6–12 oz', winner: null },
      { spec: 'Cost per pod', valueA: '~$0.70–1.00', valueB: '~$0.40–0.60', winner: 'b' },
      { spec: 'Taste (espresso-style)', valueA: 'Strong, crema', valueB: 'Lighter, drip', winner: 'a' },
      { spec: 'Variety', valueA: 'Nespresso Vertuo pods', valueB: 'Many K-Cup brands', winner: 'b' },
    ],
    keyDifferences: [
      'Vertuo focuses on espresso and larger coffee with crema; K-Classic is classic American drip-style single cup.',
      'K-Cups are usually cheaper and more widely available; Vertuo pods are pricier but offer better espresso-style shots.',
      'Vertuo is better if you like lattes and espresso; K-Classic is better for quick, simple drip coffee and variety.',
    ],
    conclusion: 'If you mainly drink espresso, lattes, or stronger coffee at home and don’t mind higher pod cost, choose the Nespresso Vertuo. If you want simple drip coffee, lower cost per cup, and more pod choices, choose the Keurig K-Classic.',
    conclusionTable: [
      { useCase: 'Espresso, lattes, stronger coffee', pick: 'Nespresso Vertuo' },
      { useCase: 'Simple drip, lower cost, more variety', pick: 'Keurig K-Classic' },
    ],
    ctaA: 'View Nespresso Vertuo',
    ctaB: 'View Keurig K-Classic',
    linkA: '#',
    linkB: '#',
  },
};

const ComparisonDetail = () => {
  const { id } = useParams();
  const comp = COMPARISONS[parseInt(id, 10)];

  if (!comp) {
    return (
      <div className="detail-page">
        <div className="detail-not-found">
          <h2>Comparison not found</h2>
          <Link to="/comparisons">← Back to Comparisons</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <header className="detail-page-header">
        <p className="detail-breadcrumb">
          <Link to="/">Home</Link> / <Link to="/comparisons">Comparisons</Link>
        </p>
        <h1>{comp.title}</h1>
      </header>

      <div className="comparison-headers">
        <div className="comparison-product-card">
          <img src={comp.imageA} alt={comp.productA} />
          <strong>{comp.productA}</strong>
        </div>
        <div className="comparison-product-card">
          <img src={comp.imageB} alt={comp.productB} />
          <strong>{comp.productB}</strong>
        </div>
      </div>

      <div className="detail-body">
        <h2>Comparison table</h2>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Spec</th>
                <th>{comp.productA}</th>
                <th>{comp.productB}</th>
              </tr>
            </thead>
            <tbody>
              {comp.table.map((row, i) => (
                <tr key={i} className={row.winner === 'a' ? 'winner-a' : row.winner === 'b' ? 'winner-b' : ''}>
                  <td>{row.spec}</td>
                  <td>{row.valueA}</td>
                  <td>{row.valueB}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Key differences</h2>
        <ul>
          {comp.keyDifferences.map((diff, i) => (
            <li key={i}>{diff}</li>
          ))}
        </ul>

        <div className="conclusion-box">
          <h2>Conclusion</h2>
          {comp.conclusionTable && (
            <div className="conclusion-table-wrap">
              <table className="conclusion-table">
                <thead>
                  <tr>
                    <th>If you need…</th>
                    <th>Choose</th>
                  </tr>
                </thead>
                <tbody>
                  {comp.conclusionTable.map((row, i) => (
                    <tr key={i}>
                      <td>{row.useCase}</td>
                      <td><strong>{row.pick}</strong></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <p>{comp.conclusion}</p>
        </div>

        <div className="detail-ctas">
          <a href={comp.linkA} className="detail-cta detail-cta-primary">
            {comp.ctaA} →
          </a>
          <a href={comp.linkB} className="detail-cta detail-cta-primary">
            {comp.ctaB} →
          </a>
          <Link to="/comparisons" className="detail-cta detail-cta-secondary">
            ← All comparisons
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComparisonDetail;
