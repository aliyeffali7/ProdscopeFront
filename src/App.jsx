import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdSection from './components/AdSection';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurMission from './pages/OurMission';
import Contact from './pages/Contact';
import RecommendedPage from './pages/RecommendedPage';
import ProductDetail from './pages/ProductDetail';
import ProductReviewsPage from './pages/ProductReviewsPage';
import ProductReviewDetail from './pages/ProductReviewDetail';
import BuyingGuidesPage from './pages/BuyingGuidesPage';
import BuyingGuideDetail from './pages/BuyingGuideDetail';
import ComparisonsPage from './pages/ComparisonsPage';
import ComparisonDetail from './pages/ComparisonDetail';
import BlogPage from './pages/BlogPage';
import BlogPostDetail from './pages/BlogPostDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AdSection />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-mission" element={<OurMission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recommended" element={<RecommendedPage />} />
            <Route path="/product-reviews" element={<ProductReviewsPage />} />
            <Route path="/product-reviews/:id" element={<ProductReviewDetail />} />
            <Route path="/buying-guides" element={<BuyingGuidesPage />} />
            <Route path="/buying-guides/:id" element={<BuyingGuideDetail />} />
            <Route path="/comparisons" element={<ComparisonsPage />} />
            <Route path="/comparisons/:id" element={<ComparisonDetail />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

