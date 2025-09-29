import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const RelatedProducts = ({ products, title = 'Related Products' }) => {
  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)]?.map((_, i) => (
          <Icon
            key={i}
            name="Star"
            size={12}
            className={
              i < Math.floor(rating)
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg border border-brand">
      <div className="p-6 border-b border-brand">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-accent font-semibold text-brand-primary">
            {title}
          </h2>
          <Link
            to="/product-listing-page"
            className="text-brand-accent hover:underline text-sm font-medium"
          >
            View All Products →
          </Link>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products?.map((product) => (
            <div
              key={product?.id}
              className="group bg-white rounded-lg border border-brand hover:shadow-brand transition-brand"
            >
              <div className="relative overflow-hidden rounded-t-lg aspect-square">
                <img
                  draggable="false"
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex flex-col space-y-2">
                    <button className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md">
                      <Icon
                        name="Heart"
                        size={16}
                        className="text-brand-primary"
                      />
                    </button>
                    <button className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md">
                      <Icon
                        name="Eye"
                        size={16}
                        className="text-brand-primary"
                      />
                    </button>
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3">
                  {product?.isNew && (
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                      New
                    </span>
                  )}
                  {product?.discount && (
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium ml-1">
                      -{product?.discount}%
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4">
                <div className="mb-2">
                  <span className="text-xs text-brand-accent font-medium uppercase tracking-wide">
                    {product?.category}
                  </span>
                </div>

                <h3 className="font-medium text-brand-primary mb-2 line-clamp-2 group-hover:text-brand-accent transition-colors">
                  <Link to={`/product-details-page?id=${product?.id}`}>
                    {product?.name}
                  </Link>
                </h3>

                <div className="flex items-center space-x-2 mb-3">
                  {renderStars(product?.rating)}
                  <span className="text-xs text-secondary">
                    ({product?.reviewCount})
                  </span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-brand-primary">
                      ${product?.price?.toLocaleString()}
                    </span>
                    {product?.originalPrice && (
                      <span className="text-sm text-secondary line-through">
                        ${product?.originalPrice?.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Button
                    variant="default"
                    fullWidth
                    size="sm"
                    className="bg-brand-cta hover:bg-brand-cta/90 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    iconName="ShoppingCart"
                    iconPosition="left"
                  >
                    Add to Cart
                  </Button>

                  <div className="flex items-center justify-center space-x-4 text-xs text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Truck" size={12} />
                      <span>Free Shipping</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="RotateCcw" size={12} />
                      <span>30-Day Return</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-brand-primary text-brand-primary hover:bg-brand-secondary"
            iconName="ArrowRight"
            iconPosition="right"
          >
            <Link to="/product-listing-page">Explore More Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
