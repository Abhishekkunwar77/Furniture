import React, { useState, useEffect } from 'react';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const QuickViewModal = ({ product, isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

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
          size={16}
          className="text-yellow-400 fill-current"
        />
      );
    }

    if (hasHalfStar) {
      stars?.push(
        <Icon
          key="half"
          name="Star"
          size={16}
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
          size={16}
          className="text-gray-300"
        />
      );
    }

    return stars;
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const productImages = product?.images || [product?.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-brand max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center text-secondary hover:text-brand-primary transition-brand shadow-sm"
        >
          <Icon name="X" size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-brand-secondary rounded-lg overflow-hidden">
              <img
                draggable="false"
                src={productImages?.[selectedImage]}
                alt={product?.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {productImages?.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {productImages?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-brand ${
                      selectedImage === index
                        ? 'border-brand-primary'
                        : 'border-transparent hover:border-brand'
                    }`}
                  >
                    <img
                      draggable="false"
                      src={image}
                      alt={`${product?.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Category */}
            <p className="text-sm text-secondary uppercase tracking-wide">
              {product?.category}
            </p>

            {/* Name */}
            <h2 className="text-2xl font-semibold text-brand-primary">
              {product?.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {renderStars(product?.rating)}
              </div>
              <span className="text-sm text-secondary">
                {product?.rating} ({product?.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-brand-primary">
                {formatPrice(product?.price)}
              </span>
              {product?.originalPrice &&
                product?.originalPrice > product?.price && (
                  <span className="text-lg text-secondary line-through">
                    {formatPrice(product?.originalPrice)}
                  </span>
                )}
              {product?.discount && (
                <span className="px-2 py-1 bg-red-500 text-white text-sm font-medium rounded">
                  Save {product?.discount}%
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-secondary leading-relaxed">
              {product?.description ||
                `Experience the perfect blend of style and comfort with the ${product?.name}. Crafted with premium materials and attention to detail, this piece will elevate your living space while providing lasting durability.`}
            </p>

            {/* Features */}
            {product?.features && product?.features?.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-brand-primary mb-2">
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product?.features?.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-brand-secondary text-sm text-brand-primary rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Dimensions */}
            {product?.dimensions && (
              <div>
                <h4 className="text-sm font-medium text-brand-primary mb-2">
                  Dimensions
                </h4>
                <p className="text-sm text-secondary">
                  {product?.dimensions?.width}" W × {product?.dimensions?.depth}
                  " D × {product?.dimensions?.height}" H
                </p>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-brand-primary">
                Quantity:
              </span>
              <div className="flex items-center border border-brand rounded-md">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="w-10 h-10 flex items-center justify-center text-secondary hover:text-brand-primary disabled:opacity-50 disabled:cursor-not-allowed transition-brand"
                >
                  <Icon name="Minus" size={16} />
                </button>
                <span className="w-12 text-center text-brand-primary font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= 10}
                  className="w-10 h-10 flex items-center justify-center text-secondary hover:text-brand-primary disabled:opacity-50 disabled:cursor-not-allowed transition-brand"
                >
                  <Icon name="Plus" size={16} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="default"
                size="lg"
                iconName="ShoppingCart"
                iconPosition="left"
                className="flex-1 bg-brand-cta hover:bg-brand-cta/90 text-white"
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Heart"
                className="text-brand-primary border-brand hover:bg-brand-secondary"
              />
            </div>

            {/* Additional Info */}
            <div className="space-y-2 text-sm text-secondary">
              <div className="flex items-center gap-2">
                <Icon name="Truck" size={16} />
                <span>Free shipping on orders over $500</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="RotateCcw" size={16} />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} />
                <span>2-year warranty included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
