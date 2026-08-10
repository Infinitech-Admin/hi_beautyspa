const STATS = [
  { num: '15+', label: 'Years Excellence' },
  { num: '50+', label: 'Expert Therapists' },
  { num: '10K+', label: 'Happy Clients' },
  { num: '100%', label: 'Satisfaction' },
]

export function StatsRibbon() {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 ![background-color:#1A120A]"
    >
      {STATS.map((stat, i) => (
        <div
          key={i}
          className="text-center py-8 px-4"
          style={{
            borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.18)' : 'none',
          }}
        >
          <p
            className="font-display text-4xl md:text-5xl font-light leading-none ![color:#C9975A]"
          >
            {stat.num}
          </p>
          <p
            className="text-[11px] tracking-[2px] uppercase mt-2 ![color:rgba(255,255,255,0.85)]"
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}