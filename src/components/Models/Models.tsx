'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './Models.module.css';

const Models = () => {
  const [activeSeries, setActiveSeries] = useState('all');
  const carouselRef = useRef<HTMLDivElement>(null);

  const modelSeries = [
    {
      id: 'x-series',
      name: 'X Series',
      description: 'Sports Activity Vehicles',
      icon: '🚙',
      models: [
        {
          id: 1,
          name: 'BMW X1',
          price: '₹42.50 Lakh',
          image: 'https://static.motor.es/fotos-jato/bmw/uploads/bmw-x1-63c083ca75204.jpg',
          features: ['2.0L Turbo', '190 HP', '7-Speed DCT', 'Panoramic Sunroof'],
          series: 'x-series',
          electric: false
        },
        {
          id: 2,
          name: 'BMW X3',
          price: '₹62.90 Lakh',
          image: 'https://s.yimg.com/ny/api/res/1.2/PxtUbE8pNKbET1rM7zU4cg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk-/https://media.zenfs.com/en/the_drive_634/38514a26b8b2182be204a3b51d213e0a',
          features: ['2.0L Turbo', '248 HP', 'xDrive AWD', 'Adaptive Suspension'],
          series: 'x-series',
          electric: false
        },
        {
          id: 3,
          name: 'BMW X5',
          price: '₹79.90 Lakh',
          image: 'https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/3-series/gl/2025/X5_Website_banner_desktop_Apr%2025_X5_1680x756.jpg',
          features: ['3.0L Turbo', '335 HP', 'Luxury Interior', 'Air Suspension'],
          series: 'x-series',
          electric: false
        },
        {
          id: 4,
          name: 'BMW X7',
          price: '₹1.22 Crore',
          image: 'https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/3-series/gl/2025/X7_Website_banner_desktop_Apr%2025_X5_1680x756.jpg',
          features: ['3.0L Turbo', '335 HP', '7-Seater', 'Executive Lounge'],
          series: 'x-series',
          electric: false
        }
      ]
    },
    {
      id: '7-series',
      name: '7 Series',
      description: 'Flagship Luxury Sedan',
      icon: '🎩',
      models: [
        {
          id: 5,
          name: 'BMW 730Ld',
          price: '₹1.65 Crore',
          image: 'https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/3-series/gl/2025/X7_Website_banner_desktop_Apr%2025_X5_1680x756.jpg',
          features: ['3.0L Diesel', '265 HP', 'Long Wheelbase', 'Executive Lounge'],
          series: '7-series',
          electric: false
        },
        {
          id: 6,
          name: 'BMW i7',
          price: '₹1.95 Crore',
          image: 'https://img.autocarindia.com/ExtraImages/20230417070438_i7_M70.jpg?w=700&c=1',
          features: ['All-Electric', '544 HP', '31-inch Theater Screen', 'Executive Lounge'],
          series: '7-series',
          electric: true
        }
      ]
    },
    {
      id: '5-series',
      name: '5 Series',
      description: 'Executive Sedan',
      icon: '⚡',
      models: [
        {
          id: 7,
          name: 'BMW 530i',
          price: '₹67.90 Lakh',
          image: 'https://cdn.bigboytoyz.com/new-version/products/product/bmw-530i-lci-m-sport-white4.jpeg',
          features: ['2.0L Turbo', '248 HP', 'M Sport Package', 'Advanced Safety'],
          series: '5-series',
          electric: false
        }
      ]
    },
    {
      id: '3-series',
      name: '3 Series',
      description: 'Sports Sedan',
      icon: '🏎️',
      models: [
        {
          id: 8,
          name: 'BMW 330i',
          price: '₹45.90 Lakh',
          image: 'https://i.ytimg.com/vi/KMQBNMP1nZk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLArsNyoJSjvWbPITFjLvqoxihZ3KA',
          features: ['2.0L Turbo', '255 HP', 'M Sport', 'Digital Cockpit'],
          series: '3-series',
          electric: false
        },
        {
          id: 9,
          name: 'BMW M340i',
          price: '₹65.90 Lakh',
          image: 'https://www.team-bhp.com/carpics/2021-bmw-m340i/l/exterior/2021-bmw-m340i-xdrive-01.jpg',
          features: ['3.0L Turbo', '374 HP', 'M Performance', 'Sport Suspension'],
          series: '3-series',
          electric: false
        }
      ]
    },
    {
      id: 'electric',
      name: 'Electric Vehicles',
      description: 'BMW i Models',
      icon: '⚡',
      models: [
        {
          id: 10,
          name: 'BMW i4',
          price: '₹72.90 Lakh',
          image: 'https://i.cdn.newsbytesapp.com/images/14215221714016781.jpeg',
          features: ['All-Electric', '340 HP', '590 km Range', 'Fast Charging'],
          series: 'electric',
          electric: true
        },
        {
          id: 11,
          name: 'BMW iX',
          price: '₹1.21 Crore',
          image: 'https://motorz.me/wp-content/uploads/2023/10/1.jpg',
          features: ['All-Electric', '326 HP', '425 km Range', 'Shy Tech'],
          series: 'electric',
          electric: true
        },
        {
          id: 12,
          name: 'BMW iX3',
          price: '₹68.90 Lakh',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32uizuD_1zyErOEMCENluoXl8FJV52b1trQ&s',
          features: ['All-Electric', '286 HP', '460 km Range', 'xDrive'],
          series: 'electric',
          electric: true
        }
      ]
    }
  ];

  const allModels = modelSeries.flatMap(series => series.models);
  const filteredModels = activeSeries === 'all' ? allModels : allModels.filter(model =>
    activeSeries === 'electric' ? model.electric : model.series === activeSeries
  );

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="models" className={styles.models}>
      <div className={styles.luxuryAccent}></div>

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>BMW Model Explorer</h2>
          <p className={styles.sectionSubtitle}>
            Discover the complete range of BMW vehicles available in India. Filter by series or explore our electric lineup.
          </p>
        </div>

        {/* Series Filter */}
        <div className={styles.seriesFilter}>
          <button
            className={`${styles.filterButton} ${activeSeries === 'all' ? styles.active : ''}`}
            onClick={() => setActiveSeries('all')}
          >
            All Models
          </button>
          <button
            className={`${styles.filterButton} ${activeSeries === 'electric' ? styles.active : ''}`}
            onClick={() => setActiveSeries('electric')}
          >
            ⚡ Electric Vehicles
          </button>
          {modelSeries.filter(series => series.id !== 'electric').map((series) => (
            <button
              key={series.id}
              className={`${styles.filterButton} ${activeSeries === series.id ? styles.active : ''}`}
              onClick={() => setActiveSeries(series.id)}
            >
              {series.icon} {series.name}
            </button>
          ))}
        </div>

        {/* Series Info */}
        {activeSeries !== 'all' && activeSeries !== 'electric' && (
          <div className={styles.seriesInfo}>
            {modelSeries.find(series => series.id === activeSeries) && (
              <>
                <h3 className={styles.seriesName}>
                  {modelSeries.find(series => series.id === activeSeries)?.name}
                </h3>
                <p className={styles.seriesDescription}>
                  {modelSeries.find(series => series.id === activeSeries)?.description}
                </p>
              </>
            )}
          </div>
        )}

        {/* Electric Vehicles Highlight */}
        {activeSeries === 'electric' && (
          <div className={styles.electricHighlight}>
            <div className={styles.electricBadge}>⚡ BMW i</div>
            <h3 className={styles.electricTitle}>Electric Innovation</h3>
            <p className={styles.electricDesc}>
              Experience the future of driving with BMW&apos;s all-electric lineup. Zero emissions, maximum performance.
            </p>
          </div>
        )}

        {/* Models Grid */}
        <div className={styles.modelsGrid}>
          {filteredModels.map((car) => (
            <div key={car.id} className={`${styles.modelCard} ${car.electric ? styles.electric : ''}`}>
              {car.electric && <div className={styles.electricTag}>Electric</div>}
              <Image
                src={car.image}
                alt={car.name}
                width={400}
                height={250}
                className={styles.carImage}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg';
                }}
              />
              <div className={styles.carInfo}>
                <h3 className={styles.carName}>{car.name}</h3>
                <div className={styles.carPrice}>Starting at {car.price}</div>
                <ul className={styles.carFeatures}>
                  {car.features.map((feature, index) => (
                    <li key={index} className={styles.carFeature}>{feature}</li>
                  ))}
                </ul>
                <div className={styles.cardActions}>
                  <button className={styles.configureButton}>
                    Configure
                  </button>
                  <button className={styles.testDriveButton}>
                    Test Drive
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.indiaNote}>
          <div className={styles.indiaBadge}>🇮🇳 BMW India</div>
          <p>All prices are ex-showroom India. Contact your nearest BMW dealership for test drives and offers.</p>
        </div>
      </div>
    </section>
  );
};

export default Models;