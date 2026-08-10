'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MembershipCardProps {
  tier: 'bronze' | 'silver' | 'gold' | 'platinum'
  title: string
  price: number
  billingPeriod: 'monthly' | 'annual'
  description: string
  benefits: readonly string[]
  isCurrentTier?: boolean
  isPopular?: boolean
}

const tierStyles = {
  bronze: {
    wrapper: 'bg-amber-50 border border-amber-200',
    nameColor: 'text-spa-dark',
    descColor: 'text-spa-dark/45',
    priceColor: 'text-amber-600',
    priceBorder: 'border-amber-100',
    checkColor: 'text-amber-500',
    benefitColor: 'text-spa-dark/65',
    btnClass: 'bg-amber-500 hover:bg-amber-600 text-white rounded-none text-[11px] tracking-[2px] uppercase',
    icon: '🥉',
  },
  silver: {
    wrapper: 'bg-slate-50 border border-slate-200',
    nameColor: 'text-spa-dark',
    descColor: 'text-spa-dark/45',
    priceColor: 'text-slate-600',
    priceBorder: 'border-slate-100',
    checkColor: 'text-slate-500',
    benefitColor: 'text-spa-dark/65',
    btnClass: 'bg-slate-600 hover:bg-slate-700 text-white rounded-none text-[11px] tracking-[2px] uppercase',
    icon: '🥈',
  },
  gold: {
    wrapper: 'bg-spa-dark border border-spa-dark',
    nameColor: 'text-spa-pearl',
    descColor: 'text-white/40',
    priceColor: 'text-spa-gold',
    priceBorder: 'border-white/10',
    checkColor: 'text-spa-gold',
    benefitColor: 'text-white/65',
    btnClass: 'bg-spa-gold hover:bg-spa-gold/90 text-spa-dark rounded-none text-[11px] tracking-[2px] uppercase',
    icon: '👑',
  },
  platinum: {
    wrapper: 'bg-[#1A0A2E] border border-purple-900',
    nameColor: 'text-spa-pearl',
    descColor: 'text-white/35',
    priceColor: 'text-purple-300',
    priceBorder: 'border-white/10',
    checkColor: 'text-purple-400',
    benefitColor: 'text-white/60',
    btnClass: 'bg-purple-600 hover:bg-purple-700 text-white rounded-none text-[11px] tracking-[2px] uppercase',
    icon: '💎',
  },
}

export function MembershipCard({
  tier,
  title,
  price,
  billingPeriod,
  description,
  benefits,
  isCurrentTier = false,
  isPopular = false,
}: MembershipCardProps) {
  const s = tierStyles[tier]

  return (
    <div className={`relative flex flex-col ${s.wrapper}`}>
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-terra-cotta text-white text-[9px] tracking-[2px] uppercase px-4 py-1.5 whitespace-nowrap">
          Most Popular
        </div>
      )}

      {/* Current tier badge */}
      {isCurrentTier && (
        <div className="absolute -top-px left-0 bg-rose-gold text-white text-[9px] tracking-[2px] uppercase px-4 py-1.5">
          Current Plan
        </div>
      )}

      <div className="p-8 flex flex-col flex-1">
        {/* Icon + name */}
        <span className="text-2xl mb-3">{s.icon}</span>
        <h3 className={`font-display text-3xl font-light mb-1 ${s.nameColor}`}>{title}</h3>
        <p className={`text-xs font-light ${s.descColor}`}>{description}</p>

        {/* Price */}
        <div className={`my-6 py-6 border-t border-b ${s.priceBorder}`}>
          <span className={`font-display text-5xl font-light leading-none ${s.priceColor}`}>
            ₱{price.toLocaleString()}
          </span>
          <p className={`text-[11px] tracking-wider uppercase mt-1.5 ${s.descColor}`}>
            per {billingPeriod === 'monthly' ? 'month' : 'year'}
          </p>
          {billingPeriod === 'annual' && (
            <p className="text-xs text-rose-gold mt-1">Save 20% annually</p>
          )}
        </div>

        {/* Benefits */}
        <ul className="flex-1 space-y-2.5 mb-8">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <Check size={14} className={`mt-0.5 shrink-0 ${s.checkColor}`} />
              <span className={`text-[13px] font-light leading-snug ${s.benefitColor}`}>
                {benefit}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          className={`w-full py-5 ${s.btnClass}`}
          disabled={isCurrentTier}
        >
          {isCurrentTier ? 'Current Plan' : 'Get Started'}
        </Button>
      </div>
    </div>
  )
}