import React, { useState } from 'react';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import { Checkbox } from '../../components/ui/Checkbox';

const AccountSettings = ({ user, onUpdateProfile, onUpdatePreferences }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    dateOfBirth: user?.dateOfBirth || '',
    gender: user?.gender || '',
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: user?.preferences?.emailNotifications || true,
    smsNotifications: user?.preferences?.smsNotifications || false,
    marketingEmails: user?.preferences?.marketingEmails || true,
    orderUpdates: user?.preferences?.orderUpdates || true,
    newArrivals: user?.preferences?.newArrivals || false,
    salesAlerts: user?.preferences?.salesAlerts || true,
    currency: user?.preferences?.currency || 'USD',
    language: user?.preferences?.language || 'en',
    theme: user?.preferences?.theme || 'light',
  });

  const [addresses, setAddresses] = useState(user?.addresses || []);
  const [paymentMethods, setPaymentMethods] = useState(
    user?.paymentMethods || []
  );

  const tabs = [
    { id: 'profile', label: 'Profile', icon: 'User' },
    { id: 'preferences', label: 'Preferences', icon: 'Settings' },
    { id: 'addresses', label: 'Addresses', icon: 'MapPin' },
    { id: 'payments', label: 'Payment Methods', icon: 'CreditCard' },
    { id: 'security', label: 'Security', icon: 'Shield' },
  ];

  const genderOptions = [
    { value: '', label: 'Select Gender' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer-not-to-say', label: 'Prefer not to say' },
  ];

  const currencyOptions = [
    { value: 'USD', label: 'US Dollar ($)' },
    { value: 'EUR', label: 'Euro (€)' },
    { value: 'GBP', label: 'British Pound (£)' },
    { value: 'CAD', label: 'Canadian Dollar (C$)' },
  ];

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
  ];

  const themeOptions = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'auto', label: 'Auto' },
  ];

  const handleProfileSubmit = (e) => {
    e?.preventDefault();
    onUpdateProfile(profileData);
  };

  const handlePreferencesSubmit = (e) => {
    e?.preventDefault();
    onUpdatePreferences(preferences);
  };

  return (
    <div className="bg-white rounded-lg shadow-brand p-6">
      <h2 className="text-xl font-semibold text-brand-primary mb-6">
        Account Settings
      </h2>
      {/* Tabs */}
      <div className="border-b border-brand mb-6">
        <nav className="flex space-x-8 overflow-x-auto">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-brand ${
                activeTab === tab?.id
                  ? 'border-brand-cta text-brand-cta'
                  : 'border-transparent text-secondary hover:text-brand-primary hover:border-gray-300'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              {tab?.label}
            </button>
          ))}
        </nav>
      </div>
      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <form onSubmit={handleProfileSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="First Name"
              type="text"
              value={profileData?.firstName}
              onChange={(e) =>
                setProfileData({ ...profileData, firstName: e?.target?.value })
              }
              required
            />
            <Input
              label="Last Name"
              type="text"
              value={profileData?.lastName}
              onChange={(e) =>
                setProfileData({ ...profileData, lastName: e?.target?.value })
              }
              required
            />
            <Input
              label="Email Address"
              type="email"
              value={profileData?.email}
              onChange={(e) =>
                setProfileData({ ...profileData, email: e?.target?.value })
              }
              required
            />
            <Input
              label="Phone Number"
              type="tel"
              value={profileData?.phone}
              onChange={(e) =>
                setProfileData({ ...profileData, phone: e?.target?.value })
              }
            />
            <Input
              label="Date of Birth"
              type="date"
              value={profileData?.dateOfBirth}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  dateOfBirth: e?.target?.value,
                })
              }
            />
            <Select
              label="Gender"
              options={genderOptions}
              value={profileData?.gender}
              onChange={(value) =>
                setProfileData({ ...profileData, gender: value })
              }
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" variant="default" iconName="Save">
              Save Changes
            </Button>
          </div>
        </form>
      )}
      {/* Preferences Tab */}
      {activeTab === 'preferences' && (
        <form onSubmit={handlePreferencesSubmit} className="space-y-8">
          {/* Notification Preferences */}
          <div>
            <h3 className="text-lg font-medium text-brand-primary mb-4">
              Notification Preferences
            </h3>
            <div className="space-y-4">
              <Checkbox
                label="Email Notifications"
                description="Receive notifications via email"
                checked={preferences?.emailNotifications}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    emailNotifications: e?.target?.checked,
                  })
                }
              />
              <Checkbox
                label="SMS Notifications"
                description="Receive notifications via SMS"
                checked={preferences?.smsNotifications}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    smsNotifications: e?.target?.checked,
                  })
                }
              />
              <Checkbox
                label="Marketing Emails"
                description="Receive promotional emails and offers"
                checked={preferences?.marketingEmails}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    marketingEmails: e?.target?.checked,
                  })
                }
              />
              <Checkbox
                label="Order Updates"
                description="Get notified about order status changes"
                checked={preferences?.orderUpdates}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    orderUpdates: e?.target?.checked,
                  })
                }
              />
              <Checkbox
                label="New Arrivals"
                description="Be the first to know about new products"
                checked={preferences?.newArrivals}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    newArrivals: e?.target?.checked,
                  })
                }
              />
              <Checkbox
                label="Sales Alerts"
                description="Get notified about sales and discounts"
                checked={preferences?.salesAlerts}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    salesAlerts: e?.target?.checked,
                  })
                }
              />
            </div>
          </div>

          {/* Display Preferences */}
          <div>
            <h3 className="text-lg font-medium text-brand-primary mb-4">
              Display Preferences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Select
                label="Currency"
                options={currencyOptions}
                value={preferences?.currency}
                onChange={(value) =>
                  setPreferences({ ...preferences, currency: value })
                }
              />
              <Select
                label="Language"
                options={languageOptions}
                value={preferences?.language}
                onChange={(value) =>
                  setPreferences({ ...preferences, language: value })
                }
              />
              <Select
                label="Theme"
                options={themeOptions}
                value={preferences?.theme}
                onChange={(value) =>
                  setPreferences({ ...preferences, theme: value })
                }
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" variant="default" iconName="Save">
              Save Preferences
            </Button>
          </div>
        </form>
      )}
      {/* Addresses Tab */}
      {activeTab === 'addresses' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-brand-primary">
              Saved Addresses
            </h3>
            <Button variant="default" iconName="Plus">
              Add New Address
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addresses?.map((address, index) => (
              <div key={index} className="border border-brand rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-brand-primary">
                      {address?.label}
                    </h4>
                    {address?.isDefault && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-brand-secondary text-brand-primary mt-1">
                        Default
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" iconName="Edit" />
                    <Button variant="ghost" size="sm" iconName="Trash2" />
                  </div>
                </div>
                <div className="text-sm text-secondary space-y-1">
                  <p>{address?.name}</p>
                  <p>{address?.street}</p>
                  <p>
                    {address?.city}, {address?.state} {address?.zipCode}
                  </p>
                  <p>{address?.country}</p>
                  {address?.phone && <p>Phone: {address?.phone}</p>}
                </div>
              </div>
            ))}
          </div>

          {addresses?.length === 0 && (
            <div className="text-center py-8">
              <Icon
                name="MapPin"
                size={48}
                className="text-gray-300 mx-auto mb-4"
              />
              <h3 className="text-lg font-medium text-gray-500 mb-2">
                No addresses saved
              </h3>
              <p className="text-gray-400 mb-4">
                Add your first address for faster checkout
              </p>
              <Button variant="default" iconName="Plus">
                Add Address
              </Button>
            </div>
          )}
        </div>
      )}
      {/* Payment Methods Tab */}
      {activeTab === 'payments' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-brand-primary">
              Payment Methods
            </h3>
            <Button variant="default" iconName="Plus">
              Add Payment Method
            </Button>
          </div>

          <div className="space-y-4">
            {paymentMethods?.map((method, index) => (
              <div key={index} className="border border-brand rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <Icon
                        name="CreditCard"
                        size={20}
                        className="text-gray-400"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-brand-primary">
                        •••• •••• •••• {method?.lastFour}
                      </p>
                      <p className="text-sm text-secondary">
                        {method?.brand} • Expires {method?.expiryMonth}/
                        {method?.expiryYear}
                      </p>
                    </div>
                    {method?.isDefault && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-brand-secondary text-brand-primary">
                        Default
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" iconName="Edit" />
                    <Button variant="ghost" size="sm" iconName="Trash2" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {paymentMethods?.length === 0 && (
            <div className="text-center py-8">
              <Icon
                name="CreditCard"
                size={48}
                className="text-gray-300 mx-auto mb-4"
              />
              <h3 className="text-lg font-medium text-gray-500 mb-2">
                No payment methods saved
              </h3>
              <p className="text-gray-400 mb-4">
                Add a payment method for faster checkout
              </p>
              <Button variant="default" iconName="Plus">
                Add Payment Method
              </Button>
            </div>
          )}
        </div>
      )}
      {/* Security Tab */}
      {activeTab === 'security' && (
        <div className="space-y-8">
          {/* Change Password */}
          <div>
            <h3 className="text-lg font-medium text-brand-primary mb-4">
              Change Password
            </h3>
            <form className="space-y-4 max-w-md">
              <Input
                label="Current Password"
                type="password"
                placeholder="Enter current password"
                required
              />
              <Input
                label="New Password"
                type="password"
                placeholder="Enter new password"
                required
              />
              <Input
                label="Confirm New Password"
                type="password"
                placeholder="Confirm new password"
                required
              />
              <Button type="submit" variant="default">
                Update Password
              </Button>
            </form>
          </div>

          {/* Two-Factor Authentication */}
          <div>
            <h3 className="text-lg font-medium text-brand-primary mb-4">
              Two-Factor Authentication
            </h3>
            <div className="flex items-center justify-between p-4 border border-brand rounded-lg">
              <div>
                <p className="font-medium text-brand-primary">
                  SMS Authentication
                </p>
                <p className="text-sm text-secondary">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Button variant="outline">Enable</Button>
            </div>
          </div>

          {/* Login Activity */}
          <div>
            <h3 className="text-lg font-medium text-brand-primary mb-4">
              Recent Login Activity
            </h3>
            <div className="space-y-3">
              {[
                {
                  device: 'Chrome on Windows',
                  location: 'New York, US',
                  time: '2 hours ago',
                  current: true,
                },
                {
                  device: 'Safari on iPhone',
                  location: 'New York, US',
                  time: '1 day ago',
                  current: false,
                },
                {
                  device: 'Chrome on Mac',
                  location: 'Boston, US',
                  time: '3 days ago',
                  current: false,
                },
              ]?.map((session, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border border-brand rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <Icon name="Monitor" size={20} className="text-gray-400" />
                    <div>
                      <p className="font-medium text-brand-primary">
                        {session?.device}
                      </p>
                      <p className="text-sm text-secondary">
                        {session?.location} • {session?.time}
                      </p>
                    </div>
                    {session?.current && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Current
                      </span>
                    )}
                  </div>
                  {!session?.current && (
                    <Button variant="ghost" size="sm" iconName="X">
                      Revoke
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Account Deletion */}
          <div className="border-t border-red-200 pt-8">
            <h3 className="text-lg font-medium text-red-600 mb-4">
              Danger Zone
            </h3>
            <div className="p-4 border border-red-200 rounded-lg bg-red-50">
              <h4 className="font-medium text-red-800 mb-2">Delete Account</h4>
              <p className="text-sm text-red-600 mb-4">
                Once you delete your account, there is no going back. Please be
                certain.
              </p>
              <Button variant="destructive" iconName="Trash2">
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountSettings;
