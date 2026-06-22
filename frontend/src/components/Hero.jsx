import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yPos = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Floating particles effect
    const particles = document.querySelectorAll('.particle');
    particles.forEach(p => {
      gsap.to(p, {
        y: "random(-100, 100)",
        x: "random(-100, 100)",
        rotation: "random(0, 360)",
        duration: "random(5, 10)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Particles */}
      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`
          }}></div>
        ))}
      </div>

      <motion.div 
        className="hero-image-wrapper"
        style={{ y: yPos }}
      >
        <div className="hero-overlay"></div>
        <img src="/luxury_necklace_1_1782116340464.png" alt="Luxury Necklace" className="hero-img" />
      </motion.div>

      <motion.div 
        className="hero-content"
        style={{ opacity }}
        ref={textRef}
      >
        <motion.p 
          className="hero-subtitle text-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Exclusive Collection
        </motion.p>
        <motion.h1 
          className="heading-xl text-ivory hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Handcrafted Jewellery<br/>Designed To Be Remembered
        </motion.h1>
        <motion.p 
          className="body-lg text-ivory hero-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Timeless pieces crafted with passion, elegance, and attention to every detail.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a href="#collection" className="btn btn-gold btn-magnetic">Explore Collection</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
