'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MainLayout } from '@/components/MainLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login
    console.log('Login:', formData)
  }

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
              Welcome Back
            </h1>
            <p className="text-foreground/70">Sign in to your account to continue</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
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
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-sm text-foreground">Remember me</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline font-medium"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-foreground/60">Don't have an account?</span>
            </div>
          </div>

          {/* Sign Up Link */}
          <Link href="/register">
            <Button variant="outline" className="w-full">
              Create Account
            </Button>
          </Link>

          {/* Footer */}
          <p className="text-center text-sm text-foreground/60 mt-8">
            By signing in, you agree to our{' '}
            <Link href="#" className="text-primary hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="#" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </MainLayout>
  )
}
