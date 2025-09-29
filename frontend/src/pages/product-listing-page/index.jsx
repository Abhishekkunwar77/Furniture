import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FilterSidebar from './FilterSidebar';
import ProductCard from './ProductCard';
import SortDropdown from './SortDropdown';
import QuickViewModal from './QuickViewModal';
import CompareDrawer from './CompareDrawer';
import SearchBar from './SearchBar';

const ProductListingPage = () => {
  const [filters, setFilters] = useState({
    category: [],
    room: [],
    style: [],
    material: [],
    color: [],
    brand: [],
    priceRange: null,
  });

  const [sortBy, setSortBy] = useState('popularity');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [compareItems, setCompareItems] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const productsPerPage = 12;

  // Mock product data
  const mockProducts = [
    {
      id: 1,
      name: 'Modern Sectional Sofa with Chaise',
      category: 'Sofas & Sectionals',
      price: 1299.99,
      originalPrice: 1599.99,
      discount: 19,
      rating: 4.8,
      reviewCount: 124,
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
      images: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500',
      ],
      features: ['Premium Fabric', 'Reversible Chaise', 'Easy Assembly'],
      dimensions: { width: 110, depth: 75, height: 35 },
      isNew: true,
      isBestseller: false,
      room: 'living-room',
      style: 'modern',
      material: 'fabric',
      color: 'gray',
      brand: 'furnicraft',
    },
    {
      id: 2,
      name: 'Solid Wood Dining Table Set',
      category: 'Tables',
      price: 899.99,
      originalPrice: null,
      discount: null,
      rating: 4.6,
      reviewCount: 89,
      image:
        'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=500',
      features: ['Solid Oak Wood', 'Seats 6 People', 'Scratch Resistant'],
      dimensions: { width: 72, depth: 36, height: 30 },
      isNew: false,
      isBestseller: true,
      room: 'dining-room',
      style: 'traditional',
      material: 'wood',
      color: 'brown',
      brand: 'artisan-craft',
    },
    {
      id: 3,
      name: 'Ergonomic Office Chair',
      category: 'Chairs & Recliners',
      price: 449.99,
      originalPrice: 549.99,
      discount: 18,
      rating: 4.7,
      reviewCount: 156,
      image:
        'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=500',
      features: ['Lumbar Support', 'Adjustable Height', 'Breathable Mesh'],
      dimensions: { width: 26, depth: 26, height: 45 },
      isNew: false,
      isBestseller: false,
      room: 'office',
      style: 'contemporary',
      material: 'fabric',
      color: 'black',
      brand: 'comfort-plus',
    },
    {
      id: 4,
      name: 'Industrial Coffee Table',
      category: 'Tables',
      price: 329.99,
      originalPrice: null,
      discount: null,
      rating: 4.5,
      reviewCount: 67,
      image:
        'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500',
      features: ['Metal Frame', 'Reclaimed Wood', 'Storage Shelf'],
      dimensions: { width: 48, depth: 24, height: 18 },
      isNew: false,
      isBestseller: false,
      room: 'living-room',
      style: 'industrial',
      material: 'wood',
      color: 'brown',
      brand: 'urban-style',
    },
    {
      id: 5,
      name: 'Upholstered Platform Bed',
      category: 'Bedroom Furniture',
      price: 799.99,
      originalPrice: 999.99,
      discount: 20,
      rating: 4.9,
      reviewCount: 203,
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500',
      features: ['Tufted Headboard', 'No Box Spring Needed', 'Easy Assembly'],
      dimensions: { width: 64, depth: 84, height: 48 },
      isNew: true,
      isBestseller: true,
      room: 'bedroom',
      style: 'contemporary',
      material: 'fabric',
      color: 'gray',
      brand: 'modern-living',
    },
    {
      id: 6,
      name: 'Scandinavian Accent Chair',
      category: 'Chairs & Recliners',
      price: 299.99,
      originalPrice: null,
      discount: null,
      rating: 4.4,
      reviewCount: 78,
      image:
        'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500',
      features: ['Solid Wood Legs', 'Comfortable Cushion', 'Compact Design'],
      dimensions: { width: 28, depth: 30, height: 32 },
      isNew: false,
      isBestseller: false,
      room: 'living-room',
      style: 'scandinavian',
      material: 'fabric',
      color: 'blue',
      brand: 'furnicraft',
    },
    {
      id: 7,
      name: 'Glass Top Side Table',
      category: 'Tables',
      price: 199.99,
      originalPrice: 249.99,
      discount: 20,
      rating: 4.3,
      reviewCount: 45,
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
      features: ['Tempered Glass', 'Chrome Legs', 'Modern Design'],
      dimensions: { width: 20, depth: 20, height: 24 },
      isNew: false,
      isBestseller: false,
      room: 'living-room',
      style: 'modern',
      material: 'glass',
      color: 'white',
      brand: 'modern-living',
    },
    {
      id: 8,
      name: 'Leather Recliner Chair',
      category: 'Chairs & Recliners',
      price: 1199.99,
      originalPrice: null,
      discount: null,
      rating: 4.8,
      reviewCount: 134,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500',
      features: ['Genuine Leather', 'Power Reclining', 'USB Charging Port'],
      dimensions: { width: 32, depth: 38, height: 42 },
      isNew: false,
      isBestseller: true,
      room: 'living-room',
      style: 'traditional',
      material: 'leather',
      color: 'brown',
      brand: 'comfort-plus',
    },
  ];

  // Filter and sort products
  const filteredProducts = mockProducts?.filter((product) => {
    // Search filter
    if (
      searchQuery &&
      !product?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
    ) {
      return false;
    }

    // Category filter
    if (
      filters?.category?.length > 0 &&
      !filters?.category?.some((cat) =>
        product?.category?.toLowerCase()?.includes(cat?.replace('-', ' '))
      )
    ) {
      return false;
    }

    // Room filter
    if (filters?.room?.length > 0 && !filters?.room?.includes(product?.room)) {
      return false;
    }

    // Style filter
    if (
      filters?.style?.length > 0 &&
      !filters?.style?.includes(product?.style)
    ) {
      return false;
    }

    // Material filter
    if (
      filters?.material?.length > 0 &&
      !filters?.material?.includes(product?.material)
    ) {
      return false;
    }

    // Color filter
    if (
      filters?.color?.length > 0 &&
      !filters?.color?.includes(product?.color)
    ) {
      return false;
    }

    // Brand filter
    if (
      filters?.brand?.length > 0 &&
      !filters?.brand?.includes(product?.brand)
    ) {
      return false;
    }

    // Price range filter
    if (filters?.priceRange) {
      const { min, max } = filters?.priceRange;
      if (product?.price < min || (max !== 999999 && product?.price > max)) {
        return false;
      }
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts]?.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a?.price - b?.price;
      case 'price-high':
        return b?.price - a?.price;
      case 'rating':
        return b?.rating - a?.rating;
      case 'newest':
        return b?.isNew - a?.isNew;
      case 'name-az':
        return a?.name?.localeCompare(b?.name);
      case 'name-za':
        return b?.name?.localeCompare(a?.name);
      default: // popularity
        return b?.reviewCount - a?.reviewCount;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts?.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = sortedProducts?.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handleFilterChange = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: value,
    }));
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({
      category: [],
      room: [],
      style: [],
      material: [],
      color: [],
      brand: [],
      priceRange: null,
    });
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handleWishlistToggle = (productId, isWishlisted) => {
    console.log(
      `Product ${productId} ${
        isWishlisted ? 'added to' : 'removed from'
      } wishlist`
    );
  };

  const handleCompareToggle = (productId, isCompared) => {
    if (isCompared) {
      const product = mockProducts?.find((p) => p?.id === productId);
      if (product && compareItems?.length < 4) {
        setCompareItems((prev) => [...prev, product]);
      }
    } else {
      setCompareItems((prev) => prev?.filter((item) => item?.id !== productId));
    }
  };

  const handleRemoveFromCompare = (productId) => {
    setCompareItems((prev) => prev?.filter((item) => item?.id !== productId));
  };

  const handleClearCompare = () => {
    setCompareItems([]);
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (compareItems?.length > 0) {
      setIsCompareOpen(true);
    }
  }, [compareItems]);

  return (
    <div className="min-h-screen bg-brand-canvas">
      <Header />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-brand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link
                to="/homepage"
                className="text-secondary hover:text-brand-primary transition-brand"
              >
                Home
              </Link>
              <Icon name="ChevronRight" size={16} className="text-secondary" />
              <span className="text-brand-primary font-medium">Shop</span>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-white border-b border-brand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-brand-primary mb-4">
                Discover Your Perfect Furniture
              </h1>
              <p className="text-lg text-secondary max-w-2xl mx-auto">
                Explore our curated collection of premium furniture pieces
                designed to elevate your living space
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex justify-center">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search for furniture, styles, or rooms..."
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-8">
            {/* Filter Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                isOpen={false}
                onClose={() => {}}
              />
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {/* Mobile Filter Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Filter"
                    iconPosition="left"
                    onClick={() => setIsFilterOpen(true)}
                    className="lg:hidden text-brand-primary border-brand hover:bg-brand-secondary"
                  >
                    Filters
                  </Button>

                  {/* Results Count */}
                  <p className="text-sm text-secondary">
                    Showing {startIndex + 1}-
                    {Math.min(
                      startIndex + productsPerPage,
                      sortedProducts?.length
                    )}{' '}
                    of {sortedProducts?.length} products
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {/* View Mode Toggle */}
                  <div className="flex items-center border border-brand rounded-md">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 transition-brand ${
                        viewMode === 'grid'
                          ? 'bg-brand-primary text-white'
                          : 'text-secondary hover:text-brand-primary'
                      }`}
                    >
                      <Icon name="Grid3X3" size={16} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 transition-brand ${
                        viewMode === 'list'
                          ? 'bg-brand-primary text-white'
                          : 'text-secondary hover:text-brand-primary'
                      }`}
                    >
                      <Icon name="List" size={16} />
                    </button>
                  </div>

                  {/* Sort Dropdown */}
                  <SortDropdown currentSort={sortBy} onSortChange={setSortBy} />
                </div>
              </div>

              {/* Products Grid */}
              {paginatedProducts?.length > 0 ? (
                <div
                  className={`grid gap-6 mb-8 ${
                    viewMode === 'grid'
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                      : 'grid-cols-1'
                  }`}
                >
                  {paginatedProducts?.map((product) => (
                    <ProductCard
                      key={product?.id}
                      product={product}
                      onWishlistToggle={handleWishlistToggle}
                      onCompareToggle={handleCompareToggle}
                      onQuickView={handleQuickView}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Icon
                    name="Search"
                    size={64}
                    className="text-gray-300 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-medium text-brand-primary mb-2">
                    No products found
                  </h3>
                  <p className="text-secondary mb-6">
                    Try adjusting your filters or search terms
                  </p>
                  <Button
                    variant="outline"
                    onClick={handleClearFilters}
                    className="text-brand-primary border-brand hover:bg-brand-secondary"
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ChevronLeft"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="text-brand-primary border-brand hover:bg-brand-secondary disabled:opacity-50"
                  />

                  {Array.from({ length: totalPages }, (_, i) => i + 1)?.map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => handlePageChange(page)}
                        className={
                          currentPage === page
                            ? 'bg-brand-primary text-white'
                            : 'text-brand-primary border-brand hover:bg-brand-secondary'
                        }
                      >
                        {page}
                      </Button>
                    )
                  )}

                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ChevronRight"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="text-brand-primary border-brand hover:bg-brand-secondary disabled:opacity-50"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      {/* Mobile Filter Sidebar */}
      <FilterSidebar
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      {/* Compare Drawer */}
      <CompareDrawer
        compareItems={compareItems}
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        onRemoveItem={handleRemoveFromCompare}
        onClearAll={handleClearCompare}
      />
      {/* Compare Floating Button */}
      {compareItems?.length > 0 && !isCompareOpen && (
        <button
          onClick={() => setIsCompareOpen(true)}
          className="fixed bottom-6 right-6 bg-brand-primary text-white p-4 rounded-full shadow-brand hover:bg-brand-primary/90 transition-brand z-40"
        >
          <div className="flex items-center gap-2">
            <Icon name="GitCompare" size={20} />
            <span className="bg-brand-cta text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {compareItems?.length}
            </span>
          </div>
        </button>
      )}
    </div>
  );
};

export default ProductListingPage;
