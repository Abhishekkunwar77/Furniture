import React, { useState } from 'react';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const CartSummary = ({
  subtotal,
  tax,
  shipping,
  total,
  onApplyPromoCode,
  onProceedToCheckout,
  itemCount,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  const handleApplyPromo = () => {
    // Mock promo code validation
    const validCodes = ['SAVE10', 'WELCOME15', 'FURNITURE20'];

    if (validCodes?.includes(promoCode?.toUpperCase())) {
      setPromoApplied(true);
      setPromoError('');
      onApplyPromoCode(promoCode?.toUpperCase());
    } else {
      setPromoError(
        'Invalid promo code. Try SAVE10, WELCOME15, or FURNITURE20'
      );
      setPromoApplied(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-brand border border-brand p-6 sticky top-24">
      <h2 className="text-xl font-semibold text-brand-primary mb-6">
        Order Summary
      </h2>
      {/* Item Count */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-brand">
        <span className="text-secondary">
          {itemCount} {itemCount === 1 ? 'item' : 'items'} in cart
        </span>
        <Icon name="ShoppingBag" size={20} className="text-brand-primary" />
      </div>
      {/* Promo Code Section */}
      <div className="mb-6">
        <div className="flex gap-2 mb-2">
          <Input
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e?.target?.value)}
            className="flex-1"
            disabled={promoApplied}
          />
          <Button
            variant="outline"
            onClick={handleApplyPromo}
            disabled={!promoCode?.trim() || promoApplied}
            className="px-4"
          >
            Apply
          </Button>
        </div>
        {promoError && <p className="text-sm text-error mt-1">{promoError}</p>}
        {promoApplied && (
          <div className="flex items-center gap-2 mt-2 text-sm text-success">
            <Icon name="CheckCircle" size={16} />
            <span>Promo code applied successfully!</span>
          </div>
        )}
      </div>
      {/* Price Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-secondary">
          <span>Subtotal</span>
          <span>${subtotal?.toFixed(2)}</span>
        </div>

        {promoApplied && (
          <div className="flex justify-between text-success">
            <span>Promo Discount ({promoCode})</span>
            <span>-${(subtotal * 0.1)?.toFixed(2)}</span>
          </div>
        )}

        <div className="flex justify-between text-secondary">
          <span>Estimated Tax</span>
          <span>${tax?.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-secondary">
          <div className="flex items-center gap-1">
            <span>Shipping</span>
            <Icon name="Info" size={14} className="text-brand-primary" />
          </div>
          <span>{shipping === 0 ? 'FREE' : `$${shipping?.toFixed(2)}`}</span>
        </div>

        {shipping === 0 && (
          <p className="text-xs text-success">
            🎉 Free shipping on orders over $299!
          </p>
        )}
      </div>
      {/* Total */}
      <div className="border-t border-brand pt-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-brand-primary">
            Total
          </span>
          <span className="text-xl font-bold text-brand-primary">
            ${total?.toFixed(2)}
          </span>
        </div>
      </div>
      {/* Checkout Button */}
      <Button
        variant="default"
        fullWidth
        size="lg"
        onClick={onProceedToCheckout}
        className="bg-brand-cta hover:bg-brand-cta/90 text-white mb-4"
        iconName="CreditCard"
        iconPosition="left"
      >
        Proceed to Checkout
      </Button>
      {/* Security & Payment Info */}
      <div className="space-y-3 text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-secondary">
          <Icon name="Shield" size={16} className="text-success" />
          <span>Secure SSL Checkout</span>
        </div>

        <div className="flex items-center justify-center gap-4 text-xs text-secondary">
          <div className="flex items-center gap-1">
            <Icon name="CreditCard" size={14} />
            <span>Visa</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="CreditCard" size={14} />
            <span>Mastercard</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Smartphone" size={14} />
            <span>PayPal</span>
          </div>
        </div>

        <p className="text-xs text-secondary">
          30-day return policy • Free assembly service available
        </p>
      </div>
    </div>
  );
};

export default CartSummary;
