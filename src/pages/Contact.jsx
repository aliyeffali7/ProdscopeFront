import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just log; later can be connected to backend/email service
    console.log('Contact form submitted');
  };

  return (
    <section className="contact-page-section">
      <div className="contact-header">
        <p className="contact-breadcrumb">Home / Contact</p>
        <h1>Contact</h1>
        <p className="contact-subtitle">
          If you have any questions or suggestions, feel free to reach out to us.
        </p>
      </div>

      <div className="section-inner contact-layout">
        <div className="contact-info-panel">
          <h2>Our Mail</h2>

          <div className="contact-box">
            <span className="contact-box-label">Mail</span>
            <p className="contact-box-value">hello@prodscope.com</p>
          </div>

          <div className="form-fields-left">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Mail</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>
        </div>

        <form className="contact-form-panel" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field full">
              <label htmlFor="topic">Topic</label>
              <input
                id="topic"
                name="topic"
                type="text"
                placeholder="What is this about?"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message here..."
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

