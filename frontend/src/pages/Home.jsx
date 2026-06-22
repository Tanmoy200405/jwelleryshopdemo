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
        <div className="container" style={{ maxWidth: '900px' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="text-gradient-gold" style={{ fontSize: '4rem', fontFamily: 'var(--font-serif)', marginBottom: '-30px', fontWeight: 300 }}>"</p>
            <h3 className="heading-sm" style={{ fontStyle: 'italic', marginBottom: '3rem', lineHeight: '1.6', color: 'rgba(253, 251, 247, 0.9)' }}>
              The craftsmanship is truly unparalleled. Every time I wear my Aurelia necklace, it feels like I'm wearing a piece of art. It’s an heirloom I will cherish forever.
            </h3>
            <p className="subtitle text-gradient-gold" style={{ letterSpacing: '0.3em' }}>Eleanor R.</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-ivory text-center">
        <div className="container" style={{ maxWidth: '700px' }}>
          <motion.div
            initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
            whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="subtitle text-charcoal" style={{ marginBottom: '1.5rem' }}>Bespoke Creations</p>
            <h2 className="heading-md" style={{ marginBottom: '2rem' }}>Create Your Legacy</h2>
            <p className="body-lg" style={{ marginBottom: '3rem' }}>
              Looking for something completely unique? Work with our master artisans to bring your vision to life with a custom commission that transcends time.
            </p>
            <a href="/contact" className="btn btn-primary">Request Custom Order</a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
