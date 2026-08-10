import { PAYMENT_CONFIG, SERVICE_DURATIONS } from './constants'

/**
 * Format currency amount
 */
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount)
}

/**
 * Calculate total with tax
 */
export function calculateTotalWithTax(amount: number): number {
  return amount * (1 + PAYMENT_CONFIG.taxRate)
}

/**
 * Format date to display format
 */
export function formatDate(date: Date | string): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Format time in HH:MM format
 */
export function formatTime(time: string): string {
  if (!time) return ''
  const [hours, minutes] = time.split(':')
  const hour = parseInt(hours)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  return `${displayHour}:${minutes} ${ampm}`
}

/**
 * Format date and time together
 */
export function formatDateTime(date: string, time: string): string {
  return `${formatDate(date)} at ${formatTime(time)}`
}

/**
 * Check if date is in the past
 */
export function isPastDate(date: string): boolean {
  return new Date(date) < new Date()
}

/**
 * Get available time slots (30-minute intervals)
 */
export function getAvailableTimeSlots(): string[] {
  const slots: string[] = []
  for (let i = 9; i < 21; i++) {
    slots.push(`${String(i).padStart(2, '0')}:00`)
    slots.push(`${String(i).padStart(2, '0')}:30`)
  }
  return slots
}

/**
 * Calculate duration in hours and minutes
 */
export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  if (hours === 0) return `${mins}m`
  if (mins === 0) return `${hours}h`
  return `${hours}h ${mins}m`
}

/**
 * Calculate age from date of birth
 */
export function calculateAge(birthDate: string): number {
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number format
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-()]{10,}$/
  return phoneRegex.test(phone)
}

/**
 * Generate booking confirmation code
 */
export function generateConfirmationCode(): string {
  return `HB${Date.now().toString(36).toUpperCase()}${Math.random().toString(36).substring(2, 8).toUpperCase()}`
}

/**
 * Get day of week from date string
 */
export function getDayOfWeek(date: string): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return days[new Date(date).getDay()]
}

/**
 * Check if date is weekend
 */
export function isWeekend(date: string): boolean {
  const day = new Date(date).getDay()
  return day === 0 || day === 6
}

/**
 * Format full name
 */
export function formatFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`.trim()
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

/**
 * Capitalize first letter
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

/**
 * Format service category name
 */
export function formatCategoryName(category: string): string {
  const categoryMap: Record<string, string> = {
    facial: 'Facial',
    massage: 'Massage',
    wellness: 'Wellness',
    hair: 'Hair Care',
    body: 'Body Treatment',
    nails: 'Nails',
  }
  return categoryMap[category] || capitalize(category)
}

/**
 * Get discount amount
 */
export function getDiscountAmount(originalPrice: number, discountPercent: number): number {
  return (originalPrice * discountPercent) / 100
}

/**
 * Get final price after discount
 */
export function getFinalPrice(originalPrice: number, discountPercent: number): number {
  return originalPrice - getDiscountAmount(originalPrice, discountPercent)
}

/**
 * Parse duration string to minutes
 */
export function parseDurationToMinutes(duration: string): number {
  const durationMap: Record<string, number> = {
    'short': SERVICE_DURATIONS.short,
    'medium': SERVICE_DURATIONS.medium,
    'long': SERVICE_DURATIONS.long,
    'extended': SERVICE_DURATIONS.extended,
  }
  return durationMap[duration.toLowerCase()] || 60
}

/**
 * Generate time range display
 */
export function getTimeRange(startTime: string, durationMinutes: number): string {
  const [hours, minutes] = startTime.split(':').map(Number)
  const startDate = new Date(0, 0, 0, hours, minutes)
  const endDate = new Date(startDate.getTime() + durationMinutes * 60000)

  const startFormatted = formatTime(startTime)
  const endFormatted = `${String(endDate.getHours()).padStart(2, '0')}:${String(endDate.getMinutes()).padStart(2, '0')}`

  return `${startFormatted} - ${formatTime(endFormatted)}`
}

/**
 * Calculate cancellation refund amount
 */
export function calculateCancellationRefund(bookingPrice: number): number {
  const refundPercent = 80 // Default 80% refund
  return (bookingPrice * refundPercent) / 100
}

/**
 * Check if can cancel booking (24 hours before)
 */
export function canCancelBooking(appointmentDate: string, appointmentTime: string): boolean {
  const appointmentDateTime = new Date(`${appointmentDate}T${appointmentTime}`)
  const now = new Date()
  const hoursUntilAppointment = (appointmentDateTime.getTime() - now.getTime()) / (1000 * 60 * 60)
  return hoursUntilAppointment >= 24
}

/**
 * Get next available appointment date (skip weekends)
 */
export function getNextAvailableDate(daysFromNow: number = 2): string {
  const date = new Date()
  date.setDate(date.getDate() + daysFromNow)

  // Skip weekends
  while (isWeekend(date.toISOString().split('T')[0])) {
    date.setDate(date.getDate() + 1)
  }

  return date.toISOString().split('T')[0]
}
