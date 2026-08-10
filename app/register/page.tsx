'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MainLayout } from '@/components/MainLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Eye, EyeOff, CheckCircle } from 'lucide-react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })

  const passwordRequirements = [
    { label: 'At least 8 characters', met: formData.password.length >= 8 },
    { label: 'Contains uppercase letter', met: /[A-Z]/.test(formData.password) },
    { label: 'Contains lowercase letter', met: /[a-z]/.test(formData.password) },
    { label: 'Contains number', met: /[0-9]/.test(formData.password) },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    // Handle registration
    console.log('Register:', formData)
  }

  const isPasswordValid = passwordRequirements.every((req) => req.met)
  const passwordsMatch = formData.password === formData.confirmPassword && formData.password.length > 0

  return (
    <MainLayout showLoader={false}>
      <div className="min-h-screen bg-gradient-to-b from-spa-cream to-background py-12 md:py-20 flex items-center">
        <div className="max-w-md mx-auto w-full px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-gold to-terra-cotta flex items-center justify-center">
                <span className="text-white font-display font-bold">H</span>
              </div>
              <span className="font-display font-bold text-lg text-primary">Hi Beauty</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
              Join Us
            </h1>
            <p className="text-foreground/70">Create your spa membership account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                  className="bg-card border-border"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="bg-card border-border"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                required
                className="bg-card border-border"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="bg-card border-border pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Password Requirements */}
              <div className="mt-3 space-y-2">
                {passwordRequirements.map((req, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                        req.met ? 'bg-green-100' : 'bg-muted'
                      }`}
                    >
                      {req.met && <div className="w-2 h-2 bg-green-600 rounded-full" />}
                    </div>
                    <span className={`text-xs ${req.met ? 'text-green-600' : 'text-foreground/60'}`}>
                      {req.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="bg-card border-border pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {formData.confirmPassword && (
                <div className={`mt-2 flex items-center gap-2 text-sm ${passwordsMatch ? 'text-green-600' : 'text-destructive'}`}>
                  {passwordsMatch ? <CheckCircle size={16} /> : <div className="w-4 h-4 rounded-full bg-destructive" />}
                  {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
                </div>
              )}
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="w-4 h-4 accent-primary mt-1"
              />
              <span className="text-sm text-foreground">
                I agree to the{' '}
                <Link href="#" className="text-primary hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="#" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white"
              disabled={!isPasswordValid || !passwordsMatch || !formData.agreeToTerms}
            >
              Create Account
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-sm text-foreground/60 mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  )
}
