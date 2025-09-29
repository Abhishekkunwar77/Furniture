import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { Checkbox } from '../../components/ui/Checkbox';
import Icon from '../../components/AppIcon';

const RegisterForm = ({ onToggleForm, onSocialLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    agreeToTerms: false,
    subscribeNewsletter: true,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

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

    // Calculate password strength
    if (name === 'password') {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password?.length >= 8) strength += 1;
    if (/[A-Z]/?.test(password)) strength += 1;
    if (/[a-z]/?.test(password)) strength += 1;
    if (/[0-9]/?.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/?.test(password)) strength += 1;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 0:
      case 1:
        return { text: 'Very Weak', color: 'text-red-600' };
      case 2:
        return { text: 'Weak', color: 'text-orange-600' };
      case 3:
        return { text: 'Fair', color: 'text-yellow-600' };
      case 4:
        return { text: 'Good', color: 'text-blue-600' };
      case 5:
        return { text: 'Strong', color: 'text-green-600' };
      default:
        return { text: '', color: '' };
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.firstName?.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData?.lastName?.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData?.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.password) {
      newErrors.password = 'Password is required';
    } else if (formData?.password?.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (formData?.password !== formData?.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (formData?.phone && !/^\+?[\d\s\-\(\)]+$/?.test(formData?.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData?.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock successful registration
      const newUser = {
        id: Date.now(),
        firstName: formData?.firstName,
        lastName: formData?.lastName,
        email: formData?.email,
        phone: formData?.phone,
        subscribeNewsletter: formData?.subscribeNewsletter,
        registrationDate: new Date()?.toISOString(),
      };

      localStorage.setItem('furnicraft_user', JSON.stringify(newUser));

      // Show success message and redirect
      alert('Account created successfully! Welcome to FurniCraft family.');
      window.location.href = '/homepage';
    } catch (error) {
      setErrors({
        general: 'Registration failed. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const strengthIndicator = getPasswordStrengthText();

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-accent font-semibold text-brand-primary mb-2">
          Join FurniCraft
        </h2>
        <p className="text-secondary">
          Create your account and start crafting your dream home
        </p>
      </div>
      {errors?.general && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="AlertCircle" size={20} className="text-red-600" />
            <p className="text-red-700 text-sm">{errors?.general}</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="First Name"
            type="text"
            name="firstName"
            placeholder="John"
            value={formData?.firstName}
            onChange={handleInputChange}
            error={errors?.firstName}
            required
          />

          <Input
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Doe"
            value={formData?.lastName}
            onChange={handleInputChange}
            error={errors?.lastName}
            required
          />
        </div>

        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="john.doe@example.com"
          value={formData?.email}
          onChange={handleInputChange}
          error={errors?.email}
          required
        />

        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          placeholder="+1 (555) 123-4567"
          value={formData?.phone}
          onChange={handleInputChange}
          error={errors?.phone}
          description="Optional - for order updates and delivery notifications"
        />

        <div className="space-y-2">
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Create a strong password"
            value={formData?.password}
            onChange={handleInputChange}
            error={errors?.password}
            required
          />

          {formData?.password && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-secondary">Password strength:</span>
                <span className={`font-medium ${strengthIndicator?.color}`}>
                  {strengthIndicator?.text}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    passwordStrength <= 1
                      ? 'bg-red-500'
                      : passwordStrength === 2
                      ? 'bg-orange-500'
                      : passwordStrength === 3
                      ? 'bg-yellow-500'
                      : passwordStrength === 4
                      ? 'bg-blue-500'
                      : 'bg-green-500'
                  }`}
                  style={{ width: `${(passwordStrength / 5) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={formData?.confirmPassword}
          onChange={handleInputChange}
          error={errors?.confirmPassword}
          required
        />

        <div className="space-y-4">
          <Checkbox
            label="I agree to the Terms of Service and Privacy Policy"
            name="agreeToTerms"
            checked={formData?.agreeToTerms}
            onChange={handleInputChange}
            error={errors?.agreeToTerms}
            required
          />

          <Checkbox
            label="Subscribe to newsletter for design tips and exclusive offers"
            name="subscribeNewsletter"
            checked={formData?.subscribeNewsletter}
            onChange={handleInputChange}
            description="You can unsubscribe at any time"
          />
        </div>

        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={isLoading}
          className="bg-brand-cta hover:bg-brand-cta/90 text-white"
        >
          Create Account
        </Button>
      </form>
      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-brand"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-secondary">
              Or sign up with
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
          Already have an account?{' '}
          <button
            onClick={onToggleForm}
            className="text-brand-primary hover:text-brand-cta font-medium transition-brand"
          >
            Sign in here
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
