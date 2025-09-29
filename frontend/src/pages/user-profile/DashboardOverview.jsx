import React from 'react';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const DashboardOverview = ({ recentOrders, savedItems, designProjects }) => {
  const stats = [
    {
      label: 'Total Orders',
      value: '24',
      icon: 'Package',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Wishlist Items',
      value: savedItems?.length?.toString(),
      icon: 'Heart',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      label: 'Design Projects',
      value: designProjects?.length?.toString(),
      icon: 'Layout',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      label: 'Rewards Points',
      value: '1,250',
      icon: 'Star',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Stats Cards */}
      <div className="lg:col-span-1">
        <h2 className="text-lg font-semibold text-brand-primary mb-4">
          Account Overview
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
          {stats?.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-brand p-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${stat?.bgColor} rounded-lg flex items-center justify-center`}
                >
                  <Icon name={stat?.icon} size={20} className={stat?.color} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-brand-primary">
                    {stat?.value}
                  </p>
                  <p className="text-sm text-secondary">{stat?.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Recent Orders */}
      <div className="lg:col-span-1">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-brand-primary">
            Recent Orders
          </h2>
          <Button variant="ghost" size="sm" iconName="ArrowRight">
            View All
          </Button>
        </div>
        <div className="bg-white rounded-lg shadow-brand p-4 space-y-4">
          {recentOrders?.slice(0, 3)?.map((order) => (
            <div
              key={order?.id}
              className="flex items-center gap-3 p-3 hover:bg-brand-secondary/50 rounded-lg transition-brand"
            >
              <img
                draggable="false"
                src={order?.image}
                alt={order?.productName}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-brand-primary truncate">
                  {order?.productName}
                </p>
                <p className="text-sm text-secondary">
                  Order #{order?.orderNumber}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-brand-primary">
                  ${order?.total}
                </p>
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    order?.status === 'Delivered'
                      ? 'bg-green-100 text-green-800'
                      : order?.status === 'Shipped'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {order?.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Saved Items */}
      <div className="lg:col-span-1">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-brand-primary">Wishlist</h2>
          <Button variant="ghost" size="sm" iconName="ArrowRight">
            View All
          </Button>
        </div>
        <div className="bg-white rounded-lg shadow-brand p-4 space-y-4">
          {savedItems?.slice(0, 3)?.map((item) => (
            <div
              key={item?.id}
              className="flex items-center gap-3 p-3 hover:bg-brand-secondary/50 rounded-lg transition-brand"
            >
              <img
                draggable="false"
                src={item?.image}
                alt={item?.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-brand-primary truncate">
                  {item?.name}
                </p>
                <p className="text-sm text-secondary">${item?.price}</p>
              </div>
              <div className="flex items-center gap-2">
                {item?.inStock ? (
                  <span className="text-xs text-green-600 font-medium">
                    In Stock
                  </span>
                ) : (
                  <span className="text-xs text-red-600 font-medium">
                    Out of Stock
                  </span>
                )}
                <Button variant="ghost" size="sm" iconName="ShoppingCart" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
