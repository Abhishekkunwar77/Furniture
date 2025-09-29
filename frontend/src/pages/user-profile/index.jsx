import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import all components
import ProfileHeader from './ProfileHeader';
import DashboardOverview from './DashboardOverview';
import OrderHistory from './OrderHistory';
import WishlistManager from './WishlistManager';
import DesignProjects from './DesignProjects';
import AccountSettings from './AccountSettings';
import LoyaltyRewards from './LoyaltyRewards';

const UserProfile = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Load language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Mock user data
  const userData = {
    id: 1,
    name: 'Sarah Johnson',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    avatar:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    memberSince: 'March 2022',
    location: 'New York, NY',
    loyaltyPoints: 1250,
    dateOfBirth: '1990-05-15',
    gender: 'female',
    preferences: {
      emailNotifications: true,
      smsNotifications: false,
      marketingEmails: true,
      orderUpdates: true,
      newArrivals: false,
      salesAlerts: true,
      currency: 'USD',
      language: 'en',
      theme: 'light',
    },
    addresses: [
      {
        id: 1,
        label: 'Home',
        name: 'Sarah Johnson',
        street: '123 Oak Street, Apt 4B',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'United States',
        phone: '+1 (555) 123-4567',
        isDefault: true,
      },
      {
        id: 2,
        label: 'Office',
        name: 'Sarah Johnson',
        street: '456 Business Ave, Suite 200',
        city: 'New York',
        state: 'NY',
        zipCode: '10002',
        country: 'United States',
        phone: '+1 (555) 123-4567',
        isDefault: false,
      },
    ],
    paymentMethods: [
      {
        id: 1,
        brand: 'Visa',
        lastFour: '4242',
        expiryMonth: '12',
        expiryYear: '2026',
        isDefault: true,
      },
      {
        id: 2,
        brand: 'Mastercard',
        lastFour: '8888',
        expiryMonth: '08',
        expiryYear: '2025',
        isDefault: false,
      },
    ],
  };

  // Mock recent orders
  const recentOrders = [
    {
      id: 1,
      orderNumber: 'FC-2024-001',
      productName: 'Modern Sectional Sofa',
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop',
      total: '2,499.00',
      status: 'Delivered',
      orderDate: 'September 15, 2024',
      trackingNumber: '1Z999AA1234567890',
      items: [
        {
          name: 'Modern Sectional Sofa',
          image:
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop',
          quantity: 1,
          price: '2,499.00',
          color: 'Charcoal Gray',
        },
      ],
    },
    {
      id: 2,
      orderNumber: 'FC-2024-002',
      productName: 'Oak Dining Table Set',
      image:
        'https://images.unsplash.com/photo-1549497538-303791108f95?w=100&h=100&fit=crop',
      total: '1,299.00',
      status: 'Shipped',
      orderDate: 'September 20, 2024',
      trackingNumber: '1Z999AA1234567891',
      items: [
        {
          name: 'Oak Dining Table',
          image:
            'https://images.unsplash.com/photo-1549497538-303791108f95?w=100&h=100&fit=crop',
          quantity: 1,
          price: '899.00',
          color: 'Natural Oak',
        },
        {
          name: 'Dining Chairs (Set of 4)',
          image:
            'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=100&h=100&fit=crop',
          quantity: 4,
          price: '400.00',
          color: 'Natural Oak',
        },
      ],
    },
    {
      id: 3,
      orderNumber: 'FC-2024-003',
      productName: 'Velvet Accent Chair',
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop',
      total: '599.00',
      status: 'Processing',
      orderDate: 'September 25, 2024',
      items: [
        {
          name: 'Velvet Accent Chair',
          image:
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop',
          quantity: 1,
          price: '599.00',
          color: 'Emerald Green',
        },
      ],
    },
  ];

  // Mock wishlist items
  const wishlistItems = [
    {
      id: 1,
      name: 'Scandinavian Coffee Table',
      image:
        'https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=300&fit=crop',
      price: '449.00',
      salePrice: '359.00',
      category: 'Coffee Tables',
      rating: 4.5,
      reviews: 128,
      inStock: true,
      onSale: true,
      dateAdded: 'September 10, 2024',
    },
    {
      id: 2,
      name: 'Industrial Bookshelf',
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
      price: '799.00',
      category: 'Storage',
      rating: 4.8,
      reviews: 89,
      inStock: false,
      onSale: false,
      dateAdded: 'September 8, 2024',
    },
    {
      id: 3,
      name: 'Luxury Throw Pillows',
      image:
        'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=300&fit=crop',
      price: '89.00',
      category: 'Accessories',
      rating: 4.3,
      reviews: 245,
      inStock: true,
      onSale: false,
      dateAdded: 'September 5, 2024',
    },
  ];

  // Mock design projects
  const designProjects = [
    {
      id: 1,
      name: 'Living Room Makeover',
      description:
        'Complete transformation of main living space with modern furniture and warm color palette',
      thumbnail:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      roomType: 'Living Room',
      itemCount: 8,
      totalBudget: '4,500.00',
      progress: 75,
      status: 'in-progress',
      lastUpdated: '2 days ago',
    },
    {
      id: 2,
      name: 'Master Bedroom Refresh',
      description:
        'Creating a serene bedroom sanctuary with natural materials and calming colors',
      thumbnail:
        'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
      roomType: 'Bedroom',
      itemCount: 6,
      totalBudget: '3,200.00',
      progress: 100,
      status: 'completed',
      lastUpdated: '1 week ago',
    },
    {
      id: 3,
      name: 'Home Office Setup',
      description:
        'Designing a productive workspace with ergonomic furniture and storage solutions',
      thumbnail:
        'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
      roomType: 'Office',
      itemCount: 5,
      totalBudget: '2,800.00',
      progress: 25,
      status: 'planning',
      lastUpdated: '3 days ago',
    },
  ];

  // Mock loyalty data
  const loyaltyData = {
    currentTier: 'Gold',
    nextTier: 'Platinum',
    availablePoints: 1250,
    totalPoints: 3750,
    lifetimePoints: 8950,
    pointsToNextTier: 750,
    nextTierThreshold: 2000,
    spendToNextTier: 1500,
    memberSince: 'March 2022',
    totalOrders: 24,
    totalSpent: '12,450',
    rewardsRedeemed: 8,
    pointsHistory: [
      {
        type: 'earned',
        description: 'Purchase - Modern Sectional Sofa',
        points: 250,
        date: 'September 15, 2024',
        orderId: 'FC-2024-001',
      },
      {
        type: 'redeemed',
        description: 'Free Shipping Reward',
        points: 100,
        date: 'September 10, 2024',
      },
      {
        type: 'earned',
        description: 'Product Review Bonus',
        points: 50,
        date: 'September 8, 2024',
      },
    ],
  };

  // Mock rewards
  const rewards = [
    {
      id: 1,
      title: 'Free Shipping',
      description: 'Get free shipping on your next order of any amount',
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop',
      points: 100,
      category: 'Shipping',
      expiresAt: 'December 31, 2024',
    },
    {
      id: 2,
      title: '$50 Off Coupon',
      description: 'Save $50 on any purchase over $500',
      image:
        'https://images.unsplash.com/photo-1549497538-303791108f95?w=300&h=200&fit=crop',
      points: 500,
      category: 'Discount',
      expiresAt: 'November 30, 2024',
    },
    {
      id: 3,
      title: 'Premium Throw Pillow',
      description: 'Complimentary luxury throw pillow in your choice of color',
      image:
        'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=200&fit=crop',
      points: 800,
      category: 'Product',
      expiresAt: null,
    },
  ];

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
    { id: 'orders', label: 'Order History', icon: 'Package' },
    { id: 'wishlist', label: 'Wishlist', icon: 'Heart' },
    { id: 'projects', label: 'Design Projects', icon: 'Layout' },
    { id: 'rewards', label: 'Loyalty Rewards', icon: 'Star' },
    { id: 'settings', label: 'Account Settings', icon: 'Settings' },
  ];

  // Event handlers
  const handleEditProfile = () => {
    setActiveSection('settings');
  };

  const handleRemoveWishlistItem = (itemId) => {
    console.log('Remove wishlist item:', itemId);
  };

  const handleMoveToCart = (itemId) => {
    console.log('Move to cart:', itemId);
  };

  const handleCreateProject = () => {
    console.log('Create new project');
  };

  const handleEditProject = (projectId) => {
    console.log('Edit project:', projectId);
  };

  const handleDeleteProject = (projectId) => {
    console.log('Delete project:', projectId);
  };

  const handleUpdateProfile = (profileData) => {
    console.log('Update profile:', profileData);
  };

  const handleUpdatePreferences = (preferences) => {
    console.log('Update preferences:', preferences);
  };

  const handleRedeemReward = (rewardId) => {
    console.log('Redeem reward:', rewardId);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <DashboardOverview
            recentOrders={recentOrders}
            savedItems={wishlistItems}
            designProjects={designProjects}
          />
        );
      case 'orders':
        return <OrderHistory orders={recentOrders} />;
      case 'wishlist':
        return (
          <WishlistManager
            wishlistItems={wishlistItems}
            onRemoveItem={handleRemoveWishlistItem}
            onMoveToCart={handleMoveToCart}
          />
        );
      case 'projects':
        return (
          <DesignProjects
            projects={designProjects}
            onCreateProject={handleCreateProject}
            onEditProject={handleEditProject}
            onDeleteProject={handleDeleteProject}
          />
        );
      case 'rewards':
        return (
          <LoyaltyRewards
            loyaltyData={loyaltyData}
            rewards={rewards}
            onRedeemReward={handleRedeemReward}
          />
        );
      case 'settings':
        return (
          <AccountSettings
            user={userData}
            onUpdateProfile={handleUpdateProfile}
            onUpdatePreferences={handleUpdatePreferences}
          />
        );
      default:
        return (
          <DashboardOverview
            recentOrders={recentOrders}
            savedItems={wishlistItems}
            designProjects={designProjects}
          />
        );
    }
  };

  return (
    <>
      <Helmet>
        <title>My Profile - FurniCraft</title>
        <meta
          name="description"
          content="Manage your FurniCraft account, view order history, wishlist, design projects, and loyalty rewards."
        />
      </Helmet>
      <div className="min-h-screen bg-brand-canvas">
        <Header />

        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Profile Header */}
            <ProfileHeader user={userData} onEditProfile={handleEditProfile} />

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:w-64 flex-shrink-0">
                <div className="bg-white rounded-lg shadow-brand p-4">
                  <nav className="space-y-2">
                    {navigationItems?.map((item) => (
                      <button
                        key={item?.id}
                        onClick={() => setActiveSection(item?.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-brand ${
                          activeSection === item?.id
                            ? 'bg-brand-secondary text-brand-primary font-medium'
                            : 'text-secondary hover:bg-brand-secondary/50 hover:text-brand-primary'
                        }`}
                      >
                        <Icon name={item?.icon} size={20} />
                        <span>{item?.label}</span>
                      </button>
                    ))}
                  </nav>

                  {/* Quick Actions */}
                  <div className="mt-8 pt-6 border-t border-brand">
                    <h4 className="text-sm font-medium text-brand-primary mb-3">
                      Quick Actions
                    </h4>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        size="sm"
                        fullWidth
                        iconName="ShoppingBag"
                        className="justify-start"
                      >
                        Continue Shopping
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        fullWidth
                        iconName="MessageCircle"
                        className="justify-start"
                      >
                        Contact Support
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        fullWidth
                        iconName="Download"
                        className="justify-start"
                      >
                        Download App
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">{renderActiveSection()}</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-brand-primary text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-brand-cta rounded-md flex items-center justify-center">
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
                <p className="text-gray-300 mb-4 max-w-md">
                  Creating beautiful living spaces with quality furniture that
                  reflects your personal style and enhances your daily life.
                </p>
                <div className="flex space-x-4">
                  <Icon
                    name="Facebook"
                    size={20}
                    className="text-gray-300 hover:text-white cursor-pointer transition-brand"
                  />
                  <Icon
                    name="Twitter"
                    size={20}
                    className="text-gray-300 hover:text-white cursor-pointer transition-brand"
                  />
                  <Icon
                    name="Instagram"
                    size={20}
                    className="text-gray-300 hover:text-white cursor-pointer transition-brand"
                  />
                  <Icon
                    name="Youtube"
                    size={20}
                    className="text-gray-300 hover:text-white cursor-pointer transition-brand"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Customer Care</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="#" className="hover:text-white transition-brand">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-brand">
                      Shipping Info
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-brand">
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-brand">
                      Size Guide
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="#" className="hover:text-white transition-brand">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-brand">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-brand">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-brand">
                      Sustainability
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">
                © {new Date()?.getFullYear()} FurniCraft. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-brand"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-brand"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white text-sm transition-brand"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default UserProfile;
