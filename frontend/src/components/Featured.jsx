import React from 'react';
import { motion } from 'framer-motion';
import './Featured.css';

const products = [
  {
    id: 1,
    title: 'Aethelgard Diamond Ring',
    price: '$4,200',
    image: '/luxury_ring_1_1782116354957.png',
    desc: 'Exquisite 18k gold with a brilliant cut diamond.'
  },
  {
    id: 2,
    title: 'Pearl Symphony Earrings',
    price: '$2,850',
    image: '/luxury_earrings_1_1782116367696.png',
    desc: 'Freshwater pearls suspended in intricate gold.'
  },
  {
    id: 3,
    title: 'Eternity Gold Bracelet',
    price: '$5,500',
    image: '/luxury_bracelet_1_1782116380216.png',
    desc: 'A seamless band of gold, crafted for forever.'
  }
];

const Featured = () => {
  return (
    <section id="collection" className="featured section-padding bg-ivory">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold subtitle">Curated For You</p>
          <h2 className="heading-md">Featured Collection</h2>
        </motion.div>

        <div className="featured-grid">
          {products.map((product, index) => (
            <motion.div 
              className={`product-card ${index % 2 !== 0 ? 'offset-card' : ''}`}
              key={product.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="image-reveal-container card-image-wrapper">
                <img src={product.image} alt={product.title} className="product-img" />
                <div className="card-overlay">
                  <button className="btn btn-gold">View Details</button>
                </div>
              </div>
              <div className="card-info">
                <h3 className="card-title">{product.title}</h3>
                <p className="card-desc">{product.desc}</p>
                <p className="card-price text-gold">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
