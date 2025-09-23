'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      background: 'https://bmw.scene7.com/is/image/BMW/Website_Banner_2_v3_desktop:16to9?fmt=webp&wid=2560&hei=1440',
      title: 'The New BMW 7 Series',
      subtitle: 'Redefining Luxury in India',
      tagline: 'Ultimate Sophistication. Unmatched Presence.',
      ctaPrimary: 'Configure & Price',
      ctaSecondary: 'Book Test Drive',
      model: '7 Series'
    },
    {
      background: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg',
      title: 'BMW X3',
      subtitle: 'The Ultimate Sports Activity Vehicle',
      tagline: 'Adventure Meets Luxury. Now in India.',
      ctaPrimary: 'Discover Now',
      ctaSecondary: 'View Offers',
      model: 'X3'
    },
    {
      background: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg',
      title: 'BMW iX',
      subtitle: 'Electric Innovation for India',
      tagline: 'Sustainable Luxury. Future Forward.',
      ctaPrimary: 'Explore Electric',
      ctaSecondary: 'Charging Info',
      model: 'iX'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const scrollToModels = () => {
    document.getElementById('models')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const current = heroSlides[currentSlide];

  return (
    <section className={styles.hero}>
      {/* Background Slides */}
      <div 
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${current.background})` }}
      ></div>

      {/* Slide Overlay */}
      <div className={styles.slideOverlay}></div>
      
      {/* Luxury Glow Effect */}
      <div className={styles.luxuryGlow}></div>

    
      {/* Content */}
      <div className={styles.content}>
        <div className={styles.modelBadge}>{current.model}</div>
        <h1 className={styles.title}>
          {current.title}
        </h1>
        <p className={styles.subtitle}>
          {current.subtitle}
        </p>
        <p className={styles.tagline}>
          {current.tagline}
        </p>
        
        <div className={styles.ctaButtons}>
          <button 
            className={styles.ctaPrimary}
            onClick={scrollToModels}
          >
            {current.ctaPrimary}
          </button>
          <button className={styles.ctaSecondary}>
            {current.ctaSecondary}
          </button>
          <button className={styles.ctaTertiary}>
            Locate Dealer
          </button>
        </div>
      </div>

      {/* Slide Controls */}
      <button className={styles.prevButton} onClick={prevSlide}>
        ‹
      </button>
      <button className={styles.nextButton} onClick={nextSlide}>
        ›
      </button>

      {/* Slide Indicators */}
      <div className={styles.slideIndicators}>
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator} onClick={scrollToModels}>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
};

export default Hero;