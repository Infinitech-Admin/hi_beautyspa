'use client'

import Image from 'next/image'

const treatments = [
  { id: 1, duration: '60 MIN', name: 'Facial Cleansing + UV Light', price: '₱1,699', image: 'https://i.pinimg.com/1200x/19/15/be/1915be27b02504c58732ff278dad02f1.jpg' },
  { id: 2, duration: '90 MIN', name: 'Hot Stone Massage + Aiju', price: '₱1,799', image: 'https://i.pinimg.com/1200x/40/54/ab/4054abe3db6553c8e9899ea11f05a693.jpg' },
  { id: 3, duration: '', name: 'Foot Spa + Foot Nail Color', price: '₱1,899', image: 'https://i.pinimg.com/1200x/e3/d9/2b/e3d92b18f71ca73a8bc25fe28efb8db3.jpg' },
  { id: 4, duration: '90 MIN', name: 'Body · Facial · Mask', price: '₱1,899', image: 'https://i.pinimg.com/1200x/14/0f/f0/140ff07410b143fa89ce087dccba5acd.jpg' },
  { id: 5, duration: '90 MIN', name: 'Body Massage + Shampoo', price: '₱1,899', image: 'https://i.pinimg.com/1200x/4f/48/8e/4f488eeb9afda1b4d4fd587810a4fff3.jpg' },
  { id: 6, duration: '80 MIN', name: 'Body Massage + Cupping or Gua Sha', price: '₱1,699', image: 'https://i.pinimg.com/1200x/4d/38/77/4d3877e949ce95b6a0a111259eebd5e6.jpg' },
  { id: 7, duration: '90 MIN', name: 'Foot Spa + Foot Massage', price: '₱1,799', image: 'https://i.pinimg.com/1200x/74/4b/4f/744b4ff883455732163b02d2715f21af.jpg' },
  { id: 8, duration: '100 MIN', name: 'Head & Shoulder · Facial · Mask · Hand', price: '₱1,999', image: 'https://i.pinimg.com/1200x/54/47/c5/5447c51a07db5ddab6da028df4237f57.jpg' },
]

const layout = [
  'lg:col-[1/6] lg:row-[1/3]',
  'lg:col-[6/9] lg:row-[1/2]',
  'lg:col-[9/13] lg:row-[1/2]',
  'lg:col-[6/10] lg:row-[2/4]',
  'lg:col-[10/13] lg:row-[2/3]',
  'lg:col-[1/4] lg:row-[3/4]',
  'lg:col-[4/6] lg:row-[3/4]',
  'lg:col-[10/13] lg:row-[3/4]',
]

const nameSize = [
  'lg:text-3xl text-2xl',
  'lg:text-xl text-xl',
  'lg:text-xl text-xl',
  'lg:text-2xl text-2xl',
  'lg:text-lg text-xl',
  'lg:text-lg text-xl',
  'lg:text-lg text-xl',
  'lg:text-lg text-xl',
]

export function PopularTreatments() {
  return (
    <section className="bg-[#F5F0EB] px-4 py-14 sm:px-6 md:px-10 lg:px-20 lg:py-16">
      <div className="mb-8 lg:mb-6">
        <h2 className="text-3xl leading-tight font-serif font-light text-spa-dark sm:text-4xl md:text-5xl lg:text-5xl lg:leading-none tracking-tight mb-4">
          Popular Spa <em className="italic">Packages</em>
        </h2>
        <div className="h-px w-10 bg-spa-dark/30" />
      </div>

      {/* Mobile + Tablet */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
        {treatments.map((t, i) => (
          <div
            key={t.id}
            className="relative group overflow-hidden rounded-sm min-h-[320px] sm:min-h-[360px]"
          >
            <Image
              src={t.image}
              alt={t.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              {t.duration && (
                <p className="mb-1 text-[12px] uppercase tracking-widest text-white/55">
                  {t.duration}
                </p>
              )}
              <h3 className={`font-serif font-light leading-snug text-white mb-1 ${nameSize[i]}`}>
                {t.name}
              </h3>
              <p className="text-sm font-light tracking-wide text-white/65">
                {t.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Original Layout */}
      <div
        className="hidden lg:grid gap-px bg-spa-dark/10"
        style={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: '280px 200px 240px',
        }}
      >
        {treatments.map((t, i) => (
          <div key={t.id} className={`relative group overflow-hidden ${layout[i]}`}>
            <Image
              src={t.image}
              alt={t.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              {t.duration && (
                <p className="mb-1 text-[13px] uppercase tracking-widest text-white/55">
                  {t.duration}
                </p>
              )}
              <h3 className={`font-serif font-light leading-snug text-white mb-1 ${nameSize[i]}`}>
                {t.name}
              </h3>
              <p className="text-md font-light tracking-wide text-white/65">
                {t.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { PopularTreatments as ServicesSection }