import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import LivingRoom from '../../assets/LivingRoom.avif';
import DiningRoom from '../../assets/DiningRoom.avif';
import Office from '../../assets/Office.avif';
import Storage from '../../assets/Storage.avif';
import Bedroom from '../../assets/Bedroom.webp';
import Outdoor from '../../assets/Outdoor.webp';
const CategoryNavigation = () => {
  const categories = [
    {
      id: 1,
      name: 'Living Room',
      icon: 'Sofa',
      image: LivingRoom,
      itemCount: 156,
      description: 'Sofas, chairs, coffee tables & more',
    },
    {
      id: 2,
      name: 'Bedroom',
      icon: 'Bed',
      image: Bedroom,
      itemCount: 98,
      description: 'Beds, dressers, nightstands & storage',
    },
    {
      id: 3,
      name: 'Dining Room',
      icon: 'UtensilsCrossed',
      image: DiningRoom,
      itemCount: 74,
      description: 'Dining tables, chairs & cabinets',
    },
    {
      id: 4,
      name: 'Office',
      icon: 'Monitor',
      image: Office,
      itemCount: 52,
      description: 'Desks, chairs & office storage',
    },
    {
      id: 5,
      name: 'Outdoor',
      icon: 'TreePine',
      image: Outdoor,
      itemCount: 43,
      description: 'Patio furniture & outdoor decor',
    },
    {
      id: 6,
      name: 'Storage',
      icon: 'Archive',
      image: Storage,
      itemCount: 67,
      description: 'Shelving, cabinets & organizers',
    },
  ];

  return (
    <section className="py-16 bg-brand-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-accent font-semibold text-brand-primary mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Find exactly what you're looking for with our organized furniture
            categories. From living spaces to work areas, we have everything you
            need.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories?.map((category) => (
            <Link
              key={category?.id}
              to="/product-listing-page"
              className="group relative bg-white rounded-xl overflow-hidden shadow-brand hover:shadow-xl transition-brand"
            >
              {/* Category Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  draggable="false"
                  src={category?.image}
                  alt={category?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-brand" />

                {/* Icon Overlay */}
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Icon
                      name={category?.icon}
                      size={24}
                      color="var(--color-brand-primary)"
                    />
                  </div>
                </div>
              </div>

              {/* Category Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-brand-primary group-hover:text-brand-cta transition-brand">
                    {category?.name}
                  </h3>
                  <Icon
                    name="ArrowRight"
                    size={20}
                    className="text-secondary group-hover:text-brand-cta group-hover:translate-x-1 transition-brand"
                  />
                </div>
                <p className="text-secondary text-sm mb-3">
                  {category?.description}
                </p>
                <div className="flex items-center space-x-1 text-xs text-secondary">
                  <Icon name="Package" size={14} />
                  <span>{category?.itemCount} products available</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link
            to="/product-listing-page"
            className="group bg-white rounded-lg p-6 text-center shadow-brand hover:shadow-xl transition-brand"
          >
            <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-cta transition-brand">
              <Icon
                name="Sparkles"
                size={24}
                className="text-brand-primary group-hover:text-white transition-brand"
              />
            </div>
            <h3 className="text-lg font-semibold text-brand-primary mb-2">
              New Arrivals
            </h3>
            <p className="text-secondary text-sm">
              Discover our latest furniture pieces
            </p>
          </Link>

          <Link
            to="/product-listing-page"
            className="group bg-white rounded-lg p-6 text-center shadow-brand hover:shadow-xl transition-brand"
          >
            <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-cta transition-brand">
              <Icon
                name="Percent"
                size={24}
                className="text-brand-primary group-hover:text-white transition-brand"
              />
            </div>
            <h3 className="text-lg font-semibold text-brand-primary mb-2">
              Sale Items
            </h3>
            <p className="text-secondary text-sm">
              Save on quality furniture pieces
            </p>
          </Link>

          <Link
            to="/product-listing-page"
            className="group bg-white rounded-lg p-6 text-center shadow-brand hover:shadow-xl transition-brand"
          >
            <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-cta transition-brand">
              <Icon
                name="Heart"
                size={24}
                className="text-brand-primary group-hover:text-white transition-brand"
              />
            </div>
            <h3 className="text-lg font-semibold text-brand-primary mb-2">
              Customer Favorites
            </h3>
            <p className="text-secondary text-sm">
              Most loved by our customers
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigation;
