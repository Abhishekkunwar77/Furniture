import React from 'react';
import Icon from '../../components/AppIcon';

const WelcomeMessage = () => {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:px-12 xl:px-16">
      <div className="max-w-lg">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-7 text-white"
                fill="currentColor"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.84.21 4 0 5.16-1 9-5.45 9-11V7l-10-5z" />
                <path d="M8 11h8v2H8z" fill="var(--color-brand-accent)" />
                <path d="M8 14h6v2H8z" fill="var(--color-brand-accent)" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-accent font-semibold text-brand-primary">
                FurniCraft
              </h1>
              <p className="text-sm text-secondary">Crafting Your Dream Home</p>
            </div>
          </div>

          <h2 className="text-4xl font-accent font-semibold text-brand-primary mb-4">
            Welcome to Your Home Sanctuary
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            Join thousands of homeowners who trust FurniCraft to transform their
            living spaces into personal sanctuaries that reflect their unique
            style and values.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-brand-secondary rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Palette" size={20} className="text-brand-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-brand-primary mb-1">
                Curated Collections
              </h3>
              <p className="text-secondary text-sm">
                Discover handpicked furniture pieces that blend quality
                craftsmanship with modern design sensibilities.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-brand-secondary rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Heart" size={20} className="text-brand-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-brand-primary mb-1">
                Personalized Experience
              </h3>
              <p className="text-secondary text-sm">
                Get tailored recommendations, save your favorite pieces, and
                track your design projects all in one place.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-brand-secondary rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Shield" size={20} className="text-brand-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-brand-primary mb-1">
                Quality Guarantee
              </h3>
              <p className="text-secondary text-sm">
                Every piece comes with our quality promise and comprehensive
                warranty for your peace of mind.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-brand-secondary rounded-xl">
          <div className="flex items-center space-x-3 mb-3">
            <Icon name="Star" size={20} className="text-brand-cta" />
            <span className="font-semibold text-brand-primary">
              Customer Love
            </span>
          </div>
          <blockquote className="text-secondary italic mb-3">
            "FurniCraft helped me transform my apartment into a space I
            absolutely love. The quality is exceptional and the customer service
            is outstanding."
          </blockquote>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-medium">SM</span>
            </div>
            <div>
              <p className="text-sm font-medium text-brand-primary">
                Sarah Martinez
              </p>
              <p className="text-xs text-secondary">Verified Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
