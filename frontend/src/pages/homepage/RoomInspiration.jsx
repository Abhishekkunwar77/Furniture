import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const RoomInspiration = () => {
  const [activeTab, setActiveTab] = useState('living');

  const roomCategories = [
    { id: 'living', name: 'Living Room', icon: 'Sofa' },
    { id: 'bedroom', name: 'Bedroom', icon: 'Bed' },
    { id: 'dining', name: 'Dining Room', icon: 'UtensilsCrossed' },
    { id: 'office', name: 'Home Office', icon: 'Monitor' },
  ];

  const roomInspiration = {
    living: [
      {
        id: 1,
        title: 'Modern Minimalist Living',
        description: 'Clean lines and neutral tones create a serene atmosphere',
        image:
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        style: 'Modern',
        budget: '$2,500 - $4,000',
        products: [
          { name: 'Sectional Sofa', price: 1299 },
          { name: 'Coffee Table', price: 399 },
          { name: 'Floor Lamp', price: 199 },
        ],
      },
      {
        id: 2,
        title: 'Cozy Rustic Retreat',
        description: 'Warm woods and textured fabrics for ultimate comfort',
        image:
          'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
        style: 'Rustic',
        budget: '$1,800 - $3,200',
        products: [
          { name: 'Leather Sofa', price: 1099 },
          { name: 'Wooden Coffee Table', price: 449 },
          { name: 'Area Rug', price: 299 },
        ],
      },
    ],
    bedroom: [
      {
        id: 3,
        title: 'Scandinavian Sanctuary',
        description: 'Light woods and soft textiles for peaceful rest',
        image:
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
        style: 'Scandinavian',
        budget: '$1,500 - $2,800',
        products: [
          { name: 'Platform Bed', price: 699 },
          { name: 'Nightstand Set', price: 399 },
          { name: 'Dresser', price: 549 },
        ],
      },
      {
        id: 4,
        title: 'Industrial Chic Bedroom',
        description: 'Metal accents and exposed elements for urban appeal',
        image:
          'https://images.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg',
        style: 'Industrial',
        budget: '$2,000 - $3,500',
        products: [
          { name: 'Metal Bed Frame', price: 799 },
          { name: 'Industrial Nightstand', price: 299 },
          { name: 'Wardrobe', price: 899 },
        ],
      },
    ],
    dining: [
      {
        id: 5,
        title: 'Elegant Dining Experience',
        description: 'Sophisticated pieces for memorable gatherings',
        image:
          'https://images.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg',
        style: 'Traditional',
        budget: '$2,200 - $4,500',
        products: [
          { name: 'Dining Table', price: 1299 },
          { name: 'Dining Chairs (6)', price: 899 },
          { name: 'Buffet Cabinet', price: 799 },
        ],
      },
    ],
    office: [
      {
        id: 6,
        title: 'Productive Home Office',
        description: 'Ergonomic furniture for maximum productivity',
        image:
          'https://images.unsplash.com/photo-1541558869434-2840d308329a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        style: 'Modern',
        budget: '$1,200 - $2,500',
        products: [
          { name: 'Standing Desk', price: 699 },
          { name: 'Ergonomic Chair', price: 449 },
          { name: 'Storage Cabinet', price: 399 },
        ],
      },
    ],
  };

  return (
    <section className="py-16 bg-brand-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-accent font-semibold text-brand-primary mb-4">
            Room Inspiration
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Get inspired by our curated room designs. Each space tells a story
            of style, comfort, and functionality that you can recreate in your
            own home.
          </p>
        </div>

        {/* Room Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {roomCategories?.map((category) => (
            <button
              style={{ backgroundColor: '#D69E2E' }}
              key={category?.id}
              onClick={() => setActiveTab(category?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-brand ${
                activeTab === category?.id
                  ? 'bg-brand-primary text-white'
                  : 'bg-white text-secondary hover:bg-brand-secondary hover:text-brand-primary'
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <span className="font-medium">{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Room Inspiration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {roomInspiration?.[activeTab]?.map((room) => (
            <div
              key={room?.id}
              className="group bg-white rounded-xl overflow-hidden shadow-brand hover:shadow-xl transition-brand"
            >
              {/* Room Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  draggable="false"
                  src={room?.image}
                  alt={room?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-brand" />

                {/* Style Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                    {room?.style} Style
                  </span>
                </div>

                {/* View Room Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-brand">
                  <Button
                    variant="default"
                    fullWidth
                    className="bg-white text-brand-primary hover:bg-brand-secondary"
                    iconName="Eye"
                    iconPosition="left"
                  >
                    View Full Room
                  </Button>
                </div>
              </div>

              {/* Room Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-primary mb-2">
                  {room?.title}
                </h3>
                <p className="text-secondary mb-4">{room?.description}</p>

                {/* Budget */}
                <div className="flex items-center space-x-2 mb-4">
                  <Icon
                    name="DollarSign"
                    size={16}
                    className="text-brand-cta"
                  />
                  <span className="text-sm font-medium text-brand-primary">
                    Budget: {room?.budget}
                  </span>
                </div>

                {/* Featured Products */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-medium text-brand-primary">
                    Featured Products:
                  </h4>
                  {room?.products?.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-secondary">{product?.name}</span>
                      <span className="font-medium text-brand-primary">
                        ${product?.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link to="/product-listing-page" className="flex-1">
                    <Button
                      style={{ backgroundColor: '#D69E2E' }}
                      variant="default"
                      fullWidth
                      className="bg-brand-cta hover:bg-brand-cta/90 text-white"
                      iconName="ShoppingBag"
                      iconPosition="left"
                    >
                      Shop This Look
                    </Button>
                  </Link>
                  <button className="w-12 h-12 border border-brand-primary rounded-lg flex items-center justify-center hover:bg-brand-primary hover:text-black/90 transition-brand">
                    <Icon name="Heart" size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Room Planner CTA */}
        <div className="mt-16 bg-white rounded-xl p-8 text-center shadow-brand">
          <div className="max-w-2xl mx-auto">
            <Icon
              name="Layout"
              size={48}
              className="text-brand-cta mx-auto mb-4"
            />
            <h3 className="text-2xl font-accent font-semibold text-brand-primary mb-4">
              Design Your Own Space
            </h3>
            <p className="text-secondary mb-6">
              Use our interactive room planner to visualize your furniture in
              your space. Mix and match pieces to create your perfect room.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                style={{ backgroundColor: '#D69E2E' }}
                variant="default"
                size="lg"
                className="bg-brand-cta hover:bg-brand-cta/90 text-white"
                iconName="Palette"
                iconPosition="left"
              >
                Launch Room Planner
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-black"
                iconName="Camera"
                iconPosition="left"
              >
                Try AR Visualization
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomInspiration;
