"use client";

import { useState, useEffect } from 'react';
import trendsData from '../../data/trends.json';

export default function Explore() {
  // In a real app, you might use useEffect to fetch this data
  const { whatsHot, trendingCreators, topProducts, communityBuzz } = trendsData;

  return (
    <main>
      <section className="explore-hero section-block">
        <div className="container">
            <h1 className="section-title">Explore What's Trending</h1>
            <p className="section-subtitle">Discover the latest buzz, creators, and products in the Muslim women's community.</p>
        </div>
      </section>

      {/* What's Hot This Week */}
      <section className="whats-hot-block section-block">
        <div className="container">
            <h2 className="block-heading">What's Hot This Week 🔥</h2>
            <div className="explore-grid">
                {whatsHot.map(item => (
                    <article key={item.id} className="trend-card">
                        <div className="trend-image" style={{ backgroundImage: `url('${item.image}')` }}></div>
                        <div className="trend-content">
                            <span className="trend-tag">{item.tag}</span>
                            <div className="trend-stats">
                                <span>{item.posts_count} posts</span>
                                <span className="trend-growth">{item.growth}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
      </section>

      {/* Trending Creators */}
      <section className="creators-block section-block">
        <div className="container">
            <h2 className="block-heading">Trending Creators ✨</h2>
            <div className="creators-grid">
                {trendingCreators.map(item => (
                    <div key={item.id} className="creator-card">
                        <img src={item.avatar} alt={item.name} className="creator-avatar" />
                        <h3 className="creator-name">{item.name}</h3>
                        <p className="creator-handle">{item.handle}</p>
                        <span className="creator-niche">{item.niche}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Top Products */}
      <section className="products-block section-block">
        <div className="container">
            <h2 className="block-heading">Top Products 🛍️</h2>
            <div className="products-grid">
                {topProducts.map(item => (
                    <div key={item.id} className="product-card">
                        <div className="product-image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="product-info">
                            <h4 className="product-name">{item.name}</h4>
                            <p className="product-brand">{item.brand}</p>
                            <span className="product-price">{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Community Buzz */}
      <section className="buzz-block section-block">
        <div className="container">
            <h2 className="block-heading">Community Buzz 💬</h2>
            <div className="buzz-list">
                {communityBuzz.map(item => (
                    <div key={item.id} className="buzz-item">
                        <div className="buzz-date">{item.date}</div>
                        <div className="buzz-content">
                            <span className="buzz-type">{item.type}</span>
                            <h4 className="buzz-title">{item.title}</h4>
                            <p className="buzz-desc">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </main>
  );
}
