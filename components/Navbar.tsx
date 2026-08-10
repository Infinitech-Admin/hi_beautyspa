'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: '#F5F0EA' }}
    >
      <nav className="relative flex items-center justify-between px-6 py-4 md:px-10 border-b border-[#3D2817]/10">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 z-10">
         <img
  src="/hi-beauty-logo.png"
  alt="Hi Beauty Logo"
  className="w-8 h-8 object-contain"
/>
          <span
            className="font-display font-semibold text-base hidden sm:inline tracking-wide"
            style={{ color: '#3D2817' }}
          >
            Hi Beauty SPA
          </span>
        </Link>

        {/* CENTER NAV */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)

            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[12px] tracking-[2px] uppercase font-medium transition-colors"
                style={{
                  color: isActive
                    ? '#3D2817'
                    : 'rgba(61,40,23,0.65)',
                }}
              >
                {link.label}

                {/* ACTIVE UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-1 h-[1.5px] w-full transition-all ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ backgroundColor: '#3D2817' }}
                />
              </Link>
            )
          })}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 z-10"
          style={{ color: '#3D2817' }}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: '#F5F0EA',
            borderColor: 'rgba(61,40,23,0.1)',
          }}
        >
          <div className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm tracking-wide transition-colors"
                  style={{
                    color: isActive
                      ? '#3D2817'
                      : 'rgba(61,40,23,0.7)',
                    backgroundColor: isActive
                      ? 'rgba(61,40,23,0.08)'
                      : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}