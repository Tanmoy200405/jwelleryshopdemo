import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Craftsmanship from '../components/Craftsmanship';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Featured />
      <Craftsmanship />
      
      {/* Testimonial Section */}
      <section className="section-padding bg-charcoal text-ivory text-center">
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold" style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '-20px' }}>"</p>
            <h3 className="heading-sm" style={{ fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.4' }}>
              The craftsmanship is truly unparalleled. Every time I wear my Aurelia necklace, it feels like I'm wearing a piece of art. It’s an heirloom I will cherish forever.
            </h3>
            <p className="subtitle text-champagne">- Eleanor R.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-ivory text-center" style={{ borderTop: '1px solid rgba(26,26,26,0.1)' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>Create Your Legacy</h2>
            <p className="body-lg" style={{ marginBottom: '2.5rem', opacity: 0.8 }}>
              Looking for something completely unique? Work with our master artisans to bring your vision to life with a custom commission.
            </p>
            <a href="/contact" className="btn btn-primary">Request Custom Order</a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
