import React, { useState } from 'react';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';

const OrderHistory = ({ orders }) => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date-desc');

  const statusOptions = [
    { value: 'all', label: 'All Orders' },
    { value: 'pending', label: 'Pending' },
    { value: 'processing', label: 'Processing' },
    { value: 'shipped', label: 'Shipped' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'cancelled', label: 'Cancelled' },
  ];

  const sortOptions = [
    { value: 'date-desc', label: 'Newest First' },
    { value: 'date-asc', label: 'Oldest First' },
    { value: 'amount-desc', label: 'Highest Amount' },
    { value: 'amount-asc', label: 'Lowest Amount' },
  ];

  const filteredOrders = orders?.filter(
    (order) =>
      filterStatus === 'all' || order?.status?.toLowerCase() === filterStatus
  );

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrackingSteps = (status) => {
    const steps = [
      { label: 'Order Placed', completed: true },
      { label: 'Processing', completed: status !== 'Pending' },
      {
        label: 'Shipped',
        completed: status === 'Shipped' || status === 'Delivered',
      },
      { label: 'Delivered', completed: status === 'Delivered' },
    ];
    return steps;
  };

  return (
    <div className="bg-white rounded-lg shadow-brand p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-xl font-semibold text-brand-primary">
          Order History
        </h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Select
            options={statusOptions}
            value={filterStatus}
            onChange={setFilterStatus}
            placeholder="Filter by status"
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
      <div className="space-y-6">
        {filteredOrders?.map((order) => (
          <div key={order?.id} className="border border-brand rounded-lg p-6">
            {/* Order Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div>
                  <h3 className="font-semibold text-brand-primary">
                    Order #{order?.orderNumber}
                  </h3>
                  <p className="text-sm text-secondary">
                    Placed on {order?.orderDate}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    order?.status
                  )}`}
                >
                  {order?.status}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="font-semibold text-brand-primary">
                    ${order?.total}
                  </p>
                  <p className="text-sm text-secondary">
                    {order?.items?.length} items
                  </p>
                </div>
                <Button variant="outline" size="sm" iconName="Eye">
                  Details
                </Button>
              </div>
            </div>

            {/* Tracking Progress */}
            {order?.status !== 'Cancelled' && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  {getTrackingSteps(order?.status)?.map((step, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center flex-1"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step?.completed
                            ? 'bg-brand-cta text-white'
                            : 'bg-gray-200 text-gray-400'
                        }`}
                      >
                        {step?.completed ? (
                          <Icon name="Check" size={16} />
                        ) : (
                          <div className="w-2 h-2 bg-current rounded-full"></div>
                        )}
                      </div>
                      <p
                        className={`text-xs mt-1 text-center ${
                          step?.completed
                            ? 'text-brand-primary'
                            : 'text-gray-400'
                        }`}
                      >
                        {step?.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center">
                  {getTrackingSteps(order?.status)?.map((step, index) => (
                    <div key={index} className="flex-1">
                      {index < getTrackingSteps(order?.status)?.length - 1 && (
                        <div
                          className={`h-1 ${
                            step?.completed &&
                            getTrackingSteps(order?.status)?.[index + 1]
                              ?.completed
                              ? 'bg-brand-cta'
                              : 'bg-gray-200'
                          }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Order Items */}
            <div className="space-y-3">
              {order?.items?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 bg-brand-secondary/30 rounded-lg"
                >
                  <img
                    draggable="false"
                    src={item?.image}
                    alt={item?.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-brand-primary">
                      {item?.name}
                    </h4>
                    <p className="text-sm text-secondary">
                      Quantity: {item?.quantity}
                    </p>
                    <p className="text-sm text-secondary">
                      Color: {item?.color}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-brand-primary">
                      ${item?.price}
                    </p>
                    <div className="flex gap-2 mt-2">
                      <Button variant="ghost" size="sm" iconName="RotateCcw">
                        Return
                      </Button>
                      <Button variant="ghost" size="sm" iconName="Star">
                        Review
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Actions */}
            <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-brand">
              {order?.trackingNumber && (
                <Button variant="outline" size="sm" iconName="Truck">
                  Track Package
                </Button>
              )}
              <Button variant="outline" size="sm" iconName="Download">
                Download Invoice
              </Button>
              <Button variant="outline" size="sm" iconName="MessageCircle">
                Contact Support
              </Button>
              {order?.status === 'Delivered' && (
                <Button variant="outline" size="sm" iconName="Repeat">
                  Reorder Items
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      {filteredOrders?.length === 0 && (
        <div className="text-center py-12">
          <Icon
            name="Package"
            size={48}
            className="text-gray-300 mx-auto mb-4"
          />
          <h3 className="text-lg font-medium text-gray-500 mb-2">
            No orders found
          </h3>
          <p className="text-gray-400 mb-4">
            Try adjusting your filters or place your first order
          </p>
          <Button variant="default" iconName="ShoppingBag">
            Start Shopping
          </Button>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
