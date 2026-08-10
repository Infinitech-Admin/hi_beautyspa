import { ReactNode } from 'react'

interface BadgeProps {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'destructive'
  children: ReactNode
  className?: string
}

const variantStyles = {
  default: 'bg-muted text-foreground',
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-amber-100 text-amber-700',
  destructive: 'bg-destructive/10 text-destructive',
}

export function Badge({
  variant = 'default',
  children,
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

interface ServiceTagProps {
  name: string
  category?: 'facial' | 'massage' | 'wellness' | 'hair' | 'body' | 'nails'
  variant?: 'outline' | 'filled'
}

const categoryColors = {
  facial: { outline: 'border-rose-300 text-rose-700', filled: 'bg-rose-100 text-rose-700' },
  massage: { outline: 'border-purple-300 text-purple-700', filled: 'bg-purple-100 text-purple-700' },
  wellness: { outline: 'border-green-300 text-green-700', filled: 'bg-green-100 text-green-700' },
  hair: { outline: 'border-amber-300 text-amber-700', filled: 'bg-amber-100 text-amber-700' },
  body: { outline: 'border-blue-300 text-blue-700', filled: 'bg-blue-100 text-blue-700' },
  nails: { outline: 'border-pink-300 text-pink-700', filled: 'bg-pink-100 text-pink-700' },
}

export function ServiceTag({
  name,
  category = 'wellness',
  variant = 'filled',
}: ServiceTagProps) {
  const colors = categoryColors[category]
  const styleClass = variant === 'outline' ? colors.outline : colors.filled

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors ${
        variant === 'outline'
          ? `border border-current ${styleClass}`
          : `${colors.filled}`
      }`}
    >
      {name}
    </span>
  )
}

interface StatusBadgeProps {
  status: 'available' | 'booked' | 'coming-soon' | 'special-offer' | 'limited'
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusStyles = {
    available: 'bg-green-100 text-green-700',
    booked: 'bg-gray-100 text-gray-700',
    'coming-soon': 'bg-blue-100 text-blue-700',
    'special-offer': 'bg-primary/10 text-primary font-bold',
    limited: 'bg-amber-100 text-amber-700',
  }

  const labels = {
    available: 'Available',
    booked: 'Fully Booked',
    'coming-soon': 'Coming Soon',
    'special-offer': 'Special Offer',
    limited: 'Limited Slots',
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusStyles[status]}`}>
      {labels[status]}
    </span>
  )
}

interface PriceBadgeProps {
  label: string
  variant?: 'vip' | 'new' | 'popular' | 'sale'
}

export function PriceBadge({ label, variant = 'popular' }: PriceBadgeProps) {
  const variantStyles = {
    vip: 'bg-purple-600 text-white',
    new: 'bg-blue-600 text-white',
    popular: 'bg-primary text-white',
    sale: 'bg-red-600 text-white',
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide transition-colors ${variantStyles[variant]}`}>
      {label}
    </span>
  )
}
