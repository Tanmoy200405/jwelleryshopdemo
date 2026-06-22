import React from 'react';
import { motion } from 'framer-motion';
import './Craftsmanship.css';

const Craftsmanship = () => {
  return (
    <section id="story" className="craftsmanship bg-charcoal text-ivory">
      <div className="craft-split-container">
        {/* Left Side: Massive Image */}
        <div className="craft-image-side">
          <motion.img 
            src="/luxury_necklace_1_1782116340464.png" 
            alt="Artisan Craftsmanship" 
            className="craft-main-img"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
          />
          <div className="craft-image-overlay"></div>
        </div>

        {/* Right Side: Content */}
        <div className="craft-content-side">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="craft-text-wrapper"
          >
            <p className="subtitle text-gold" style={{ letterSpacing: '0.2em' }}>The Art Of Creation</p>
            <h2 className="heading-lg" style={{ marginTop: '2rem', marginBottom: '2rem', lineHeight: '1.2' }}>
              Meticulously <br/>
              <span className="text-gradient-gold">Crafted</span> <br/>
              For Eternity
            </h2>
            <p className="body-lg" style={{ color: 'rgba(253, 251, 247, 0.7)', marginBottom: '3rem' }}>
              Every piece in our collection is born from a passion for perfection. Our master artisans blend traditional techniques with modern innovation, ensuring that each detail is flawlessly executed. We source only the finest ethical materials to create jewellery that not only looks breathtaking but carries a legacy.
            </p>
            <a href="/story" className="btn btn-gold btn-magnetic">Discover Our Story</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
