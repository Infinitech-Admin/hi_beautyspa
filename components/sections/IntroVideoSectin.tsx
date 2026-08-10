"use client";

import { useRef, useState } from "react";

const stats = [
  { value: "10+", label: "Years of Care" },
  { value: "5,000+", label: "Happy Clients" },
  { value: "20+", label: "Signature Treatments" },
];

const VIDEO_SRC = "https://infinitech-api10.site/videos/hero.mp4";

const IntroVideoSection = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      aria-labelledby="intro-video-heading"
      className="relative overflow-hidden bg-spa-cream"
    >
      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Video */}
          <div className="relative lg:col-span-7 lg:py-32">
            <div className="relative w-full overflow-hidden rounded-sm shadow-frame aspect-video">
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src={VIDEO_SRC}
                muted
                loop
                playsInline
                preload="metadata"
                onClick={togglePlay}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              />

              {/* Tap/click overlay with play button */}
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? "Pause video" : "Play video"}
                className="absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity hover:bg-black/20"
              >
                {!playing && (
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
                    <svg
                      viewBox="0 0 24 24"
                      className="ml-1 h-6 w-6 fill-spa-ink"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-5 pb-10">
            <h2
              id="intro-video-heading"
              className="font-display text-4xl leading-[1.05] text-spa-ink md:text-5xl lg:text-6xl"
            >
              An invitation
              <span className="block italic text-spa-gold">to slow down.</span>
            </h2>

            <p className="mt-8 max-w-md font-body text-base leading-relaxed text-spa-ink-soft md:text-lg">
              Step behind the doors of Hi Beauty SPA and discover a quiet world
              shaped by warm light, gentle hands, and rituals refined over a
              decade.
            </p>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-spa-line pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-display text-3xl text-spa-ink md:text-4xl">
                      {s.value}
                    </span>
                    <span className="mt-2 block font-body text-[10px] uppercase tracking-[0.22em] text-spa-muted md:text-xs">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroVideoSection;
