'use client';

import { useState } from 'react';
import styles from './TestDrive.module.css';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  preferredModel: string;
  preferredDate: string;
  preferredTime: string;
  location: string;
  message: string;
}

const TestDrive = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredModel: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const bmwModels = [
    'BMW 3 Series',
    'BMW 5 Series', 
    'BMW 7 Series',
    'BMW X1',
    'BMW X3',
    'BMW X5',
    'BMW X7',
    'BMW i4',
    'BMW iX',
    'BMW i7'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const cities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad',
    'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Chandigarh'
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      preferredModel: '',
      preferredDate: '',
      preferredTime: '',
      location: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <section id="test-drive" className={styles.testDrive}>
        <div className={styles.container}>
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✓</div>
            <h2>Test Drive Booked Successfully!</h2>
            <p>Thank you {formData.fullName}! Your test drive for {formData.preferredModel} has been scheduled.</p>
            <div className={styles.bookingDetails}>
              <h3>Booking Details:</h3>
              <div className={styles.detailItem}>
                <span>Model:</span>
                <span>{formData.preferredModel}</span>
              </div>
              <div className={styles.detailItem}>
                <span>Date & Time:</span>
                <span>{formData.preferredDate} at {formData.preferredTime}</span>
              </div>
              <div className={styles.detailItem}>
                <span>Location:</span>
                <span>{formData.location}</span>
              </div>
              <div className={styles.detailItem}>
                <span>Contact:</span>
                <span>{formData.phone} | {formData.email}</span>
              </div>
            </div>
            <div className={styles.successActions}>
              <button onClick={resetForm} className={styles.bookAnother}>
                Book Another Test Drive
              </button>
              <button className={styles.contactDealer}>
                Contact Dealer Directly
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="test-drive" className={styles.testDrive}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Book a Test Drive</h2>
          <p>Experience the thrill of driving a BMW. Schedule your test drive at your nearest dealership.</p>
        </div>

        <div className={styles.content}>
          <div className={styles.formSection}>
            <form onSubmit={handleSubmit} className={styles.bookingForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="location">Preferred City *</label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select City</option>
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="preferredModel">Preferred Model *</label>
                  <select
                    id="preferredModel"
                    name="preferredModel"
                    value={formData.preferredModel}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Model</option>
                    {bmwModels.map(model => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="preferredDate">Preferred Date *</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="preferredTime">Preferred Time *</label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Time Slot</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Additional Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Schedule Test Drive
              </button>
            </form>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.infoCard}>
              <h3>Why Test Drive a BMW?</h3>
              <ul>
                <li>Experience BMW's legendary driving dynamics</li>
                <li>Feel the precision of German engineering</li>
                <li>Explore advanced technology features</li>
                <li>Personalized consultation with BMW experts</li>
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h3>What to Expect</h3>
              <ul>
                <li>30-45 minute test drive experience</li>
                <li>Expert product demonstration</li>
                <li>Flexible financing options discussion</li>
                <li>No obligation consultation</li>
              </ul>
            </div>

            <div className={styles.contactInfo}>
              <h3>Need Immediate Assistance?</h3>
              <p>Call our test drive hotline:</p>
              <div className={styles.phoneNumber}>80055-86588</div>
              <p>Available 9:00 AM - 7:00 PM, 7 days a week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestDrive;
