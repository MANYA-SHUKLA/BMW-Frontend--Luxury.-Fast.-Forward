'use client';

import { useState } from 'react';
import styles from './ServiceCenter.module.css';

const ServiceCenter = () => {
  const [activeTab, setActiveTab] = useState('service-booking');
  const [serviceForm, setServiceForm] = useState({
    vehicleModel: '',
    registrationNumber: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    customerName: '',
    phone: '',
    email: '',
    serviceRequirements: ''
  });

  const serviceTypes = [
    'Regular Maintenance',
    'Oil Change',
    'Brake Service',
    'Tire Replacement',
    'Battery Check',
    'AC Service',
    'Electrical Repair',
    'Body Repair',
    'Software Update',
    'Recall Service'
  ];

  const maintenancePackages = [
    {
      name: 'Basic Care',
      price: '₹15,000',
      duration: '1 Year',
      services: [
        'Engine Oil Change',
        'Oil Filter Replacement',
        'Vehicle Inspection',
        'Brake Fluid Check',
        'Tire Rotation'
      ],
      popular: false
    },
    {
      name: 'Comprehensive Care',
      price: '₹35,000',
      duration: '2 Years',
      services: [
        'All Basic Care Services',
        'Air Filter Replacement',
        'Fuel Filter Check',
        'Spark Plug Replacement',
        'AC Filter Cleaning',
        'Battery Check'
      ],
      popular: true
    },
    {
      name: 'Ultimate Care+',
      price: '₹60,000',
      duration: '3 Years',
      services: [
        'All Comprehensive Services',
        'Brake Pad Replacement',
        'Wheel Alignment',
        'Transmission Service',
        'Software Updates',
        '24/7 Roadside Assistance'
      ],
      popular: false
    }
  ];

  const warrantyInfo = {
    standard: '2 years unlimited kilometers',
    extended: 'Up to 5 years extended warranty available',
    roadside: '24/7 Roadside Assistance included',
    conditions: 'Covers manufacturing defects and component failures'
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setServiceForm({
      ...serviceForm,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    alert('Service appointment booked successfully! You will receive a confirmation email.');
    setServiceForm({
      vehicleModel: '',
      registrationNumber: '',
      serviceType: '',
      preferredDate: '',
      preferredTime: '',
      customerName: '',
      phone: '',
      email: '',
      serviceRequirements: ''
    });
  };

  return (
    <section id="service-center" className={styles.serviceCenter}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>BMW Service & Maintenance</h2>
          <p>Professional service and maintenance for your BMW. Keep your vehicle in perfect condition with genuine parts and expert technicians.</p>
        </div>

        <div className={styles.tabNavigation}>
          <button 
            className={`${styles.tabButton} ${activeTab === 'service-booking' ? styles.active : ''}`}
            onClick={() => setActiveTab('service-booking')}
          >
            🔧 Book Service
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'maintenance' ? styles.active : ''}`}
            onClick={() => setActiveTab('maintenance')}
          >
            ⚙️ Maintenance Packages
          </button>
          <button 
            className={`${styles.tabButton} ${activeTab === 'warranty' ? styles.active : ''}`}
            onClick={() => setActiveTab('warranty')}
          >
            🛡️ Warranty Info
          </button>
        </div>

        <div className={styles.tabContent}>
          {/* Service Booking Tab */}
          {activeTab === 'service-booking' && (
            <div className={styles.serviceBooking}>
              <div className={styles.bookingFormSection}>
                <h3>Book Your Service Appointment</h3>
                <form onSubmit={handleServiceSubmit} className={styles.serviceForm}>
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="vehicleModel">Vehicle Model *</label>
                      <select
                        id="vehicleModel"
                        name="vehicleModel"
                        value={serviceForm.vehicleModel}
                        onChange={handleServiceChange}
                        required
                      >
                        <option value="">Select Model</option>
                        <option value="3 Series">BMW 3 Series</option>
                        <option value="5 Series">BMW 5 Series</option>
                        <option value="7 Series">BMW 7 Series</option>
                        <option value="X1">BMW X1</option>
                        <option value="X3">BMW X3</option>
                        <option value="X5">BMW X5</option>
                        <option value="i4">BMW i4</option>
                        <option value="iX">BMW iX</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="registrationNumber">Registration Number *</label>
                      <input
                        type="text"
                        id="registrationNumber"
                        name="registrationNumber"
                        value={serviceForm.registrationNumber}
                        onChange={handleServiceChange}
                        placeholder="e.g., DL01AB1234"
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="serviceType">Service Type *</label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={serviceForm.serviceType}
                        onChange={handleServiceChange}
                        required
                      >
                        <option value="">Select Service Type</option>
                        {serviceTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="preferredDate">Preferred Date *</label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={serviceForm.preferredDate}
                        onChange={handleServiceChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="preferredTime">Preferred Time *</label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={serviceForm.preferredTime}
                        onChange={handleServiceChange}
                        required
                      >
                        <option value="">Select Time</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="customerName">Your Name *</label>
                      <input
                        type="text"
                        id="customerName"
                        name="customerName"
                        value={serviceForm.customerName}
                        onChange={handleServiceChange}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={serviceForm.phone}
                        onChange={handleServiceChange}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={serviceForm.email}
                        onChange={handleServiceChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="serviceRequirements">Service Requirements</label>
                    <textarea
                      id="serviceRequirements"
                      name="serviceRequirements"
                      value={serviceForm.serviceRequirements}
                      onChange={handleServiceChange}
                      rows={4}
                      placeholder="Describe any specific issues or requirements..."
                    />
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    Book Service Appointment
                  </button>
                </form>
              </div>

              <div className={styles.serviceBenefits}>
                <h3>Why Choose BMW Service?</h3>
                <div className={styles.benefitsGrid}>
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>🔧</div>
                    <h4>Genuine Parts</h4>
                    <p>Only original BMW parts for optimal performance and longevity</p>
                  </div>
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>👨‍🔧</div>
                    <h4>Expert Technicians</h4>
                    <p>BMW-trained professionals with specialized tools and knowledge</p>
                  </div>
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>⚡</div>
                    <h4>Quick Service</h4>
                    <p>Efficient service processes to minimize your waiting time</p>
                  </div>
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>🛡️</div>
                    <h4>Warranty Protected</h4>
                    <p>Service that maintains your vehicle&apos;s warranty coverage</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Maintenance Packages Tab */}
          {activeTab === 'maintenance' && (
            <div className={styles.maintenancePackages}>
              <h3>BMW Maintenance Packages</h3>
              <p className={styles.packageSubtitle}>Choose the perfect maintenance plan for your BMW</p>
              
              <div className={styles.packagesGrid}>
                {maintenancePackages.map((pkg, index) => (
                  <div key={index} className={`${styles.packageCard} ${pkg.popular ? styles.popular : ''}`}>
                    {pkg.popular && <div className={styles.popularBadge}>Most Popular</div>}
                    
                    <div className={styles.packageHeader}>
                      <h4>{pkg.name}</h4>
                      <div className={styles.packagePrice}>{pkg.price}</div>
                      <div className={styles.packageDuration}>{pkg.duration}</div>
                    </div>

                    <ul className={styles.packageFeatures}>
                      {pkg.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>{service}</li>
                      ))}
                    </ul>

                    <button className={styles.packageButton}>
                      Select Package
                    </button>
                  </div>
                ))}
              </div>

              <div className={styles.packageInfo}>
                <h4>Package Benefits</h4>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>💰</span>
                    <div>
                      <strong>Cost Effective</strong>
                      <p>Save up to 20% compared to individual services</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>📅</span>
                    <div>
                      <strong>Scheduled Maintenance</strong>
                      <p>Never miss important service intervals</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>🎯</span>
                    <div>
                      <strong>Priority Service</strong>
                      <p>Get priority scheduling at service centers</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>🚗</span>
                    <div>
                      <strong>Loaner Vehicle</strong>
                      <p>Complimentary loaner car during service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Warranty Info Tab */}
          {activeTab === 'warranty' && (
            <div className={styles.warrantyInfo}>
              <h3>BMW Warranty Information</h3>
              
              <div className={styles.warrantyOverview}>
                <div className={styles.warrantyCard}>
                  <h4>Standard Warranty</h4>
                  <div className={styles.warrantyPeriod}>{warrantyInfo.standard}</div>
                  <p>Comprehensive coverage for peace of mind</p>
                </div>
                <div className={styles.warrantyCard}>
                  <h4>Extended Warranty</h4>
                  <div className={styles.warrantyPeriod}>{warrantyInfo.extended}</div>
                  <p>Extend your protection beyond standard terms</p>
                </div>
                <div className={styles.warrantyCard}>
                  <h4>Roadside Assistance</h4>
                  <div className={styles.warrantyPeriod}>{warrantyInfo.roadside}</div>
                  <p>24/7 support wherever you are in India</p>
                </div>
              </div>

              <div className={styles.coverageDetails}>
                <h4>What&apos;s Covered</h4>
                <div className={styles.coverageGrid}>
                  <div className={styles.coverageList}>
                    <h5>✅ Included</h5>
                    <ul>
                      <li>Engine and transmission</li>
                      <li>Electrical components</li>
                      <li>Air conditioning system</li>
                      <li>Fuel system</li>
                      <li>Braking system</li>
                    </ul>
                  </div>
                  <div className={styles.coverageList}>
                    <h5>❌ Not Included</h5>
                    <ul>
                      <li>Normal wear and tear</li>
                      <li>Tires and batteries</li>
                      <li>Accident damage</li>
                      <li>Modifications</li>
                      <li>Regular maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.warrantyContact}>
                <h4>Warranty Support</h4>
                <p>For warranty claims and support, contact BMW India warranty department:</p>
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <strong>Warranty Hotline:</strong>
                    <span>800-55-86-588</span>
                  </div>
                  <div className={styles.contactItem}>
                    <strong>Email:</strong>
                    <span>shuklamanya99@gmail.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <strong>Working Hours:</strong>
                    <span>8:00 AM - 8:00 PM (Mon-Sat)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceCenter;
