'use client'

import { useState } from 'react'
import { MainLayout } from '@/components/MainLayout'
import { MembershipCard } from '@/components/MembershipCard'
import { Button } from '@/components/ui/button'
import { MEMBERSHIP_TIERS } from '@/lib/constants'
import Link from 'next/link'

export default function MembershipPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly')

  return (
    <MainLayout>
      {/* Header */}
      <section className="bg-gradient-to-b from-spa-cream to-background py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            VIP Membership Tiers
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Unlock exclusive benefits and enjoy priority access to our services with our membership program.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-center items-center gap-6">
            <span className={`text-sm font-semibold ${billingPeriod === 'monthly' ? 'text-foreground' : 'text-foreground/60'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-muted"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-primary transition-transform ${
                  billingPeriod === 'annual' ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-semibold ${billingPeriod === 'annual' ? 'text-foreground' : 'text-foreground/60'}`}>
              Annual
            </span>
            {billingPeriod === 'annual' && (
              <span className="ml-2 inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {Object.entries(MEMBERSHIP_TIERS).map(([key, tier]) => (
              <MembershipCard
                key={key}
                tier={key as 'bronze' | 'silver' | 'gold' | 'platinum'}
                title={tier.name}
                price={billingPeriod === 'monthly' ? tier.monthlyPrice : tier.annualPrice}
                billingPeriod={billingPeriod}
                description={tier.description}
                benefits={tier.benefits}
                isPopular={key === 'gold'}
              />
            ))}
          </div>

          {/* Benefits Comparison */}
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                      Benefits
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                      Bronze
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                      Silver
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                      Gold
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                      Platinum
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { benefit: 'Service Discount', bronze: '5%', silver: '10%', gold: '15%', platinum: '20%' },
                    { benefit: 'Free Services/Month', bronze: '1', silver: '2', gold: '4', platinum: 'Unlimited' },
                    { benefit: 'Priority Booking', bronze: '72h', silver: '48h', gold: '1 week', platinum: 'Anytime' },
                    { benefit: 'Wellness Consultation', bronze: '—', silver: 'Monthly', gold: 'Weekly', platinum: 'Daily' },
                    { benefit: 'Skincare Products', bronze: '—', silver: '—', gold: 'Premium', platinum: 'Premium' },
                    { benefit: 'Member Events', bronze: '—', silver: '✓', gold: 'All', platinum: 'All' },
                    { benefit: '24/7 Spa Access', bronze: '—', silver: '—', gold: '—', platinum: '✓' },
                    { benefit: 'Personal Coordinator', bronze: '—', silver: '—', gold: '✓', platinum: '✓' },
                    { benefit: 'Guest Passes', bronze: '—', silver: '—', gold: '—', platinum: '4/year' },
                    { benefit: 'Premium Lounge', bronze: '—', silver: '—', gold: '—', platinum: '✓' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-foreground">
                        {row.benefit}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-foreground/70">
                        {row.bronze}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-foreground/70">
                        {row.silver}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-foreground/70">
                        {row.gold}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-foreground/70">
                        {row.platinum}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-spa-cream">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I cancel my membership anytime?',
                a: 'Yes, you can cancel your membership at any time without penalties. We just ask for 30 days notice.',
              },
              {
                q: 'What if I skip a month?',
                a: 'Your membership will remain active. Unused free services can be carried over to the next month, up to 2 months worth.',
              },
              {
                q: 'Can I upgrade or downgrade my tier?',
                a: 'Absolutely! You can change your membership tier at any time. Changes will take effect at your next billing cycle.',
              },
              {
                q: 'Do memberships include specific services only?',
                a: 'No, your membership discount and free services apply to all our services. Premium treatments may have different pricing.',
              },
              {
                q: 'Are there any hidden fees?',
                a: 'No hidden fees. Your monthly or annual membership cost is all-inclusive. Applicable taxes will be added at checkout.',
              },
              {
                q: 'Can I share my membership with someone?',
                a: 'Memberships are personal and cannot be shared. However, Platinum members receive guest passes each year.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-foreground/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join our membership program and enjoy unlimited access to relaxation and wellness.
          </p>
          <Button asChild size="lg" className="bg-white hover:bg-white/90 text-primary">
            <Link href="/booking">Join Now</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  )
}
