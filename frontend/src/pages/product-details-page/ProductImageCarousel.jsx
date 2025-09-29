import React, { useState } from 'react';
import Image from '../../components/AppImage';
import Icon from '../../components/AppIcon';

const ProductImageCarousel = ({ images, productName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images?.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + images?.length) % images?.length
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative bg-brand-secondary rounded-lg overflow-hidden aspect-square">
        <img
          draggable="false"
          src={images?.[currentImageIndex]}
          alt={`${productName} - View ${currentImageIndex + 1}`}
          className={`w-full h-full object-cover transition-transform duration-300 cursor-zoom-in ${
            isZoomed ? 'scale-150' : 'scale-100'
          }`}
          onClick={toggleZoom}
        />

        {/* Navigation Arrows */}
        {images?.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-brand"
            >
              <Icon
                name="ChevronLeft"
                size={20}
                className="text-brand-primary"
              />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-brand"
            >
              <Icon
                name="ChevronRight"
                size={20}
                className="text-brand-primary"
              />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} / {images?.length}
        </div>

        {/* Zoom Indicator */}
        <div className="absolute top-4 right-4 bg-white/80 p-2 rounded-full">
          <Icon
            name={isZoomed ? 'ZoomOut' : 'ZoomIn'}
            size={16}
            className="text-brand-primary"
          />
        </div>
      </div>
      {/* Thumbnail Strip */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images?.map((image, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-brand ${
              index === currentImageIndex
                ? 'border-brand-primary'
                : 'border-transparent hover:border-brand-accent'
            }`}
          >
            <img
              draggable="false"
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      {/* 360° and AR Buttons */}
      <div className="flex space-x-3">
        <button className="flex items-center space-x-2 px-4 py-2 bg-brand-secondary hover:bg-brand-accent/20 rounded-md transition-brand">
          <Icon name="RotateCcw" size={18} className="text-brand-primary" />
          <span className="text-sm font-medium text-brand-primary">
            360° View
          </span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-md transition-brand">
          <Icon name="Smartphone" size={18} />
          <span className="text-sm font-medium">AR Preview</span>
        </button>
      </div>
    </div>
  );
};

export default ProductImageCarousel;
