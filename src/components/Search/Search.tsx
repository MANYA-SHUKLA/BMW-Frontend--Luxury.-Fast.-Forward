'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import styles from './Search.module.css';

type Model = {
  id: number;
  name: string;
  type: 'model';
  category: string;
  price: string;
  image: string;
};

type Dealer = {
  id: number;
  name: string;
  type: 'dealer';
  category: string;
  city: string;
  distance: string;
};

type Service = {
  id: number;
  name: string;
  type: 'service';
  category: string;
  description: string;
};

type Content = {
  id: number;
  name: string;
  type: 'content';
  category: string;
  description: string;
};

type SearchItem = Model | Dealer | Service | Content;

type Category = {
  id: string;
  name: string;
  icon: string;
  count: number;
};

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const searchRef = useRef<HTMLDivElement>(null);

  // Memoize searchData to prevent recreation on every render
  const searchData = useMemo(() => ({
    models: [
      { id: 1, name: 'BMW 3 Series', type: 'model' as const, category: 'Sedan', price: '₹45.90 Lakh', image: '/api/placeholder/80/60' },
      { id: 2, name: 'BMW X1', type: 'model' as const, category: 'SUV', price: '₹42.50 Lakh', image: '/api/placeholder/80/60' },
      { id: 3, name: 'BMW i4', type: 'model' as const, category: 'Electric', price: '₹72.90 Lakh', image: '/api/placeholder/80/60' },
      { id: 4, name: 'BMW 5 Series', type: 'model' as const, category: 'Sedan', price: '₹67.90 Lakh', image: '/api/placeholder/80/60' },
      { id: 5, name: 'BMW X3', type: 'model' as const, category: 'SUV', price: '₹62.90 Lakh', image: '/api/placeholder/80/60' }
    ],
    dealers: [
      { id: 101, name: 'BMW Deutsche Motoren', type: 'dealer' as const, city: 'Delhi', category: 'Dealer', distance: '2.5 km' },
      { id: 102, name: 'BMW Infinity Cars', type: 'dealer' as const, city: 'Mumbai', category: 'Dealer', distance: '5.1 km' },
      { id: 103, name: 'BMW Bavaria Motors', type: 'dealer' as const, city: 'Bangalore', category: 'Dealer', distance: '3.2 km' }
    ],
    services: [
      { id: 201, name: 'Service & Maintenance', type: 'service' as const, category: 'Service', description: 'Book your service appointment' },
      { id: 202, name: 'Test Drive Booking', type: 'service' as const, category: 'Service', description: 'Schedule a test drive' },
      { id: 203, name: 'Financial Services', type: 'service' as const, category: 'Finance', description: 'EMI and loan options' }
    ],
    content: [
      { id: 301, name: 'BMW Electric Vehicles', type: 'content' as const, category: 'Technology', description: 'Learn about BMW i models' },
      { id: 302, name: 'BMW Warranty Information', type: 'content' as const, category: 'Support', description: 'Warranty terms and conditions' },
      { id: 303, name: 'BMW ConnectedDrive', type: 'content' as const, category: 'Technology', description: 'Digital services overview' }
    ]
  }), []);

  // Memoize categories to prevent recreation
  const categories: Category[] = useMemo(() => [
    { id: 'all', name: 'All', icon: '🔍', count: 0 },
    { id: 'models', name: 'Models', icon: '🚗', count: searchData.models.length },
    { id: 'dealers', name: 'Dealers', icon: '🏢', count: searchData.dealers.length },
    { id: 'services', name: 'Services', icon: '🔧', count: searchData.services.length },
    { id: 'content', name: 'Content', icon: '📚', count: searchData.content.length }
  ], [searchData]);

  // Memoize performSearch function
  const performSearch = useCallback((query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const queryLower = query.toLowerCase();
    const allResults: SearchItem[] = [
      ...searchData.models.map(item => ({ ...item, category: 'models' })),
      ...searchData.dealers.map(item => ({ ...item, category: 'dealers' })),
      ...searchData.services.map(item => ({ ...item, category: 'services' })),
      ...searchData.content.map(item => ({ ...item, category: 'content' }))
    ];

    const filtered = allResults.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(queryLower);
      const descMatch = 'description' in item && item.description.toLowerCase().includes(queryLower);
      const cityMatch = 'city' in item && item.city.toLowerCase().includes(queryLower);
      return nameMatch || descMatch || cityMatch;
    });

    const finalResults = activeCategory === 'all' 
      ? filtered 
      : filtered.filter(item => item.category === activeCategory);

    setSearchResults(finalResults);
  }, [searchData, activeCategory]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isSearchOpen]);

  // Fixed search effect with proper debouncing
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const timeoutId = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery, performSearch]);

  const quickSearches: string[] = [
    'BMW 3 Series', 'BMW X1', 'Nearest Dealer', 'Service Booking', 'Electric Vehicles'
  ];

  const openSearch = () => {
    setIsSearchOpen(true);
    setTimeout(() => {
      const input = document.getElementById('search-input') as HTMLInputElement | null;
      if (input) input.focus();
    }, 100);
  };

  const handleQuickSearch = (term: string) => {
    setSearchQuery(term);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'model': return '🚗';
      case 'dealer': return '🏢';
      case 'service': return '🔧';
      case 'content': return '📚';
      default: return '🔍';
    }
  };

  return (
    <>
      <button className={styles.searchTrigger} onClick={openSearch} aria-label="Search">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </button>

      {isSearchOpen && (
        <div className={styles.searchOverlay}>
          <div className={styles.searchContainer} ref={searchRef}>
            <div className={styles.searchHeader}>
              <div className={styles.searchInputContainer}>
                <input
                  id="search-input"
                  type="text"
                  placeholder="Search BMW models, dealers, services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                  autoComplete="off"
                />
                {searchQuery && (
                  <button onClick={clearSearch} className={styles.clearButton}>
                    ✕
                  </button>
                )}
                <span className={styles.searchIcon}>🔍</span>
              </div>
              <button
                onClick={() => setIsSearchOpen(false)}
                className={styles.closeButton}
                aria-label="Close search"
              >
                ✕
              </button>
            </div>

            <div className={styles.searchContent}>
              {!searchQuery && (
                <div className={styles.quickSearches}>
                  <h4>Quick Searches</h4>
                  <div className={styles.quickSearchTags}>
                    {quickSearches.map((term, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickSearch(term)}
                        className={styles.quickSearchTag}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {searchQuery && (
                <div className={styles.categoryFilters}>
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`${styles.categoryButton} ${activeCategory === category.id ? styles.active : ''}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <span className={styles.categoryIcon}>{category.icon}</span>
                      <span className={styles.categoryName}>{category.name}</span>
                      {category.count > 0 && (
                        <span className={styles.categoryCount}>{category.count}</span>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {searchQuery && (
                <div className={styles.searchResults}>
                  {searchResults.length > 0 ? (
                    <>
                      <div className={styles.resultsHeader}>
                        <span>{searchResults.length} results found</span>
                        {activeCategory !== 'all' && (
                          <span> in {categories.find(c => c.id === activeCategory)?.name}</span>
                        )}
                      </div>

                      <div className={styles.resultsList}>
                        {searchResults.map((result) => (
                          <div key={`${result.type}-${result.id}`} className={styles.resultItem}>
                            <div className={styles.resultIcon}>
                              {getIconForType(result.type)}
                            </div>
                            <div className={styles.resultContent}>
                              <div className={styles.resultTitle}>{result.name}</div>
                              {'category' in result && (
                                <div className={styles.resultCategory}>{result.category}</div>
                              )}
                              {'price' in result && result.price && (
                                <div className={styles.resultPrice}>{result.price}</div>
                              )}
                              {'city' in result && (
                                <div className={styles.resultLocation}>{result.city} • {result.distance}</div>
                              )}
                              {'description' in result && (
                                <div className={styles.resultDescription}>{result.description}</div>
                              )}
                            </div>
                            <button className={styles.resultAction}>
                              View ›
                            </button>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className={styles.noResults}>
                      <div className={styles.noResultsIcon}>🔍</div>
                      <h4>No results found</h4>
                      <p>Try different keywords or browse our categories</p>
                    </div>
                  )}
                </div>
              )}

              {!searchQuery && (
                <div className={styles.popularCategories}>
                  <h4>Browse Categories</h4>
                  <div className={styles.categoryGrid}>
                    {categories.filter(c => c.id !== 'all').map(category => (
                      <button
                        key={category.id}
                        className={styles.categoryCard}
                        onClick={() => {
                          setActiveCategory(category.id);
                          handleQuickSearch('');
                        }}
                      >
                        <span className={styles.cardIcon}>{category.icon}</span>
                        <span className={styles.cardName}>{category.name}</span>
                        <span className={styles.cardCount}>{category.count}+ items</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;