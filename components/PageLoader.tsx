'use client'

import { useEffect, useState } from 'react'

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Auto-hide after 2 seconds
    const timer = setTimeout(() => setIsVisible(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6">
        {/* Lotus Loader */}
        <div className="relative w-24 h-24">
          {/* Outer petals */}
          <svg
            className="w-full h-full animate-lotus"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Back petal group */}
            <g opacity="0.6">
              <ellipse cx="50" cy="20" rx="12" ry="20" fill="var(--primary-rose-gold)" />
              <ellipse cx="75" cy="30" rx="12" ry="20" fill="var(--primary-rose-gold)" transform="rotate(60 75 30)" />
              <ellipse cx="75" cy="70" rx="12" ry="20" fill="var(--primary-rose-gold)" transform="rotate(120 75 70)" />
              <ellipse cx="50" cy="80" rx="12" ry="20" fill="var(--primary-rose-gold)" />
              <ellipse cx="25" cy="70" rx="12" ry="20" fill="var(--primary-rose-gold)" transform="rotate(-120 25 70)" />
              <ellipse cx="25" cy="30" rx="12" ry="20" fill="var(--primary-rose-gold)" transform="rotate(-60 25 30)" />
            </g>

            {/* Middle petals */}
            <g opacity="0.8">
              <ellipse cx="50" cy="25" rx="10" ry="18" fill="var(--primary-terra-cotta)" />
              <ellipse cx="70" cy="40" rx="10" ry="18" fill="var(--primary-terra-cotta)" transform="rotate(60 70 40)" />
              <ellipse cx="70" cy="60" rx="10" ry="18" fill="var(--primary-terra-cotta)" transform="rotate(120 70 60)" />
              <ellipse cx="50" cy="75" rx="10" ry="18" fill="var(--primary-terra-cotta)" />
              <ellipse cx="30" cy="60" rx="10" ry="18" fill="var(--primary-terra-cotta)" transform="rotate(-120 30 60)" />
              <ellipse cx="30" cy="40" rx="10" ry="18" fill="var(--primary-terra-cotta)" transform="rotate(-60 30 40)" />
            </g>

            {/* Inner center circle */}
            <circle cx="50" cy="50" r="8" fill="var(--accent-gold)" />
            <circle cx="50" cy="50" r="5" fill="var(--primary-rose-gold)" opacity="0.8" />
          </svg>

          {/* Floating petals animation */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-float-petal"
              style={{
                backgroundColor: i % 2 === 0 ? 'var(--primary-rose-gold)' : 'var(--accent-gold)',
                left: '50%',
                top: '50%',
                animation: `float-petal ${5 + i * 0.5}s ease-in infinite`,
                animationDelay: `${i * 0.4}s`,
                transform: `rotate(${(i * 60)}deg) translateX(25px)`,
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <p className="text-sm font-medium text-primary font-display">Loading...</p>
          <p className="text-xs text-muted-foreground mt-1">Preparing your spa experience</p>
        </div>

        {/* Shimmer effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent opacity-50" />
      </div>
    </div>
  )
}
