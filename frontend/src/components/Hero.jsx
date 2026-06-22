import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yPos = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    // GSAP staggering text animation
    if (titleRef.current) {
      const text = titleRef.current;
      text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter' style='display:inline-block; opacity:0; transform:translateY(40px);'>$&</span>");

      gsap.to('.hero-title .letter', {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
        stagger: 0.04,
        delay: 1
      });
    }
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <motion.div 
        className="hero-image-wrapper mask-hero"
        style={{ y: yPos, scale }}
        initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
        animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="hero-overlay"></div>
        <img src="/luxury_necklace_1_1782116340464.png" alt="Luxury Necklace" className="hero-img" />
      </motion.div>

      <motion.div 
        className="hero-content"
        style={{ opacity }}
      >
        <motion.p 
          className="subtitle text-gold hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          High Jewellery Collection
        </motion.p>
        <h1 
          className="heading-xl text-ivory hero-title"
          ref={titleRef}
          style={{ whiteSpace: 'pre-line' }}
        >
          Artistry In
          Every Detail
        </h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          style={{ marginTop: '3rem' }}
        >
          <a href="#collection" className="btn btn-gold btn-magnetic">Discover The Collection</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
