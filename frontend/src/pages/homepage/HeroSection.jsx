import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import TransformYourLivingSpace from '../../assets/TransformYourLivingSpace.avif';
import BedroomSanctuary from '../../assets/BedroomSanctuary.webp';
import DiningExperiences from '../../assets/DiningExperiences.avif';
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const heroSlides = [
    {
      id: 1,
      image: TransformYourLivingSpace,
      title: 'Transform Your Living Space',
      subtitle: 'Discover furniture that tells your story',
      description:
        'Curated collections that blend craftsmanship with modern living. Every piece designed to elevate your everyday moments.',
      cta: 'Explore Collections',
      ctaLink: '/product-listing-page',
    },
    {
      id: 2,
      image: BedroomSanctuary,
      title: 'Bedroom Sanctuary',
      subtitle: 'Rest in style and comfort',
      description:
        'Create your perfect retreat with our premium bedroom collections. Quality materials meet timeless design.',
      cta: 'Shop Bedrooms',
      ctaLink: '/product-listing-page',
    },
    {
      id: 3,
      image: DiningExperiences,
      title: 'Dining Experiences',
      subtitle: 'Gather around beautiful furniture',
      description:
        'From intimate dinners to grand celebrations, our dining collections bring people together in style.',
      cta: 'View Dining Sets',
      ctaLink: '/product-listing-page',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides?.length]);

  const handleSearch = (e) => {
    e?.preventDefault();
    if (searchQuery?.trim()) {
      // Navigate to product listing with search query
      window.location.href = `/product-listing-page?search=${encodeURIComponent(
        searchQuery
      )}`;
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides?.length) % heroSlides?.length
    );
  };

  return (
    <section className="relative h-screen overflow-hidden bg-brand-canvas">
      {/* Hero Slides */}
      <div className="relative h-full">
        {heroSlides?.map((slide, index) => (
          <div
            key={slide?.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full">
              <img
                draggable="false"
                src={slide?.image}
                alt={slide?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        ))}
      </div>
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-accent font-semibold mb-4 leading-tight">
            {heroSlides?.[currentSlide]?.title}
          </h1>
          <p className="text-xl sm:text-2xl mb-2 opacity-90">
            {heroSlides?.[currentSlide]?.subtitle}
          </p>
          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
            {heroSlides?.[currentSlide]?.description}
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-8 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e?.target?.value)}
                placeholder="Search for furniture, rooms, or styles..."
                className="w-full px-6 py-4 pr-16 rounded-full text-gray-900 placeholder-gray-500 bg-white/95 backdrop-blur-sm border-0 focus:ring-2 focus:ring-brand-cta focus:outline-none text-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-cta hover:bg-brand-cta/90 rounded-full flex items-center justify-center transition-brand"
              >
                <Icon name="Search" size={20} color="white" />
              </button>
            </div>
          </form>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={heroSlides?.[currentSlide]?.ctaLink}>
              <Button
                variant="default"
                size="lg"
                className="bg-brand-cta hover:bg-brand-cta/90 text-white px-8 py-4 text-lg"
              >
                {heroSlides?.[currentSlide]?.cta}
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
              iconName="Play"
              iconPosition="left"
            >
              Watch Our Story
            </Button>
          </div>
        </div>
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-brand backdrop-blur-sm"
      >
        <Icon name="ChevronLeft" size={24} color="white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-brand backdrop-blur-sm"
      >
        <Icon name="ChevronRight" size={24} color="white" />
      </button>
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-brand ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
