import React, { useState } from 'react';
import { submitContactForm } from '../services/api';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    topic: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      const response = await submitContactForm(formData);
      setSubmitStatus({ type: 'success', message: response.message || 'Your message has been sent successfully!' });
      // Reset form
      setFormData({
        name: '',
        mail: '',
        topic: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: error.message || 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-page-section">
      <div className="contact-header">
        <h1>Contact</h1>
        <p className="contact-subtitle">
          if you have any question or suggestion feel free to reach out to us.
        </p>
      </div>

      <div className="contact-content-container">
        <div className="contact-email-display">
          <div className="email-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <div className="email-content">
            <span className="email-label">Our mail</span>
            <a href="mailto:info@prodscoop.com" className="email-address">info@prodscoop.com</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitStatus && (
            <div className={`form-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}
          <div className="form-left-column">
            <div className="form-field">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                id="mail"
                name="mail"
                type="email"
                placeholder="your mail"
                value={formData.mail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                id="topic"
                name="topic"
                type="text"
                placeholder="topic"
                value={formData.topic}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-right-column">
            <div className="form-field">
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="mesage"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? 'Sending...' : 'send'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

