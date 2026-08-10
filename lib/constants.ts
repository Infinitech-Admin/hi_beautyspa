// Service Categories
export const SERVICE_CATEGORIES = {
  facial: 'Facial',
  massage: 'Massage',
  wellness: 'Wellness',
  hair: 'Hair Care',
  body: 'Body Treatment',
  nails: 'Nails',
} as const

// Membership Tiers
export const MEMBERSHIP_TIERS = {
  bronze: {
    id: 'bronze',
    name: 'Bronze',
    monthlyPrice: 29,
    annualPrice: 290,
    color: 'amber',
    description: 'Perfect for occasional spa-goers',
    benefits: [
      '5% discount on all services',
      '1 free massage per month',
      'Priority booking',
      'Access to member-only deals',
    ],
  },
  silver: {
    id: 'silver',
    name: 'Silver',
    monthlyPrice: 59,
    annualPrice: 590,
    color: 'slate',
    description: 'Great for regular spa enthusiasts',
    benefits: [
      '10% discount on all services',
      '2 free services per month',
      'Priority booking (48hrs advance)',
      'Monthly wellness consultation',
      'Free skincare product',
      'Exclusive member events',
    ],
  },
  gold: {
    id: 'gold',
    name: 'Gold',
    monthlyPrice: 99,
    annualPrice: 990,
    color: 'yellow',
    description: 'Luxury spa experience',
    benefits: [
      '15% discount on all services',
      '4 free services per month',
      'VIP priority booking (1-week advance)',
      'Weekly wellness consultation',
      'Premium skincare products',
      'Exclusive member events',
      'Spa access on special occasions',
      'Personal spa coordinator',
    ],
  },
  platinum: {
    id: 'platinum',
    name: 'Platinum',
    monthlyPrice: 199,
    annualPrice: 1990,
    color: 'purple',
    description: 'Ultimate luxury membership',
    benefits: [
      '20% discount on all services',
      'Unlimited free services',
      'VIP priority booking (anytime)',
      'Daily wellness consultation',
      'Premium spa products included',
      'All exclusive member events',
      '24/7 spa access',
      'Dedicated personal spa coordinator',
      'Complimentary guest passes (4x/year)',
      'Premium lounge access',
    ],
  },
}

// Operating Hours
export const OPERATING_HOURS = {
  monday: { open: '09:00', close: '21:00' },
  tuesday: { open: '09:00', close: '21:00' },
  wednesday: { open: '09:00', close: '21:00' },
  thursday: { open: '09:00', close: '21:00' },
  friday: { open: '09:00', close: '21:00' },
  saturday: { open: '08:00', close: '22:00' },
  sunday: { open: '10:00', close: '20:00' },
} as const

// Booking Rules
export const BOOKING_RULES = {
  minAdvanceBooking: 2, // hours
  maxAdvanceBooking: 90, // days
  cancellationDeadline: 24, // hours before appointment
  cancellationRefund: 100, // percentage
} as const

// Payment Configuration
export const PAYMENT_CONFIG = {
  currency: 'USD',
  taxRate: 0.08,
  serviceCharge: 0,
  paymentMethods: ['credit-card', 'debit-card', 'paypal', 'apple-pay'],
} as const

// Contact Information
export const CONTACT_INFO = {
  phone: '+1 (234) 567-890',
  email: 'info@hibeauty.com',
  address: '123 Wellness St, Spa City, SC 12345',
  locationCoordinates: {
    lat: 40.7128,
    lng: -74.006,
  },
} as const

// Social Media
export const SOCIAL_MEDIA = {
  facebook: 'https://facebook.com/hibeautyspa',
  instagram: 'https://instagram.com/hibeautyspa',
  twitter: 'https://twitter.com/hibeautyspa',
  tiktok: 'https://tiktok.com/@hibeautyspa',
} as const

// Theme Colors
export const THEME_COLORS = {
  primary: '#D4A574',
  secondary: '#C85A54',
  accent: '#F5F1ED',
  dark: '#3D2817',
  gold: '#E8C18E',
  rose: '#D89B8F',
  pearl: '#F9F6F3',
} as const

// Pagination
export const PAGINATION = {
  servicesPerPage: 12,
  reviewsPerPage: 10,
  bookingsPerPage: 20,
} as const

// Service Duration Options (in minutes)
export const SERVICE_DURATIONS = {
  short: 30,
  medium: 60,
  long: 90,
  extended: 120,
} as const

// Date Formats
export const DATE_FORMATS = {
  display: 'MMM dd, yyyy',
  input: 'yyyy-MM-dd',
  time: 'HH:mm',
  datetime: 'MMM dd, yyyy HH:mm',
} as const