import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MembershipCard } from '@/components/MembershipCard'
import { MEMBERSHIP_TIERS } from '@/lib/constants'

export function MembershipSection() {
  return (
    <section className="px-8 md:px-16 py-24 bg-spa-pearl">
      {/* Heading */}
      <div className="mb-16">
        <p className="flex items-center gap-3 text-[11px] font-medium tracking-[3px] uppercase text-terra-cotta mb-4">
          <span className="block w-10 h-px bg-terra-cotta" />
          Exclusive Benefits
        </p>
        <h2 className="font-display text-5xl md:text-6xl font-light text-spa-dark leading-[1.1]">
          VIP Membership{' '}
          <em className="italic text-terra-cotta">Tiers</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px]">
        {Object.entries(MEMBERSHIP_TIERS).map(([key, tier]) => (
          <MembershipCard
            key={key}
            tier={key as 'bronze' | 'silver' | 'gold' | 'platinum'}
            title={tier.name}
            price={tier.monthlyPrice}
            billingPeriod="monthly"
            description={tier.description}
            benefits={tier.benefits}
            isPopular={key === 'gold'}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <Button
          asChild
          size="lg"
          className="bg-spa-dark hover:bg-spa-dark/90 text-spa-pearl rounded-none px-10 tracking-widest text-xs uppercase"
        >
          <Link href="/membership">View All Memberships</Link>
        </Button>
      </div>
    </section>
  )
}