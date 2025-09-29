import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ProductImageCarousel from './ProductImageCarousel';
import ProductInfo from './ProductInfo';
import ProductSpecifications from './ProductSpecifications';
import CustomerReviews from './CustomerReviews';
import RelatedProducts from './RelatedProducts';

const ProductDetailsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [showShareModal, setShowShareModal] = useState(false);

  // Mock product data
  const product = {
    id: searchParams?.get('id') || '1',
    name: 'Luxe Velvet Sectional Sofa',
    category: 'Living Room',
    sku: 'FC-LVS-2024-001',
    price: 2899,
    originalPrice: 3299,
    discount: 12,
    rating: 4.8,
    reviewCount: 247,
    stock: 15,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop&sat=-100',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop&sat=-100',
    ],
    colors: [
      { name: 'Midnight Blue', hex: '#1e3a8a' },
      { name: 'Emerald Green', hex: '#059669' },
      { name: 'Charcoal Gray', hex: '#374151' },
      { name: 'Burgundy', hex: '#7c2d12' },
    ],
    sizes: [
      { name: 'Standard', dimensions: '84" W x 36" D x 32" H' },
      { name: 'Large', dimensions: '96" W x 40" D x 34" H' },
      { name: 'XL', dimensions: '108" W x 42" D x 36" H' },
    ],
    keyFeatures: [
      'Premium velvet upholstery with stain-resistant coating',
      'Kiln-dried hardwood frame for lasting durability',
      'High-density foam cushions with down alternative fill',
      'Reversible chaise configuration',
      'Hidden storage compartment in ottoman',
      'Professional white-glove delivery included',
    ],
    description: `Transform your living space with the Luxe Velvet Sectional Sofa, where contemporary design meets uncompromising comfort. This stunning piece features premium velvet upholstery that's both luxurious to the touch and practical for everyday living.\n\nCrafted with a kiln-dried hardwood frame and reinforced with corner blocks, this sectional is built to last generations. The high-density foam cushions provide optimal support while the down alternative fill ensures cloud-like comfort.\n\nThe reversible chaise configuration allows you to adapt the sofa to your space, while the hidden storage compartment keeps your living area organized and clutter-free.`,
  };

  const specifications = {
    dimensions: {
      length: '84 inches',
      width: '36 inches',
      height: '32 inches',
    },
    weight: '185 lbs',
    assembly: 'Minimal - legs attach',
    origin: 'North Carolina, USA',
    style: 'Contemporary',
    collection: 'Luxe Living',
    sustainability: 'FSC Certified Wood',
    materials: [
      {
        type: 'Frame',
        description: 'Kiln-dried hardwood with reinforced corner blocks',
      },
      {
        type: 'Upholstery',
        description: 'Premium velvet with stain-resistant Crypton coating',
      },
      {
        type: 'Cushions',
        description: 'High-density foam core with down alternative wrap',
      },
      {
        type: 'Legs',
        description: 'Solid walnut wood with protective floor glides',
      },
    ],
  };

  const warranty = {
    duration: '10-Year Limited',
    coverage:
      'Comprehensive coverage on frame, springs, and manufacturing defects',
    covered: [
      'Frame construction and joinery',
      'Spring system and suspension',
      'Manufacturing defects in materials',
      'Fabric defects (excluding normal wear)',
      'Hardware and mechanisms',
    ],
    notCovered: [
      'Normal wear and tear',
      'Damage from misuse or accidents',
      'Pet damage or stains',
      'Fading from direct sunlight',
      'Damage from improper cleaning',
    ],
    claimProcess:
      'Contact our customer service team with your order number and photos of the issue. Our quality assurance team will review and provide resolution within 48 hours.',
  };

  const careInstructions = {
    daily: [
      'Fluff and rotate cushions regularly',
      'Vacuum with upholstery attachment weekly',
      'Keep away from direct sunlight',
      'Maintain room humidity between 30-50%',
    ],
    weekly: [
      'Deep vacuum all crevices and seams',
      'Check and tighten any loose hardware',
      'Rotate cushions to ensure even wear',
      'Spot clean any spills immediately',
    ],
    warnings: [
      'Do not use harsh chemicals or bleach',
      'Test cleaning products in inconspicuous area first',
      'Professional cleaning recommended annually',
      'Avoid placing near heat sources',
    ],
  };

  const reviews = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      title: 'Absolutely stunning and comfortable!',
      content: `This sectional exceeded all my expectations. The velvet is incredibly soft and the color is exactly as shown online. Assembly was straightforward and the delivery team was professional. It's become the centerpiece of our living room and everyone who visits comments on how beautiful it is.`,
      date: '2024-09-15',
      verified: true,
      helpful: 23,
      images: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop',
      ],
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      rating: 5,
      title: 'Quality craftsmanship at its finest',
      content: `As someone who appreciates fine furniture, I can say this piece is exceptionally well-made. The frame is solid, the stitching is perfect, and the attention to detail is remarkable. Worth every penny for the quality you receive.`,
      date: '2024-09-10',
      verified: true,
      helpful: 18,
      images: [],
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      rating: 4,
      title: 'Beautiful sofa, minor delivery delay',
      content: `The sofa itself is gorgeous and exactly what I wanted for my living room. The velvet feels luxurious and the size is perfect. Only reason for 4 stars instead of 5 is that delivery was delayed by a week, but customer service kept me informed throughout.`,
      date: '2024-09-05',
      verified: true,
      helpful: 12,
      images: [
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&h=200&fit=crop',
      ],
    },
  ];

  const relatedProducts = [
    {
      id: 2,
      name: 'Modern Accent Chair',
      category: 'Seating',
      price: 899,
      originalPrice: 1099,
      discount: 18,
      rating: 4.6,
      reviewCount: 89,
      image:
        'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop',
      isNew: true,
    },
    {
      id: 3,
      name: 'Glass Coffee Table',
      category: 'Tables',
      price: 649,
      rating: 4.4,
      reviewCount: 156,
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      name: 'Luxury Ottoman',
      category: 'Storage',
      price: 399,
      originalPrice: 499,
      discount: 20,
      rating: 4.7,
      reviewCount: 67,
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    },
    {
      id: 5,
      name: 'Floor Lamp Set',
      category: 'Lighting',
      price: 299,
      rating: 4.5,
      reviewCount: 134,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      isNew: true,
    },
  ];

  const sections = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'specifications', label: 'Specifications', icon: 'FileText' },
    { id: 'reviews', label: 'Reviews', icon: 'MessageCircle' },
    { id: 'related', label: 'Related Products', icon: 'Grid3X3' },
  ];

  const handleAddToCart = (productData) => {
    console.log('Adding to cart:', productData);
    // Add to cart logic here
    navigate('/shopping-cart');
  };

  const handleAddToWishlist = () => {
    console.log('Adding to wishlist:', product);
    // Add to wishlist logic here
  };

  const handleShare = () => {
    setShowShareModal(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-canvas">
      <Header />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-brand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <button
                onClick={() => navigate('/homepage')}
                className="text-brand-accent hover:underline"
              >
                Home
              </button>
              <Icon name="ChevronRight" size={16} className="text-secondary" />
              <button
                onClick={() => navigate('/product-listing-page')}
                className="text-brand-accent hover:underline"
              >
                {product?.category}
              </button>
              <Icon name="ChevronRight" size={16} className="text-secondary" />
              <span className="text-secondary">{product?.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <ProductImageCarousel
                images={product?.images}
                productName={product?.name}
              />
            </div>

            {/* Product Info */}
            <div>
              <ProductInfo
                product={product}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
              />
            </div>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="bg-white border-y border-brand sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 overflow-x-auto">
              {sections?.map((section) => (
                <button
                  key={section?.id}
                  onClick={() => setActiveSection(section?.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 whitespace-nowrap transition-brand ${
                    activeSection === section?.id
                      ? 'border-brand-primary text-brand-primary'
                      : 'border-transparent text-secondary hover:text-brand-primary'
                  }`}
                >
                  <Icon name={section?.icon} size={16} />
                  <span className="font-medium">{section?.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          {/* Overview Section */}
          {activeSection === 'overview' && (
            <div className="bg-white rounded-lg border border-brand p-6">
              <h2 className="text-2xl font-accent font-semibold text-brand-primary mb-4">
                Product Overview
              </h2>
              <div className="prose max-w-none">
                <p className="text-secondary leading-relaxed whitespace-pre-line">
                  {product?.description}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-brand-secondary rounded-lg">
                  <Icon
                    name="Award"
                    size={32}
                    className="text-brand-primary mx-auto mb-2"
                  />
                  <h3 className="font-medium text-brand-primary mb-1">
                    Premium Quality
                  </h3>
                  <p className="text-sm text-secondary">
                    Handcrafted with finest materials
                  </p>
                </div>
                <div className="text-center p-4 bg-brand-secondary rounded-lg">
                  <Icon
                    name="Truck"
                    size={32}
                    className="text-brand-primary mx-auto mb-2"
                  />
                  <h3 className="font-medium text-brand-primary mb-1">
                    Free Delivery
                  </h3>
                  <p className="text-sm text-secondary">
                    White-glove service included
                  </p>
                </div>
                <div className="text-center p-4 bg-brand-secondary rounded-lg">
                  <Icon
                    name="Shield"
                    size={32}
                    className="text-brand-primary mx-auto mb-2"
                  />
                  <h3 className="font-medium text-brand-primary mb-1">
                    10-Year Warranty
                  </h3>
                  <p className="text-sm text-secondary">
                    Comprehensive coverage
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Specifications Section */}
          {activeSection === 'specifications' && (
            <ProductSpecifications
              specifications={specifications}
              warranty={warranty}
              careInstructions={careInstructions}
            />
          )}

          {/* Reviews Section */}
          {activeSection === 'reviews' && (
            <CustomerReviews
              reviews={reviews}
              averageRating={product?.rating}
              totalReviews={product?.reviewCount}
            />
          )}

          {/* Related Products Section */}
          {activeSection === 'related' && (
            <RelatedProducts
              products={relatedProducts}
              title="Complete Your Living Room"
            />
          )}
        </div>

        {/* Share Modal */}
        {showShareModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-brand-primary">
                  Share Product
                </h3>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="text-secondary hover:text-brand-primary"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>

              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 hover:bg-brand-secondary rounded-md transition-brand">
                  <Icon name="Facebook" size={20} className="text-blue-600" />
                  <span>Share on Facebook</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 hover:bg-brand-secondary rounded-md transition-brand">
                  <Icon name="Twitter" size={20} className="text-blue-400" />
                  <span>Share on Twitter</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 hover:bg-brand-secondary rounded-md transition-brand">
                  <Icon name="Mail" size={20} className="text-gray-600" />
                  <span>Share via Email</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 hover:bg-brand-secondary rounded-md transition-brand">
                  <Icon name="Copy" size={20} className="text-gray-600" />
                  <span>Copy Link</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      {/* Footer */}
      <footer className="bg-brand-primary text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-brand-accent rounded-md flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.84.21 4 0 5.16-1 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
                <span className="text-xl font-accent font-semibold">
                  FurniCraft
                </span>
              </div>
              <p className="text-sm opacity-80">
                Crafting beautiful furniture that transforms houses into homes.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Contact Us</li>
                <li>Shipping Info</li>
                <li>Returns</li>
                <li>Size Guide</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Sustainability</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Icon
                  name="Facebook"
                  size={20}
                  className="opacity-80 hover:opacity-100 cursor-pointer"
                />
                <Icon
                  name="Instagram"
                  size={20}
                  className="opacity-80 hover:opacity-100 cursor-pointer"
                />
                <Icon
                  name="Twitter"
                  size={20}
                  className="opacity-80 hover:opacity-100 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>
              &copy; {new Date()?.getFullYear()} FurniCraft. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetailsPage;
