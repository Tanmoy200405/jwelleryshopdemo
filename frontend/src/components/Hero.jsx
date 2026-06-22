import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] } 
  }
};

const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yPos = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Split text into an array of letters
  const titleText = "Artistry In\nEvery Detail";
  const letters = titleText.split('');

  return (
    <section className="hero" ref={heroRef}>
      <motion.div 
        className="hero-image-wrapper"
        style={{ y: yPos, scale }}
        initial={{ clipPath: 'inset(100% 0 0 0)' }}
        animate={{ clipPath: 'inset(0 0 0 0)' }}
        transition={{ duration: 1.8, ease: [0.19, 1, 0.22, 1] }}
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
        
        <motion.h1 
          className="heading-xl text-ivory hero-title"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{ whiteSpace: 'pre-line' }}
        >
          {letters.map((letter, index) => (
            <motion.span 
              key={index} 
              variants={letterVariants}
              style={{ display: 'inline-block' }}
            >
              {letter === '\n' ? <br /> : letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5, ease: [0.19, 1, 0.22, 1] }}
          style={{ marginTop: '3rem' }}
        >
          <motion.a 
            href="#collection" 
            className="btn btn-gold"
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: ["0px 0px 0px rgba(198,167,106,0)", "0px 0px 20px rgba(198,167,106,0.3)", "0px 0px 0px rgba(198,167,106,0)"] }}
            transition={{ boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
            style={{ display: 'inline-block' }}
          >
            Discover The Collection
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
