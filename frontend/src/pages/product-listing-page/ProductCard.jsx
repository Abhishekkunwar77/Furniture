import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const ProductCard = ({
  product,
  onWishlistToggle,
  onCompareToggle,
  onQuickView,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(
    product?.isWishlisted || false
  );
  const [isCompared, setIsCompared] = useState(product?.isCompared || false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleWishlistClick = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    const newWishlistState = !isWishlisted;
    setIsWishlisted(newWishlistState);
    onWishlistToggle?.(product?.id, newWishlistState);
  };

  const handleCompareClick = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    const newCompareState = !isCompared;
    setIsCompared(newCompareState);
    onCompareToggle?.(product?.id, newCompareState);
  };

  const handleQuickView = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    onQuickView?.(product);
  };

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

  return (
    <div className="group bg-white rounded-lg border border-brand shadow-sm hover:shadow-brand transition-brand overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-brand-secondary">
        <Link to="/product-details-page" className="block w-full h-full">
          <img
            draggable="false"
            src={product?.image}
            alt={product?.name}
            className={`w-full h-full object-cover transition-brand group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />

          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-brand-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product?.isNew && (
            <span className="px-2 py-1 bg-green-500 text-white text-xs font-medium rounded">
              New
            </span>
          )}
          {product?.discount && (
            <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded">
              -{product?.discount}%
            </span>
          )}
          {product?.isBestseller && (
            <span className="px-2 py-1 bg-brand-cta text-white text-xs font-medium rounded">
              Bestseller
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-brand">
          <button
            onClick={handleWishlistClick}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-brand ${
              isWishlisted
                ? 'bg-red-500 text-white'
                : 'bg-white text-secondary hover:text-red-500'
            }`}
            title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Icon
              name="Heart"
              size={16}
              className={isWishlisted ? 'fill-current' : ''}
            />
          </button>

          <button
            onClick={handleCompareClick}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-brand ${
              isCompared
                ? 'bg-brand-primary text-white'
                : 'bg-white text-secondary hover:text-brand-primary'
            }`}
            title={isCompared ? 'Remove from compare' : 'Add to compare'}
          >
            <Icon name="GitCompare" size={16} />
          </button>

          <button
            onClick={handleQuickView}
            className="w-8 h-8 bg-white text-secondary hover:text-brand-primary rounded-full flex items-center justify-center transition-brand"
            title="Quick view"
          >
            <Icon name="Eye" size={16} />
          </button>
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-brand flex items-center justify-center">
          <Button
            variant="default"
            size="sm"
            onClick={handleQuickView}
            className="opacity-0 group-hover:opacity-100 transition-brand bg-white text-brand-primary hover:bg-brand-secondary"
          >
            Quick View
          </Button>
        </div>
      </div>
      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-secondary uppercase tracking-wide mb-1">
          {product?.category}
        </p>

        {/* Name */}
        <Link to="/product-details-page">
          <h3 className="text-sm font-medium text-brand-primary mb-2 line-clamp-2 hover:text-brand-cta transition-brand">
            {product?.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            {renderStars(product?.rating)}
          </div>
          <span className="text-xs text-secondary">
            ({product?.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
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

        {/* Features */}
        {product?.features && product?.features?.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {product?.features?.slice(0, 2)?.map((feature, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-brand-secondary text-xs text-brand-primary rounded"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Add to Cart Button */}
        <Button
          variant="outline"
          size="sm"
          fullWidth
          iconName="ShoppingCart"
          iconPosition="left"
          className="text-brand-primary border-brand hover:bg-brand-secondary"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
