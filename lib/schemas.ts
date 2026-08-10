import { z } from 'zod'

// User/Customer Schemas
export const RegisterSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

export const UpdateProfileSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  phone: z.string().min(10, 'Invalid phone number'),
  dateOfBirth: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
})

// Booking Schemas
export const BookingSchema = z.object({
  serviceId: z.string().min(1, 'Service is required'),
  date: z.string().refine((date) => {
    const d = new Date(date)
    return d > new Date()
  }, 'Date must be in the future'),
  time: z.string().regex(/^\d{2}:\d{2}$/, 'Invalid time format'),
  therapistId: z.string().optional(),
  addOns: z.array(z.string()).default([]),
  notes: z.string().max(500, 'Notes must be less than 500 characters').optional(),
})

export const BookingWizardStepOneSchema = z.object({
  serviceId: z.string().min(1, 'Please select a service'),
})

export const BookingWizardStepTwoSchema = z.object({
  date: z.string().refine((date) => {
    const d = new Date(date)
    return d > new Date()
  }, 'Please select a valid date'),
  time: z.string().min(1, 'Please select a time'),
  therapistId: z.string().optional(),
})

export const BookingWizardStepThreeSchema = z.object({
  addOns: z.array(z.string()).default([]),
})

export const BookingWizardStepFourSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Invalid phone number'),
  notes: z.string().max(500).optional(),
})

// Contact Form Schema
export const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

// Newsletter Schema
export const NewsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
})

// Review Schema
export const ReviewSchema = z.object({
  bookingId: z.string().min(1, 'Booking ID is required'),
  rating: z.number().min(1, 'Rating is required').max(5),
  title: z.string().min(3, 'Title must be at least 3 characters'),
  content: z.string().min(10, 'Review must be at least 10 characters'),
})

// Admin Schemas
export const CreateServiceSchema = z.object({
  name: z.string().min(2, 'Service name is required'),
  slug: z.string().min(2, 'Slug is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  category: z.enum(['facial', 'massage', 'wellness', 'hair', 'body', 'nails']),
  image: z.string().url('Invalid image URL'),
  duration: z.number().min(15, 'Duration must be at least 15 minutes'),
  basePrice: z.number().min(0, 'Price must be positive'),
  description_long: z.string().optional(),
})

export const UpdateServiceSchema = CreateServiceSchema.partial()

export const CreateTherapistSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  specialties: z.array(z.string()).min(1, 'At least one specialty is required'),
  image: z.string().url('Invalid image URL'),
  bio: z.string().optional(),
  experience: z.number().min(0, 'Experience must be a positive number'),
  rating: z.number().min(0).max(5).optional(),
})

export const CreateTherapistAdminSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  specialties: z.array(z.string()).min(1, 'At least one specialty is required'),
  image: z.string().url('Invalid image URL'),
  bio: z.string().optional(),
  experience: z.number().min(0, 'Experience must be a positive number'),
})

// Membership Schema
export const UpgradeMembershipSchema = z.object({
  tier: z.enum(['bronze', 'silver', 'gold', 'platinum']),
  billingPeriod: z.enum(['monthly', 'annual']),
})

// Admin Login Schema
export const AdminLoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
  adminCode: z.string().optional(),
})

// Search Schema
export const ServiceSearchSchema = z.object({
  query: z.string().optional(),
  category: z.string().optional(),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
  rating: z.number().min(0).max(5).optional(),
  sortBy: z.enum(['popular', 'price-low', 'price-high', 'rating', 'newest']).optional(),
})

// Type exports for convenience
export type RegisterInput = z.infer<typeof RegisterSchema>
export type LoginInput = z.infer<typeof LoginSchema>
export type BookingInput = z.infer<typeof BookingSchema>
export type ContactFormInput = z.infer<typeof ContactFormSchema>
export type ReviewInput = z.infer<typeof ReviewSchema>
export type CreateServiceInput = z.infer<typeof CreateServiceSchema>
export type UpgradeMembershipInput = z.infer<typeof UpgradeMembershipSchema>
