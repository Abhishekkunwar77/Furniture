import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Shop', path: '/product-listing-page', icon: 'ShoppingBag' },
    { name: 'Product', path: '/product-details-page', icon: 'Package' },
    { name: 'Cart', path: '/shopping-cart', icon: 'ShoppingCart' },
  ];

  const moreMenuItems = [
    { name: 'Profile', path: '/user-profile', icon: 'User' },
    { name: 'Login', path: '/user-registration-login', icon: 'LogIn' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-brand ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-brand' : 'bg-white'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="/homepage"
            className="flex items-center space-x-2 hover:opacity-80 transition-brand"
            onClick={closeMenu}
          >
            <div className="w-8 h-8 bg-brand-primary rounded-md flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white"
                fill="currentColor"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.84.21 4 0 5.16-1 9-5.45 9-11V7l-10-5z" />
                <path d="M8 11h8v2H8z" fill="var(--color-brand-accent)" />
                <path d="M8 14h6v2H8z" fill="var(--color-brand-accent)" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-accent font-semibold text-brand-primary">
                FurniCraft
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-brand ${
                  location?.pathname === item?.path
                    ? 'text-brand-primary bg-brand-secondary'
                    : 'text-secondary hover:text-brand-primary hover:bg-brand-secondary/50'
                }`}
                onClick={closeMenu}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </Link>
            ))}

            {/* More Menu */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-secondary hover:text-brand-primary hover:bg-brand-secondary/50 transition-brand">
                <Icon name="MoreHorizontal" size={18} />
                <span>More</span>
              </button>

              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-brand border border-brand opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-brand">
                <div className="py-2">
                  {moreMenuItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 text-sm transition-brand ${
                        location?.pathname === item?.path
                          ? 'text-brand-primary bg-brand-secondary'
                          : 'text-secondary hover:text-brand-primary hover:bg-brand-secondary/50'
                      }`}
                      onClick={closeMenu}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Search"
              iconPosition="left"
              className="text-secondary border-brand hover:bg-brand-secondary/50"
            >
              Search
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-brand-cta hover:bg-brand-cta/90 text-white"
            >
              Explore Rooms
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-secondary hover:text-brand-primary hover:bg-brand-secondary/50 transition-brand"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-brand">
            <div className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium transition-brand ${
                    location?.pathname === item?.path
                      ? 'text-brand-primary bg-brand-secondary'
                      : 'text-secondary hover:text-brand-primary hover:bg-brand-secondary/50'
                  }`}
                  onClick={closeMenu}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}

              <div className="border-t border-brand pt-2 mt-2">
                {moreMenuItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium transition-brand ${
                      location?.pathname === item?.path
                        ? 'text-brand-primary bg-brand-secondary'
                        : 'text-secondary hover:text-brand-primary hover:bg-brand-secondary/50'
                    }`}
                    onClick={closeMenu}
                  >
                    <Icon name={item?.icon} size={20} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>

              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Search"
                  iconPosition="left"
                  className="text-secondary border-brand hover:bg-brand-secondary/50"
                >
                  Search
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  className="bg-brand-cta hover:bg-brand-cta/90 text-white"
                >
                  Explore Rooms
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
