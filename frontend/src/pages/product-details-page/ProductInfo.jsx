import React, { useState } from 'react';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ProductInfo = ({ product, onAddToCart, onAddToWishlist }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0]);

  const handleQuantityChange = (change) => {
    const newQuantity = selectedQuantity + change;
    if (newQuantity >= 1 && newQuantity <= product?.stock) {
      setSelectedQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      selectedQuantity,
      selectedColor,
      selectedSize,
    });
  };

  return (
    <div className="space-y-6">
      {/* Product Title and Rating */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-sm text-brand-accent font-medium">
            {product?.category}
          </span>
          <span className="text-sm text-secondary">•</span>
          <span className="text-sm text-secondary">SKU: {product?.sku}</span>
        </div>
        <h1 className="text-3xl font-accent font-semibold text-brand-primary mb-3">
          {product?.name}
        </h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
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
            <span className="text-sm text-secondary ml-2">
              {product?.rating} ({product?.reviewCount} reviews)
            </span>
          </div>
        </div>
      </div>
      {/* Price */}
      <div className="flex items-center space-x-3">
        <span className="text-3xl font-bold text-brand-primary">
          ${product?.price?.toLocaleString()}
        </span>
        {product?.originalPrice && (
          <span className="text-xl text-secondary line-through">
            ${product?.originalPrice?.toLocaleString()}
          </span>
        )}
        {product?.discount && (
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
            {product?.discount}% OFF
          </span>
        )}
      </div>
      {/* Stock Status */}
      <div className="flex items-center space-x-2">
        <Icon
          name={product?.stock > 0 ? 'CheckCircle' : 'XCircle'}
          size={16}
          className={product?.stock > 0 ? 'text-green-600' : 'text-red-600'}
        />
        <span
          className={`text-sm font-medium ${
            product?.stock > 0 ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {product?.stock > 0
            ? `In Stock (${product?.stock} available)`
            : 'Out of Stock'}
        </span>
      </div>
      {/* Color Selection */}
      <div>
        <h3 className="text-sm font-medium text-brand-primary mb-3">
          Color: <span className="font-normal">{selectedColor?.name}</span>
        </h3>
        <div className="flex space-x-2">
          {product?.colors?.map((color) => (
            <button
              key={color?.name}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full border-2 transition-brand ${
                selectedColor?.name === color?.name
                  ? 'border-brand-primary scale-110'
                  : 'border-gray-300 hover:border-brand-accent'
              }`}
              style={{ backgroundColor: color?.hex }}
              title={color?.name}
            />
          ))}
        </div>
      </div>
      {/* Size Selection */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-brand-primary">
            Size: <span className="font-normal">{selectedSize?.name}</span>
          </h3>
          <button className="text-sm text-brand-accent hover:underline">
            Size Guide
          </button>
        </div>
        <div className="flex space-x-2">
          {product?.sizes?.map((size) => (
            <button
              key={size?.name}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 border rounded-md text-sm font-medium transition-brand ${
                selectedSize?.name === size?.name
                  ? 'border-brand-primary bg-brand-secondary text-brand-primary'
                  : 'border-gray-300 hover:border-brand-accent'
              }`}
            >
              {size?.name}
            </button>
          ))}
        </div>
      </div>
      {/* Quantity Selection */}
      <div>
        <h3 className="text-sm font-medium text-brand-primary mb-3">
          Quantity
        </h3>
        <div className="flex items-center space-x-3">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              onClick={() => handleQuantityChange(-1)}
              disabled={selectedQuantity <= 1}
              className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon name="Minus" size={16} />
            </button>
            <span className="px-4 py-2 text-center min-w-[60px]">
              {selectedQuantity}
            </span>
            <button
              onClick={() => handleQuantityChange(1)}
              disabled={selectedQuantity >= product?.stock}
              className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon name="Plus" size={16} />
            </button>
          </div>
          <span className="text-sm text-secondary">
            {product?.stock} available
          </span>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          variant="default"
          fullWidth
          onClick={handleAddToCart}
          disabled={product?.stock === 0}
          className="bg-brand-cta hover:bg-brand-cta/90 text-white py-3"
          iconName="ShoppingCart"
          iconPosition="left"
        >
          Add to Cart - ${(product?.price * selectedQuantity)?.toLocaleString()}
        </Button>

        <div className="flex space-x-3">
          <Button
            variant="outline"
            fullWidth
            onClick={onAddToWishlist}
            iconName="Heart"
            iconPosition="left"
            className="border-brand-primary text-brand-primary hover:bg-brand-secondary"
          >
            Add to Wishlist
          </Button>
          <Button
            variant="outline"
            fullWidth
            iconName="Share"
            iconPosition="left"
            className="border-brand-primary text-brand-primary hover:bg-brand-secondary"
          >
            Share
          </Button>
        </div>
      </div>
      {/* Key Features */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-brand-primary mb-4">
          Key Features
        </h3>
        <ul className="space-y-2">
          {product?.keyFeatures?.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <Icon
                name="Check"
                size={16}
                className="text-green-600 mt-0.5 flex-shrink-0"
              />
              <span className="text-sm text-secondary">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Shipping Info */}
      <div className="bg-brand-secondary p-4 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Truck" size={16} className="text-brand-primary" />
          <span className="text-sm font-medium text-brand-primary">
            Shipping Information
          </span>
        </div>
        <div className="space-y-1 text-sm text-secondary">
          <p>• Free shipping on orders over $500</p>
          <p>• Standard delivery: 5-7 business days</p>
          <p>• White glove delivery available</p>
          <p>• Assembly service included</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
