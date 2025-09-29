import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { Checkbox } from '../../components/ui/Checkbox';
import Icon from '../../components/AppIcon';

const LoginForm = ({ onToggleForm, onForgotPassword, onSocialLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Mock authentication - check against mock credentials
    const mockCredentials = {
      email: 'john.doe@furnicraft.com',
      password: 'FurniCraft2024!',
    };

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (
        formData?.email === mockCredentials?.email &&
        formData?.password === mockCredentials?.password
      ) {
        // Successful login
        localStorage.setItem(
          'furnicraft_user',
          JSON.stringify({
            id: 1,
            email: formData?.email,
            name: 'John Doe',
            loginTime: new Date()?.toISOString(),
          })
        );

        // Redirect to homepage or dashboard
        window.location.href = '/homepage';
      } else {
        setErrors({
          general: 'Invalid email or password. Please try again.',
        });
      }
    } catch (error) {
      setErrors({
        general: 'Login failed. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-accent font-semibold text-brand-primary mb-2">
          Welcome Back
        </h2>
        <p className="text-secondary">
          Sign in to your FurniCraft account to continue your journey
        </p>
      </div>
      {errors?.general && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="AlertCircle" size={20} className="text-red-600" />
            <p className="text-red-700 text-sm">{errors?.general}</p>
          </div>
          <p className="text-red-600 text-xs mt-2">
            Demo credentials: john.doe@furnicraft.com / FurniCraft2024!
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData?.email}
          onChange={handleInputChange}
          error={errors?.email}
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData?.password}
          onChange={handleInputChange}
          error={errors?.password}
          required
        />

        <div className="flex items-center justify-between">
          <Checkbox
            label="Remember me"
            name="rememberMe"
            checked={formData?.rememberMe}
            onChange={handleInputChange}
          />

          <button
            type="button"
            onClick={onForgotPassword}
            className="text-sm text-brand-primary hover:text-brand-cta transition-brand"
          >
            Forgot password?
          </button>
        </div>

        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={isLoading}
          className="bg-brand-cta hover:bg-brand-cta/90 text-white"
        >
          Sign In
        </Button>
      </form>
      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-brand"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-secondary">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            onClick={() => onSocialLogin('google')}
            iconName="Chrome"
            iconPosition="left"
            className="border-brand hover:bg-brand-secondary/50"
          >
            Google
          </Button>
          <Button
            variant="outline"
            onClick={() => onSocialLogin('facebook')}
            iconName="Facebook"
            iconPosition="left"
            className="border-brand hover:bg-brand-secondary/50"
          >
            Facebook
          </Button>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-secondary">
          Don't have an account?{' '}
          <button
            onClick={onToggleForm}
            className="text-brand-primary hover:text-brand-cta font-medium transition-brand"
          >
            Create one now
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
