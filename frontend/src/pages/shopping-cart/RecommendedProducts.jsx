import React from 'react';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const RecommendedProducts = ({ products, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-brand border border-brand p-6">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="Lightbulb" size={24} className="text-brand-cta" />
        <h2 className="text-xl font-semibold text-brand-primary">
          Complete Your Room
        </h2>
      </div>
      <p className="text-secondary mb-6">
        These items pair perfectly with your selections and are often bought
        together.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <div key={product?.id} className="group">
            <div className="relative overflow-hidden rounded-md bg-brand-secondary mb-3">
              <div className="aspect-square">
                <img
                  draggable="false"
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-brand"
                />
              </div>

              {/* Quick Add Button */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-brand flex items-center justify-center">
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => onAddToCart(product)}
                  className="bg-white text-brand-primary hover:bg-brand-secondary"
                  iconName="Plus"
                  iconPosition="left"
                >
                  Quick Add
                </Button>
              </div>

              {/* Discount Badge */}
              {product?.discount && (
                <div className="absolute top-2 left-2 bg-error text-white px-2 py-1 rounded text-xs font-medium">
                  {product?.discount}% OFF
                </div>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="font-medium text-brand-primary group-hover:text-brand-cta transition-brand">
                {product?.name}
              </h3>

              <p className="text-sm text-secondary">{product?.category}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {product?.originalPrice && (
                    <span className="text-sm text-secondary line-through">
                      ${product?.originalPrice?.toFixed(2)}
                    </span>
                  )}
                  <span className="font-semibold text-brand-primary">
                    ${product?.price?.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <Icon
                    name="Star"
                    size={14}
                    className="text-brand-cta fill-current"
                  />
                  <span className="text-sm text-secondary">
                    {product?.rating}
                  </span>
                </div>
              </div>

              {/* Frequently Bought Together Badge */}
              {product?.frequentlyBought && (
                <div className="flex items-center gap-1 text-xs text-brand-cta">
                  <Icon name="TrendingUp" size={12} />
                  <span>Frequently bought together</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* View More Button */}
      <div className="text-center mt-8">
        <Button
          variant="outline"
          iconName="ArrowRight"
          iconPosition="right"
          className="text-brand-primary border-brand-primary hover:bg-brand-secondary"
        >
          View More Recommendations
        </Button>
      </div>
    </div>
  );
};

export default RecommendedProducts;
