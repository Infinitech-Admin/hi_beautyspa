'use client'

import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  id: string
  title: string
  description: string
  image: string
  priceRange: {
    min: number
    max: number
  }
  rating: number
  reviewCount: number
  duration: string
  slug: string
}

export function ServiceCard({
  title,
  description,
  priceRange,
  rating,
  reviewCount,
  duration,
  slug,
}: ServiceCardProps) {
  return (
    <div className="group flex flex-col bg-spa-pearl border border-rose-gold/15 hover:border-rose-gold/40 hover:shadow-lg transition-all duration-300 h-full">
      {/* Top accent bar */}
      <div className="h-[3px] bg-gradient-to-r from-rose-gold to-terra-cotta" />

      <div className="flex flex-col flex-1 p-6">
        {/* Header */}
        <div className="mb-4">
          <p className="text-[10px] tracking-[2px] uppercase text-rose-gold/80 mb-2">{duration}</p>
          <h3 className="font-display text-2xl font-light text-spa-dark leading-tight">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-sm font-light text-spa-dark/55 leading-relaxed mb-5 flex-1 line-clamp-2">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(rating) ? 'fill-rose-gold text-rose-gold' : 'text-spa-dark/20'}
              />
            ))}
          </div>
          <span className="text-[11px] text-spa-dark/45">
            {rating} ({reviewCount} reviews)
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-rose-gold/12 mb-5" />

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] tracking-wider uppercase text-spa-dark/35 mb-0.5">Starting from</p>
            <p className="font-display text-2xl font-light text-rose-gold">
              ₱{priceRange.min.toLocaleString()}
              {priceRange.min !== priceRange.max && (
                <span className="text-base text-spa-dark/35"> – ₱{priceRange.max.toLocaleString()}</span>
              )}
            </p>
          </div>
          <Button
            asChild
            size="sm"
            className="bg-spa-dark hover:bg-spa-dark/85 text-spa-pearl rounded-none text-xs tracking-widest uppercase"
          >
            <Link href={`/services/${slug}`}>
              View
              <ArrowRight className="ml-1.5" size={12} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}