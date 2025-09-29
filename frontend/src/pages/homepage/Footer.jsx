import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'Living Room', href: '/product-listing-page' },
        { name: 'Bedroom', href: '/product-listing-page' },
        { name: 'Dining Room', href: '/product-listing-page' },
        { name: 'Office', href: '/product-listing-page' },
        { name: 'Outdoor', href: '/product-listing-page' },
        { name: 'Storage', href: '/product-listing-page' },
      ],
    },
    {
      title: 'Customer Care',
      links: [
        { name: 'Contact Us', href: '#' },
        { name: 'Shipping Info', href: '#' },
        { name: 'Returns & Exchanges', href: '#' },
        { name: 'Size Guide', href: '#' },
        { name: 'Care Instructions', href: '#' },
        { name: 'Warranty', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About FurniCraft', href: '#' },
        { name: 'Our Story', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Trade Program', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Design Services', href: '#' },
        { name: 'Room Planner', href: '#' },
        { name: 'Style Guide', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Inspiration Gallery', href: '#' },
        { name: 'Customer Stories', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', href: '#' },
    { name: 'Instagram', icon: 'Instagram', href: '#' },
    { name: 'Twitter', icon: 'Twitter', href: '#' },
    { name: 'Pinterest', icon: 'PinIcon', href: '#' },
    { name: 'YouTube', icon: 'Youtube', href: '#' },
  ];

  const paymentMethods = [
    { name: 'Visa', icon: 'CreditCard' },
    { name: 'Mastercard', icon: 'CreditCard' },
    { name: 'American Express', icon: 'CreditCard' },
    { name: 'PayPal', icon: 'Wallet' },
    { name: 'Apple Pay', icon: 'Smartphone' },
    { name: 'Google Pay', icon: 'Smartphone' },
  ];

  return (
    <footer style={{ backgroundColor: '#8B4513' }} className="text-gray-50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/homepage" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-brand-cta rounded-md flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.16.21 2.84.21 4 0 5.16-1 9-5.45 9-11V7l-10-5z" />
                  <path d="M8 11h8v2H8z" fill="var(--color-brand-accent)" />
                  <path d="M8 14h6v2H8z" fill="var(--color-brand-accent)" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-accent font-semibold">
                  FurniCraft
                </span>
                <span className="text-sm opacity-80">
                  Crafting Your Perfect Home
                </span>
              </div>
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your living space with our curated collection of premium
              furniture. Quality craftsmanship meets modern design to create
              pieces that tell your story.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-brand-cta" />
                <span className="text-gray-300">1-800-FURNI-CRAFT</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-brand-cta" />
                <span className="text-gray-300">hello@furnicraft.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-brand-cta" />
                <span className="text-gray-300">
                  123 Design Street, Furniture City, FC 12345
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-cta transition-brand"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections?.map((section) => (
            <div key={section?.title}>
              <h3 className="font-semibold text-lg mb-4">{section?.title}</h3>
              <ul className="space-y-3">
                {section?.links?.map((link) => (
                  <li key={link?.name}>
                    <Link
                      to={link?.href}
                      className="text-gray-300 hover:text-brand-cta transition-brand text-sm"
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold text-lg mb-2">Stay Connected</h3>
              <p className="text-gray-300 text-sm">
                Get the latest updates on new collections and exclusive offers
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-cta focus:border-transparent"
              />
              <button
                style={{ backgroundColor: '#D69E2E' }}
                className="px-6 py-2 rounded-md font-medium text-white hover:opacity-90 transition-all"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} FurniCraft. All rights reserved. |
              <Link
                to="#"
                className="hover:text-brand-cta transition-brand ml-1"
              >
                Privacy Policy
              </Link>{' '}
              |
              <Link
                to="#"
                className="hover:text-brand-cta transition-brand ml-1"
              >
                Terms of Service
              </Link>{' '}
              |
              <Link
                to="#"
                className="hover:text-brand-cta transition-brand ml-1"
              >
                Accessibility
              </Link>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">We Accept:</span>
              <div className="flex space-x-2">
                {paymentMethods?.map((method, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 bg-white/10 rounded flex items-center justify-center"
                    title={method?.name}
                  >
                    <Icon
                      name={method?.icon}
                      size={14}
                      className="text-gray-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-brand-cta" />
              <span className="text-gray-300 text-sm">Secure Shopping</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Truck" size={16} className="text-brand-cta" />
              <span className="text-gray-300 text-sm">
                Free Shipping Over $999
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="RotateCcw" size={16} className="text-brand-cta" />
              <span className="text-gray-300 text-sm">30-Day Returns</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} className="text-brand-cta" />
              <span className="text-gray-300 text-sm">Quality Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
