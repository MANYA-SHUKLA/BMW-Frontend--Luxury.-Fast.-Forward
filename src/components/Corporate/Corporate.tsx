'use client';

import { useState } from 'react';
import styles from './Corporate.module.css';

const Corporate = () => {
  const [activeTab, setActiveTab] = useState('about');

  const aboutSections = [
    {
      title: 'BMW India Overview',
      content: 'BMW India Pvt. Ltd. is a 100% subsidiary of the BMW Group. Established in 2007, we have been setting benchmarks in the Indian luxury automotive industry with our commitment to innovation, quality, and customer satisfaction.',
      stats: [
        { value: '15+', label: 'Years in India' },
        { value: '50+', label: 'Dealerships' },
        { value: '25+', label: 'Cities' },
        { value: '100+', label: 'Service Points' }
      ]
    },
    {
      title: 'Manufacturing Facility',
      content: 'Our state-of-the-art manufacturing plant in Chennai operates as a complete knock-down (CKD) unit, assembling various BMW models with the same precision and quality standards as our global facilities.',
      features: [
        'Annual capacity of 14,000 units',
        'World-class manufacturing processes',
        'Local sourcing of components',
        'Skilled Indian workforce'
      ]
    },
    {
      title: 'Management Team',
      content: 'Led by experienced professionals with deep understanding of the Indian market and global automotive expertise.',
      team: [
        { name: 'Mr. Vikram Pawah', position: 'President, BMW Group India' },
        { name: 'Mr. Alexander Barakhlo', position: 'Vice President, Sales' },
        { name: 'Mr. Suresh K', position: 'Vice President, Operations' }
      ]
    }
  ];

  const careerOpportunities = [
    {
      department: 'Sales & Marketing',
      jobs: [
        { title: 'Sales Executive', location: 'Delhi, Mumbai, Bangalore', type: 'Full-time' },
        { title: 'Marketing Manager', location: 'Gurugram', type: 'Full-time' },
        { title: 'Digital Marketing Specialist', location: 'Gurugram', type: 'Full-time' }
      ]
    },
    {
      department: 'Technical & Service',
      jobs: [
        { title: 'Service Technician', location: 'Multiple Locations', type: 'Full-time' },
        { title: 'Quality Engineer', location: 'Chennai', type: 'Full-time' },
        { title: 'Technical Trainer', location: 'Gurugram', type: 'Full-time' }
      ]
    },
    {
      department: 'Corporate Functions',
      jobs: [
        { title: 'HR Business Partner', location: 'Gurugram', type: 'Full-time' },
        { title: 'Finance Analyst', location: 'Gurugram', type: 'Full-time' },
        { title: 'IT Specialist', location: 'Gurugram', type: 'Full-time' }
      ]
    }
  ];

  const pressReleases = [
    {
      title: 'BMW India Launches New 7 Series',
      date: '2024-11-15',
      summary: 'BMW India introduces the all-new 7 Series with advanced features and luxury appointments.',
      category: 'Product Launch'
    },
    {
      title: 'BMW Group India Reports Record Sales',
      date: '2024-10-28',
      summary: 'Q3 2024 sales growth of 25% driven by strong demand for electric vehicles.',
      category: 'Financial Results'
    },
    {
      title: 'BMW India Expands Charging Network',
      date: '2024-09-12',
      summary: '50 new charging stations installed across major highways in India.',
      category: 'Infrastructure'
    }
  ];

  const governanceInfo = {
    compliance: [
      'Code of Conduct for employees',
      'Anti-bribery and corruption policies',
      'Data protection and privacy compliance',
      'Environmental regulations adherence'
    ],
    sustainability: [
      'Carbon-neutral manufacturing targets',
      'Water conservation initiatives',
      'Waste management and recycling',
      'Community development programs'
    ],
    csr: [
      'Road safety awareness campaigns',
      'Skill development programs',
      'Environmental conservation projects',
      'Healthcare initiatives'
    ]
  };

  const foundationActivities = [
    {
      program: 'BMW Joy Town',
      description: 'Urban development initiative focusing on sustainable city planning',
      impact: '10 cities, 50,000+ beneficiaries'
    },
    {
      program: 'Young Leaders Program',
      description: 'Leadership development for young Indian professionals',
      impact: '500+ participants trained'
    },
    {
      program: 'Sustainable Mobility Research',
      description: 'Funding research in electric and sustainable transportation',
      impact: '15 research projects supported'
    }
  ];

  return (
    <section id="corporate" className={styles.corporate}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>BMW Group India</h2>
          <p>Driving excellence in the Indian automotive landscape through innovation, quality, and sustainable growth.</p>
        </div>

        <div className={styles.tabNavigation}>
          <button
            className={`${styles.tabButton} ${activeTab === 'about' ? styles.active : ''}`}
            onClick={() => setActiveTab('about')}
          >
            🏢 About BMW India
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'careers' ? styles.active : ''}`}
            onClick={() => setActiveTab('careers')}
          >
            💼 Careers
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'governance' ? styles.active : ''}`}
            onClick={() => setActiveTab('governance')}
          >
            ⚖️ Corporate Governance
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'press' ? styles.active : ''}`}
            onClick={() => setActiveTab('press')}
          >
            📰 Press & Media
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'foundation' ? styles.active : ''}`}
            onClick={() => setActiveTab('foundation')}
          >
            🌱 BMW Foundation
          </button>
        </div>

        <div className={styles.tabContent}>

          {activeTab === 'about' && (
            <div className={styles.aboutSection}>
              <div className={styles.heroSection}>
                <div className={styles.heroContent}>
                  <h3>Pioneering Luxury Mobility in India</h3>
                  <p>Since 2007, BMW India has been redefining the luxury automotive experience with German engineering excellence tailored for Indian roads and preferences.</p>
                  <img
                    src="https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/5-Series/10182/1750747451665/front-left-side-47.jpg"
                    alt="BMW luxury car in India"
                    style={{ width: '100%', height: 'auto', borderRadius: '12px', marginTop: '12px' }}
                  />
                </div>
                <div className={styles.heroStats}>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>85,000+</div>
                    <div className={styles.statLabel}>BMWs on Indian Roads</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>2,500+</div>
                    <div className={styles.statLabel}>Employees</div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statNumber}>₹2,000+ Cr</div>
                    <div className={styles.statLabel}>Investment in India</div>
                  </div>
                </div>
              </div>

              {aboutSections.map((section, index) => (
                <div key={index} className={styles.sectionBlock}>
                  <h4>{section.title}</h4>
                  <p>{section.content}</p>

                  {section.stats && (
                    <div className={styles.statsGrid}>
                      {section.stats.map((stat, statIndex) => (
                        <div key={statIndex} className={styles.statItem}>
                          <div className={styles.statValue}>{stat.value}</div>
                          <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.features && (
                    <ul className={styles.featuresList}>
                      {section.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  )}

                  {section.team && (
                    <div className={styles.teamGrid}>
                      {section.team.map((member, memberIndex) => (
                        <div key={memberIndex} className={styles.teamMember}>
                          <div className={styles.memberName}>{member.name}</div>
                          <div className={styles.memberPosition}>{member.position}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className={styles.contactSection}>
                <h4>Corporate Office</h4>
                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <strong>BMW India Pvt. Ltd.</strong>
                    <p>Plot No. 13, Sector 32, Gurugram</p>
                    <p>Haryana - 122001, India</p>
                  </div>
                  <div className={styles.contactItem}>
                    <strong>Contact Information</strong>
                    <p>Phone: +91-800-55-56-588</p>
                    <p>Email: shukamanya99@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        
          {activeTab === 'careers' && (
            <div className={styles.careersSection}>
              <div className={styles.careersIntro}>
                <h3>Build Your Career with BMW India</h3>
                <p>Join our team of passionate professionals and be part of the luxury automotive revolution in India.</p>
              </div>

              <div className={styles.benefitsSection}>
                <h4>Employee Benefits</h4>
                <div className={styles.benefitsGrid}>
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>💰</div>
                    <h5>Competitive Compensation</h5>
                    <p>Industry-leading salary packages and performance bonuses</p>
                  </div>
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>🏥</div>
                    <h5>Health & Wellness</h5>
                    <p>Comprehensive health insurance for you and your family</p>
                  </div>
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>🎓</div>
                    <h5>Learning & Development</h5>
                    <p>Global training programs and skill enhancement opportunities</p>
                  </div>
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>🚗</div>
                    <h5>Employee Car Program</h5>
                    <p>Special benefits on BMW vehicle purchases and leases</p>
                  </div>
                </div>
              </div>

              <div className={styles.jobsSection}>
                <h4>Current Openings</h4>
                {careerOpportunities.map((dept, deptIndex) => (
                  <div key={deptIndex} className={styles.departmentSection}>
                    <h5>{dept.department}</h5>
                    <div className={styles.jobsList}>
                      {dept.jobs.map((job, jobIndex) => (
                        <div key={jobIndex} className={styles.jobCard}>
                          <div className={styles.jobInfo}>
                            <div className={styles.jobTitle}>{job.title}</div>
                            <div className={styles.jobMeta}>
                              <span className={styles.jobLocation}>{job.location}</span>
                              <span className={styles.jobType}>{job.type}</span>
                            </div>
                          </div>
                          <button className={styles.applyButton}>Apply Now</button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.applicationProcess}>
                <h4>Application Process</h4>
                <div className={styles.processSteps}>
                  <div className={styles.processStep}>
                    <div className={styles.stepNumber}>1</div>
                    <div className={styles.stepContent}>
                      <strong>Online Application</strong>
                      <p>Submit your application through our career portal</p>
                    </div>
                  </div>
                  <div className={styles.processStep}>
                    <div className={styles.stepNumber}>2</div>
                    <div className={styles.stepContent}>
                      <strong>Screening</strong>
                      <p>Initial review by our HR team</p>
                    </div>
                  </div>
                  <div className={styles.processStep}>
                    <div className={styles.stepNumber}>3</div>
                    <div className={styles.stepContent}>
                      <strong>Interviews</strong>
                      <p>Technical and HR interviews</p>
                    </div>
                  </div>
                  <div className={styles.processStep}>
                    <div className={styles.stepNumber}>4</div>
                    <div className={styles.stepContent}>
                      <strong>Offer</strong>
                      <p>Job offer and onboarding process</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        
          {activeTab === 'governance' && (
            <div className={styles.governanceSection}>
              <div className={styles.governanceIntro}>
                <h3>Ethical Business Practices</h3>
                <p>BMW India is committed to the highest standards of corporate governance, transparency, and ethical conduct.</p>
              </div>

              <div className={styles.complianceSection}>
                <h4>Compliance & Ethics</h4>
                <div className={styles.complianceGrid}>
                  {governanceInfo.compliance.map((item, index) => (
                    <div key={index} className={styles.complianceItem}>
                      <div className={styles.complianceIcon}>✅</div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.sustainabilitySection}>
                <h4>Sustainability Initiatives</h4>
                <div className={styles.sustainabilityGrid}>
                  {governanceInfo.sustainability.map((item, index) => (
                    <div key={index} className={styles.sustainabilityCard}>
                      <h5>{item.split(':')[0]}</h5>
                      <p>{item.split(':')[1] || item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.csrSection}>
                <h4>Corporate Social Responsibility</h4>
                <div className={styles.csrGrid}>
                  {governanceInfo.csr.map((item, index) => (
                    <div key={index} className={styles.csrCard}>
                      <div className={styles.csrIcon}>🌍</div>
                      <div className={styles.csrContent}>
                        <h5>{item}</h5>
                        <p>Making a positive impact on Indian society</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'press' && (
            <div className={styles.pressSection}>
              <div className={styles.pressIntro}>
                <h3>Press & Media Center</h3>
                <p>Latest news, press releases, and media resources from BMW India.</p>
              </div>

              <div className={styles.pressReleases}>
                <h4>Latest Press Releases</h4>
                <div className={styles.releasesList}>
                  {pressReleases.map((release, index) => (
                    <div key={index} className={styles.releaseCard}>
                      <div className={styles.releaseHeader}>
                        <span className={styles.releaseCategory}>{release.category}</span>
                        <span className={styles.releaseDate}>{new Date(release.date).toLocaleDateString()}</span>
                      </div>
                      <h5>{release.title}</h5>
                      <p>{release.summary}</p>
                      <button className={styles.readMoreButton}>Read Full Release</button>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.mediaResources}>
                <h4>Media Resources</h4>
                <div className={styles.resourcesGrid}>
                  <div className={styles.resourceCard}>
                    <div className={styles.resourceIcon}>📸</div>
                    <h5>Press Photos</h5>
                    <p>High-resolution images of BMW models and events</p>
                    <button className={styles.downloadButton}>Download Kit</button>
                  </div>
                  <div className={styles.resourceCard}>
                    <div className={styles.resourceIcon}>📊</div>
                    <h5>Company Facts</h5>
                    <p>Key statistics and corporate information</p>
                    <button className={styles.downloadButton}>Download PDF</button>
                  </div>
                  <div className={styles.resourceCard}>
                    <div className={styles.resourceIcon}>👥</div>
                    <h5>Media Contacts</h5>
                    <p>Get in touch with our press team</p>
                    <button className={styles.contactButton}>View Contacts</button>
                  </div>
                </div>
              </div>
            </div>
          )}

        
          {activeTab === 'foundation' && (
            <div className={styles.foundationSection}>
              <div className={styles.foundationIntro}>
                <h3>BMW Foundation in India</h3>
                <p>Driving positive change through sustainable initiatives and community development programs.</p>
              </div>

              <div className={styles.foundationPrograms}>
                <h4>Our Programs</h4>
                <div className={styles.programsGrid}>
                  {foundationActivities.map((program, index) => (
                    <div key={index} className={styles.programCard}>
                      <h5>{program.program}</h5>
                      <p>{program.description}</p>
                      <div className={styles.programImpact}>
                        <strong>Impact:</strong> {program.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.partnerships}>
                <h4>Strategic Partnerships</h4>
                <div className={styles.partnersList}>
                  <div className={styles.partnerItem}>
                    <strong>Government of India</strong>
                    <span>Skill Development Initiatives</span>
                  </div>
                  <div className={styles.partnerItem}>
                    <strong>UN Habitat</strong>
                    <span>Sustainable Urban Development</span>
                  </div>
                  <div className={styles.partnerItem}>
                    <strong>IIT Delhi</strong>
                    <span>Mobility Research</span>
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

export default Corporate;