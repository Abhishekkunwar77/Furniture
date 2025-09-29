import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import ModernLiving from '../../assets/ModernLiving.avif';
import ScandinavianMinimalism from '../../assets/ScandinavianMinimalism.avif';
import RusticCharm from '../../assets/RusticCharm.webp';
import IndustrialEdge from '../../assets/IndustrialEdge.avif';

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      name: 'Modern Living',
      description: 'Clean lines and contemporary comfort',
      image: ModernLiving,
      itemCount: 45,
      startingPrice: 299,
      featured: true,
    },
    {
      id: 2,
      name: 'Rustic Charm',
      description: 'Warmth and character in every piece',
      image: RusticCharm,
      itemCount: 32,
      startingPrice: 199,
      featured: false,
    },
    {
      id: 3,
      name: 'Scandinavian Minimalism',
      description: 'Simplicity meets functionality',
      image: ScandinavianMinimalism,
      itemCount: 28,
      startingPrice: 249,
      featured: true,
    },
    {
      id: 4,
      name: 'Industrial Edge',
      description: 'Bold designs with urban appeal',
      image: IndustrialEdge,
      itemCount: 38,
      startingPrice: 349,
      featured: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-accent font-semibold text-brand-primary mb-4">
            Featured Collections
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Discover our carefully curated collections that blend style,
            comfort, and craftsmanship. Each piece tells a story of quality and
            design excellence.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections?.map((collection) => (
            <div
              key={collection?.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-brand hover:shadow-xl transition-brand"
            >
              {/* Featured Badge */}
              {collection?.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-brand-cta text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              )}

              {/* Collection Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  draggable="false"
                  src={collection?.image}
                  alt={collection?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-brand" />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-brand">
                  <Link to="/product-listing-page">
                    <Button
                      variant="default"
                      className="bg-white text-brand-primary hover:bg-brand-secondary"
                      iconName="ArrowRight"
                      iconPosition="right"
                    >
                      Explore Collection
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Collection Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-primary mb-2">
                  {collection?.name}
                </h3>
                <p className="text-secondary mb-4">{collection?.description}</p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1 text-secondary">
                    <Icon name="Package" size={16} />
                    <span>{collection?.itemCount} items</span>
                  </div>
                  <div className="text-brand-primary font-medium">
                    From ${collection?.startingPrice}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Collections Button */}
        <div className="text-center mt-12">
          <Link to="/product-listing-page">
            <Button
              variant="outline"
              size="lg"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
              iconName="Grid3x3"
              iconPosition="left"
            >
              View All Collections
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
