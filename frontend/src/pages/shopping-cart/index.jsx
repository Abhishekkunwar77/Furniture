import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import RecommendedProducts from './RecommendedProducts';
import SavedForLater from './SavedForLater';
import EmptyCart from './EmptyCart';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [promoDiscount, setPromoDiscount] = useState(0);

  // Mock cart data
  const mockCartItems = [
    {
      id: 1,
      name: 'Modern Sectional Sofa',
      category: 'Living Room',
      material: 'Premium Fabric',
      color: 'Charcoal Gray',
      size: 'L-Shape',
      price: 1299.99,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      inStock: true,
    },
    {
      id: 2,
      name: 'Walnut Coffee Table',
      category: 'Living Room',
      material: 'Solid Walnut',
      color: 'Natural Wood',
      size: '48" x 24"',
      price: 599.99,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=400&fit=crop',
      inStock: true,
    },
    {
      id: 3,
      name: 'Ergonomic Office Chair',
      category: 'Office',
      material: 'Mesh & Steel',
      color: 'Black',
      size: 'Adjustable',
      price: 449.99,
      quantity: 2,
      image:
        'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400&h=400&fit=crop',
      inStock: false,
    },
  ];

  // Mock saved items
  const mockSavedItems = [
    {
      id: 4,
      name: 'Vintage Bookshelf',
      category: 'Storage',
      color: 'Oak Finish',
      price: 329.99,
      image:
        'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop',
      inStock: true,
    },
    {
      id: 5,
      name: 'Accent Armchair',
      category: 'Living Room',
      color: 'Navy Blue',
      price: 699.99,
      image:
        'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop',
      inStock: false,
    },
  ];

  // Mock recommended products
  const recommendedProducts = [
    {
      id: 6,
      name: 'Throw Pillows Set',
      category: 'Accessories',
      price: 89.99,
      originalPrice: 119.99,
      discount: 25,
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
      frequentlyBought: true,
    },
    {
      id: 7,
      name: 'Floor Lamp',
      category: 'Lighting',
      price: 199.99,
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      frequentlyBought: false,
    },
    {
      id: 8,
      name: 'Area Rug',
      category: 'Rugs',
      price: 299.99,
      originalPrice: 399.99,
      discount: 25,
      rating: 4.7,
      image:
        'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop',
      frequentlyBought: true,
    },
  ];

  useEffect(() => {
    // Load cart from localStorage or use mock data
    const savedCart = localStorage.getItem('furnicraft_cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    } else {
      setCartItems(mockCartItems);
    }

    // Load saved items
    const savedForLater = localStorage.getItem('furnicraft_saved');
    if (savedForLater) {
      setSavedItems(JSON.parse(savedForLater));
    } else {
      setSavedItems(mockSavedItems);
    }
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('furnicraft_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('furnicraft_saved', JSON.stringify(savedItems));
  }, [savedItems]);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems((items) =>
      items?.map((item) =>
        item?.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((items) => items?.filter((item) => item?.id !== itemId));
  };

  const handleSaveForLater = (itemId) => {
    const itemToSave = cartItems?.find((item) => item?.id === itemId);
    if (itemToSave) {
      setSavedItems((prev) => [...prev, { ...itemToSave, quantity: 1 }]);
      handleRemoveItem(itemId);
    }
  };

  const handleMoveToCart = (itemId) => {
    const itemToMove = savedItems?.find((item) => item?.id === itemId);
    if (itemToMove && itemToMove?.inStock) {
      setCartItems((prev) => [...prev, { ...itemToMove, quantity: 1 }]);
      setSavedItems((items) => items?.filter((item) => item?.id !== itemId));
    }
  };

  const handleRemoveSaved = (itemId) => {
    setSavedItems((items) => items?.filter((item) => item?.id !== itemId));
  };

  const handleAddToCart = (product) => {
    const existingItem = cartItems?.find((item) => item?.id === product?.id);
    if (existingItem) {
      handleUpdateQuantity(product?.id, existingItem?.quantity + 1);
    } else {
      setCartItems((prev) => [
        ...prev,
        { ...product, quantity: 1, inStock: true },
      ]);
    }
  };

  const handleApplyPromoCode = (code) => {
    // Mock promo code logic
    const discountMap = {
      SAVE10: 0.1,
      WELCOME15: 0.15,
      FURNITURE20: 0.2,
    };
    setPromoDiscount(discountMap?.[code] || 0);
  };

  const handleProceedToCheckout = () => {
    // Navigate to checkout or show guest checkout modal
    navigate('/user-registration-login', { state: { from: 'checkout' } });
  };

  // Calculate totals
  const subtotal = cartItems?.reduce(
    (sum, item) => sum + item?.price * item?.quantity,
    0
  );
  const discountAmount = subtotal * promoDiscount;
  const discountedSubtotal = subtotal - discountAmount;
  const tax = discountedSubtotal * 0.08; // 8% tax
  const shipping = discountedSubtotal >= 299 ? 0 : 49.99; // Free shipping over $299
  const total = discountedSubtotal + tax + shipping;

  if (cartItems?.length === 0) {
    return (
      <div className="min-h-screen bg-brand-canvas">
        <Header />
        <main className="pt-16">
          <EmptyCart />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-canvas">
      <Header />
      <main className="pt-16">
        {/* Page Header */}
        <div className="bg-white border-b border-brand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-brand-primary">
                  Shopping Cart
                </h1>
                <p className="text-secondary mt-2">
                  {cartItems?.length}{' '}
                  {cartItems?.length === 1 ? 'item' : 'items'} in your cart
                </p>
              </div>

              <Button
                variant="outline"
                iconName="ArrowLeft"
                iconPosition="left"
                onClick={() => navigate('/product-listing-page')}
                className="text-brand-primary border-brand-primary hover:bg-brand-secondary"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems?.map((item) => (
                <CartItem
                  key={item?.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemoveItem}
                  onSaveForLater={handleSaveForLater}
                />
              ))}
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <CartSummary
                subtotal={subtotal}
                tax={tax}
                shipping={shipping}
                total={total}
                itemCount={cartItems?.length}
                onApplyPromoCode={handleApplyPromoCode}
                onProceedToCheckout={handleProceedToCheckout}
              />
            </div>
          </div>

          {/* Recommended Products */}
          <div className="mt-12">
            <RecommendedProducts
              products={recommendedProducts}
              onAddToCart={handleAddToCart}
            />
          </div>

          {/* Saved for Later */}
          {savedItems?.length > 0 && (
            <div className="mt-12">
              <SavedForLater
                items={savedItems}
                onMoveToCart={handleMoveToCart}
                onRemove={handleRemoveSaved}
              />
            </div>
          )}

          {/* Trust Signals */}
          <div className="mt-12 bg-white rounded-lg shadow-brand border border-brand p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mb-3">
                  <Icon name="Truck" size={24} className="text-brand-primary" />
                </div>
                <h3 className="font-semibold text-brand-primary mb-1">
                  Free Delivery
                </h3>
                <p className="text-sm text-secondary">On orders over $299</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mb-3">
                  <Icon
                    name="RotateCcw"
                    size={24}
                    className="text-brand-primary"
                  />
                </div>
                <h3 className="font-semibold text-brand-primary mb-1">
                  30-Day Returns
                </h3>
                <p className="text-sm text-secondary">Easy return policy</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center mb-3">
                  <Icon
                    name="Wrench"
                    size={24}
                    className="text-brand-primary"
                  />
                </div>
                <h3 className="font-semibold text-brand-primary mb-1">
                  Free Assembly
                </h3>
                <p className="text-sm text-secondary">
                  Professional setup included
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShoppingCart;
