import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import IndustrialBookshelf from '../../assets/IndustrialBookshelf.avif';
import PlatformBedFrame from '../../assets/PlatformBedFrame.avif';
import RusticDiningTable from '../../assets/RusticDiningTable.webp';
import ErgonomicOfficeChair from '../../assets/ErgonomicOfficeChair.avif';
import ModernSectionalSofa from '../../assets/ModernSectionalSofa.avif';
import ScandinavianCoffeeTable from '../../assets/ScandinavianCoffeeTable.webp';

const TrendingProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const trendingProducts = [
    {
      id: 1,
      name: 'Modern Sectional Sofa',
      price: 1299,
      originalPrice: 1599,
      image: ModernSectionalSofa,
      rating: 4.8,
      reviews: 124,
      badge: 'Bestseller',
      category: 'Living Room',
    },
    {
      id: 2,
      name: 'Rustic Dining Table',
      price: 899,
      originalPrice: null,
      image: RusticDiningTable,
      rating: 4.9,
      reviews: 89,
      badge: 'New',
      category: 'Dining Room',
    },
    {
      id: 3,
      name: 'Ergonomic Office Chair',
      price: 449,
      originalPrice: 599,
      image: ErgonomicOfficeChair,
      rating: 4.7,
      reviews: 156,
      badge: 'Sale',
      category: 'Office',
    },
    {
      id: 4,
      name: 'Platform Bed Frame',
      price: 699,
      originalPrice: null,
      image: PlatformBedFrame,
      rating: 4.6,
      reviews: 78,
      badge: 'Featured',
      category: 'Bedroom',
    },
    {
      id: 5,
      name: 'Scandinavian Coffee Table',
      price: 329,
      originalPrice: 429,
      image: ScandinavianCoffeeTable,
      rating: 4.8,
      reviews: 92,
      badge: 'Trending',
      category: 'Living Room',
    },
    {
      id: 6,
      name: 'Industrial Bookshelf',
      price: 549,
      originalPrice: null,
      image: IndustrialBookshelf,
      reviews: 67,
      badge: 'New',
      category: 'Storage',
    },
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, trendingProducts?.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Bestseller':
        return 'bg-green-500';
      case 'New':
        return 'bg-blue-500';
      case 'Sale':
        return 'bg-red-500';
      case 'Featured':
        return 'bg-brand-cta';
      case 'Trending':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-accent font-semibold text-brand-primary mb-4">
              Trending Now
            </h2>
            <p className="text-lg text-secondary">
              Discover what's popular with our customers this month
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full border border-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-brand disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className="w-10 h-10 rounded-full border border-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-brand disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        {/* Products Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {trendingProducts?.map((product) => (
              <div
                key={product?.id}
                className="w-full md:w-1/3 flex-shrink-0 px-3"
              >
                <div className="group bg-white rounded-lg overflow-hidden shadow-brand hover:shadow-xl transition-brand">
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      draggable="false"
                      src={product?.image}
                      alt={product?.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`${getBadgeColor(
                          product?.badge
                        )} text-white px-3 py-1 rounded-full text-sm font-medium`}
                      >
                        {product?.badge}
                      </span>
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-brand">
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-brand-secondary transition-brand">
                        <Icon name="Heart" size={18} />
                      </button>
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-brand-secondary transition-brand">
                        <Icon name="Eye" size={18} />
                      </button>
                    </div>

                    {/* Quick Add to Cart */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-brand">
                      <Button
                        variant="default"
                        fullWidth
                        className="bg-brand-cta hover:bg-brand-cta/90 text-white"
                        iconName="ShoppingCart"
                        iconPosition="left"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="text-sm text-secondary mb-1">
                      {product?.category}
                    </div>
                    <h3 className="text-lg font-semibold text-brand-primary mb-2 group-hover:text-brand-cta transition-brand">
                      <Link to="/product-details-page">{product?.name}</Link>
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)]?.map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={16}
                            className={
                              i < Math.floor(product?.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }
                          />
                        ))}
                      </div>
                      <span className="text-sm text-secondary">
                        {product?.rating} ({product?.reviews} reviews)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-semibold text-brand-primary">
                        ${product?.price}
                      </span>
                      {product?.originalPrice && (
                        <span className="text-sm text-secondary line-through">
                          ${product?.originalPrice}
                        </span>
                      )}
                      {product?.originalPrice && (
                        <span className="text-sm text-green-600 font-medium">
                          Save ${product?.originalPrice - product?.price}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-center space-x-2 mt-8">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="w-10 h-10 rounded-full border border-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-brand disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          <span className="text-sm text-secondary px-4">
            {currentIndex + 1} of {maxIndex + 1}
          </span>
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="w-10 h-10 rounded-full border border-brand-primary flex items-center justify-center hover:bg-brand-primary hover:text-white transition-brand disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/product-listing-page">
            <Button
              style={{ backgroundColor: '#D69E2E' }}
              variant="outline"
              size="lg"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-black"
              iconName="ArrowRight"
              iconPosition="right"
            >
              View All Trending Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
