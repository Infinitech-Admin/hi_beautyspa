"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
};

const IMAGE_PLAYLIST: Slide[] = [
  { src: "/images/hero14.jpg" },
  { src: "/images/hero8.jpg" },
  { src: "/images/hero9.jpg" },
  { src: "/images/hero10.jpg" },
  { src: "/images/hero11.jpg" },
  { src: "/images/hero12.jpg" },
  { src: "/images/hero13.jpg" },
  { src: "/images/hero15.jpg" },
];

const SLIDE_DURATION = 6000;

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function goTo(n: number) {
    setCurrentIndex(n);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      goTo((n + 1) % IMAGE_PLAYLIST.length);
    }, SLIDE_DURATION);
  }

  useEffect(() => {
    timerRef.current = setTimeout(() => goTo(1), SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <section className="relative grid min-h-screen w-full lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center bg-[#f9f6f2] px-6 py-14 text-[#2d2d2d] sm:px-8 md:px-12 md:py-16 lg:px-16">
        <div className="max-w-xl space-y-5 md:space-y-6">
          {/* Eyebrow */}
          <p className="text-xs uppercase tracking-[0.28em] text-[#8b6b4a] sm:text-sm">
            Premium Spa Experience
          </p>

          {/* Headline */}
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-5xl">
            Relax. Refresh. <br /> Rejuvenate.
          </h1>

          {/* Description */}
          <p className="text-base leading-relaxed text-[#555] sm:text-lg">
            Step into a sanctuary of calm where every treatment is designed to
            melt away stress, restore balance, and elevate your well-being. Our
            expert therapists combine traditional techniques with modern care to
            give you a truly rejuvenating experience.
          </p>

          {/* Divider */}
          <div className="h-[2px] w-12 bg-[#3d2817]/30" />

          {/* Features */}
          <div className="grid grid-cols-1 gap-3 text-sm text-[#444] sm:grid-cols-2 sm:gap-4">
            <div>🌿 Natural Treatments</div>
            <div>💆 Expert Therapists</div>
            <div>🕯️ Calm Atmosphere</div>
            <div>✨ Holistic Care</div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative min-h-[420px] overflow-hidden bg-[#f3efe9] sm:min-h-[520px] lg:min-h-full">
        {IMAGE_PLAYLIST.map(({ src }, i) => (
          <div
            key={src}
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-[1200ms] ease-in-out"
            style={{
              opacity: i === currentIndex ? 1 : 0,
              zIndex: i === currentIndex ? 10 : 0,
            }}
          >
            <Image
              src={src}
              alt=""
              width={1200}
              height={800}
              className={`max-h-[92%] max-w-[92%] object-contain transition-transform duration-[8000ms] ease-in-out ${
                i === currentIndex ? "scale-105" : "scale-100"
              }`}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-2 lg:bottom-6 lg:right-6 lg:left-auto lg:translate-x-0">
        {IMAGE_PLAYLIST.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-5 bg-[#3d2817]" : "w-1.5 bg-[#3d2817]/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
