"use client";

import {
  Heart,
  Leaf,
  Wind,
  Sparkles,
  MessageSquare,
  Flower2,
  HeartHandshake,
} from "lucide-react";

import { MainLayout } from "@/components/MainLayout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

// ── Updated palette from reference screenshot ──────────────────────────────
const BRAND = {
  bg: "#fdf8f5", // warm off-white page background
  surface: "#ffffff",
  accent: "#a84f35", // terracotta rust — CTA buttons, labels
  accentDark: "#3a1f14", // deep dark brown — hero headline
  soft: "#f5ede7", // very light peach — section backgrounds
  border: "#e4cfc4", // warm light border
  text: "#a84f35", // terracotta — section headings
  muted: "#7a5548", // mid warm brown — body copy
  heroGradientFrom: "#e8b9a3", // peach — left side of hero gradient
  heroGradientTo: "#fdf8f5", // cream — right side of hero gradient
};

const features = [
  {
    icon: Heart,
    title: "Personalized Treatments",
    description:
      "Every session begins with a consultation so we can tailor your experience to your exact needs and pressure preference.",
  },
  {
    icon: Leaf,
    title: "Clean, Premium Products",
    description:
      "We use carefully selected, toxin-free formulations designed for safe, effective, and long-lasting results.",
  },
  {
    icon: Wind,
    title: "Designed for Deep Calm",
    description:
      "A quiet, sensory-balanced environment designed to slow your mind and reset your nervous system.",
  },
  {
    icon: Sparkles,
    title: "Expert Therapists",
    description:
      "Highly trained professionals with advanced techniques in therapeutic and wellness-focused treatments.",
  },
];

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    description:
      "We understand your concerns, preferences, and goals before any treatment begins.",
  },
  {
    icon: Flower2,
    step: "02",
    title: "Personalized Treatment",
    description:
      "Every detail is adjusted to your body and comfort for a fully tailored experience.",
  },
  {
    icon: HeartHandshake,
    step: "03",
    title: "Aftercare Guidance",
    description:
      "You receive simple aftercare steps to extend relaxation and results beyond your visit.",
  },
];

export default function AboutPage() {
  return (
    <MainLayout>
      <main style={{ background: BRAND.bg }} className="min-h-screen relative">
        {/* HERO — peach-to-cream gradient background matching reference */}
        <section
          className="py-24 lg:py-28 relative overflow-hidden"
          style={{
            background: `linear-gradient(105deg, ${BRAND.heroGradientFrom} 0%, ${BRAND.heroGradientTo} 60%)`,
          }}
        >
          <div className="max-w-6xl mx-auto px-6 text-center relative">
            <div
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full mb-6 border"
              style={{
                borderColor: BRAND.border,
                background: "rgba(255,255,255,0.7)",
              }}
            >
              <p
                className="text-xs tracking-[0.2em]"
                style={{ color: BRAND.muted }}
              >
                LIMITED AVAILABILITY
              </p>
            </div>

            {/* headline matches reference: dark brown + terracotta accent line */}
            <h1
              className="font-serif font-bold text-4xl md:text-6xl leading-tight mb-3"
              style={{ color: BRAND.accentDark }}
            >
              Ready to feel the difference?
            </h1>
            <h2
              className="font-serif font-semibold text-3xl md:text-5xl leading-tight mb-6"
              style={{ color: BRAND.text }}
            >
              Book your session today
            </h2>

            <p
              className="text-base md:text-lg max-w-2xl mx-auto mb-10"
              style={{ color: BRAND.muted }}
            >
              Secure your preferred schedule now. Our slots fill quickly,
              especially during peak hours. Send a message and we'll assist you
              immediately.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {/* Primary — solid terracotta (matches reference "View Our Services") */}
              <Button
                asChild
                size="lg"
                className="rounded-full uppercase tracking-widest text-xs font-semibold px-8"
                style={{
                  background: BRAND.accent,
                  color: "white",
                  border: "none",
                }}
              >
                <Link href="/services">View Our Services</Link>
              </Button>

              {/* Secondary — outlined (matches reference "Call Instantly") */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full uppercase tracking-widest text-xs font-semibold px-8"
                style={{
                  borderColor: BRAND.accent,
                  color: BRAND.accent,
                  background: "rgba(255,255,255,0.7)",
                }}
              >
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>

            {/* trust row — matches reference checkmarks */}
            <div
              className="mt-8 flex flex-wrap justify-center gap-6 text-xs"
              style={{ color: BRAND.muted }}
            >
              <span>✓ No commitment</span>
              <span>✓ Fast confirmation</span>
              <span>✓ Private &amp; secure</span>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="py-24" style={{ background: BRAND.bg }}>
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
            <FadeIn>
              <div className="relative">
                <img
                  src={"/hero2.jpg"}
                  alt="Premium spa products and natural decor"
                  className="w-full rounded-sm object-cover aspect-[4/5]"
                />
                <div
                  className="absolute -bottom-6 -right-6 w-32 h-32 border hidden lg:block"
                  style={{ borderColor: BRAND.border }}
                />
                <div
                  className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white shadow"
                  style={{ color: BRAND.accent }}
                >
                  Trusted Experience
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p
                className="text-xs uppercase tracking-[0.3em] mb-4"
                style={{ color: BRAND.accent }}
              >
                Our Story
              </p>

              <h2
                className="font-serif font-semibold text-3xl md:text-4xl mb-6"
                style={{ color: BRAND.accentDark }}
              >
                Intentional Care, Not Rushed Treatments
              </h2>

              <div
                className="space-y-4 text-sm leading-relaxed"
                style={{ color: BRAND.muted }}
              >
                <p>
                  Hi Beauty SPA was created to offer a slower, more intentional
                  approach to wellness.
                </p>
                <p>
                  Every treatment is guided by consultation, comfort, and care —
                  not speed.
                </p>
                <p>
                  Our goal is simple: help you feel lighter, calmer, and
                  restored.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="text-sm font-medium tracking-wide"
                  style={{ color: BRAND.accent }}
                >
                  Experience it yourself →
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24" style={{ background: BRAND.soft }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p
                className="text-xs uppercase tracking-[0.35em]"
                style={{ color: BRAND.accent }}
              >
                Why Clients Choose Us
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl mt-3"
                style={{ color: BRAND.accentDark }}
              >
                Designed Around Real Results
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div
                    className="p-8 bg-white hover:shadow-md transition"
                    style={{
                      border: `1px solid ${BRAND.border}`,
                      borderRadius: 10,
                    }}
                  >
                    <f.icon className="mb-4" style={{ color: BRAND.accent }} />
                    <h3
                      className="font-serif text-xl mb-2"
                      style={{ color: BRAND.accentDark }}
                    >
                      {f.title}
                    </h3>
                    <p className="text-sm" style={{ color: BRAND.muted }}>
                      {f.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24" style={{ background: BRAND.bg }}>
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p
              className="text-xs uppercase tracking-[0.35em] mb-4"
              style={{ color: BRAND.accent }}
            >
              Your Experience
            </p>

            <h2
              className="font-serif text-3xl md:text-4xl mb-14"
              style={{ color: BRAND.accentDark }}
            >
              Simple, Calm, Intentional
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {steps.map((s, i) => (
                <FadeIn key={i}>
                  <div>
                    <div
                      className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full"
                      style={{ background: BRAND.soft }}
                    >
                      <s.icon style={{ color: BRAND.accent }} />
                    </div>

                    <p
                      className="text-xs tracking-[0.3em] mb-2"
                      style={{ color: BRAND.accent }}
                    >
                      STEP {s.step}
                    </p>

                    <h3
                      className="font-serif text-lg mb-2"
                      style={{ color: BRAND.accentDark }}
                    >
                      {s.title}
                    </h3>

                    <p className="text-sm" style={{ color: BRAND.muted }}>
                      {s.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* IS IT FOR YOU */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            <div className="p-8 border" style={{ borderColor: BRAND.border }}>
              <h3
                className="font-serif text-xl mb-4"
                style={{ color: BRAND.accentDark }}
              >
                This is for you if…
              </h3>
              <ul className="text-sm space-y-2" style={{ color: BRAND.muted }}>
                <li>• You feel constantly stressed or drained</li>
                <li>• You need deep relaxation, not a quick massage</li>
                <li>• You value intentional self-care</li>
              </ul>
            </div>

            <div className="p-8 border" style={{ borderColor: BRAND.border }}>
              <h3
                className="font-serif text-xl mb-4"
                style={{ color: BRAND.accentDark }}
              >
                This may NOT be for you if…
              </h3>
              <ul className="text-sm space-y-2" style={{ color: BRAND.muted }}>
                <li>• You prefer rushed, in-and-out services</li>
                <li>• You prioritize price over experience</li>
                <li>• You are not looking for relaxation-focused care</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <div className="mx-auto px-6 text-center">
          <TestimonialsSection />
        </div>

        {/* TRUST BADGES */}
        <section className="py-24" style={{ background: "white" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div
              className="grid md:grid-cols-3 text-center p-10"
              style={{ background: BRAND.soft, borderRadius: 12 }}
            >
              {[
                ["5-Star Rated", "Trusted by repeat clients"],
                ["Open Late", "Until 2AM daily"],
                ["Prime Location", "Makati CBD"],
              ].map(([t, d], i) => (
                <div key={i}>
                  <div
                    className="w-10 h-10 mx-auto mb-3 flex items-center justify-center text-sm font-semibold"
                    style={{
                      background: "#fff",
                      borderRadius: 999,
                      color: BRAND.accent,
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    className="font-medium"
                    style={{ color: BRAND.accentDark }}
                  >
                    {t}
                  </h3>
                  <p className="text-sm" style={{ color: BRAND.muted }}>
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA — peach gradient matching reference hero */}
        <section
          className="relative py-28 text-center overflow-hidden"
          style={{
            background: `linear-gradient(105deg, ${BRAND.heroGradientFrom} 0%, ${BRAND.heroGradientTo} 60%)`,
          }}
        >
          <div className="relative max-w-3xl mx-auto px-6">
            <p
              className="text-xs uppercase tracking-[0.45em] mb-5"
              style={{ color: BRAND.muted }}
            >
              Limited Availability • High Demand Slots
            </p>

            <h2
              className="text-4xl md:text-5xl font-semibold leading-tight"
              style={{ color: BRAND.accentDark }}
            >
              You deserve true{" "}
              <span style={{ color: BRAND.text }}>relaxation</span>
            </h2>

            <p
              className="mt-6 text-base md:text-lg max-w-xl mx-auto italic"
              style={{ color: BRAND.muted }}
            >
              Book a personalized session designed to release tension, restore
              balance, and reset your entire system.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full font-semibold px-10 py-4 shadow-lg transition hover:scale-[1.04] uppercase tracking-widest text-xs"
                style={{
                  background: BRAND.accent,
                  color: "white",
                  border: "none",
                }}
              >
                <Link href="/contact">Book Your Session</Link>
              </Button>
            </div>

            <p className="mt-6 text-xs" style={{ color: BRAND.muted }}>
              Fast confirmation • Private sessions • Same-day response
            </p>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
