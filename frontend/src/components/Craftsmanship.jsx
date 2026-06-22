import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Craftsmanship.css';

const Craftsmanship = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="story" className="craftsmanship section-padding bg-champagne text-charcoal" ref={sectionRef}>
      <div className="container craftsmanship-container">
        <div className="craft-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <p className="subtitle">The Art Of Creation</p>
            <h2 className="heading-lg">Meticulously Crafted <br/> For Eternity</h2>
            <p className="body-lg craft-desc">
              Every piece in our collection is born from a passion for perfection. Our master artisans blend traditional techniques with modern innovation, ensuring that each detail is flawlessly executed. We source only the finest ethical materials to create jewellery that not only looks breathtaking but carries a legacy.
            </p>
            <a href="/story" className="btn btn-outline">Discover Our Story</a>
          </motion.div>
        </div>
        
        <div className="craft-images">
          <motion.div className="craft-img-wrapper img-1" style={{ y: y1 }}>
            <img src="/luxury_necklace_1_1782116340464.png" alt="Craftsmanship detail" />
          </motion.div>
          <motion.div className="craft-img-wrapper img-2" style={{ y: y2 }}>
            <img src="/luxury_ring_1_1782116354957.png" alt="Artisan working" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
