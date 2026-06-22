import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-container">
          <div className="nav-left">
            <button className="menu-btn" onClick={() => setMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="nav-links hidden-mobile">
              <Link to="/#collection" className="nav-link">Collection</Link>
              <Link to="/#story" className="nav-link">Our Story</Link>
            </div>
          </div>

          <Link to="/" className="brand-logo">
            <h2>AURELIA</h2>
          </Link>

          <div className="nav-right">
            <Link to="/contact" className="nav-link hidden-mobile">Contact</Link>
            <button className="cart-btn">
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <X size={32} />
        </button>
        <div className="mobile-links">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/#collection" onClick={() => setMenuOpen(false)}>Collection</Link>
          <Link to="/#story" onClick={() => setMenuOpen(false)}>Our Story</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
