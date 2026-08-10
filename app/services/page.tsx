'use client'

import { useState, useMemo } from 'react'
import { X, Search, Star, Clock, Sparkles } from 'lucide-react'
import { MainLayout } from '@/components/MainLayout'

// ─── Types ────────────────────────────────────────────────────────────────────
interface Service {
  id: string
  title: string
  description: string
  image: string
  priceRange: { min: number; max: number }
  rating: number
  reviewCount: number
  duration: string
  slug: string
  category: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const allServices: Service[] = [
  // FASHION GODDESS
  { id: 'FG1', title: 'Manicure', description: '修手 — Professional nail care and shaping for your hands.', image: '', priceRange: { min: 300, max: 300 }, rating: 4.8, reviewCount: 0, duration: '', slug: 'manicure', category: 'fashion' },
  { id: 'FG2', title: 'Pedicure', description: '修脚 — Professional nail care and shaping for your feet.', image: '', priceRange: { min: 300, max: 300 }, rating: 4.8, reviewCount: 0, duration: '', slug: 'pedicure', category: 'fashion' },
  { id: 'FG3', title: 'Foot SPA', description: '足部护理 — Relaxing and nourishing foot spa treatment.', image: '', priceRange: { min: 600, max: 600 }, rating: 4.8, reviewCount: 0, duration: '', slug: 'foot-spa', category: 'fashion' },
  { id: 'FG6', title: 'Foot Nails (Including Foot Spa)', description: '脚甲美化含足疗 — Nail beautification for feet inclusive of foot spa care.', image: '', priceRange: { min: 1200, max: 1200 }, rating: 4.8, reviewCount: 0, duration: '', slug: 'foot-nails-including-foot-spa', category: 'fashion' },
  { id: 'FG5', title: 'Fingers Monochrom with Cleaning', description: '指甲单色含清洁 — Full nail color for fingers with complete cleaning care.', image: '', priceRange: { min: 1200, max: 1200 }, rating: 4.8, reviewCount: 0, duration: '', slug: 'fingers-monochrom-with-cleaning', category: 'fashion' },
  // SKIN CARE
  { id: 'K1', title: 'Skin Deep Facial Cleansing', description: '深度肌底净化养护 — Comprehensive deep skin cleansing and nourishing.', image: '', priceRange: { min: 1299, max: 1299 }, rating: 4.8, reviewCount: 0, duration: '60 min', slug: 'skin-deep-cleaning', category: 'skincare' },
  { id: 'K2', title: 'Water SPA', description: '瀑布水疗 — Hydrating waterfall-inspired spa therapy.', image: '', priceRange: { min: 599, max: 599 }, rating: 4.8, reviewCount: 0, duration: '40 min', slug: 'water-spa', category: 'skincare' },
  { id: 'K3', title: 'Eye Care SPA', description: '眼部SPA护理 — Revitalizing spa treatment focused on the eye area.', image: '', priceRange: { min: 599, max: 599 }, rating: 4.8, reviewCount: 0, duration: '40 min', slug: 'eye-care-spa', category: 'skincare' },
  { id: 'K4', title: 'Facial Plastic Ribs', description: '面部拨筋提拉 — Facial muscle-release technique for a lifted look.', image: '', priceRange: { min: 1199, max: 1199 }, rating: 4.8, reviewCount: 0, duration: '60 min', slug: 'facial-plastic-ribs', category: 'skincare' },
  { id: 'K5', title: 'Face Massage', description: '面部芳香SPA — Aromatic facial massage for deep relaxation.', image: '', priceRange: { min: 899, max: 899 }, rating: 4.8, reviewCount: 0, duration: '60 min', slug: 'face-massage', category: 'skincare' },
  // DETOX
  { id: 'K6', title: 'Signature Massage', description: '招牌按摩 — Signature massage. +30 min add-on available for ₱1,499.', image: '', priceRange: { min: 999, max: 999 }, rating: 4.7, reviewCount: 0, duration: '60 min', slug: 'signature-massage', category: 'detox' },
  { id: 'K7', title: 'Shiatsu Massage', description: '指压按摩 — Classic acupressure massage for full-body relief. +30 min add-on available for ₱1,399.', image: '', priceRange: { min: 899, max: 899 }, rating: 4.7, reviewCount: 0, duration: '60 min', slug: 'shiatsu-massage', category: 'detox' },
  { id: 'K8', title: 'Thai Massage', description: '泰式按摩 — Traditional Thai stretching and pressure massage.', image: '', priceRange: { min: 1199, max: 1199 }, rating: 4.7, reviewCount: 0, duration: '60 min', slug: 'thai-massage', category: 'detox' },
  { id: 'K9', title: 'Body Massage with Moxibustion', description: '全身精油艾灸按摩 — Full-body massage infused with moxibustion.', image: '', priceRange: { min: 1299, max: 1299 }, rating: 4.8, reviewCount: 0, duration: '60 min', slug: 'body-massage-moxibustion', category: 'detox' },
  { id: 'K10', title: 'Hot Stone Massage', description: '热石经络SPA — Hot stone SPA to balance energy channels.', image: '', priceRange: { min: 1699, max: 1699 }, rating: 4.8, reviewCount: 0, duration: '90 min', slug: 'hot-stone-massage', category: 'detox' },
  { id: 'K11', title: 'Abdomen Massage with Aiju (Heat Therapy Machine)', description: '腹部艾灸推油 — Abdomen massage combined with Aiju heat therapy for warmth and flow.', image: '', priceRange: { min: 1000, max: 1000 }, rating: 4.8, reviewCount: 0, duration: '45 min', slug: 'abdomen-massage-aiju', category: 'detox' },
  { id: 'K12', title: 'Head and Shoulder Massage with Shampoo', description: '头肩按摩含洗发 — Head and shoulder massage inclusive of shampoo for tension relief.', image: '', priceRange: { min: 1199, max: 1199 }, rating: 4.7, reviewCount: 0, duration: '60 min', slug: 'head-shoulder-massage-shampoo', category: 'detox' },
  { id: 'K13', title: 'Head and Shoulder Massage with Shampoo + Hand Massage', description: '头肩按摩含洗发及手部护理 — Head and shoulder massage with shampoo and hand massage for full relief.', image: '', priceRange: { min: 1899, max: 1899 }, rating: 4.7, reviewCount: 0, duration: '90 min', slug: 'head-shoulder-massage-shampoo-hand-massage', category: 'detox' },
  // ADD ONs
  { id: 'C1', title: 'Aiju (Heat Therapy Machine)', description: '艾灸热疗 — Intensive heat therapy for deep muscle relaxation.', image: '', priceRange: { min: 399, max: 399 }, rating: 4.8, reviewCount: 0, duration: '20 min', slug: 'aiju', category: 'add-on' },
  { id: 'C2', title: 'Scraping', description: '刮痧疗法 — Traditional scraping therapy for improved circulation.', image: '', priceRange: { min: 499, max: 499 }, rating: 4.8, reviewCount: 0, duration: '20 min', slug: 'scraping', category: 'add-on' },
  { id: 'C3', title: 'Gua Sha', description: '刮痧排毒 — Gua Sha therapy for detoxification and muscle relief.', image: '', priceRange: { min: 499, max: 499 }, rating: 4.8, reviewCount: 0, duration: '20 min', slug: 'gua-sha', category: 'add-on' },
  { id: 'C4', title: 'Chinese Cupping', description: '中式拔罐 — Traditional Chinese cupping therapy for muscle relief.', image: '', priceRange: { min: 499, max: 499 }, rating: 4.8, reviewCount: 0, duration: '20 min', slug: 'chinese-cupping', category: 'add-on' },
  { id: 'C5', title: 'Beech Wood', description: '榉木按摩 — Premium beech wood tool for enhanced massage experience.', image: '', priceRange: { min: 499, max: 499 }, rating: 4.8, reviewCount: 0, duration: '20 min', slug: 'beech-wood', category: 'add-on' },
  { id: 'C6', title: 'Gua Sha with Moxibustion', description: '刮痧艾灸结合 — Gua Sha combined with moxibustion for enhanced relief.', image: '', priceRange: { min: 599, max: 599 }, rating: 4.8, reviewCount: 0, duration: '30 min', slug: '30-min-add-on', category: 'add-on' },
  { id: 'C7', title: 'Sauna', description: '桑拿浴 — Relaxing sauna session for detoxification and stress relief.', image: '', priceRange: { min: 599, max: 599 }, rating: 4.8, reviewCount: 0, duration: '30 min', slug: 'sauna', category: 'add-on' },
  { id: 'C8', title: 'Shampoo', description: '专业洗发护理 — Professional shampoo service for a refreshing experience.', image: '', priceRange: { min: 699, max: 699 }, rating: 4.8, reviewCount: 0, duration: '30 min', slug: 'shampoo', category: 'add-on' },
  { id: 'C9', title: 'Clean Ear', description: '耳部深层清洁 — Deep cleaning of the ears for a refreshed feeling.', image: '', priceRange: { min: 799, max: 799 }, rating: 4.8, reviewCount: 0, duration: '30 min', slug: 'clean-ear', category: 'add-on' },
  { id: 'C10', title: 'Shoulder Massage', description: '肩部按摩 — Targeted shoulder massage for relief from tension.', image: '', priceRange: { min: 799, max: 799 }, rating: 4.8, reviewCount: 0, duration: '30 min', slug: 'shoulder-massage', category: 'add-on' },
  { id: 'C11', title: 'Back Massage', description: '背部按摩 — Targeted back massage for relief from tension.', image: '', priceRange: { min: 799, max: 799 }, rating: 4.8, reviewCount: 0, duration: '30 min', slug: 'back-massage', category: 'add-on' },
  { id: 'C12', title: 'Head Massage', description: '头部按摩 — Targeted head massage for relief from tension.', image: '', priceRange: { min: 799, max: 799 }, rating: 4.8, reviewCount: 0, duration: '30 min', slug: 'head-massage', category: 'add-on' },
  { id: 'C13', title: 'Leg Massage (Prone or Supine)', description: '腿部按摩（俯卧或仰卧）— Targeted leg massage selected based on client preference.', image: '', priceRange: { min: 799, max: 799 }, rating: 4.8, reviewCount: 0, duration: '30 min', slug: 'leg-massage', category: 'add-on' },
  { id: 'C14', title: 'Kidney Massage', description: '肾部按摩调理 — Targeted kidney area massage for warmth and tension relief.', image: '', priceRange: { min: 799, max: 799 }, rating: 4.8, reviewCount: 0, duration: '30 min', slug: 'kidney-massage', category: 'add-on' },
  { id: 'C15', title: 'Breast Massage', description: '胸部疏通按摩 — Therapeutic breast massage for lymphatic flow and tension relief.', image: '', priceRange: { min: 799, max: 799 }, rating: 4.8, reviewCount: 0, duration: '30 min', slug: 'breast-massage', category: 'add-on' },
  { id: 'C16', title: 'Foot Massage', description: '足部按摩 — Targeted foot massage for relief from tension.', image: '', priceRange: { min: 799, max: 799 }, rating: 4.8, reviewCount: 0, duration: '30 min', slug: 'foot-massage', category: 'add-on' },
  { id: 'C17', title: 'Body Scrub', description: '全身磨砂去角质 — Exfoliating body scrub for smooth and radiant skin.', image: '', priceRange: { min: 899, max: 899 }, rating: 4.8, reviewCount: 0, duration: '30 min', slug: '30-min-add-on', category: 'add-on' },
]
  //   // PACKAGES
//   { id: 'L1', title: 'Body Massage + Cupping/Gua Sha', description: 'BOGO Package — Buy 1 Get 1 Free for 2 people.', image: '', priceRange: { min: 1699, max: 1699 }, rating: 4.8, reviewCount: 0, duration: '80 min', slug: 'bogo-body-massage-cupping', category: 'packages' },
//   { id: 'L2', title: 'Hot Stone Massage + Aiju', description: 'BOGO Package — Buy 1 Get 1 Free for 2 people.', image: '', priceRange: { min: 1799, max: 1799 }, rating: 4.8, reviewCount: 0, duration: '90 min', slug: 'bogo-hot-stone-aiju', category: 'packages' },
//   { id: 'L3', title: '⭐ Head + Shoulder + Shampoo + Facial + Mask + Hand', description: 'BOGO Package — Most Popular! Buy 1 Get 1 Free for 2 people.', image: '', priceRange: { min: 1999, max: 1999 }, rating: 4.9, reviewCount: 0, duration: '100 min', slug: 'bogo-head-shoulder-facial', category: 'packages' },
//   { id: 'L4', title: 'Body Massage + Facial + Mask', description: 'BOGO Package — Buy 1 Get 1 Free for 2 people.', image: '', priceRange: { min: 1899, max: 1899 }, rating: 4.8, reviewCount: 0, duration: '90 min', slug: 'bogo-body-facial-mask', category: 'packages' },
//   { id: 'L5', title: 'Body Massage + Shampoo', description: 'BOGO Package — Buy 1 Get 1 Free for 2 people.', image: '', priceRange: { min: 1899, max: 1899 }, rating: 4.8, reviewCount: 0, duration: '90 min', slug: 'bogo-body-shampoo', category: 'packages' },
//   { id: 'L6', title: 'Facial Cleansing + UV Light', description: 'BOGO Package — Buy 1 Get 1 Free for 2 people.', image: '', priceRange: { min: 1699, max: 1699 }, rating: 4.7, reviewCount: 0, duration: '60 min', slug: 'bogo-facial-uv', category: 'packages' },
//   { id: 'L7', title: 'Foot Spa + Foot Massage', description: 'BOGO Package — Buy 1 Get 1 Free for 2 people.', image: '', priceRange: { min: 1799, max: 1799 }, rating: 4.8, reviewCount: 0, duration: '90 min', slug: 'bogo-foot-spa-massage', category: 'packages' },
//   { id: 'L8', title: 'Foot Spa + Foot Nail Color', description: 'BOGO Package — Buy 1 Get 1 Free for 2 people.', image: '', priceRange: { min: 1899, max: 1899 }, rating: 4.8, reviewCount: 0, duration: '', slug: 'bogo-foot-spa-nail', category: 'packages' },
//   { id: 'CP1', title: 'Body Massage + Foot Massage', description: 'Cheava Package — Full-body and foot massage combo.', image: '', priceRange: { min: 1499, max: 1499 }, rating: 4.8, reviewCount: 0, duration: '90 min', slug: 'cp-body-foot-massage', category: 'packages' },
//   { id: 'CP2', title: '⭐ Facial + Hand + Head + Shoulder + Shampoo', description: 'Cheava Package — Most Popular! Complete head-to-toe pampering bundle.', image: '', priceRange: { min: 1999, max: 1999 }, rating: 4.9, reviewCount: 0, duration: '90 min', slug: 'cp-facial-head-shoulder', category: 'packages' },
// ]

// ─── Category Config ───────────────────────────────────────────────────────────
const categoryConfig: Record<string, { label: string; icon: string }> = {
  fashion: { label: 'Fashion Goddess', icon: '✦' },
  skincare: { label: 'Skin Care', icon: '◈' },
  detox: { label: 'Detox', icon: '◉' },
  'add-on': { label: 'Add-On', icon: '◇' },
}

const catDescriptions: Record<string, string> = {
  fashion: 'Nails & Treatment', skincare: 'Glow & renewal', detox: 'Purify & release', 'add-on': 'Extras', 
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cfg = categoryConfig[service.category]
  const isPopular = service.title.startsWith('⭐') || service.rating >= 4.9
  const cleanTitle = service.title.replace('⭐ ', '')
  const chineseMatch = service.description.match(/^([^—]+)/)
  const chinese = chineseMatch ? chineseMatch[1].trim() : ''
  const english = service.description.replace(/^[^—]+—\s*/, '')

  return (
    <div className="svc-card" style={{ animationDelay: `${(index % 9) * 50}ms` }}>
      <div className="svc-card__bar" />
      <div className="svc-card__blob" />
      {isPopular && (
        <div className="svc-card__badge"><Sparkles size={9} /> Popular</div>
      )}
      <div className="svc-card__body">
        <div className="svc-card__meta">
          <span className="svc-card__cat-icon">{cfg.icon}</span>
          <span className="svc-card__cat-label">{cfg.label}</span>
          {service.duration && (
            <span className="svc-card__dur"><Clock size={9} /> {service.duration}</span>
          )}
        </div>
        {chinese && <p className="svc-card__chinese">{chinese}</p>}
        <h3 className="svc-card__title">{cleanTitle}</h3>
        <p className="svc-card__desc">{english}</p>
        <div className="svc-card__stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={11} style={{
              fill: i < Math.floor(service.rating) ? '#7A3828' : 'transparent',
              color: i < Math.floor(service.rating) ? '#7A3828' : '#C8B4AA',
            }} />
          ))}
          <span className="svc-card__rnum">{service.rating}</span>
        </div>
        <div className="svc-card__divider" />
        <div className="svc-card__footer">
          <div>
            <p className="svc-card__from">from</p>
            <p className="svc-card__price">₱{service.priceRange.min.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
// 'all' means show everything grouped by category (original behaviour)
// any other value shows only that category's services in a flat grid
type ActiveCategory = 'all' | string

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('all')

  const categories = Array.from(new Set(allServices.map((s) => s.category)))

  const filteredServices = useMemo(() => {
    const q = searchTerm.toLowerCase()
    return allServices.filter((s) => {
      const matchesSearch = !q || s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
      const matchesCat = activeCategory === 'all' || s.category === activeCategory
      return matchesSearch && matchesCat
    })
  }, [searchTerm, activeCategory])

  // When a category is active we always show a flat filtered grid
  const isFiltered = activeCategory !== 'all' || Boolean(searchTerm)

  return (
    <MainLayout>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

        :root {
          --page-bg:     #F9EDE6;
          --surface:     #FDF5EF;
          --surface-alt: #F0DDD3;
          --brand:       #7A3828;
          --brand-mid:   #A04E3A;
          --brand-tint:  rgba(122,56,40,0.07);
          --brand-b:     rgba(122,56,40,0.18);
          --dark:        #1E1008;
          --mid:         #4A2E22;
          --muted:       #836860;
          --border:      rgba(122,56,40,0.14);
          --ff-d: 'Cormorant Garamond', Georgia, serif;
          --ff-b: 'DM Sans', system-ui, sans-serif;
        }

        /* ── hero ── */
        .sp-hero {
          position: relative; padding: 80px 24px 64px;
          text-align: center; overflow: hidden;
          background: var(--page-bg);
        }
        .sp-hero::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 100% 60% at 50% 0%,  rgba(122,56,40,0.13) 0%, transparent 65%),
            radial-gradient(ellipse 40%  50% at 5%  100%, rgba(122,56,40,0.07) 0%, transparent 55%),
            radial-gradient(ellipse 35%  45% at 95% 90%,  rgba(122,56,40,0.05) 0%, transparent 55%);
        }
        .sp-hero__eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          font-family: var(--ff-b); font-size: 10px; letter-spacing: 5px;
          text-transform: uppercase; color: var(--brand-mid); margin-bottom: 20px;
        }
        .sp-hero__eyebrow::before, .sp-hero__eyebrow::after {
          content: ''; height: 1px; width: 40px;
        }
        .sp-hero__eyebrow::before { background: linear-gradient(90deg, transparent, var(--brand-mid)); }
        .sp-hero__eyebrow::after  { background: linear-gradient(90deg, var(--brand-mid), transparent); }
        .sp-hero__h1 {
          font-family: var(--ff-d); font-size: clamp(52px, 8vw, 92px);
          font-weight: 300; line-height: 1.0; color: var(--dark);
          letter-spacing: -0.01em; margin-bottom: 16px;
        }
        .sp-hero__h1 em { font-style: italic; color: var(--brand); }
        .sp-hero__sub {
          font-family: var(--ff-b); font-size: clamp(13px, 1.7vw, 16px);
          font-weight: 300; color: var(--muted); max-width: 430px;
          margin: 0 auto 48px; line-height: 1.8;
        }
        .sp-hero__stats {
          display: inline-flex;
          border: 1px solid var(--brand-b);
          background: rgba(253,245,239,0.8); backdrop-filter: blur(8px);
          border-radius: 4px; overflow: hidden;
        }
        .sp-hero__stat {
          padding: 16px 32px; border-right: 1px solid var(--brand-b);
          display: flex; flex-direction: column; gap: 5px; align-items: center;
        }
        .sp-hero__stat:last-child { border-right: none; }
        .sp-hero__stat-v {
          font-family: var(--ff-d); font-size: 28px; font-weight: 400;
          color: var(--brand); line-height: 1;
        }
        .sp-hero__stat-l {
          font-family: var(--ff-b); font-size: 9px; letter-spacing: 2.5px;
          text-transform: uppercase; color: var(--muted);
        }

        /* ── category strip ── */
        .sp-cat-strip {
          display: grid;
          /* 9 columns: All + 8 categories */
          grid-template-columns: repeat(5, 1fr);
          border-top: 1px solid var(--brand-b); border-bottom: 1px solid var(--brand-b);
          background: var(--surface-alt); overflow-x: auto;
        }
        .sp-cat-tile {
          position: relative; padding: 20px 8px 18px; text-align: center;
          cursor: pointer; border-right: 1px solid var(--brand-b);
          background: transparent; transition: background 0.2s;
          min-width: 100px; font-family: var(--ff-b); border-bottom: none;
          display: flex; flex-direction: column; align-items: center; gap: 4px;
        }
        .sp-cat-tile:last-child { border-right: none; }
        .sp-cat-tile__underline {
          position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: var(--brand); transform: scaleX(0);
          transition: transform 0.22s cubic-bezier(.4,0,.2,1); transform-origin: center;
        }
        .sp-cat-tile:hover .sp-cat-tile__underline,
        .sp-cat-tile.active .sp-cat-tile__underline { transform: scaleX(1); }
        .sp-cat-tile.active { background: var(--brand-tint); }
        .sp-cat-tile__icon { font-size: 22px; color: var(--brand); line-height: 1; transition: transform 0.2s; }
        .sp-cat-tile:hover .sp-cat-tile__icon { transform: scale(1.18); }
        .sp-cat-tile__name { font-size: 11px; font-weight: 500; color: var(--dark); line-height: 1.2; }
        .sp-cat-tile.active .sp-cat-tile__name { color: var(--brand); }
        .sp-cat-tile__desc { font-size: 9.5px; color: var(--muted); }

        /* ── controls ── */
        .sp-controls {
          max-width: 1240px; margin: 0 auto; padding: 28px 24px 16px;
          display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
          background: var(--page-bg);
        }
        .sp-search { position: relative; flex: 1; min-width: 200px; max-width: 400px; }
        .sp-search__ico {
          position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
          color: var(--muted); pointer-events: none;
        }
        .sp-search__input {
          width: 100%; padding: 11px 38px 11px 42px;
          font-family: var(--ff-b); font-size: 13.5px; font-weight: 300;
          background: var(--surface); border: 1px solid var(--brand-b);
          border-radius: 3px; color: var(--dark); outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .sp-search__input::placeholder { color: var(--muted); }
        .sp-search__input:focus { border-color: var(--brand); box-shadow: 0 0 0 3px rgba(122,56,40,0.1); }
        .sp-search__x {
          position: absolute; right: 10px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer; color: var(--muted);
          padding: 4px; display: flex; transition: color 0.15s;
        }
        .sp-search__x:hover { color: var(--dark); }
        .sp-count { font-family: var(--ff-b); font-size: 12.5px; color: var(--muted); margin-left: auto; }
        .sp-count strong { color: var(--dark); font-weight: 500; }

        /* ── section heading ── */
        .sp-sec-head {
          max-width: 1240px; margin: 0 auto; padding: 32px 24px 0;
          display: flex; align-items: center; gap: 16px;
          background: var(--page-bg);
        }
        .sp-sec-head__label {
          font-family: var(--ff-d); font-size: 20px; font-weight: 400;
          font-style: italic; color: var(--brand); white-space: nowrap;
        }
        .sp-sec-head__line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, rgba(122,56,40,0.3), transparent);
        }
        .sp-sec-head__chip {
          font-family: var(--ff-b); font-size: 10px; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--muted);
          background: rgba(122,56,40,0.08); padding: 3px 10px; border-radius: 20px;
          white-space: nowrap;
        }

        /* ── grid wrapper ── */
        .sp-grid-wrap {
          max-width: 1240px; margin: 0 auto; padding: 14px 24px 16px;
          background: var(--page-bg);
        }
        .sp-grid-wrap.last { padding-bottom: 64px; }
        .sp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(308px, 1fr));
          gap: 18px;
        }

        /* ── card ── */
        .svc-card {
          position: relative;
          background: var(--surface);
          background-image: linear-gradient(140deg, var(--brand-tint) 0%, transparent 55%);
          border: 1px solid var(--brand-b); border-radius: 4px; overflow: hidden;
          display: flex; flex-direction: column;
          transition: transform 0.24s, box-shadow 0.24s, border-color 0.24s;
          animation: cardIn 0.4s ease both;
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .svc-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 50px rgba(122,56,40,0.2);
          border-color: rgba(122,56,40,0.38);
        }
        .svc-card__bar { height: 3px; background: linear-gradient(90deg, var(--brand), var(--brand-mid)); }
        .svc-card__blob {
          position: absolute; top: -28px; right: -28px;
          width: 96px; height: 96px; border-radius: 50%;
          background: var(--brand-tint); filter: blur(22px); pointer-events: none;
        }
        .svc-card__badge {
          position: absolute; top: 14px; right: 12px;
          display: flex; align-items: center; gap: 4px;
          font-family: var(--ff-b); font-size: 9px; font-weight: 500;
          letter-spacing: 1.5px; text-transform: uppercase;
          background: var(--brand); color: #FDF5EF;
          padding: 3px 9px; border-radius: 20px; z-index: 1;
        }
        .svc-card__body { padding: 20px 22px 18px; display: flex; flex-direction: column; flex: 1; }
        .svc-card__meta { display: flex; align-items: center; gap: 7px; margin-bottom: 10px; }
        .svc-card__cat-icon { font-size: 13px; color: var(--brand); line-height: 1; }
        .svc-card__cat-label {
          font-family: var(--ff-b); font-size: 9.5px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--muted); flex: 1;
        }
        .svc-card__dur {
          display: flex; align-items: center; gap: 3px;
          font-family: var(--ff-b); font-size: 9.5px; color: var(--brand);
          background: rgba(122,56,40,0.08); border: 1px solid rgba(122,56,40,0.16);
          padding: 3px 9px; border-radius: 20px;
        }
        .svc-card__chinese {
          font-family: var(--ff-d); font-style: italic; font-size: 13px;
          color: var(--brand); margin-bottom: 4px; letter-spacing: 0.5px;
        }
        .svc-card__title {
          font-family: var(--ff-d); font-size: 22px; font-weight: 400;
          line-height: 1.25; color: var(--dark); margin-bottom: 9px;
        }
        .svc-card__desc {
          font-family: var(--ff-b); font-size: 12.5px; font-weight: 300;
          line-height: 1.65; color: var(--muted); flex: 1;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          overflow: hidden; margin-bottom: 14px;
        }
        .svc-card__stars { display: flex; align-items: center; gap: 3px; margin-bottom: 14px; }
        .svc-card__rnum { font-family: var(--ff-b); font-size: 11px; color: var(--muted); margin-left: 4px; }
        .svc-card__divider {
          height: 1px; margin-bottom: 14px;
          background: linear-gradient(90deg, rgba(122,56,40,0.2) 0%, transparent 70%);
        }
        .svc-card__footer { display: flex; align-items: flex-end; justify-content: space-between; }
        .svc-card__from {
          font-family: var(--ff-b); font-size: 9px; letter-spacing: 2px;
          text-transform: uppercase; color: var(--muted); margin-bottom: 2px;
        }
        .svc-card__price {
          font-family: var(--ff-d); font-size: 26px; font-weight: 300;
          color: var(--brand); line-height: 1;
        }

        /* ── empty ── */
        .sp-empty { grid-column: 1/-1; text-align: center; padding: 72px 20px; }
        .sp-empty__g { font-family: var(--ff-d); font-size: 60px; color: rgba(122,56,40,0.18); line-height: 1; margin-bottom: 16px; }
        .sp-empty__h { font-family: var(--ff-d); font-size: 26px; font-weight: 300; color: var(--dark); margin-bottom: 8px; }
        .sp-empty__p { font-family: var(--ff-b); font-size: 13px; color: var(--muted); margin-bottom: 22px; }
        .sp-empty__btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 24px; background: var(--brand); color: #FDF5EF;
          font-family: var(--ff-b); font-size: 11px; font-weight: 500;
          letter-spacing: 2px; text-transform: uppercase;
          border: none; cursor: pointer; border-radius: 2px; transition: background 0.2s;
        }
        .sp-empty__btn:hover { background: var(--mid); }

        /* ── responsive ── */
        @media (max-width: 1100px) {
          .sp-cat-strip { grid-template-columns: repeat(5, 1fr); }
          .sp-cat-tile { border-bottom: 1px solid var(--brand-b); }
          .sp-cat-tile:nth-child(5n) { border-right: none; }
        }
        @media (max-width: 760px) {
          .sp-cat-strip { grid-template-columns: repeat(3, 1fr); }
          .sp-cat-tile:nth-child(3n) { border-right: none; }
          .sp-cat-tile:nth-child(n+7) { border-bottom: none; }
        }
        @media (max-width: 500px) {
          .sp-cat-strip { grid-template-columns: repeat(3, 1fr); }
          .sp-grid { grid-template-columns: 1fr; }
          .sp-hero { padding: 64px 16px 48px; }
          .sp-controls, .sp-grid-wrap, .sp-sec-head { padding-left: 16px; padding-right: 16px; }
          .sp-count { display: none; }
        }
        @media (min-width: 501px) and (max-width: 900px) {
          .sp-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (prefers-reduced-motion: reduce) {
          .svc-card { animation: none; }
          .svc-card:hover { transform: none; }
          .sp-cat-tile__icon { transition: none; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="sp-hero">
        <div className="sp-hero__eyebrow">Hi Beauty Spa</div>
        <h1 className="sp-hero__h1">Our <em>Services</em></h1>
        <p className="sp-hero__sub">
          A sanctuary of beauty and healing — from ancient Chinese therapies to modern aesthetic treatments.
        </p>
        <div className="sp-hero__stats">
          <div className="sp-hero__stat">
            <span className="sp-hero__stat-v">{allServices.length}+</span>
            <span className="sp-hero__stat-l">Services</span>
          </div>
          <div className="sp-hero__stat">
            <span className="sp-hero__stat-v">8</span>
            <span className="sp-hero__stat-l">Categories</span>
          </div>
          <div className="sp-hero__stat">
            <span className="sp-hero__stat-v">4.8★</span>
            <span className="sp-hero__stat-l">Avg Rating</span>
          </div>
        </div>
      </section>

      {/* ── Category Strip — radio-style: All + one per category ── */}
      <div className="sp-cat-strip" role="radiogroup" aria-label="Filter by category">

        {/* ALL tile */}
        <button
          className={`sp-cat-tile ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
          role="radio"
          aria-checked={activeCategory === 'all'}
        >
          <span className="sp-cat-tile__icon">✿</span>
          <span className="sp-cat-tile__name">All</span>
          {/* <span className="sp-cat-tile__desc">Everything</span> */}
          <span className="sp-cat-tile__underline" aria-hidden="true" />
        </button>

        {/* One tile per category */}
        {categories.map((cat) => {
          const cfg = categoryConfig[cat]
          return (
            <button
              key={cat}
              className={`sp-cat-tile ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              role="radio"
              aria-checked={activeCategory === cat}
            >
              <span className="sp-cat-tile__icon">{cfg.icon}</span>
              <span className="sp-cat-tile__name">{cfg.label}</span>
              <span className="sp-cat-tile__desc">{catDescriptions[cat]}</span>
              <span className="sp-cat-tile__underline" aria-hidden="true" />
            </button>
          )
        })}
      </div>

      {/* ── Controls ── */}
      <div className="sp-controls">
        <div className="sp-search">
          <Search size={15} className="sp-search__ico" />
          <input
            type="text"
            placeholder="Search massage, facial, nail…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="sp-search__input"
          />
          {searchTerm && (
            <button className="sp-search__x" onClick={() => setSearchTerm('')} aria-label="Clear">
              <X size={13} />
            </button>
          )}
        </div>
        <p className="sp-count">
          Showing <strong>{filteredServices.length}</strong> of {allServices.length} services
        </p>
      </div>

      {/* ── Services ── */}
      {!isFiltered ? (
        /* ALL view — grouped by category */
        <>
          {categories.map((cat, ci) => {
            const catSvcs = filteredServices.filter((s) => s.category === cat)
            if (!catSvcs.length) return null
            const cfg = categoryConfig[cat]
            const isLast = ci === categories.length - 1
            return (
              <div key={cat}>
                <div className="sp-sec-head">
                  <span className="sp-sec-head__label">{cfg.icon} {cfg.label}</span>
                  <div className="sp-sec-head__line" />
                  <span className="sp-sec-head__chip">{catSvcs.length} services</span>
                </div>
                <div className={`sp-grid-wrap ${isLast ? 'last' : ''}`}>
                  <div className="sp-grid">
                    {catSvcs.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
                  </div>
                </div>
              </div>
            )
          })}
        </>
      ) : (
        /* Filtered view — flat grid */
        <div className="sp-grid-wrap last">
          <div className="sp-grid">
            {filteredServices.length > 0 ? (
              filteredServices.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)
            ) : (
              <div className="sp-empty">
                <div className="sp-empty__g">✦</div>
                <h3 className="sp-empty__h">Nothing found</h3>
                <p className="sp-empty__p">Try a different term or select another category.</p>
                <button
                  className="sp-empty__btn"
                  onClick={() => { setSearchTerm(''); setActiveCategory('all') }}
                >
                  <X size={12} /> Show all
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </MainLayout>
  )
}
