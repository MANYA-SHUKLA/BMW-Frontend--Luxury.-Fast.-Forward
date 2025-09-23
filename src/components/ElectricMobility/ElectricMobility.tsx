'use client';

import styles from './ElectricMobility.module.css';

const ElectricMobility = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      ),
      title: 'Instant Torque',
      description: 'Experience immediate acceleration with electric powertrains delivering maximum torque from zero RPM.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      title: 'Zero Emissions',
      description: 'Drive with a clear conscience knowing you\'re contributing to a sustainable future with zero tailpipe emissions.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/>
        </svg>
      ),
      title: 'Smart Charging',
      description: 'Intelligent charging solutions that adapt to your lifestyle with fast-charging capabilities and smart scheduling.'
    }
  ];

  return (
    <section id="electric" className={styles.electric}>
      {/* Futuristic Background Elements */}
      <div className={styles.futuristicBg}>
        <div className={styles.circuitLine}></div>
        <div className={styles.circuitLine}></div>
        <div className={styles.circuitLine}></div>
        <div className={styles.circuitLine}></div>
        <div className={styles.glowOrb}></div>
        <div className={styles.glowOrb}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.sectionBadge}>The Future is Electric</div>
          
          <h2 className={styles.sectionTitle}>
            Electrifying Performance
          </h2>
          
          <p className={styles.sectionSubtitle}>
            Discover the next generation of sustainable luxury with BMW's electric vehicle lineup. 
            Combining cutting-edge technology with uncompromising performance for a driving experience like no other.
          </p>

          <img 
            src="https://www.bmw.in/en/topics/Fascination-BMW/electromobility2020-new/electric-cars/_jcr_content/root/maincontent/contentblueprint_215790074/container_copy_copy_/contentblueprint_694/contentblueprint/image.coreimg.jpeg/1752213323293/bmw-ix50-electric.jpeg" 
            alt="BMW Electric Vehicle"
            className={styles.electricImage}
            onError={(e) => {
              e.currentTarget.src = 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg';
            }}
          />

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>

          <button className={styles.ctaButton}>
            Explore Electric Range
          </button>
        </div>
      </div>
    </section>
  );
};

export default ElectricMobility;