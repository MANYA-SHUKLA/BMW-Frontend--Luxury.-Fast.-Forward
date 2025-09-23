'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'; 
import styles from './Anniversary.module.css';

const Anniversary = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const celebrationContent = {
    title: "50 YEARS OF COMFORTING THRILL SEEKERS",
    subtitle: "Celebrating Five Decades of BMW M Legacy",
    description: "Since 1972, BMW M has been defining the ultimate driving experience, blending luxury with adrenaline-pumping performance for thrill seekers worldwide.",
    milestones: [
      { year: "1972", event: "BMW Motorsport GmbH founded", highlight: "The beginning of the M legacy" },
      { year: "1978", event: "First M Car: M1", highlight: "The supercar that started it all" },
      { year: "1984", event: "M5 Debut", highlight: "The birth of the super sports sedan" },
      { year: "1986", event: "First M3", highlight: "Revolutionizing the sports coupe segment" },
      { year: "2000", event: "M3 CSL", highlight: "Lightweight performance masterpiece" },
      { year: "2010", event: "M5 with Twin-Turbo V8", highlight: "New era of M power" },
      { year: "2020", event: "First M Hybrid", highlight: "Performance meets sustainability" },
      { year: "2022", event: "50th Anniversary", highlight: "Five decades of M excellence" }
    ],
    videos: [
      {
        id: 1,
        title: "The M Legacy Begins",
        src: "https://player.vimeo.com/external/357274789.sd.mp4?s=af2a4e83fcb72f56b93eb65d8f0b3127d2f1bbf6&profile_id=164&oauth2_token_id=57447761",
        thumbnail: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
      },
      {
        id: 2,
        title: "M Power Evolution",
        src: "https://player.vimeo.com/external/357274789.sd.mp4?s=af2a4e83fcb72f56b93eb65d8f0b3127d2f1bbf6&profile_id=164&oauth2_token_id=57447761",
        thumbnail: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg"
      }
    ],
    stats: [
      { number: "50", label: "Years of Excellence" },
      { number: "100+", label: "M Models Created" },
      { number: "500+", label: "Championship Wins" },
      { number: "1M+", label: "Thrill Seekers Served" }
    ]
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3); 
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const featuredCars = [
    {
      name: "BMW M3 GTR",
      year: "2001",
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      description: "The legendary race car that dominated American Le Mans"
    },
    {
      name: "BMW M1 Procar",
      year: "1979",
      image: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
      description: "The first purpose-built M racing car"
    },
    {
      name: "BMW M8 GTE",
      year: "2018",
      image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      description: "Modern endurance racing masterpiece"
    }
  ];

  const toggleVideoPlayback = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + 3) % 3);
  };

  return (
    <section id="anniversary" className={styles.anniversary}>
    
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
      </div>

      <div className={styles.container}>
  
        <div className={styles.mainHeader}>
          <div className={styles.anniversaryBadge}>50th Anniversary</div>
          <h2 className={styles.mainTitle}>
            {celebrationContent.title}
          </h2>
          <p className={styles.mainSubtitle}>
            {celebrationContent.subtitle}
          </p>
          <p className={styles.mainDescription}>
            {celebrationContent.description}
          </p>
        </div>

        
        <div className={styles.slideshow}>
        
          <div className={styles.slideControls}>
            <button onClick={prevSlide} className={styles.controlButton}>
              ‹
            </button>
            <div className={styles.slideIndicators}>
              {[0, 1, 2].map(index => (
                <button
                  key={index}
                  className={`${styles.indicator} ${currentSlide === index ? styles.active : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            <button onClick={nextSlide} className={styles.controlButton}>
              ›
            </button>
          </div>

         
          <div className={`${styles.slide} ${currentSlide === 0 ? styles.active : ''}`}>
            <div className={styles.videoShowcase}>
              <div className={styles.videoContainer}>
                <video
                  className={styles.heroVideo}
                  autoPlay={isVideoPlaying}
                  muted
                  loop
                  playsInline
                  poster={celebrationContent.videos[0].thumbnail}
                >
                  <source src={celebrationContent.videos[0].src} type="video/mp4" />
                </video>
                <div className={styles.videoOverlay}></div>
                
            
                <div className={styles.videoControls}>
                  <button onClick={toggleVideoPlayback} className={styles.playButton}>
                    {isVideoPlaying ? '❚❚' : '▶'}
                  </button>
                  <span className={styles.videoTitle}>{celebrationContent.videos[0].title}</span>
                </div>
              </div>

              <div className={styles.videoContent}>
                <h3>The M Legacy Unfolded</h3>
                <p>Witness the evolution of BMW M through five decades of groundbreaking innovation and motorsport success.</p>
                <div className={styles.videoStats}>
                  {celebrationContent.stats.map((stat, index) => (
                    <div key={index} className={styles.videoStat}>
                      <div className={styles.statNumber}>{stat.number}</div>
                      <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.slide} ${currentSlide === 1 ? styles.active : ''}`}>
            <div className={styles.timelineSection}>
              <h3>Five Decades of M Excellence</h3>
              <div className={styles.timeline}>
                {celebrationContent.milestones.map((milestone, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                      <div className={styles.timelineYear}>{milestone.year}</div>
                      <div className={styles.timelineDot}></div>
                    </div>
                    <div className={styles.timelineContent}>
                      <h4>{milestone.event}</h4>
                      <p>{milestone.highlight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

      
          <div className={`${styles.slide} ${currentSlide === 2 ? styles.active : ''}`}>
            <div className={styles.featuredCarsSection}>
              <h3>Iconic M Machines</h3>
              <div className={styles.carsGrid}>
                {featuredCars.map((car, index) => (
                  <div key={index} className={styles.carCard}>
                    <div className={styles.carImageContainer}>
                      <img src={car.image} alt={car.name} className={styles.carImage} />
                      <div className={styles.carYear}>{car.year}</div>
                    </div>
                    <div className={styles.carInfo}>
                      <h4>{car.name}</h4>
                      <p>{car.description}</p>
                      <button className={styles.exploreButton}>Explore Legacy</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

       
        <div className={styles.celebrationCTA}>
          <div className={styles.ctaContent}>
            <h3>Join the Celebration</h3>
            <p>Experience the thrill of 50 years of M heritage with special anniversary editions and exclusive events.</p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimary}>Discover M Models</button>
              <button className={styles.ctaSecondary}>View Anniversary Events</button>
            </div>
          </div>
          <div className={styles.celebrationGraphic}>
            <div className={styles.logo50}>50</div>
            <div className={styles.mBadge}>M</div>
          </div>
        </div>

       
        <div className={styles.floatingElements}>
          <div className={styles.floatingText}>1972</div>
          <div className={styles.floatingText}>M Power</div>
          <div className={styles.floatingText}>2022</div>
          <div className={styles.floatingText}>50 Years</div>
        </div>
      </div>
    </section>
  );
};

export default Anniversary;