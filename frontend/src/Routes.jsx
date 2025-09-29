import React from 'react';
import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './pages/NotFound';
import ShoppingCart from './pages/shopping-cart';
import ProductDetailsPage from './pages/product-details-page';
import ProductListingPage from './pages/product-listing-page';
import UserProfile from './pages/user-profile';
import UserRegistrationLogin from './pages/user-registration-login';
import Homepage from './pages/homepage';
import './styles/tailwind.css';
import './styles/index.css';
const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your route here */}
          <Route path="/" element={<Homepage />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route
            path="/product-details-page"
            element={<ProductDetailsPage />}
          />
          <Route
            path="/product-listing-page"
            element={<ProductListingPage />}
          />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route
            path="/user-registration-login"
            element={<UserRegistrationLogin />}
          />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
