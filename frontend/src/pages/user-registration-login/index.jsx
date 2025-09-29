import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import WelcomeMessage from './WelcomeMessage';

const UserRegistrationLogin = () => {
  const [currentForm, setCurrentForm] = useState('login'); // 'login', 'register', 'forgot'
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('furnicraft_language') || 'en';
    setCurrentLanguage(savedLanguage);

    // Check if user is already logged in
    const user = localStorage.getItem('furnicraft_user');
    if (user) {
      // Redirect to homepage if already logged in
      window.location.href = '/homepage';
    }
  }, []);

  const handleToggleForm = () => {
    setCurrentForm(currentForm === 'login' ? 'register' : 'login');
  };

  const handleForgotPassword = () => {
    setCurrentForm('forgot');
  };

  const handleBackToLogin = () => {
    setCurrentForm('login');
  };

  const handleSocialLogin = async (provider) => {
    try {
      // Mock social login
      console.log(`Attempting ${provider} login...`);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful social login
      const mockSocialUser = {
        id: Date.now(),
        email: `user@${provider}.com`,
        name: provider === 'google' ? 'Google User' : 'Facebook User',
        provider: provider,
        loginTime: new Date()?.toISOString(),
      };

      localStorage.setItem('furnicraft_user', JSON.stringify(mockSocialUser));
      window.location.href = '/homepage';
    } catch (error) {
      console.error(`${provider} login failed:`, error);
      alert(
        `${provider} login is currently unavailable. Please try again later.`
      );
    }
  };

  const renderCurrentForm = () => {
    switch (currentForm) {
      case 'register':
        return (
          <RegisterForm
            onToggleForm={handleToggleForm}
            onSocialLogin={handleSocialLogin}
          />
        );
      case 'forgot':
        return <ForgotPasswordForm onBackToLogin={handleBackToLogin} />;
      default:
        return (
          <LoginForm
            onToggleForm={handleToggleForm}
            onForgotPassword={handleForgotPassword}
            onSocialLogin={handleSocialLogin}
          />
        );
    }
  };

  return (
    <>
      <Helmet>
        <title>
          {currentForm === 'register'
            ? 'Create Account'
            : currentForm === 'forgot'
            ? 'Reset Password'
            : 'Sign In'}{' '}
          - FurniCraft
        </title>
        <meta
          name="description"
          content="Join FurniCraft to access personalized furniture recommendations, save your favorite pieces, and create your dream home sanctuary."
        />
        <meta
          name="keywords"
          content="furniture, home decor, account, login, register, FurniCraft"
        />
        <meta
          property="og:title"
          content="Join FurniCraft - Your Home Sanctuary Awaits"
        />
        <meta
          property="og:description"
          content="Create your account to access curated furniture collections and personalized home design tools."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-brand-canvas">
        <Header />

        <main className="pt-16">
          <div className="min-h-screen flex">
            {/* Welcome Message - Desktop Only */}
            <WelcomeMessage />

            {/* Form Section */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
              <div className="w-full max-w-md">
                {renderCurrentForm()}

                {/* Terms and Privacy Links */}
                <div className="mt-8 pt-6 border-t border-brand">
                  <div className="flex flex-wrap justify-center gap-4 text-xs text-secondary">
                    <a
                      href="/terms"
                      className="hover:text-brand-primary transition-brand"
                    >
                      Terms of Service
                    </a>
                    <span>•</span>
                    <a
                      href="/privacy"
                      className="hover:text-brand-primary transition-brand"
                    >
                      Privacy Policy
                    </a>
                    <span>•</span>
                    <a
                      href="/help"
                      className="hover:text-brand-primary transition-brand"
                    >
                      Help Center
                    </a>
                  </div>
                  <p className="text-center text-xs text-secondary mt-3">
                    © {new Date()?.getFullYear()} FurniCraft. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UserRegistrationLogin;
