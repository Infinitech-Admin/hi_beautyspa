import Image from 'next/image'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  content: string
  rating: number
  highlighted?: boolean
}

export function TestimonialCard({
  name,
  role,
  image,
  content,
  rating,
  highlighted = false,
}: TestimonialCardProps) {
  return (
    <div
      className={[
        'relative flex flex-col p-10',
        highlighted
          ? 'bg-rose-gold'
          : 'border border-white/10',
      ].join(' ')}
    >
      {/* Large opening quote */}
      <p
        className={[
          'font-display text-7xl leading-none mb-6',
          highlighted ? 'text-spa-dark/25' : 'text-white/15',
        ].join(' ')}
      >
        "
      </p>

      {/* Quote text */}
      <p
        className={[
          'font-display text-[18px] font-light italic leading-[1.75] flex-1 mb-8',
          highlighted ? 'text-spa-dark/85' : 'text-white/80',
        ].join(' ')}
      >
        {content}
      </p>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={13}
            className={[
              i < rating ? 'fill-current' : 'opacity-30',
              highlighted ? 'text-spa-dark/60' : 'text-rose-gold',
            ].join(' ')}
          />
        ))}
      </div>

      {/* Author */}
      <div
        className="flex items-center gap-3 pt-5 border-t"
        style={{
          borderColor: highlighted ? 'rgba(61,40,23,0.12)' : 'rgba(255,255,255,0.08)',
        }}
      >
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className={[
            'text-sm font-medium tracking-wide',
            highlighted ? 'text-spa-dark' : 'text-white',
          ].join(' ')}>
            {name}
          </p>
          <p className={[
            'text-[11px] tracking-[1.5px] uppercase mt-0.5',
            highlighted ? 'text-spa-dark/50' : 'text-white/35',
          ].join(' ')}>
            {role}
          </p>
        </div>
      </div>
    </div>
  )
}