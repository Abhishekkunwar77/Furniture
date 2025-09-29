import React, { useState } from 'react';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';

const WishlistManager = ({ wishlistItems, onRemoveItem, onMoveToCart }) => {
  const [sortBy, setSortBy] = useState('date-added');
  const [filterBy, setFilterBy] = useState('all');
  const [selectedItems, setSelectedItems] = useState([]);

  const sortOptions = [
    { value: 'date-added', label: 'Recently Added' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name A-Z' },
  ];

  const filterOptions = [
    { value: 'all', label: 'All Items' },
    { value: 'in-stock', label: 'In Stock' },
    { value: 'out-of-stock', label: 'Out of Stock' },
    { value: 'on-sale', label: 'On Sale' },
  ];

  const handleSelectItem = (itemId) => {
    setSelectedItems((prev) =>
      prev?.includes(itemId)
        ? prev?.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSelectAll = () => {
    setSelectedItems(
      selectedItems?.length === wishlistItems?.length
        ? []
        : wishlistItems?.map((item) => item?.id)
    );
  };

  const handleBulkAction = (action) => {
    selectedItems?.forEach((itemId) => {
      if (action === 'remove') {
        onRemoveItem(itemId);
      } else if (action === 'cart') {
        onMoveToCart(itemId);
      }
    });
    setSelectedItems([]);
  };

  const filteredItems = wishlistItems?.filter((item) => {
    if (filterBy === 'in-stock') return item?.inStock;
    if (filterBy === 'out-of-stock') return !item?.inStock;
    if (filterBy === 'on-sale') return item?.onSale;
    return true;
  });

  return (
    <div className="bg-white rounded-lg shadow-brand p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-semibold text-brand-primary">
            My Wishlist
          </h2>
          <p className="text-secondary">{wishlistItems?.length} items saved</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Select
            options={filterOptions}
            value={filterBy}
            onChange={setFilterBy}
            placeholder="Filter items"
            className="w-full sm:w-40"
          />
          <Select
            options={sortOptions}
            value={sortBy}
            onChange={setSortBy}
            placeholder="Sort by"
            className="w-full sm:w-40"
          />
        </div>
      </div>
      {/* Bulk Actions */}
      {selectedItems?.length > 0 && (
        <div className="bg-brand-secondary/50 rounded-lg p-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-brand-primary font-medium">
              {selectedItems?.length} item{selectedItems?.length > 1 ? 's' : ''}{' '}
              selected
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                iconName="ShoppingCart"
                onClick={() => handleBulkAction('cart')}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="sm"
                iconName="Trash2"
                onClick={() => handleBulkAction('remove')}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Select All */}
      <div className="flex items-center gap-3 mb-4">
        <input
          type="checkbox"
          checked={
            selectedItems?.length === wishlistItems?.length &&
            wishlistItems?.length > 0
          }
          onChange={handleSelectAll}
          className="w-4 h-4 text-brand-cta border-gray-300 rounded focus:ring-brand-cta"
        />
        <label className="text-sm text-secondary">Select all items</label>
      </div>
      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems?.map((item) => (
          <div
            key={item?.id}
            className="group relative bg-white border border-brand rounded-lg overflow-hidden hover:shadow-brand transition-brand"
          >
            {/* Selection Checkbox */}
            <div className="absolute top-3 left-3 z-10">
              <input
                type="checkbox"
                checked={selectedItems?.includes(item?.id)}
                onChange={() => handleSelectItem(item?.id)}
                className="w-4 h-4 text-brand-cta border-gray-300 rounded focus:ring-brand-cta"
              />
            </div>

            {/* Remove Button */}
            <button
              onClick={() => onRemoveItem(item?.id)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-brand hover:bg-red-50"
            >
              <Icon name="X" size={16} className="text-red-600" />
            </button>

            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden">
              <img
                draggable="false"
                src={item?.image}
                alt={item?.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-brand"
              />
              {item?.onSale && (
                <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Sale
                </div>
              )}
              {!item?.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <span className="text-white font-medium">Out of Stock</span>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-medium text-brand-primary mb-1 line-clamp-2">
                {item?.name}
              </h3>
              <p className="text-sm text-secondary mb-2">{item?.category}</p>

              <div className="flex items-center gap-2 mb-3">
                {item?.onSale ? (
                  <>
                    <span className="font-semibold text-brand-primary">
                      ${item?.salePrice}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ${item?.price}
                    </span>
                  </>
                ) : (
                  <span className="font-semibold text-brand-primary">
                    ${item?.price}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={14}
                      className={
                        i < Math.floor(item?.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-secondary">
                  ({item?.reviews})
                </span>
              </div>

              <p className="text-xs text-secondary mb-3">
                Added on {item?.dateAdded}
              </p>

              {/* Actions */}
              <div className="space-y-2">
                <Button
                  variant="default"
                  size="sm"
                  fullWidth
                  iconName="ShoppingCart"
                  disabled={!item?.inStock}
                  onClick={() => onMoveToCart(item?.id)}
                  className="bg-brand-cta hover:bg-brand-cta/90"
                >
                  {item?.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" fullWidth iconName="Eye">
                    View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="Share"
                  >
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredItems?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Heart" size={48} className="text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-500 mb-2">
            No items in your wishlist
          </h3>
          <p className="text-gray-400 mb-4">
            Save items you love to view them later
          </p>
          <Button variant="default" iconName="ShoppingBag">
            Start Shopping
          </Button>
        </div>
      )}
    </div>
  );
};

export default WishlistManager;
