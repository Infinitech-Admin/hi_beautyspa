import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden px-8 md:px-16 py-32 bg-gradient-to-br from-[#3D2817] via-[#6B3A1F] to-[#9B5A2F] text-center">
      {/* Dot texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <p className="text-[11px] tracking-[3px] uppercase text-white/60 mb-5 relative">
        Begin Your Journey
      </p>
      <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-5 relative">
        Ready to Transform
        <br />
        Your <em className="italic text-spa-gold">Well-Being?</em>
      </h2>
      <p className="text-[15px] font-light text-white/70 mb-12 relative">
        Join thousands of satisfied clients who have discovered their path to wellness.
      </p>

      {/* <div className="flex flex-wrap gap-4 justify-center relative">
        <Button
          asChild
          size="lg"
          className="bg-spa-gold hover:bg-spa-gold/90 text-spa-dark rounded-none px-10 tracking-widest text-xs uppercase font-semibold"
        >
          <Link href="/booking">Book Now</Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="rounded-none px-10 tracking-widest text-xs uppercase border-white/40 text-white hover:bg-white/10"
        >
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div> */}
    </section>
  )
}