import React from 'react';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const CartItem = ({ item, onUpdateQuantity, onRemove, onSaveForLater }) => {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    onUpdateQuantity(item?.id, newQuantity);
  };

  return (
    <div className="bg-white rounded-lg shadow-brand border border-brand p-6 transition-brand hover:shadow-lg">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <div className="w-full lg:w-32 h-48 lg:h-32 overflow-hidden rounded-md bg-brand-secondary">
            <img
              draggable="false"
              src={item?.image}
              alt={item?.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-brand-primary mb-2">
                {item?.name}
              </h3>
              <p className="text-sm text-secondary mb-2">
                {item?.category} • {item?.material}
              </p>
              <p className="text-sm text-secondary mb-3">
                Color: {item?.color} | Size: {item?.size}
              </p>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-4">
                <Icon
                  name={item?.inStock ? 'CheckCircle' : 'AlertCircle'}
                  size={16}
                  className={item?.inStock ? 'text-success' : 'text-warning'}
                />
                <span
                  className={`text-sm ${
                    item?.inStock ? 'text-success' : 'text-warning'
                  }`}
                >
                  {item?.inStock ? 'In Stock' : 'Limited Stock'}
                </span>
              </div>

              {/* Mobile Actions */}
              <div className="flex lg:hidden items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(item?.quantity - 1)}
                    disabled={item?.quantity <= 1}
                    className="w-8 h-8 p-0"
                  >
                    <Icon name="Minus" size={14} />
                  </Button>
                  <span className="text-lg font-medium text-brand-primary min-w-[2rem] text-center">
                    {item?.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(item?.quantity + 1)}
                    className="w-8 h-8 p-0"
                  >
                    <Icon name="Plus" size={14} />
                  </Button>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-brand-primary">
                    ${(item?.price * item?.quantity)?.toFixed(2)}
                  </p>
                  <p className="text-sm text-secondary">
                    ${item?.price?.toFixed(2)} each
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Quantity & Price */}
            <div className="hidden lg:flex lg:flex-col lg:items-end lg:gap-4">
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuantityChange(item?.quantity - 1)}
                  disabled={item?.quantity <= 1}
                  className="w-8 h-8 p-0"
                >
                  <Icon name="Minus" size={14} />
                </Button>
                <span className="text-lg font-medium text-brand-primary min-w-[2rem] text-center">
                  {item?.quantity}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuantityChange(item?.quantity + 1)}
                  className="w-8 h-8 p-0"
                >
                  <Icon name="Plus" size={14} />
                </Button>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-brand-primary">
                  ${(item?.price * item?.quantity)?.toFixed(2)}
                </p>
                <p className="text-sm text-secondary">
                  ${item?.price?.toFixed(2)} each
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-brand">
            <Button
              variant="ghost"
              size="sm"
              iconName="Heart"
              iconPosition="left"
              onClick={() => onSaveForLater(item?.id)}
              className="text-secondary hover:text-brand-primary"
            >
              Save for Later
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconName="Trash2"
              iconPosition="left"
              onClick={() => onRemove(item?.id)}
              className="text-error hover:text-error/80"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
