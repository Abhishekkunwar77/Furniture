import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const EmptyCart = () => {
  const suggestedCategories = [
    { name: 'Living Room', path: '/product-listing-page', icon: 'Sofa' },
    { name: 'Bedroom', path: '/product-listing-page', icon: 'Bed' },
    {
      name: 'Dining Room',
      path: '/product-listing-page',
      icon: 'UtensilsCrossed',
    },
    { name: 'Office', path: '/product-listing-page', icon: 'Briefcase' },
  ];

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Empty Cart Icon */}
        <div className="w-24 h-24 mx-auto mb-6 bg-brand-secondary rounded-full flex items-center justify-center">
          <Icon name="ShoppingCart" size={48} className="text-brand-primary" />
        </div>

        {/* Empty State Content */}
        <h2 className="text-2xl font-semibold text-brand-primary mb-3">
          Your cart is empty
        </h2>

        <p className="text-secondary mb-8">
          Looks like you haven't added any furniture to your cart yet. Discover
          our beautiful collections and find pieces that speak to your style.
        </p>

        {/* Primary CTA */}
        <div className="space-y-4 mb-8">
          <Link to="/product-listing-page">
            <Button
              variant="default"
              size="lg"
              fullWidth
              className="bg-brand-cta hover:bg-brand-cta/90 text-white"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Start Shopping
            </Button>
          </Link>

          <Link to="/homepage">
            <Button
              variant="outline"
              size="lg"
              fullWidth
              className="text-brand-primary border-brand-primary hover:bg-brand-secondary"
              iconName="Home"
              iconPosition="left"
            >
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Category Suggestions */}
        <div className="border-t border-brand pt-8">
          <h3 className="text-lg font-medium text-brand-primary mb-4">
            Shop by Category
          </h3>

          <div className="grid grid-cols-2 gap-3">
            {suggestedCategories?.map((category) => (
              <Link
                key={category?.name}
                to={category?.path}
                className="flex items-center gap-2 p-3 rounded-md border border-brand hover:bg-brand-secondary transition-brand group"
              >
                <Icon
                  name={category?.icon}
                  size={20}
                  className="text-brand-primary group-hover:text-brand-cta transition-brand"
                />
                <span className="text-sm font-medium text-brand-primary group-hover:text-brand-cta transition-brand">
                  {category?.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 p-4 bg-brand-secondary rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="HelpCircle" size={20} className="text-brand-primary" />
            <span className="font-medium text-brand-primary">Need Help?</span>
          </div>
          <p className="text-sm text-secondary">
            Our design experts are here to help you find the perfect pieces for
            your space.
          </p>
          <Button
            variant="ghost"
            size="sm"
            className="text-brand-cta hover:text-brand-cta/80 mt-2 p-0"
            iconName="MessageCircle"
            iconPosition="left"
          >
            Chat with Expert
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
