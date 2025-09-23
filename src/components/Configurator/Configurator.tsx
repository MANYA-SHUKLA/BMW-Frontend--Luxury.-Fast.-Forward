'use client';

import styles from './Configurator.module.css';

const Configurator = () => {
  const configuratorItems = [
    {
      id: 1,
      category: 'Sedan',
      title: 'Executive Sedans',
      description: 'Experience unparalleled comfort and performance with our luxury sedan lineup. Perfect for business and pleasure.',
      image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
      hoverTitle: 'Build Your Sedan',
      hoverSubtitle: 'Customize to Perfection'
    },
    {
      id: 2,
      category: 'SUV',
      title: 'Premium SUVs',
      description: 'Command the road with our powerful and spacious SUV collection. Luxury meets versatility in every model.',
      image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg',
      hoverTitle: 'Design Your SUV',
      hoverSubtitle: 'Tailored for Adventure'
    },
    {
      id: 3,
      category: 'Electric',
      title: 'Electric Range',
      description: 'Step into the future with our innovative electric vehicles. Sustainable luxury without compromise.',
      image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg',
      hoverTitle: 'Configure Electric',
      hoverSubtitle: 'Future-Ready Driving'
    }
  ];

  const handleBuildClick = (category: string) => {
    console.log(`Building ${category}`);
    
    alert(`Launching ${category} Configurator`);
  };

  return (
    <section className={styles.configurator}>
      <div className={styles.luxuryBorder}></div>
      <div className={styles.glowEffect}></div>
      
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Build Your BMW</h2>
          <p className={styles.sectionSubtitle}>
            Create your perfect vehicle with our advanced configurator. Choose from thousands of combinations 
            to match your style and preferences.
          </p>
        </div>

        <div className={styles.configuratorGrid}>
          {configuratorItems.map((item) => (
            <div 
              key={item.id} 
              className={styles.configuratorItem}
              onClick={() => handleBuildClick(item.category)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className={styles.configuratorImage}
                onError={(e) => {
                
                  const fallbacks = [
                    'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
                    'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg',
                    'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg'
                  ];
                  e.currentTarget.src = fallbacks[item.id - 1];
                }}
              />
              
              <div className={styles.overlay}></div>
              
             
              <div className={styles.content}>
                <div className={styles.category}>{item.category}</div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <button className={styles.ctaButton}>
                  Configure Now
                </button>
              </div>

         
              <div className={styles.hoverReveal}>
                <h3 className={styles.hoverTitle}>{item.hoverTitle}</h3>
                <p className={styles.hoverSubtitle}>{item.hoverSubtitle}</p>
              </div>

              <div className={styles.glowEffect}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Configurator;