'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Search from '../Search/Search';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationData = [
    {
      title: 'All Models',
      href: '#models',
      type: 'mega',
      columns: [
        {
          title: 'Series',
          links: ['1 Series', '2 Series', '3 Series', '4 Series', '5 Series', '6 Series', '7 Series', '8 Series']
        },
        {
          title: 'X Models', 
          links: ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7']
        },
        {
          title: 'M Models',
          links: ['M2', 'M3', 'M4', 'M5', 'M8', 'X3 M', 'X5 M', 'X6 M']
        },
        {
          title: 'i Models',
          links: ['i4', 'i7', 'iX', 'iX3']
        }
      ]
    },
    {
      title: 'Electric',
      href: '#electric',
      type: 'dropdown',
      links: [
        'BMW i4',
        'BMW i7', 
        'BMW iX',
        'BMW iX3',
        'Charging Solutions',
        'Sustainability',
        'Electromobility'
      ]
    },
    {
      title: 'Shop Online',
      href: '#shop',
      type: 'dropdown', 
      links: [
        'Build Your BMW',
        'Accessories',
        'Financial Services',
        'Test Drive Booking',
        'Find a Dealer',
        'Special Offers'
      ]
    },
    {
      title: 'More BMW',
      href: '#more',
      type: 'mega',
      columns: [
        {
          title: 'Financial Services',
          links: ['BMW Finance', 'Leasing Options', 'Insurance', 'Credit Calculator', 'Special Offers']
        },
        {
          title: 'Digital Services & Apps',
          links: ['My BMW App', 'ConnectedDrive', 'Remote Services', 'Digital Key', 'Over-the-Air Updates']
        },
        {
          title: 'Service & Maintenance',
          links: ['BMW Service', 'Maintenance Packages', 'Roadside Assistance', 'Warranty', 'Service Appointment']
        },
        {
          title: 'Technology & Innovation',
          links: ['BMW Operating System 8', 'Driver Assistance', 'Parking Assistant', 'Laser Light', 'Carbon Core']
        }
      ]
    },
    {
      title: 'BMW India',
      href: '#india',
      type: 'mega',
      columns: [
        {
          title: 'Business & Corporate',
          links: ['BMW Corporate', 'Fleet Management', 'Business Offers', 'Test Fleet', 'Partner Programs']
        },
        {
          title: 'Brand & Company',
          links: ['About BMW', 'Careers', 'Press', 'Sustainability', 'Compliance']
        },
        {
          title: 'BMW India Specific',
          links: ['Indian Models', 'Dealer Network', 'Service Centers', 'India News', 'Price List']
        },
        {
          title: 'Customer Care',
          links: ['Contact Us', 'Dealer Locator', 'Customer Service', 'Recall Information', 'Feedback']
        }
      ]
    }
  ];

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerSolid : styles.headerTransparent}`}>
      <nav className={styles.navContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="BMW Home">
          <img 
            src="https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1670245093434.svg" 
            alt="BMW Logo" 
            className={styles.logoImg}
          />
        </Link>

        {/* Navigation Links with Dropdowns */}
        <ul className={styles.navLinks}>
          {navigationData.map((item, index) => (
            <li 
              key={index} 
              className={styles.navItem}
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={item.href} className={styles.navLink}>
                {item.title}
              </a>
              
              {/* Dropdown Menu */}
              {activeDropdown === item.title && (
                <div className={item.type === 'mega' ? styles.megaDropdown : styles.dropdown}>
                  {item.type === 'mega' ? (
                    <div className={styles.megaDropdownContent}>
                      {item.columns?.map((column, colIndex) => (
                        <div key={colIndex} className={styles.megaColumn}>
                          <div className={styles.columnTitle}>{column.title}</div>
                          <ul className={styles.columnLinks}>
                            {column.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className={styles.dropdownLink}>
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className={styles.dropdownContent}>
                      {item.links?.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className={styles.dropdownLink}>
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side Icons - include Search component */}
        <div className={styles.navIcons}>
          <Search />
          
          <button className={styles.icon} aria-label="Account">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </button>
          
          <button className={styles.menuButton} aria-label="Menu">
            <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;