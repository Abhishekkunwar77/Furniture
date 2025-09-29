import React, { useState } from 'react';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { Checkbox } from '../../components/ui/Checkbox';

const FilterSidebar = ({
  filters,
  onFilterChange,
  onClearFilters,
  isOpen,
  onClose,
}) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    room: true,
    style: true,
    material: true,
    color: true,
    price: true,
    brand: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev?.[section],
    }));
  };

  const handleFilterChange = (category, value, checked) => {
    const currentValues = filters?.[category] || [];
    const newValues = checked
      ? [...currentValues, value]
      : currentValues?.filter((v) => v !== value);

    onFilterChange(category, newValues);
  };

  const handlePriceChange = (min, max) => {
    onFilterChange('priceRange', { min, max });
  };

  const filterSections = [
    {
      key: 'category',
      title: 'Category',
      options: [
        { value: 'sofas', label: 'Sofas & Sectionals', count: 156 },
        { value: 'chairs', label: 'Chairs & Recliners', count: 89 },
        { value: 'tables', label: 'Tables', count: 124 },
        { value: 'storage', label: 'Storage & Organization', count: 67 },
        { value: 'bedroom', label: 'Bedroom Furniture', count: 98 },
        { value: 'lighting', label: 'Lighting', count: 45 },
        { value: 'decor', label: 'Home Decor', count: 78 },
      ],
    },
    {
      key: 'room',
      title: 'Room',
      options: [
        { value: 'living-room', label: 'Living Room', count: 234 },
        { value: 'bedroom', label: 'Bedroom', count: 187 },
        { value: 'dining-room', label: 'Dining Room', count: 156 },
        { value: 'office', label: 'Home Office', count: 89 },
        { value: 'kitchen', label: 'Kitchen', count: 67 },
        { value: 'outdoor', label: 'Outdoor', count: 45 },
      ],
    },
    {
      key: 'style',
      title: 'Style',
      options: [
        { value: 'modern', label: 'Modern', count: 198 },
        { value: 'contemporary', label: 'Contemporary', count: 167 },
        { value: 'traditional', label: 'Traditional', count: 134 },
        { value: 'rustic', label: 'Rustic', count: 89 },
        { value: 'industrial', label: 'Industrial', count: 76 },
        { value: 'scandinavian', label: 'Scandinavian', count: 65 },
      ],
    },
    {
      key: 'material',
      title: 'Material',
      options: [
        { value: 'wood', label: 'Wood', count: 245 },
        { value: 'metal', label: 'Metal', count: 123 },
        { value: 'fabric', label: 'Fabric', count: 189 },
        { value: 'leather', label: 'Leather', count: 87 },
        { value: 'glass', label: 'Glass', count: 56 },
        { value: 'plastic', label: 'Plastic', count: 34 },
      ],
    },
    {
      key: 'color',
      title: 'Color',
      options: [
        { value: 'black', label: 'Black', count: 156, color: '#000000' },
        { value: 'white', label: 'White', count: 134, color: '#FFFFFF' },
        { value: 'brown', label: 'Brown', count: 123, color: '#8B4513' },
        { value: 'gray', label: 'Gray', count: 98, color: '#808080' },
        { value: 'blue', label: 'Blue', count: 67, color: '#4A90E2' },
        { value: 'green', label: 'Green', count: 45, color: '#7ED321' },
      ],
    },
    {
      key: 'brand',
      title: 'Brand',
      options: [
        { value: 'furnicraft', label: 'FurniCraft', count: 189 },
        { value: 'modern-living', label: 'Modern Living', count: 156 },
        { value: 'comfort-plus', label: 'Comfort Plus', count: 134 },
        { value: 'artisan-craft', label: 'Artisan Craft', count: 98 },
        { value: 'urban-style', label: 'Urban Style', count: 76 },
      ],
    },
  ];

  const priceRanges = [
    { min: 0, max: 500, label: 'Under $500', count: 89 },
    { min: 500, max: 1000, label: '$500 - $1,000', count: 156 },
    { min: 1000, max: 2000, label: '$1,000 - $2,000', count: 134 },
    { min: 2000, max: 5000, label: '$2,000 - $5,000', count: 98 },
    { min: 5000, max: 999999, label: '$5,000+', count: 45 },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
        w-80 lg:w-full bg-white lg:bg-transparent
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto lg:overflow-visible
        border-r border-brand lg:border-0
        pt-16 lg:pt-0
      `}
      >
        <div className="p-6 lg:p-0">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-lg font-semibold text-brand-primary">
              Filters
            </h2>
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              onClick={onClose}
              className="text-secondary hover:text-brand-primary"
            />
          </div>

          {/* Filter Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-medium text-brand-primary">
              Filter Results
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              className="text-secondary hover:text-brand-primary text-sm"
            >
              Clear All
            </Button>
          </div>

          {/* Active Filters */}
          {Object.entries(filters)?.some(([key, value]) =>
            Array.isArray(value) ? value?.length > 0 : value
          ) && (
            <div className="mb-6">
              <h4 className="text-sm font-medium text-brand-primary mb-3">
                Active Filters
              </h4>
              <div className="flex flex-wrap gap-2">
                {Object.entries(filters)?.map(([category, values]) => {
                  if (Array.isArray(values)) {
                    return values?.map((value) => (
                      <div
                        key={`${category}-${value}`}
                        className="flex items-center gap-1 px-3 py-1 bg-brand-secondary rounded-full text-sm"
                      >
                        <span className="text-brand-primary">{value}</span>
                        <button
                          onClick={() =>
                            handleFilterChange(category, value, false)
                          }
                          className="text-secondary hover:text-brand-primary"
                        >
                          <Icon name="X" size={14} />
                        </button>
                      </div>
                    ));
                  }
                  return null;
                })}
              </div>
            </div>
          )}

          {/* Filter Sections */}
          <div className="space-y-6">
            {filterSections?.map((section) => (
              <div key={section?.key} className="border-b border-brand pb-6">
                <button
                  onClick={() => toggleSection(section?.key)}
                  className="flex items-center justify-between w-full text-left mb-4"
                >
                  <h4 className="text-sm font-medium text-brand-primary">
                    {section?.title}
                  </h4>
                  <Icon
                    name={
                      expandedSections?.[section?.key]
                        ? 'ChevronUp'
                        : 'ChevronDown'
                    }
                    size={16}
                    className="text-secondary"
                  />
                </button>

                {expandedSections?.[section?.key] && (
                  <div className="space-y-3">
                    {section?.options?.map((option) => (
                      <div
                        key={option?.value}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          {section?.key === 'color' && (
                            <div
                              className="w-4 h-4 rounded-full border border-gray-300"
                              style={{ backgroundColor: option?.color }}
                            />
                          )}
                          <Checkbox
                            label={option?.label}
                            checked={(filters?.[section?.key] || [])?.includes(
                              option?.value
                            )}
                            onChange={(e) =>
                              handleFilterChange(
                                section?.key,
                                option?.value,
                                e?.target?.checked
                              )
                            }
                            className="text-sm"
                          />
                        </div>
                        <span className="text-xs text-secondary">
                          ({option?.count})
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Price Range */}
            <div className="border-b border-brand pb-6">
              <button
                onClick={() => toggleSection('price')}
                className="flex items-center justify-between w-full text-left mb-4"
              >
                <h4 className="text-sm font-medium text-brand-primary">
                  Price Range
                </h4>
                <Icon
                  name={expandedSections?.price ? 'ChevronUp' : 'ChevronDown'}
                  size={16}
                  className="text-secondary"
                />
              </button>

              {expandedSections?.price && (
                <div className="space-y-3">
                  {priceRanges?.map((range) => (
                    <div
                      key={`${range?.min}-${range?.max}`}
                      className="flex items-center justify-between"
                    >
                      <Checkbox
                        label={range?.label}
                        checked={
                          filters?.priceRange?.min === range?.min &&
                          filters?.priceRange?.max === range?.max
                        }
                        onChange={(e) => {
                          if (e?.target?.checked) {
                            handlePriceChange(range?.min, range?.max);
                          } else {
                            onFilterChange('priceRange', null);
                          }
                        }}
                        className="text-sm"
                      />
                      <span className="text-xs text-secondary">
                        ({range?.count})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Apply Filters Button (Mobile) */}
          <div className="mt-8 lg:hidden">
            <Button
              variant="default"
              fullWidth
              onClick={onClose}
              className="bg-brand-cta hover:bg-brand-cta/90 text-white"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
