"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo-area">
          <Link href="/" className="logo">MUDIERA</Link>
          <p className="tagline">The London Edition</p>
        </div>
        
        <button 
          className="nav-toggle" 
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <Link 
          href="https://forms.gle/xkeWJgE3K4SjjJht7" 
          className="add-listing-btn" 
          target="_blank"
        >
          Add My Listing
        </Link>
        
        <nav className={`main-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/explore" className="nav-link">Explore</Link></li>
            <li><Link href="/directory" className="nav-link">Directory</Link></li>
            <li><Link href="/categories" className="nav-link">Categories</Link></li>
            <li><Link href="/events" className="nav-link">Events</Link></li>
            <li><Link href="/subscribe" className="nav-link">Subscribe</Link></li>
            <li><Link href="/about" className="nav-link">About Us</Link></li>
            <li><Link href="/careers" className="nav-link">Careers</Link></li>
            
            {/* Mobile Only Button in Menu */}
            <li>
              <Link 
                href="https://forms.gle/xkeWJgE3K4SjjJht7" 
                className="add-listing-btn mobile-only-btn" 
                target="_blank"
                style={{ display: 'none' }} // Controlled by CSS media query
              >
                Add My Listing
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
