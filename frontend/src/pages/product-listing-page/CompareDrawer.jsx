import React from 'react';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const CompareDrawer = ({
  compareItems,
  isOpen,
  onClose,
  onRemoveItem,
  onClearAll,
}) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    })?.format(price);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars?.push(
        <Icon
          key={i}
          name="Star"
          size={14}
          className="text-yellow-400 fill-current"
        />
      );
    }

    if (hasHalfStar) {
      stars?.push(
        <Icon
          key="half"
          name="Star"
          size={14}
          className="text-yellow-400 fill-current opacity-50"
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars?.push(
        <Icon
          key={`empty-${i}`}
          name="Star"
          size={14}
          className="text-gray-300"
        />
      );
    }

    return stars;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      {/* Drawer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-brand shadow-brand z-50 max-h-96 overflow-y-auto">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Icon
                name="GitCompare"
                size={20}
                className="text-brand-primary"
              />
              <h3 className="text-lg font-semibold text-brand-primary">
                Compare Products ({compareItems?.length})
              </h3>
            </div>
            <div className="flex items-center gap-2">
              {compareItems?.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClearAll}
                  className="text-secondary hover:text-brand-primary"
                >
                  Clear All
                </Button>
              )}
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center text-secondary hover:text-brand-primary transition-brand"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
          </div>

          {compareItems?.length === 0 ? (
            <div className="text-center py-8">
              <Icon
                name="GitCompare"
                size={48}
                className="text-gray-300 mx-auto mb-4"
              />
              <p className="text-secondary">No products to compare</p>
              <p className="text-sm text-secondary mt-1">
                Click the compare icon on products to add them here
              </p>
            </div>
          ) : (
            <>
              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-4">
                {compareItems?.map((product) => (
                  <div
                    key={product?.id}
                    className="relative bg-brand-secondary rounded-lg p-4"
                  >
                    {/* Remove Button */}
                    <button
                      onClick={() => onRemoveItem(product?.id)}
                      className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-secondary hover:text-red-500 transition-brand"
                    >
                      <Icon name="X" size={14} />
                    </button>

                    {/* Product Image */}
                    <div className="aspect-square bg-white rounded-md overflow-hidden mb-3">
                      <img
                        draggable="false"
                        src={product?.image}
                        alt={product?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-brand-primary line-clamp-2">
                        {product?.name}
                      </h4>

                      <div className="flex items-center gap-1">
                        {renderStars(product?.rating)}
                        <span className="text-xs text-secondary ml-1">
                          ({product?.reviewCount})
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-brand-primary">
                          {formatPrice(product?.price)}
                        </span>
                        {product?.originalPrice &&
                          product?.originalPrice > product?.price && (
                            <span className="text-sm text-secondary line-through">
                              {formatPrice(product?.originalPrice)}
                            </span>
                          )}
                      </div>

                      {/* Key Features */}
                      {product?.features && product?.features?.length > 0 && (
                        <div className="space-y-1">
                          {product?.features
                            ?.slice(0, 3)
                            ?.map((feature, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-1"
                              >
                                <Icon
                                  name="Check"
                                  size={12}
                                  className="text-green-500"
                                />
                                <span className="text-xs text-secondary">
                                  {feature}
                                </span>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="default"
                  size="sm"
                  iconName="Eye"
                  iconPosition="left"
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white"
                  disabled={compareItems?.length < 2}
                >
                  Compare Details
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ShoppingCart"
                  iconPosition="left"
                  className="text-brand-primary border-brand hover:bg-brand-secondary"
                >
                  Add All to Cart
                </Button>
              </div>

              {/* Comparison Tip */}
              {compareItems?.length < 2 && (
                <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                  <div className="flex items-center gap-2">
                    <Icon name="Info" size={16} className="text-yellow-600" />
                    <p className="text-sm text-yellow-800">
                      Add at least 2 products to compare their features side by
                      side
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CompareDrawer;
