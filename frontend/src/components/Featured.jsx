import React from 'react';
import { motion } from 'framer-motion';
import './Featured.css';

const products = [
  {
    id: 1,
    title: 'Aethelgard Diamond Ring',
    price: '$4,200',
    image: '/luxury_ring_1_1782116354957.png',
    desc: 'Exquisite 18k gold with a brilliant cut diamond.',
    colSpan: 'col-span-2',
    aspect: 'aspect-landscape'
  },
  {
    id: 2,
    title: 'Pearl Symphony Earrings',
    price: '$2,850',
    image: '/luxury_earrings_1_1782116367696.png',
    desc: 'Freshwater pearls suspended in intricate gold.',
    colSpan: 'col-span-1',
    aspect: 'aspect-portrait'
  },
  {
    id: 3,
    title: 'Eternity Gold Bracelet',
    price: '$5,500',
    image: '/luxury_bracelet_1_1782116380216.png',
    desc: 'A seamless band of gold, crafted for forever.',
    colSpan: 'col-span-1',
    aspect: 'aspect-square'
  }
];

const Featured = () => {
  return (
    <section id="collection" className="featured section-padding bg-charcoal text-ivory">
      <div className="container">
        <div className="featured-header-flex">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="subtitle text-gold">Exclusive Selection</p>
            <h2 className="heading-lg" style={{ marginTop: '1rem' }}>Curated Masterpieces</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
            className="featured-desc-wrap"
          >
            <p className="body-lg text-ivory" style={{ opacity: 0.7, maxWidth: '400px' }}>
              Explore our most sought-after designs. Each piece is a testament to our dedication to unparalleled craftsmanship and timeless beauty.
            </p>
          </motion.div>
        </div>

        <div className="awwwards-grid">
          {products.map((product, index) => (
            <motion.div 
              className={`awwwards-card ${product.colSpan}`}
              key={product.id}
              initial={{ opacity: 0, y: 100, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
              whileInView={{ opacity: 1, y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, delay: index * 0.3, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className={`card-img-container ${product.aspect}`}>
                <img src={product.image} alt={product.title} className="card-img" />
                <div className="card-hover-overlay">
                  <div className="card-hover-content">
                    <p className="subtitle text-gold" style={{ marginBottom: '1rem' }}>View Details</p>
                    <h3 className="card-title text-ivory">{product.title}</h3>
                    <p className="card-price text-champagne">{product.price}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
