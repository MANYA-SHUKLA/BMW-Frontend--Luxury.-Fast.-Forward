'use client';

import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: 'https://www.facebook.com/BMWIndia'
    },
    {
      name: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: 'https://www.instagram.com/bmwindia'
    },
    {
      name: 'Twitter',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      url: 'https://twitter.com/BMWIndia'
    },
    {
      name: 'YouTube',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      url: 'https://www.youtube.com/user/BMWIndia'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: 'https://www.linkedin.com/company/bmw-india'
    }
  ];

  const customerSupport = [
    { name: 'Customer Care', href: 'tel:8005586588', icon: '📞', detail: 'Toll Free: 800-55-86-588' },
    { name: 'Roadside Assistance', href: 'tel:8005586588', icon: '🛟', detail: '24/7 Helpline: 800-55-86-588' },
    { name: 'Service Appointment', href: '#service-booking', icon: '🔧', detail: 'Book Online Service' },
    { name: 'BMW Emergency', href: 'tel:8005586588', icon: '🚨', detail: 'Emergency: 800-55-86-588' }
  ];

  const dealerInfo = [
    { name: 'Find a Dealer', href: '#dealer-locator', icon: '📍', detail: 'Locate Nearest BMW Dealer' },
    { name: 'Book Test Drive', href: '#test-drive', icon: '🚗', detail: 'Schedule Your Test Drive' },
    { name: 'Request Quote', href: '#quote', icon: '💰', detail: 'Get Personalized Quote' },
    { name: 'Corporate Sales', href: '#corporate', icon: '🏢', detail: 'Business & Fleet Solutions' }
  ];

  const contactInfo = [
    { name: 'BMW India Pvt. Ltd.', href: '#', icon: '🏢', detail: 'Gurugram, Haryana' },
    { name: 'Customer Email', href: 'mailto:shuklamanya99@gmail.com', icon: '✉️', detail: 'shuklamanya99@gmail.com' },
    { name: 'Sales Enquiry', href: 'mailto:shuklamanya99@gmail.com', icon: '💼', detail: 'shuklamanya99@gmail.com' },
    { name: 'Press Contact', href: 'mailto:shuklamanya99@gmail.com', icon: '📰', detail: 'press.india@bmw.com' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy', description: 'BMW India Data Protection' },
    { name: 'Cookie Policy', href: '/cookie-policy', description: 'Cookie Usage Information' },
    { name: 'Legal Disclaimer', href: '/legal-disclaimer', description: 'Terms & Conditions' },
    { name: 'Imprint', href: '/imprint', description: 'Company Information' },
    { name: 'Compliance', href: '/compliance', description: 'Regulatory Compliance' },
    { name: 'Recall Information', href: '/recalls', description: 'Vehicle Recall Details' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
      
        <div className={styles.footerContent}>
          
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <Image
                src="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1670245093434.svg"
                alt="BMW India Logo"
                className={styles.logoImg}
                width={80}
                height={80}
                priority
              />
            </div>
            <div className={styles.indiaBadge}>🇮🇳 BMW India</div>
            <p className={styles.tagline}>
              Experience the ultimate driving machine in India. Luxury, performance, and innovation
              crafted for Indian roads and driving conditions.
            </p>

         
            <div className={styles.socialSection}>
              <h4>Follow BMW India</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={styles.socialLink}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>


          <div className={styles.linksSection}>
            <h3>Customer Support</h3>
            <ul className={styles.footerLinks}>
              {customerSupport.map((item, index) => (
                <li key={index} className={styles.footerLink}>
                  <a href={item.href} className={styles.supportLink}>
                    <span className={styles.linkIcon}>{item.icon}</span>
                    <div className={styles.linkDetails}>
                      <span className={styles.linkTitle}>{item.name}</span>
                      <span className={styles.linkDetail}>{item.detail}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        
          <div className={styles.linksSection}>
            <h3>Dealer & Contact</h3>
            <ul className={styles.footerLinks}>
              {dealerInfo.map((item, index) => (
                <li key={index} className={styles.footerLink}>
                  <a href={item.href} className={styles.supportLink}>
                    <span className={styles.linkIcon}>{item.icon}</span>
                    <div className={styles.linkDetails}>
                      <span className={styles.linkTitle}>{item.name}</span>
                      <span className={styles.linkDetail}>{item.detail}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className={styles.contactInfo}>
              <h4>Contact Information</h4>
              {contactInfo.map((item, index) => (
                <div key={index} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{item.icon}</span>
                  <a href={item.href} className={styles.contactLink}>{item.detail}</a>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.linksSection}>
            <h3>Legal & Information</h3>
            <ul className={styles.footerLinks}>
              {legalLinks.map((link, index) => (
                <li key={index} className={styles.footerLink}>
                  <a href={link.href} className={styles.legalLinkItem}>
                    <span className={styles.legalTitle}>{link.name}</span>
                    <span className={styles.legalDesc}>{link.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

     
        <div className={styles.indiaInfo}>
          <div className={styles.indiaContent}>
            <h4>BMW India Operations</h4>
            <p>BMW India Pvt. Ltd. - Complete knock-down (CKD) operations in Chennai.
              Authorized dealerships across major Indian cities including Delhi, Mumbai,
              Bangalore, Chennai, Hyderabad, and more.</p>
          </div>
        </div>

      
        <div className={styles.footerBottom}>
          <div className={styles.copyrightSection}>
            <div className={styles.copyright}>
              © 2025 BMW India Pvt. Ltd. All rights reserved.
            </div>
            <div className={styles.regulatory}>
              BMW India | Registered Office: Gurugram, Haryana | CIN: U34102HR1996PTC036948
            </div>
            <div className={styles.attribution}>
              <span aria-hidden="true" className={styles.heart}>❤</span>
              <span>
                Made with love by <span className={styles.name}>Manya Shukla</span>
              </span>
            </div>
          </div>

          <div className={styles.legalSection}>
            <div className={styles.legalLinks}>
              {legalLinks.slice(0, 4).map((link, index) => (
                <a key={index} href={link.href} className={styles.legalLink}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <button onClick={scrollToTop} className={styles.backToTop}>
            <span>Back to Top</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;