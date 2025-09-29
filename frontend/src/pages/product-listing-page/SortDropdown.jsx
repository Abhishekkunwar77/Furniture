import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../components/AppIcon';

const SortDropdown = ({ currentSort, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sortOptions = [
    { value: 'popularity', label: 'Most Popular', icon: 'TrendingUp' },
    { value: 'price-low', label: 'Price: Low to High', icon: 'ArrowUp' },
    { value: 'price-high', label: 'Price: High to Low', icon: 'ArrowDown' },
    { value: 'rating', label: 'Highest Rated', icon: 'Star' },
    { value: 'newest', label: 'Newest Arrivals', icon: 'Clock' },
    { value: 'name-az', label: 'Name: A to Z', icon: 'ArrowUp' },
    { value: 'name-za', label: 'Name: Z to A', icon: 'ArrowDown' },
  ];

  const currentOption =
    sortOptions?.find((option) => option?.value === currentSort) ||
    sortOptions?.[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef?.current &&
        !dropdownRef?.current?.contains(event?.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSortSelect = (value) => {
    onSortChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-brand rounded-md text-sm font-medium text-brand-primary hover:bg-brand-secondary/50 transition-brand min-w-48"
      >
        <Icon name={currentOption?.icon} size={16} />
        <span className="flex-1 text-left">{currentOption?.label}</span>
        <Icon
          name={isOpen ? 'ChevronUp' : 'ChevronDown'}
          size={16}
          className="text-secondary"
        />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-brand rounded-md shadow-brand z-10">
          <div className="py-1">
            {sortOptions?.map((option) => (
              <button
                key={option?.value}
                onClick={() => handleSortSelect(option?.value)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-left transition-brand ${
                  currentSort === option?.value
                    ? 'bg-brand-secondary text-brand-primary'
                    : 'text-secondary hover:bg-brand-secondary/50 hover:text-brand-primary'
                }`}
              >
                <Icon name={option?.icon} size={16} />
                <span>{option?.label}</span>
                {currentSort === option?.value && (
                  <Icon
                    name="Check"
                    size={16}
                    className="ml-auto text-brand-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
