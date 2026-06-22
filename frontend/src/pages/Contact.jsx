import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="contact-page bg-ivory text-charcoal pt-navbar"
    >
      <div className="container section-padding">
        <div className="contact-grid">
          
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="subtitle text-gold">Get In Touch</p>
            <h1 className="heading-lg" style={{ marginBottom: '2rem' }}>Custom Orders & Inquiries</h1>
            <p className="body-lg" style={{ marginBottom: '3rem', opacity: 0.8 }}>
              Whether you are looking to commission a bespoke piece or have a question about our existing collection, our team is here to assist you with the utmost care.
            </p>

            <div className="info-items">
              <div className="info-item">
                <MapPin className="text-gold" size={24} />
                <div>
                  <h4>Boutique Address</h4>
                  <p>128 Luxury Avenue, Paris, France</p>
                </div>
              </div>
              <div className="info-item">
                <Phone className="text-gold" size={24} />
                <div>
                  <h4>WhatsApp / Phone</h4>
                  <p>+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="info-item">
                <Mail className="text-gold" size={24} />
                <div>
                  <h4>Email</h4>
                  <p>concierge@aurelia.com</p>
                </div>
              </div>
            </div>

            <div className="instagram-cta" style={{ marginTop: '4rem' }}>
              <h4 style={{ marginBottom: '1rem' }}>Follow Our Journey</h4>
              <a href="#" className="btn btn-outline" style={{ display: 'inline-flex', gap: '10px' }}>
                <FaInstagram size={20} /> @AureliaJewellery
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper bg-white"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="heading-sm" style={{ marginBottom: '2rem' }}>Send a Message</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" className="input-field" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="input-field" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <select className="input-field" required style={{ appearance: 'none', background: 'transparent' }}>
                  <option value="" disabled selected>Inquiry Type</option>
                  <option value="custom">Custom Commission</option>
                  <option value="collection">Collection Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea className="input-field" placeholder="Your Message" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Submit Inquiry</button>
            </form>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
