"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { ratingBreakdown, site, testimonials } from "@/lib/site";
import SectionHead from "./SectionHead";

const INTERVAL = 6500; // keep in sync with `progress` in tailwind.config.ts

function Stars({ className = "size-4" }: { className?: string }) {
  return (
    <span className="flex" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-marigold text-marigold`} aria-hidden />
      ))}
    </span>
  );
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** True once the element has scrolled into view (and stays true). */
function useInViewOnce<T extends Element>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, seen] as const;
}

/** Counts from 0 up to `to` once `start` is true. */
function useCountUp(to: number, start: boolean, ms = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (prefersReducedMotion()) {
      setValue(to);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / ms, 1);
      setValue(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, start, ms]);

  return value;
}

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = testimonials.length;

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);

  // Auto-advance. Restarts on every slide change and when un-paused.
  useEffect(() => {
    if (paused || prefersReducedMotion()) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, count]);

  const [ratingRef, ratingSeen] = useInViewOnce<HTMLDivElement>();
  const score = useCountUp(4.8, ratingSeen);

  return (
    <section id="reviews" className="section bg-paper">
      <div className="wrap">
        <SectionHead kicker="Reviews" title="What the neighbourhood says" />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.5fr_1fr] lg:gap-6">
          {/* Featured quote carousel */}
          <div
            className="relative overflow-hidden rounded-3xl bg-cocoa p-7 text-cream sm:p-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
              touchX.current = null;
            }}
            role="region"
            aria-roledescription="carousel"
            aria-label="Customer reviews"
          >
            <Quote
              className="pointer-events-none absolute -right-4 -top-4 size-36 text-cream/[0.06] sm:size-48"
              aria-hidden
            />

            {/* All slides share one grid cell, so the box never changes height. */}
            <div className="relative grid">
              {testimonials.map((t, i) => {
                const active = i === index;
                return (
                  <figure
                    key={t.name}
                    aria-hidden={!active}
                    className={`col-start-1 row-start-1 flex flex-col justify-between transition-all duration-700 ease-out ${
                      active
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-4 opacity-0"
                    }`}
                  >
                    <div>
                      <Stars className="size-5" />
                      <blockquote className="mt-6 font-display text-[1.4rem] leading-snug sm:text-[2rem]">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                    </div>
                    <figcaption className="mt-8 flex items-center gap-3">
                      <span
                        className="grid size-12 place-items-center rounded-full bg-marigold font-display text-xl text-cocoa"
                        aria-hidden
                      >
                        {t.name[0]}
                      </span>
                      <span className="leading-tight">
                        <span className="block font-semibold">{t.name}</span>
                        <span className="text-sm text-cream/65">{t.detail}</span>
                      </span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>

            {/* Controls */}
            <div className="relative mt-9 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2" role="tablist" aria-label="Choose a review">
                {testimonials.map((t, i) => {
                  const active = i === index;
                  return (
                    <button
                      key={t.name}
                      role="tab"
                      aria-selected={active}
                      aria-label={`Review ${i + 1} of ${count}, ${t.name}`}
                      onClick={() => go(i)}
                      className="grid h-6 place-items-center"
                    >
                      <span
                        className={`relative block h-1.5 overflow-hidden rounded-full bg-cream/25 transition-all duration-500 ${
                          active ? "w-12" : "w-3 hover:bg-cream/50"
                        }`}
                      >
                        {active && (
                          <span
                            key={`${index}-${paused}`}
                            className={`absolute inset-y-0 left-0 rounded-full bg-marigold ${
                              paused ? "w-full" : "animate-progress"
                            }`}
                          />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => go(index - 1)}
                  aria-label="Previous review"
                  className="grid size-11 place-items-center rounded-full border border-cream/25 transition hover:bg-cream hover:text-cocoa"
                >
                  <ArrowLeft className="size-4" aria-hidden />
                </button>
                <button
                  onClick={() => go(index + 1)}
                  aria-label="Next review"
                  className="grid size-11 place-items-center rounded-full border border-cream/25 transition hover:bg-cream hover:text-cocoa"
                >
                  <ArrowRight className="size-4" aria-hidden />
                </button>
              </div>
            </div>
          </div>

          {/* Rating summary */}
          <div
            ref={ratingRef}
            className="flex flex-col justify-center rounded-3xl bg-cream p-7 ring-1 ring-line sm:p-10"
          >
            <div className="flex items-end gap-4">
              <p className="font-display text-7xl leading-none tabular-nums">{score.toFixed(1)}</p>
              <div className="pb-1.5">
                <Stars className="size-5" />
                <p className="mt-1.5 text-sm text-muted">1,100+ Google reviews</p>
              </div>
            </div>

            <ul className="mt-8 space-y-3.5">
              {ratingBreakdown.map((r, i) => (
                <li key={r.stars} className="flex items-center gap-3 text-sm">
                  <span className="w-9 shrink-0 font-medium tabular-nums">{r.stars} ★</span>
                  <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-line">
                    <span
                      className="block h-full rounded-full bg-marigold transition-[width] duration-[1200ms] ease-out"
                      style={{
                        width: ratingSeen ? `${r.percent}%` : "0%",
                        transitionDelay: `${i * 120}ms`,
                      }}
                    />
                  </span>
                  <span className="w-10 shrink-0 text-right text-muted tabular-nums">{r.percent}%</span>
                </li>
              ))}
            </ul>

            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-terracotta underline underline-offset-4"
            >
              Read all reviews on Google
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
