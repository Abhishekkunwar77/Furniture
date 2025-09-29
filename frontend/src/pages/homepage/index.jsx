import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './HeroSection';
import FeaturedCollections from './FeaturedCollections';
import CategoryNavigation from './CategoryNavigation';
import TrendingProducts from './TrendingProducts';
import RoomInspiration from './RoomInspiration';
import CustomerShowcase from './CustomerShowcase';
import NewsletterSignup from './NewsletterSignup';
import Footer from './Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-brand-canvas">
      <Header />

      <main className="pt-16">
        {/* Hero Section with Search and Lifestyle Imagery */}
        <HeroSection />

        {/* Featured Collections Carousel */}
        <FeaturedCollections />

        {/* Category Navigation Grid */}
        <CategoryNavigation />

        {/* Trending Products with Hover Interactions */}
        <TrendingProducts />

        {/* Room Inspiration Gallery */}
        <RoomInspiration />

        {/* Customer Stories and Social Proof */}
        <CustomerShowcase />

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </main>

      {/* Footer with Comprehensive Links */}
      <Footer />
    </div>
  );
};

export default Homepage;
