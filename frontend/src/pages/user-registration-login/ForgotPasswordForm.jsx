import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Icon from '../../components/AppIcon';

const ForgotPasswordForm = ({ onBackToLogin }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!/\S+@\S+\.\S+/?.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock successful password reset request
      setIsEmailSent(true);
    } catch (error) {
      setError('Failed to send reset email. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isEmailSent) {
    return (
      <div className="w-full max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Mail" size={32} className="text-green-600" />
          </div>
          <h2 className="text-3xl font-accent font-semibold text-brand-primary mb-2">
            Check Your Email
          </h2>
          <p className="text-secondary">We've sent a password reset link to</p>
          <p className="text-brand-primary font-medium mt-1">{email}</p>
        </div>

        <div className="space-y-4 text-sm text-secondary">
          <p>
            Click the link in the email to reset your password. If you don't see
            the email, check your spam folder.
          </p>
          <p>The link will expire in 24 hours for security reasons.</p>
        </div>

        <div className="mt-8 space-y-4">
          <Button
            variant="default"
            fullWidth
            onClick={onBackToLogin}
            className="bg-brand-cta hover:bg-brand-cta/90 text-white"
          >
            Back to Sign In
          </Button>

          <Button
            variant="outline"
            fullWidth
            onClick={() => setIsEmailSent(false)}
            className="border-brand hover:bg-brand-secondary/50"
          >
            Try Different Email
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Lock" size={32} className="text-brand-primary" />
        </div>
        <h2 className="text-3xl font-accent font-semibold text-brand-primary mb-2">
          Forgot Password?
        </h2>
        <p className="text-secondary">
          No worries! Enter your email and we'll send you a reset link
        </p>
      </div>
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="AlertCircle" size={20} className="text-red-600" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => {
            setEmail(e?.target?.value);
            setError('');
          }}
          required
        />

        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={isLoading}
          className="bg-brand-cta hover:bg-brand-cta/90 text-white"
        >
          Send Reset Link
        </Button>
      </form>
      <div className="mt-8 text-center">
        <button
          onClick={onBackToLogin}
          className="flex items-center justify-center space-x-2 text-brand-primary hover:text-brand-cta font-medium transition-brand mx-auto"
        >
          <Icon name="ArrowLeft" size={16} />
          <span>Back to Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
