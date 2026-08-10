'use client'

import { useState } from 'react'
import { MainLayout } from '@/components/MainLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calendar, Clock, Check } from 'lucide-react'
import Link from 'next/link'

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
  })

  const services = [
    { id: 'swedish', name: 'Swedish Massage', duration: '60 min', price: '$80-120' },
    { id: 'facial', name: 'Facial Treatment', duration: '60 min', price: '$75-150' },
    { id: 'hot-stone', name: 'Hot Stone Therapy', duration: '90 min', price: '$100-160' },
    { id: 'aromatherapy', name: 'Aromatherapy Massage', duration: '60 min', price: '$90-140' },
  ]

  const timeSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else {
      // Handle final submission
      console.log('Booking submitted:', formData)
    }
  }

  return (
    <MainLayout>
      {/* Header */}
      <section className="bg-gradient-to-b from-spa-cream to-background py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Book Your Appointment
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Reserve your spa experience with just a few easy steps.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors ${
                      currentStep >= step
                        ? 'bg-primary text-white'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {currentStep > step ? <Check size={20} /> : step}
                  </div>
                  <p className="text-xs font-medium text-foreground/60">
                    {['Service', 'Date & Time', 'Guest Info', 'Confirm'][step - 1]}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`flex-1 h-1 rounded-full transition-colors ${
                    currentStep > step ? 'bg-primary' : currentStep === step ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Select a Service
                </h2>
                <div className="space-y-3">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        formData.service === service.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={formData.service === service.id}
                        onChange={handleChange}
                        className="w-4 h-4 accent-primary"
                      />
                      <div className="ml-4 flex-1">
                        <p className="font-semibold text-foreground">{service.name}</p>
                        <p className="text-sm text-foreground/60">{service.duration} • {service.price}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Choose Date & Time
                </h2>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    <Calendar size={16} className="inline mr-2" />
                    Date
                  </label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    <Clock size={16} className="inline mr-2" />
                    Time
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, time }))}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                          formData.time === time
                            ? 'bg-primary text-white'
                            : 'bg-card border border-border hover:border-primary'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Guest Info */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Your Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-card border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-card border-border"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any preferences or allergies we should know about?"
                    rows={3}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Confirm Your Booking
                </h2>
                <div className="bg-card border border-border rounded-lg p-8 space-y-4">
                  <div className="flex justify-between pb-4 border-b border-border">
                    <span className="text-foreground/70">Service</span>
                    <span className="font-semibold">{services.find((s) => s.id === formData.service)?.name}</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-border">
                    <span className="text-foreground/70">Date & Time</span>
                    <span className="font-semibold">{formData.date} at {formData.time}</span>
                  </div>
                  <div className="flex justify-between pb-4 border-b border-border">
                    <span className="text-foreground/70">Guest Name</span>
                    <span className="font-semibold">{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between pt-4">
                    <span className="text-foreground/70">Contact Email</span>
                    <span className="font-semibold">{formData.email}</span>
                  </div>
                </div>
                <p className="text-sm text-foreground/60">
                  A confirmation email will be sent to {formData.email} with your booking details.
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 justify-between pt-8">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Back
                </Button>
              )}
              <div className="ml-auto space-x-4 flex">
                {currentStep === 1 && (
                  <Button asChild variant="outline">
                    <Link href="/">Cancel</Link>
                  </Button>
                )}
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white"
                  disabled={
                    (currentStep === 1 && !formData.service) ||
                    (currentStep === 2 && (!formData.date || !formData.time)) ||
                    (currentStep === 3 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone))
                  }
                >
                  {currentStep === 4 ? 'Complete Booking' : 'Next'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </MainLayout>
  )
}
