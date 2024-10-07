import React, { useState } from 'react';
import './App.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (API call, etc.)
    console.log('Form data:', formData);
  };

  return (
    <div className="contact-section">
      {/* Left Side: Contact Form */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      {/* Right Side: Image with Overlay Text */}
      <div className="image-container">
        <img src="/assets/Pattern2_n.jpg" alt="Contact" />
        <div className="overlay-text">
          <h3>Let's Work Together</h3>
          <p>We are here to answer your queries and work on new projects.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
