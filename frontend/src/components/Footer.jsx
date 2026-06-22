import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-charcoal text-ivory">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>AURELIA</h2>
            <p className="body-lg">Handcrafted Jewellery Designed To Be Remembered.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Explore</h4>
              <Link to="/">Home</Link>
              <Link to="/#collection">Collection</Link>
              <Link to="/#story">Our Story</Link>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <Link to="/contact">Contact Us</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/shipping">Shipping & Returns</Link>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
                <a href="#" aria-label="Facebook"><FaFacebookF size={20} /></a>
                <a href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aurelia Luxury Jewellery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
