import React from 'react';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const SavedForLater = ({ items, onMoveToCart, onRemove }) => {
  if (items?.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-brand border border-brand p-6">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="Heart" size={24} className="text-brand-primary" />
        <h2 className="text-xl font-semibold text-brand-primary">
          Saved for Later ({items?.length})
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items?.map((item) => (
          <div key={item?.id} className="group">
            <div className="relative overflow-hidden rounded-md bg-brand-secondary mb-3">
              <div className="aspect-square">
                <img
                  draggable="false"
                  src={item?.image}
                  alt={item?.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stock Status Overlay */}
              {!item?.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="bg-white px-3 py-1 rounded text-sm font-medium text-error">
                    Out of Stock
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-brand-primary mb-1">
                  {item?.name}
                </h3>
                <p className="text-sm text-secondary">
                  {item?.category} • {item?.color}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-brand-primary">
                  ${item?.price?.toFixed(2)}
                </span>
                <div className="flex items-center gap-1">
                  <Icon
                    name={item?.inStock ? 'CheckCircle' : 'AlertCircle'}
                    size={14}
                    className={item?.inStock ? 'text-success' : 'text-warning'}
                  />
                  <span
                    className={`text-xs ${
                      item?.inStock ? 'text-success' : 'text-warning'
                    }`}
                  >
                    {item?.inStock ? 'Available' : 'Limited'}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => onMoveToCart(item?.id)}
                  disabled={!item?.inStock}
                  iconName="ShoppingCart"
                  iconPosition="left"
                  className="text-brand-primary border-brand-primary hover:bg-brand-secondary"
                >
                  Move to Cart
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemove(item?.id)}
                  className="text-error hover:text-error/80 px-3"
                >
                  <Icon name="X" size={16} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedForLater;
