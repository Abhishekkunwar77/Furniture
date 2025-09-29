import React, { useState } from 'react';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!email?.trim()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const benefits = [
    {
      icon: 'Percent',
      title: 'Exclusive Discounts',
      description: 'Get early access to sales and member-only promotions',
    },
    {
      icon: 'Sparkles',
      title: 'New Arrivals First',
      description: 'Be the first to see our latest furniture collections',
    },
    {
      icon: 'Lightbulb',
      title: 'Design Tips',
      description: 'Weekly interior design tips and room inspiration',
    },
    {
      icon: 'Gift',
      title: 'Special Offers',
      description: 'Birthday discounts and seasonal promotions',
    },
  ];

  if (isSubscribed) {
    return (
      <section className="py-16 bg-brand-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-brand">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={32} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-accent font-semibold text-brand-primary mb-4">
              Welcome to the FurniCraft Family!
            </h3>
            <p className="text-secondary mb-6">
              Thank you for subscribing! You'll receive your first newsletter
              with exclusive offers and design inspiration within the next 24
              hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                className="bg-brand-cta hover:bg-brand-cta/90 text-white"
                iconName="ShoppingBag"
                iconPosition="left"
              >
                Start Shopping
              </Button>
              <Button
                variant="outline"
                className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                iconName="Instagram"
                iconPosition="left"
              >
                Follow Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      style={{ backgroundColor: '#D69E2E' }}
      className="py-16 bg-brand-cta"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl overflow-hidden shadow-brand">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content Side */}
            <div className="p-8 lg:p-12">
              <div className="max-w-md">
                <h2 className="text-3xl sm:text-4xl font-accent font-semibold text-brand-primary mb-4">
                  Stay Inspired
                </h2>
                <p className="text-lg text-secondary mb-8">
                  Join over 50,000 design enthusiasts and get exclusive access
                  to new collections, design tips, and special offers delivered
                  to your inbox.
                </p>

                {/* Newsletter Form */}
                <form onSubmit={handleSubmit} className="mb-8">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e?.target?.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="default"
                      loading={isLoading}
                      className="bg-brand-cta hover:bg-brand-cta/90 text-white px-8"
                      iconName="Mail"
                      iconPosition="left"
                    >
                      Subscribe
                    </Button>
                  </div>
                </form>

                {/* Privacy Notice */}
                <p className="text-xs text-secondary">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from our company. You can unsubscribe at any
                  time.
                </p>

                {/* Social Proof */}
                <div className="mt-6 flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    <img
                      src="https://randomuser.me/api/portraits/women/32.jpg"
                      alt="Subscriber"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/45.jpg"
                      alt="Subscriber"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/28.jpg"
                      alt="Subscriber"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <div className="w-8 h-8 bg-brand-cta rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-xs text-white font-medium">
                        50K+
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-secondary">
                    Join 50,000+ subscribers
                  </span>
                </div>
              </div>
            </div>

            {/* Benefits Side */}
            <div className="bg-brand-secondary p-8 lg:p-12">
              <h3 className="text-xl font-semibold text-brand-primary mb-6">
                What You'll Get:
              </h3>
              <div className="space-y-6">
                {benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={benefit?.icon}
                        size={24}
                        className="text-brand-cta"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-primary mb-1">
                        {benefit?.title}
                      </h4>
                      <p className="text-secondary text-sm">
                        {benefit?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter Preview */}
              <div className="mt-8 bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="Mail" size={16} className="text-brand-cta" />
                  <span className="text-sm font-medium text-brand-primary">
                    Latest Newsletter
                  </span>
                </div>
                <h4 className="font-medium text-brand-primary mb-2">
                  "5 Ways to Style Your Living Room for Fall"
                </h4>
                <p className="text-xs text-secondary">
                  Discover seasonal decorating tips and get 20% off autumn
                  collections...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
