import React, { useState } from 'react';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const LoyaltyRewards = ({ loyaltyData, rewards, onRedeemReward }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tierBenefits = {
    bronze: [
      'Free shipping on orders over $100',
      '1 point per $1 spent',
      'Birthday discount',
      'Early access to sales',
    ],
    silver: [
      'Free shipping on orders over $75',
      '1.5 points per $1 spent',
      'Birthday discount + gift',
      'Early access to sales',
      'Priority customer support',
    ],
    gold: [
      'Free shipping on all orders',
      '2 points per $1 spent',
      'Birthday discount + premium gift',
      'Exclusive early access',
      'Priority customer support',
      'Quarterly style consultation',
    ],
    platinum: [
      'Free shipping + white glove delivery',
      '3 points per $1 spent',
      'Birthday month celebration',
      'VIP exclusive access',
      'Dedicated account manager',
      'Monthly style consultation',
      'Exclusive events invitation',
    ],
  };

  const getTierColor = (tier) => {
    switch (tier?.toLowerCase()) {
      case 'bronze':
        return 'text-amber-600 bg-amber-50';
      case 'silver':
        return 'text-gray-600 bg-gray-50';
      case 'gold':
        return 'text-yellow-600 bg-yellow-50';
      case 'platinum':
        return 'text-purple-600 bg-purple-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getProgressToNextTier = () => {
    const currentPoints = loyaltyData?.totalPoints;
    const nextTierThreshold = loyaltyData?.nextTierThreshold;
    return Math.min((currentPoints / nextTierThreshold) * 100, 100);
  };

  return (
    <div className="bg-white rounded-lg shadow-brand p-6">
      <h2 className="text-xl font-semibold text-brand-primary mb-6">
        Loyalty Rewards
      </h2>
      {/* Tabs */}
      <div className="border-b border-brand mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-brand ${
              activeTab === 'overview'
                ? 'border-brand-cta text-brand-cta'
                : 'border-transparent text-secondary hover:text-brand-primary'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('rewards')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-brand ${
              activeTab === 'rewards'
                ? 'border-brand-cta text-brand-cta'
                : 'border-transparent text-secondary hover:text-brand-primary'
            }`}
          >
            Available Rewards
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-brand ${
              activeTab === 'history'
                ? 'border-brand-cta text-brand-cta'
                : 'border-transparent text-secondary hover:text-brand-primary'
            }`}
          >
            Points History
          </button>
        </nav>
      </div>
      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Current Status */}
          <div className="bg-gradient-to-r from-brand-secondary to-brand-canvas rounded-lg p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${getTierColor(
                    loyaltyData?.currentTier
                  )}`}
                >
                  <Icon name="Crown" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-primary">
                    {loyaltyData?.currentTier} Member
                  </h3>
                  <p className="text-secondary">
                    Member since {loyaltyData?.memberSince}
                  </p>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-3xl font-bold text-brand-cta">
                  {loyaltyData?.availablePoints}
                </p>
                <p className="text-secondary">Available Points</p>
              </div>
            </div>
          </div>

          {/* Progress to Next Tier */}
          <div className="bg-white border border-brand rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-brand-primary">
                Progress to {loyaltyData?.nextTier}
              </h4>
              <span className="text-sm text-secondary">
                {loyaltyData?.pointsToNextTier} points needed
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div
                className="bg-brand-cta h-3 rounded-full transition-brand"
                style={{ width: `${getProgressToNextTier()}%` }}
              ></div>
            </div>
            <p className="text-sm text-secondary">
              You've earned {loyaltyData?.totalPoints} points this year. Spend $
              {loyaltyData?.spendToNextTier} more to reach{' '}
              {loyaltyData?.nextTier} status.
            </p>
          </div>

          {/* Current Tier Benefits */}
          <div className="bg-white border border-brand rounded-lg p-6">
            <h4 className="font-semibold text-brand-primary mb-4">
              Your {loyaltyData?.currentTier} Benefits
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tierBenefits?.[loyaltyData?.currentTier?.toLowerCase()]?.map(
                (benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-green-600" />
                    <span className="text-sm text-secondary">{benefit}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-brand rounded-lg p-4 text-center">
              <Icon
                name="ShoppingBag"
                size={24}
                className="text-brand-cta mx-auto mb-2"
              />
              <p className="text-2xl font-bold text-brand-primary">
                {loyaltyData?.totalOrders}
              </p>
              <p className="text-sm text-secondary">Total Orders</p>
            </div>
            <div className="bg-white border border-brand rounded-lg p-4 text-center">
              <Icon
                name="DollarSign"
                size={24}
                className="text-brand-cta mx-auto mb-2"
              />
              <p className="text-2xl font-bold text-brand-primary">
                ${loyaltyData?.totalSpent}
              </p>
              <p className="text-sm text-secondary">Total Spent</p>
            </div>
            <div className="bg-white border border-brand rounded-lg p-4 text-center">
              <Icon
                name="Gift"
                size={24}
                className="text-brand-cta mx-auto mb-2"
              />
              <p className="text-2xl font-bold text-brand-primary">
                {loyaltyData?.rewardsRedeemed}
              </p>
              <p className="text-sm text-secondary">Rewards Redeemed</p>
            </div>
          </div>
        </div>
      )}
      {/* Available Rewards Tab */}
      {activeTab === 'rewards' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewards?.map((reward) => (
              <div
                key={reward?.id}
                className="border border-brand rounded-lg overflow-hidden hover:shadow-brand transition-brand"
              >
                <div className="relative">
                  <img
                    draggable="false"
                    src={reward?.image}
                    alt={reward?.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-brand-cta text-white px-2 py-1 rounded-full text-sm font-medium">
                    {reward?.points} pts
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-brand-primary mb-2">
                    {reward?.title}
                  </h3>
                  <p className="text-sm text-secondary mb-4 line-clamp-2">
                    {reward?.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-secondary">
                      {reward?.category}
                    </span>
                    {reward?.expiresAt && (
                      <span className="text-xs text-red-600">
                        Expires {reward?.expiresAt}
                      </span>
                    )}
                  </div>

                  <Button
                    variant={
                      loyaltyData?.availablePoints >= reward?.points
                        ? 'default'
                        : 'outline'
                    }
                    size="sm"
                    fullWidth
                    disabled={loyaltyData?.availablePoints < reward?.points}
                    onClick={() => onRedeemReward(reward?.id)}
                    className={
                      loyaltyData?.availablePoints >= reward?.points
                        ? 'bg-brand-cta hover:bg-brand-cta/90'
                        : ''
                    }
                  >
                    {loyaltyData?.availablePoints >= reward?.points
                      ? 'Redeem'
                      : 'Not Enough Points'}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {rewards?.length === 0 && (
            <div className="text-center py-12">
              <Icon
                name="Gift"
                size={48}
                className="text-gray-300 mx-auto mb-4"
              />
              <h3 className="text-lg font-medium text-gray-500 mb-2">
                No rewards available
              </h3>
              <p className="text-gray-400">
                Keep shopping to unlock amazing rewards!
              </p>
            </div>
          )}
        </div>
      )}
      {/* Points History Tab */}
      {activeTab === 'history' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-brand-primary">
              Points Activity
            </h3>
            <div className="text-right">
              <p className="text-sm text-secondary">Total Lifetime Points</p>
              <p className="text-xl font-bold text-brand-cta">
                {loyaltyData?.lifetimePoints}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {loyaltyData?.pointsHistory?.map((transaction, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-brand rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction?.type === 'earned'
                        ? 'bg-green-100'
                        : 'bg-red-100'
                    }`}
                  >
                    <Icon
                      name={transaction?.type === 'earned' ? 'Plus' : 'Minus'}
                      size={16}
                      className={
                        transaction?.type === 'earned'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }
                    />
                  </div>
                  <div>
                    <p className="font-medium text-brand-primary">
                      {transaction?.description}
                    </p>
                    <p className="text-sm text-secondary">
                      {transaction?.date}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      transaction?.type === 'earned'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {transaction?.type === 'earned' ? '+' : '-'}
                    {transaction?.points} pts
                  </p>
                  {transaction?.orderId && (
                    <p className="text-xs text-secondary">
                      Order #{transaction?.orderId}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoyaltyRewards;
