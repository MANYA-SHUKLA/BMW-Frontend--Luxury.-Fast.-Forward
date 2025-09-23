'use client';

import { useState } from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  const [email, setEmail] = useState<string>(''); // added type
  const [showPopup, setShowPopup] = useState<boolean>(false); // added type
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // added type

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { // typed event
    e.preventDefault();

    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real app, this would connect to a newsletter service
    console.log('Newsletter signup:', email);

    // Show success popup
    setShowPopup(true);
    setEmail('');
    setIsSubmitting(false);

    // Auto-hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <section className={styles.newsletter}>
        <div className={styles.luxuryBorder}></div>
        <div className={styles.accentLine}></div>

        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Stay Connected</h2>
            <p className={styles.sectionSubtitle}>
              Be the first to receive exclusive updates, new model announcements, 
              and special offers directly from BMW.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className={styles.emailInput}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className={styles.spinner}></div>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>

            <p className={styles.privacyNote}>
              By subscribing, you agree to our <a href="#privacy">Privacy Policy</a>. 
              You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {showPopup && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closePopup}>
              ×
            </button>

            <div className={styles.popupIcon}>✓</div>

            <h3 className={styles.popupTitle}>Subscription Successful!</h3>

            <p className={styles.popupMessage}>
              Thank you for subscribing to BMW updates. You'll receive exclusive news, 
              offers, and model announcements directly in your inbox.
            </p>

            <div className={styles.popupFeatures}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🎁</span>
                <span>Exclusive Offers</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🚗</span>
                <span>New Model Launches</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>⚡</span>
                <span>Event Invitations</span>
              </div>
            </div>

            <button className={styles.popupCTA} onClick={closePopup}>
              Continue Exploring
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Newsletter;
