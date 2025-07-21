import { useState, useEffect } from 'react';
import { Mail, Phone, Send, CheckCircle, AlertCircle, MapPin, ExternalLink } from 'lucide-react';
import './Contact.css';

// Custom animated Input component
const AnimatedInput = ({ label, type, name, value, onChange, required, error }) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value;
  
  return (
    <div className={`input-container ${isActive ? 'active' : ''} ${error ? 'error' : ''}`}>
      <label className={`input-label ${isActive ? 'active' : ''}`}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows="5"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

// Main Contact component
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [highlightSection, setHighlightSection] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightSection(prev => {
        const sections = ['email', 'phone', 'location'];
        const currentIndex = sections.indexOf(prev);
        return sections[(currentIndex + 1) % sections.length];
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
      isValid = false;
    }
    
    setErrors(formErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setStatus('success');
        setSubmitting(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => setStatus(null), 5000);
      }, 1500);
    }
  };

  return (
    <section className="contact-section">
      <div className="decorative-circle circle1"></div>
      <div className="decorative-circle circle2"></div>
      <div className="decorative-circle circle3"></div>
      
      <div className="contact-container">
        <h1 className="contact-title">Get In Touch</h1>
        <div className="profile-accent"></div> 
        <p className="contact-subtitle">Have a project in mind or just want to chat? I'd love to hear from you!</p>
         
        <div className="contact-content">
          {/* Contact Info Cards */}
          <div className="contact-info">
            <div className={`info-card ${highlightSection === 'email' ? 'highlight' : ''}`}>
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div className="info-details">
                <h3>Email</h3>
                <a href="mailto:irfanishtiaq2k10@gmail.com">irfanishtiaq2k10@gmail.com</a>
                <a href="mailto:irfanbajwa34@gmail.com">irfanbajwa34@gmail.com</a>
              </div>
            </div>
            
            <div className={`info-card ${highlightSection === 'phone' ? 'highlight' : ''}`}>
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <div className="info-details">
                <h3>Phone</h3>
                <p>+966 546 590 644</p>
              </div>
            </div>
            
            <div className={`info-card ${highlightSection === 'location' ? 'highlight' : ''}`}>
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div className="info-details">
                <h3>Available For</h3>
                <p>Full Time, Part Time, Remote & Freelance Opportunities</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="form-container">
            <div className="contact-form" role="form">
              <AnimatedInput 
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                error={errors.name}
              />
              
              <AnimatedInput 
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                error={errors.email}
              />
              
              <AnimatedInput 
                label="Subject (Optional)"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              
              <AnimatedInput 
                label="Message"
                type="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                error={errors.message}
              />
              
              <button 
                type="button" 
                className={`submit-button ${submitting ? 'loading' : ''}`} 
                disabled={submitting}
                onClick={handleSubmit}
              >
                {submitting ? (
                  <span className="loading-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </span>
                ) : (
                  <>Send Message <Send size={16} className="button-icon" /></>
                )}
              </button>
              
              {status === 'success' && (
                <div className="status-message success">
                  <CheckCircle size={18} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              {status === 'error' && (
                <div className="status-message error">
                  <AlertCircle size={18} />
                  <span>Something went wrong. Please try again later.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;