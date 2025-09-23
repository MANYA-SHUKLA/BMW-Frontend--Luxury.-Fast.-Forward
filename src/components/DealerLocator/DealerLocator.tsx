'use client';

import { useState } from 'react';
import styles from './DealerLocator.module.css';

const DealerLocator = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const cities = [
    'All Cities', 'Delhi NCR', 'Mumbai', 'Bangalore', 'Chennai', 
    'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Chandigarh'
  ];

  const dealers = [
    {
      id: 1,
      name: 'BMW Deutsche Motoren',
      city: 'Delhi NCR',
      address: 'Plot No. 15, Udyog Vihar, Phase 4, Gurugram',
      phone: '011 4123 4567',
      email: 'delhi.sales@bmw.in',
      services: ['Sales', 'Service', 'Spare Parts', 'Body Shop'],
      timings: '9:00 AM - 7:00 PM',
      amenities: ['Test Drive', 'Café', 'Lounge', 'WiFi'],
      isPremium: true
    },
    {
      id: 2,
      name: 'BMW Infinity Cars',
      city: 'Mumbai',
      address: 'Western Express Highway, Andheri East, Mumbai',
      phone: '022 6789 1234',
      email: 'mumbai.sales@bmw.in',
      services: ['Sales', 'Service', 'Geniune Parts'],
      timings: '9:30 AM - 7:30 PM',
      amenities: ['Test Drive', 'Lounge'],
      isPremium: false
    },
    {
      id: 3,
      name: 'BMW Bavaria Motors',
      city: 'Bangalore',
      address: 'Lavelle Road, Shanthala Nagar, Bangalore',
      phone: '080 4567 8901',
      email: 'bangalore.sales@bmw.in',
      services: ['Sales', 'Service', 'Spare Parts', 'Body Shop', 'Insurance'],
      timings: '9:00 AM - 8:00 PM',
      amenities: ['Test Drive', 'Café', 'Business Center', 'WiFi'],
      isPremium: true
    },
    {
      id: 4,
      name: 'BMW Southern Motors',
      city: 'Chennai',
      address: 'Mount Road, Anna Salai, Chennai',
      phone: '044 2345 6789',
      email: 'chennai.sales@bmw.in',
      services: ['Sales', 'Service', 'Geniune Parts'],
      timings: '9:00 AM - 7:00 PM',
      amenities: ['Test Drive', 'Lounge'],
      isPremium: false
    },
    {
      id: 5,
      name: 'BMW Skyline Automobiles',
      city: 'Hyderabad',
      address: 'Banjara Hills, Road No. 12, Hyderabad',
      phone: '040 3456 7890',
      email: 'hyderabad.sales@bmw.in',
      services: ['Sales', 'Service', 'Spare Parts', 'Body Shop'],
      timings: '9:30 AM - 7:30 PM',
      amenities: ['Test Drive', 'Café', 'WiFi'],
      isPremium: true
    },
    {
      id: 6,
      name: 'BMW Eastern Motors',
      city: 'Kolkata',
      address: 'EM Bypass, Kolkata',
      phone: '033 4567 8901',
      email: 'kolkata.sales@bmw.in',
      services: ['Sales', 'Service', 'Geniune Parts'],
      timings: '9:00 AM - 7:00 PM',
      amenities: ['Test Drive', 'Lounge'],
      isPremium: false
    }
  ];

  const filteredDealers = dealers.filter(dealer => {
    const matchesCity = selectedCity === '' || selectedCity === 'All Cities' || dealer.city === selectedCity;
    const matchesSearch = dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dealer.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <section id="dealer-locator" className={styles.dealerLocator}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Find a BMW Dealer</h2>
          <p>Locate your nearest BMW dealership for sales, service, and test drives across India.</p>
        </div>

        <div className={styles.searchSection}>
          <div className={styles.searchBox}>
            <div className={styles.searchInput}>
              <input
                type="text"
                placeholder="Search by dealer name or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className={styles.searchIcon}>🔍</span>
            </div>
          </div>

          <div className={styles.cityFilter}>
            <label>Filter by City:</label>
            <select 
              value={selectedCity} 
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.dealersList}>
            <div className={styles.resultsInfo}>
              <span>{filteredDealers.length} dealers found</span>
              {selectedCity && selectedCity !== 'All Cities' && (
                <span>in {selectedCity}</span>
              )}
            </div>

            {filteredDealers.map(dealer => (
              <div key={dealer.id} className={`${styles.dealerCard} ${dealer.isPremium ? styles.premium : ''}`}>
                {dealer.isPremium && <div className={styles.premiumBadge}>Premium Dealer</div>}
                
                <div className={styles.dealerHeader}>
                  <h3>{dealer.name}</h3>
                  <span className={styles.cityTag}>{dealer.city}</span>
                </div>

                <div className={styles.dealerInfo}>
                  <div className={styles.infoItem}>
                    <span className={styles.icon}>📍</span>
                    <span>{dealer.address}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.icon}>📞</span>
                    <a href={`tel:${dealer.phone}`}>{dealer.phone}</a>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.icon}>✉️</span>
                    <a href={`mailto:${dealer.email}`}>{dealer.email}</a>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.icon}>🕒</span>
                    <span>{dealer.timings} (Mon-Sun)</span>
                  </div>
                </div>

                <div className={styles.servicesSection}>
                  <h4>Services Offered:</h4>
                  <div className={styles.servicesList}>
                    {dealer.services.map((service, index) => (
                      <span key={index} className={styles.serviceTag}>{service}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.amenitiesSection}>
                  <h4>Amenities:</h4>
                  <div className={styles.amenitiesList}>
                    {dealer.amenities.map((amenity, index) => (
                      <span key={index} className={styles.amenityTag}>{amenity}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.actionButtons}>
                  <button className={styles.primaryButton}>
                    Get Directions
                  </button>
                  <button className={styles.secondaryButton}>
                    Contact Dealer
                  </button>
                  <button className={styles.tertiaryButton}>
                    Book Test Drive
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.mapSection}>
            <div className={styles.mapPlaceholder}>
              <div className={styles.mapContent}>
                <h3>BMW Dealer Network</h3>
                <p>50+ authorized dealerships across India</p>
                <div className={styles.mapStats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>25</span>
                    <span className={styles.statLabel}>Cities</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>50+</span>
                    <span className={styles.statLabel}>Dealers</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>100+</span>
                    <span className={styles.statLabel}>Service Points</span>
                  </div>
                </div>
                <div className={styles.mapFeatures}>
                  <h4>All dealerships offer:</h4>
                  <ul>
                    <li>Authorized sales and service</li>
                    <li>Genuine BMW parts</li>
                    <li>Trained technicians</li>
                    <li>Roadside assistance</li>
                    <li>Warranty services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contactSection}>
          <div className={styles.contactCard}>
            <h3>Can&apos;t Find a Dealer Near You?</h3>
            <p>Contact BMW India directly for assistance in locating the nearest dealership or for corporate inquiries.</p>
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <span className={styles.contactIcon}>📞</span>
                <div>
                  <strong>Customer Care</strong>
                  <p>8005586588</p>
                </div>
              </div>
              <div className={styles.contactMethod}>
                <span className={styles.contactIcon}>✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>shuklamanya99@gmail.com</p>
                </div>
              </div>
              <div className={styles.contactMethod}>
                <span className={styles.contactIcon}>🕒</span>
                <div>
                  <strong>Working Hours</strong>
                  <p>9:00 AM - 7:00 PM (All days)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealerLocator;