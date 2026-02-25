import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here (e.g., send to API)
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will be in touch shortly.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <section className="contact-section" style={{ padding: '80px 20px', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '10px' }}>Contact</h1>
          <p className="hero-subtitle" style={{ color: '#94A3B8', textTransform: 'none', letterSpacing: 'normal', fontSize: '1.1rem' }}>
            Get in Touch
          </p>
        </div>

        <div style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.03)', 
          padding: '40px', 
          borderRadius: '16px', 
          border: '1px solid rgba(255, 255, 255, 0.1)' 
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#CBD5E1', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="modal-input"
                style={{ marginBottom: 0 }}
                placeholder="Your Name"
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#CBD5E1', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>Email <span style={{ color: '#ef4444' }}>*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="modal-input"
                style={{ marginBottom: 0 }}
                placeholder="name@company.com"
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#CBD5E1', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="modal-input"
                style={{ marginBottom: 0 }}
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#CBD5E1', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="modal-input"
                style={{ marginBottom: 0 }}
                placeholder="Company Inc."
              />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', color: '#CBD5E1', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '600' }}>How can I help?</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="modal-input"
                style={{ marginBottom: 0, minHeight: '120px', resize: 'vertical', fontFamily: 'inherit' }}
                placeholder="Tell me a bit about what you're looking for..."
              />
            </div>

            <button 
              type="submit" 
              className="inquire-btn" 
              style={{ width: '100%', padding: '15px', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;