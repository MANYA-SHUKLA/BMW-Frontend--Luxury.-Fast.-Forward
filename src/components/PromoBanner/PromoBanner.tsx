'use client';

import { useState, useEffect } from 'react';
import styles from './PromoBanner.module.css';

const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const offers = [
    {
      title: 'Festival Special Offer',
      subtitle: 'Diwali Bonanza',
      discount: 'Save up to ₹5,00,000',
      emi: 'EMI starting at ₹45,999/month',
      validity: 'Valid until Nov 30, 2024',
      badge: 'Limited Time'
    },
    {
      title: 'Corporate Program',
      subtitle: 'Business Excellence',
      discount: 'Additional ₹2,00,000 corporate discount',
      emi: 'Special fleet pricing available',
      validity: 'For registered companies',
      badge: 'Corporate'
    },
    {
      title: 'Exchange Bonus',
      subtitle: 'Upgrade Your BMW',
      discount: 'Get ₹3,00,000 exchange bonus',
      emi: 'Easy old car valuation',
      validity: 'On select models',
      badge: 'Exchange'
    }
  ];

  const calculateTimeLeft = () => {
    const offerEndDate = new Date('2024-11-30T23:59:59');
    const now = new Date();
    const difference = offerEndDate.getTime() - now.getTime();

    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }
  };

  useEffect(() => {
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.promoBanner}>
      <div className={styles.luxuryBorder}></div>
      
      <div className={styles.container}>
        {/* Image Section */}
        <div className={styles.imageSection}>
          <img 
            src="https://images.pexels.com/photos/1209777/pexels-photo-1209777.jpeg" 
            alt="BMW Luxury Interior"
            className={styles.promoImage}
            onError={(e) => {
              e.currentTarget.src = 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg';
            }}
          />
          <div className={styles.imageOverlay}></div>
          
          {/* Countdown Timer */}
          <div className={styles.countdown}>
            <div className={styles.countdownTitle}>Offer Ends In</div>
            <div className={styles.timer}>
              <div className={styles.timeUnit}>
                <span className={styles.timeValue}>{timeLeft.days}</span>
                <span className={styles.timeLabel}>Days</span>
              </div>
              <div className={styles.timeUnit}>
                <span className={styles.timeValue}>{timeLeft.hours}</span>
                <span className={styles.timeLabel}>Hours</span>
              </div>
              <div className={styles.timeUnit}>
                <span className={styles.timeValue}>{timeLeft.minutes}</span>
                <span className={styles.timeLabel}>Minutes</span>
              </div>
              <div className={styles.timeUnit}>
                <span className={styles.timeValue}>{timeLeft.seconds}</span>
                <span className={styles.timeLabel}>Seconds</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={styles.contentSection}>
          <div className={styles.promoBadge}>Exclusive Offers</div>
          
          <h2 className={styles.promoTitle}>
            Special <span className={styles.highlight}>Finance Deals</span> for BMW India
          </h2>
          
          <p className={styles.promoDescription}>
            Avail exclusive financial benefits and special EMI schemes designed for Indian customers. 
            Limited period offers with incredible savings.
          </p>

          {/* Finance Offers */}
          <div className={styles.financeOffers}>
            <div className={styles.financeCard}>
              <div className={styles.financeIcon}>💳</div>
              <div className={styles.financeDetails}>
                <div className={styles.financeTitle}>Low Interest Rate</div>
                <div className={styles.financeRate}>1.99% APR*</div>
                <div className={styles.financeDesc}>For 36 months tenure</div>
              </div>
            </div>
            
            <div className={styles.financeCard}>
              <div className={styles.financeIcon}>📅</div>
              <div className={styles.financeDetails}>
                <div className={styles.financeTitle}>Flexible Tenure</div>
                <div className={styles.financeRate}>Up to 84 Months</div>
                <div className={styles.financeDesc}>Easy monthly payments</div>
              </div>
            </div>
          </div>
          
          {/* Special Offers Grid */}
          <div className={styles.offersGrid}>
            {offers.map((offer, index) => (
              <div key={index} className={styles.offerCard}>
                <div className={`${styles.offerBadge} ${styles[offer.badge.replace(' ', '')]}`}>
                  {offer.badge}
                </div>
                <h4 className={styles.offerTitle}>{offer.title}</h4>
                <p className={styles.offerSubtitle}>{offer.subtitle}</p>
                <div className={styles.offerDiscount}>{offer.discount}</div>
                <div className={styles.offerEmi}>{offer.emi}</div>
                <div className={styles.offerValidity}>{offer.validity}</div>
              </div>
            ))}
          </div>
          
          {/* EMI Calculator Preview */}
          <div className={styles.emiPreview}>
            <div className={styles.emiTitle}>Monthly EMI Examples</div>
            <div className={styles.emiExamples}>
              <div className={styles.emiExample}>
                <span>BMW 3 Series</span>
                <span>₹68,999/month</span>
              </div>
              <div className={styles.emiExample}>
                <span>BMW X1</span>
                <span>₹55,999/month</span>
              </div>
              <div className={styles.emiExample}>
                <span>BMW i4</span>
                <span>₹82,999/month</span>
              </div>
            </div>
          </div>
          
          <div className={styles.ctaContainer}>
            <button className={styles.ctaPrimary}>
              Calculate Your EMI
            </button>
            <button className={styles.ctaSecondary}>
              Download Brochure
            </button>
            <button className={styles.ctaTertiary}>
              Talk to Sales Expert
            </button>
          </div>

          <div className={styles.terms}>
            *Terms and conditions apply. Offers valid till stock lasts.
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;