'use client';

import styles from './BrandStory.module.css';

const BrandStory = () => {
  const innovations = [
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
        </svg>
      ),
      title: 'Precision Engineering',
      description: 'Every BMW is crafted with meticulous attention to detail and German engineering excellence.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control ensure every vehicle meets our highest standards.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"/>
        </svg>
      ),
      title: 'Innovation Leadership',
      description: 'Pioneering automotive technology since 1916, constantly pushing boundaries.'
    }
  ];

  return (
    <section className={styles.brandStory}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
         
          <div className={styles.imageSection}>
            <div className={styles.imageBadge}>Since 1916</div>
            <img 
              src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg" 
              alt="BMW Legacy and Innovation"
              className={styles.brandImage}
              onError={(e) => {
                e.currentTarget.src = 'https://images.pexels.com/photos/1209777/pexels-photo-1209777.jpeg';
              }}
            />
          </div>

        
          <div className={styles.contentSection}>
            <div className={styles.sectionBadge}>Our Heritage</div>
            
            <h2 className={styles.sectionTitle}>
              The <span className={styles.highlight}>Ultimate Driving</span> Machine
            </h2>
            
            <p className={styles.sectionDescription}>
              For over a century, BMW has stood at the forefront of automotive excellence. 
              Our commitment to innovation, quality, and driving pleasure has made us the 
              choice for discerning drivers worldwide. From the first aircraft engines to 
              today's cutting-edge electric vehicles, our passion for engineering perfection 
              remains unchanged.
            </p>

            <ul className={styles.innovationList}>
              {innovations.map((innovation, index) => (
                <li key={index} className={styles.innovationItem}>
                  <div className={styles.innovationIcon}>
                    {innovation.icon}
                  </div>
                  <div className={styles.innovationContent}>
                    <h4>{innovation.title}</h4>
                    <p>{innovation.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button className={styles.ctaButton}>
              Discover Our Legacy
            </button>
          </div>
        </div>

        
        <div className={styles.quoteSection}>
          <p className={styles.quoteText}>
            "Sheer Driving Pleasure is not just a slogan - it's our promise. 
            A commitment to delivering unforgettable experiences behind the wheel."
          </p>
          <p className={styles.quoteAuthor}>— BMW Philosophy</p>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;