import React from 'react';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';

const ProfileHeader = ({ user, onEditProfile }) => {
  return (
    <div className="bg-white rounded-lg shadow-brand p-6 mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="relative">
          <img
            draggable="false"
            src={user?.avatar}
            alt={`${user?.name}'s profile`}
            className="w-20 h-20 rounded-full object-cover border-4 border-brand-secondary"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <Icon name="Check" size={12} className="text-white" />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-brand-primary mb-1">
                {user?.name}
              </h1>
              <p className="text-secondary mb-2">{user?.email}</p>
              <div className="flex items-center gap-4 text-sm text-secondary">
                <span className="flex items-center gap-1">
                  <Icon name="Calendar" size={16} />
                  Member since {user?.memberSince}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="MapPin" size={16} />
                  {user?.location}
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              iconName="Edit"
              iconPosition="left"
              onClick={onEditProfile}
              className="self-start sm:self-center"
            >
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
      {/* Loyalty Status */}
      <div className="mt-6 p-4 bg-brand-secondary rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-cta rounded-full flex items-center justify-center">
              <Icon name="Crown" size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-brand-primary">Gold Member</h3>
              <p className="text-sm text-secondary">
                {user?.loyaltyPoints} points • Next tier: 500 points
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-secondary">Progress to Platinum</p>
            <div className="w-24 h-2 bg-gray-200 rounded-full mt-1">
              <div
                className="h-full bg-brand-cta rounded-full"
                style={{ width: `${(user?.loyaltyPoints / 2000) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
