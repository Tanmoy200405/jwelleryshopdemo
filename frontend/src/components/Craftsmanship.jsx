import React from 'react';
import { motion } from 'framer-motion';
import './Craftsmanship.css';

const Craftsmanship = () => {
  return (
    <section id="story" className="craftsmanship section-padding bg-champagne text-charcoal">
      <div className="container craftsmanship-container">
        <div className="craft-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="subtitle text-charcoal">The Art Of Creation</p>
            <h2 className="heading-lg text-gradient-gold" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>Meticulously Crafted <br/> For Eternity</h2>
            <p className="body-lg craft-desc">
              Every piece in our collection is born from a passion for perfection. Our master artisans blend traditional techniques with modern innovation, ensuring that each detail is flawlessly executed. We source only the finest ethical materials to create jewellery that not only looks breathtaking but carries a legacy.
            </p>
            <a href="/story" className="btn btn-outline" style={{ marginTop: '2rem' }}>Discover Our Story</a>
          </motion.div>
        </div>
        
        <div className="craft-images-grid">
          <motion.div 
            className="craft-img-box" 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <img src="/luxury_necklace_1_1782116340464.png" alt="Craftsmanship detail" />
          </motion.div>
          <motion.div 
            className="craft-img-box" 
            style={{ marginTop: '40px' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          >
            <img src="/luxury_ring_1_1782116354957.png" alt="Artisan working" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
