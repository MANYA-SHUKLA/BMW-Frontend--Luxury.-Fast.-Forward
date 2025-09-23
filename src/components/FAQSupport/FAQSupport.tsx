'use client';

import { useState } from 'react';
import styles from './FAQSupport.module.css';

const FAQSupport = () => {
  const [activeCategory, setActiveCategory] = useState('warranty');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { id: 'warranty', name: 'Warranty & Insurance', icon: '🛡️' },
    { id: 'accident', name: 'Accident Management', icon: '🚨' },
    { id: 'service', name: 'Service & Maintenance', icon: '🔧' },
    { id: 'financial', name: 'Financial Services', icon: '💰' },
    { id: 'technical', name: 'Technical Support', icon: '⚙️' },
    { id: 'general', name: 'General Questions', icon: '❓' }
  ];

  const faqData = {
    warranty: [
      {
        id: 1,
        question: 'What does the BMW warranty cover?',
        answer: 'The BMW warranty covers manufacturing defects and component failures for 2 years unlimited kilometers. This includes engine, transmission, electrical systems, and more. Regular maintenance is required to keep the warranty valid.'
      },
      {
        id: 2,
        question: 'How can I extend my BMW warranty?',
        answer: 'You can extend your BMW warranty up to 5 years through our Extended Warranty program. Contact your authorized BMW dealer before your standard warranty expires for seamless extension.'
      },
      {
        id: 3,
        question: 'Is roadside assistance included in the warranty?',
        answer: 'Yes, 24/7 roadside assistance is included for the warranty period. This covers towing, flat tire assistance, battery jump-start, and emergency fuel delivery.'
      },
      {
        id: 4,
        question: 'What voids the BMW warranty?',
        answer: 'Warranty may be voided by unauthorized modifications, improper maintenance, accident damage, or using non-genuine parts. Always service your BMW at authorized centers.'
      }
    ],
    accident: [
      {
        id: 5,
        question: 'What should I do immediately after an accident?',
        answer: '1. Ensure safety first\n2. Call police if required\n3. Exchange information with other party\n4. Take photos of damage\n5. Contact BMW Roadside Assistance\n6. Inform your insurance company'
      },
      {
        id: 6,
        question: 'How does BMW accident management work?',
        answer: 'BMW offers comprehensive accident management including towing to authorized repair centers, insurance coordination, genuine parts replacement, and quality-assured repairs by trained technicians.'
      },
      {
        id: 7,
        question: 'Can I choose my repair center after an accident?',
        answer: 'For insurance claims and warranty protection, we recommend using authorized BMW repair centers to ensure genuine parts and manufacturer standards are maintained.'
      }
    ],
    service: [
      {
        id: 8,
        question: 'How often should I service my BMW?',
        answer: 'BMW recommends service intervals based on Condition Based Service (CBS) system. Typically, oil service every 15,000 km or 1 year, and brake fluid every 2 years.'
      },
      {
        id: 9,
        question: 'What is included in BMW regular maintenance?',
        answer: 'Regular maintenance includes oil change, filter replacement, brake inspection, fluid checks, tire rotation, and comprehensive vehicle health check.'
      },
      {
        id: 10,
        question: 'Can I service my BMW at non-authorized centers?',
        answer: 'While possible, we recommend authorized centers for genuine parts, trained technicians, and to maintain your warranty coverage.'
      }
    ],
    financial: [
      {
        id: 11,
        question: 'What financing options are available?',
        answer: 'BMW Financial Services offers various options including loans with competitive interest rates, leasing programs, and balloon payment schemes tailored to your needs.'
      },
      {
        id: 12,
        question: 'How can I calculate my EMI?',
        answer: 'Use our online EMI calculator on the website or visit any BMW dealership for personalized financial planning and EMI calculations.'
      }
    ],
    technical: [
      {
        id: 13,
        question: 'How do I use BMW ConnectedDrive?',
        answer: 'Download the My BMW app, register your vehicle, and follow the setup instructions. Features include remote services, real-time traffic, and emergency call.'
      },
      {
        id: 14,
        question: 'What to do if my iDrive system has issues?',
        answer: 'Try restarting the system by holding the volume button for 30 seconds. If issues persist, visit an authorized service center for software updates.'
      }
    ],
    general: [
      {
        id: 15,
        question: 'How do I find the nearest BMW dealer?',
        answer: 'Use our dealer locator on the website or call our customer care at 1800-102-1234 for assistance in finding the nearest authorized dealership.'
      },
      {
        id: 16,
        question: 'What are BMW operating hours in India?',
        answer: 'Dealerships typically operate from 9:00 AM to 7:00 PM, 7 days a week. Service centers may have different timings for specific services.'
      }
    ]
  };

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const supportContacts = [
    {
      department: 'Customer Care',
      phone: '1800-102-1234',
      email: 'customer.care@bmw.in',
      hours: '24/7'
    },
    {
      department: 'Roadside Assistance',
      phone: '1800-102-5678',
      email: 'assistance@bmw.in',
      hours: '24/7'
    },
    {
      department: 'Technical Support',
      phone: '1800-102-9012',
      email: 'technical@bmw.in',
      hours: '8 AM - 8 PM'
    },
    {
      department: 'Financial Services',
      phone: '1800-102-3456',
      email: 'finance@bmw.in',
      hours: '9 AM - 6 PM'
    }
  ];

  const currentFAQs = faqData[activeCategory as keyof typeof faqData] || [];

  return (
    <section id="faq-support" className={styles.faqSupport}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>FAQ & Customer Support</h2>
          <p>Find answers to common questions and get support for your BMW ownership experience.</p>
        </div>

        <div className={styles.content}>
   
          <div className={styles.categoriesSidebar}>
            <h3>Support Categories</h3>
            <div className={styles.categoryList}>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`${styles.categoryItem} ${activeCategory === category.id ? styles.active : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <span className={styles.categoryName}>{category.name}</span>
                  <span className={styles.faqCount}>
                    {faqData[category.id as keyof typeof faqData]?.length || 0}
                  </span>
                </button>
              ))}
            </div>

            
            <div className={styles.quickSupport}>
              <h4>Need Immediate Help?</h4>
              <div className={styles.emergencyContact}>
                <div className={styles.emergencyIcon}>🚨</div>
                <div>
                  <div className={styles.emergencyTitle}>Roadside Assistance</div>
                  <div className={styles.emergencyNumber}>1800-102-5678</div>
                </div>
              </div>
              <p>24/7 support for breakdowns, accidents, and emergencies</p>
            </div>
          </div>

        
          <div className={styles.faqContent}>
            <div className={styles.categoryHeader}>
              <h3>
                {categories.find(c => c.id === activeCategory)?.icon}
                {categories.find(c => c.id === activeCategory)?.name}
              </h3>
              <p>Common questions about {categories.find(c => c.id === activeCategory)?.name.toLowerCase()}</p>
            </div>

            <div className={styles.faqList}>
              {currentFAQs.map(faq => (
                <div key={faq.id} className={styles.faqItem}>
                  <button
                    className={`${styles.faqQuestion} ${openItems.includes(faq.id) ? styles.open : ''}`}
                    onClick={() => toggleItem(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <span className={styles.arrow}>▼</span>
                  </button>
                  {openItems.includes(faq.id) && (
                    <div className={styles.faqAnswer}>
                      {faq.answer.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

          
            <div className={styles.supportTools}>
              <h4>Support Tools & Resources</h4>
              <div className={styles.toolsGrid}>
                <div className={styles.toolCard}>
                  <div className={styles.toolIcon}>📋</div>
                  <h5>Warranty Check</h5>
                  <p>Verify your vehicle warranty status and coverage</p>
                  <button className={styles.toolButton}>Check Warranty</button>
                </div>
                <div className={styles.toolCard}>
                  <div className={styles.toolIcon}>🛠️</div>
                  <h5>Service Calculator</h5>
                  <p>Estimate service costs for your BMW model</p>
                  <button className={styles.toolButton}>Calculate Cost</button>
                </div>
                <div className={styles.toolCard}>
                  <div className={styles.toolIcon}>📱</div>
                  <h5>Download Manuals</h5>
                  <p>Access vehicle manuals and documentation</p>
                  <button className={styles.toolButton}>Download</button>
                </div>
                <div className={styles.toolCard}>
                  <div className={styles.toolIcon}>💬</div>
                  <h5>Live Chat</h5>
                  <p>Chat with our support team in real-time</p>
                  <button className={styles.toolButton}>Start Chat</button>
                </div>
              </div>
            </div>

         
            <div className={styles.contactSection}>
              <h4>Contact Support</h4>
              <div className={styles.contactGrid}>
                {supportContacts.map((contact, index) => (
                  <div key={index} className={styles.contactCard}>
                    <h5>{contact.department}</h5>
                    <div className={styles.contactInfo}>
                      <div className={styles.contactItem}>
                        <strong>Phone:</strong>
                        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                      </div>
                      <div className={styles.contactItem}>
                        <strong>Email:</strong>
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                      </div>
                      <div className={styles.contactItem}>
                        <strong>Hours:</strong>
                        <span>{contact.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSupport;