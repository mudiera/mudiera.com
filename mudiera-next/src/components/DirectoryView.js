"use client";

import { useState, useMemo } from 'react';
import BusinessCard from './BusinessCard';
import { subcategories, mapCategory } from '../utils/categoryUtils';
import businessesData from '../data/businesses.json';

export default function DirectoryView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [postcode, setPostcode] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSubcategory, setActiveSubcategory] = useState('');

  const businesses = businessesData.businesses || [];

  const categories = ['All', 'Health & Beauty', 'Food & Drinks', 'Services', 'Shopping', 'Community', 'Events'];

  const filteredBusinesses = useMemo(() => {
    return businesses.filter(business => {
      const title = (business.name || '').toLowerCase();
      const desc = (business.description || '').toLowerCase();
      const location = (business.location || '').toLowerCase();
      const category = mapCategory(business.category);
      const searchLower = searchTerm.toLowerCase();

      // 1. Search Filter
      const matchesSearch = title.includes(searchLower) || 
                            desc.includes(searchLower) || 
                            location.includes(searchLower);

      // 2. Category Filter
      const matchesCategory = activeCategory === 'All' || category === activeCategory;

      // 3. Subcategory Filter
      let matchesSubcategory = true;
      if (activeSubcategory && activeCategory !== 'All') {
        const subCatObj = subcategories[activeCategory]?.find(sub => sub.name === activeSubcategory);
        if (subCatObj) {
           const content = (title + ' ' + desc).toLowerCase();
           matchesSubcategory = subCatObj.keywords.some(keyword => content.includes(keyword.toLowerCase()));
        }
      }

      return matchesSearch && matchesCategory && matchesSubcategory;
    });
  }, [businesses, searchTerm, activeCategory, activeSubcategory]);

  const currentSubcategories = activeCategory !== 'All' ? subcategories[activeCategory] : null;

  return (
    <main>
      <section className="hero-block">
        <div className="container">
           <a href="https://forms.gle/xkeWJgE3K4SjjJht7" className="add-listing-btn mobile-only-btn" target="_blank">Add My Listing</a>
          <h1 className="hero-title">Directory</h1>
           <p className="hero-text">Mudiera is an ecosystem and community hub connecting Muslim women with trusted, halal aligned businesses, services, and opportunities across London and the UK.</p>
        </div>
      </section>

      <section className="filter-block">
        <div className="container">
          <div className="search-wrapper">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search businesses, services, or products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Enter Postcode (Optional)" 
              style={{ marginTop: '10px' }}
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
          </div>

          <div className="category-pills">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveSubcategory(''); // Reset subcategory when category changes
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {currentSubcategories && (
            <div className="subcategory-wrapper visible" style={{ marginTop: '20px', textAlign: 'center' }}>
                <select 
                    className="search-input" 
                    style={{ maxWidth: '300px', display: 'inline-block' }}
                    value={activeSubcategory}
                    onChange={(e) => setActiveSubcategory(e.target.value)}
                >
                    <option value="">All Subcategories</option>
                    {currentSubcategories.map(sub => (
                        <option key={sub.name} value={sub.name}>{sub.name}</option>
                    ))}
                </select>
            </div>
          )}
        </div>
      </section>

      <section className="grid-block">
        <div className="container card-grid">
          {filteredBusinesses.map(business => (
            <BusinessCard key={business.id} business={business} />
          ))}
          {filteredBusinesses.length === 0 && (
             <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px' }}>
                <p>No businesses found matching your criteria.</p>
             </div>
          )}
        </div>
      </section>
    </main>
  );
}
