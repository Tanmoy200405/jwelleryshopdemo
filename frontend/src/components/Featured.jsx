import React from 'react';
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
    <section id="collection" className="featured section-padding bg-ivory text-charcoal">
      <div className="container">
        <div className="section-header text-center">
          <p className="subtitle text-gold">Curated For You</p>
          <h2 className="heading-md" style={{ marginTop: '1rem' }}>Featured Collection</h2>
        </div>

        <div className="featured-grid">
          {products.map((product, index) => (
            <div 
              className={`product-card ${index % 2 !== 0 ? 'offset-card' : ''}`}
              key={product.id}
            >
              <div className="card-image-wrapper">
                <img src={product.image} alt={product.title} className="product-img" />
              </div>
              <div className="card-info">
                <p className="subtitle text-gold" style={{ marginBottom: '1rem' }}>High Jewellery</p>
                <h3 className="card-title">{product.title}</h3>
                <p className="card-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
