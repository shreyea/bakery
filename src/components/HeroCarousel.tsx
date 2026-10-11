"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { img } from "@/lib/site";

const SLIDES = [
  { src: img("hero-main"), alt: "Sourdough loaves dusted with flour next to a stalk of wheat" },
  { src: img("hero-slide-croissant"), alt: "Golden butter croissants with a dusting of sugar" },
  { src: img("hero-slide-truffle"), alt: "Dark chocolate truffle cake with piped rosettes" },
  { src: img("hero-slide-tarts"), alt: "Fresh fruit tarts with berries and cream" },
];

const INTERVAL = 5000;

/**
 * Full-bleed photo carousel for the phone hero.
 * Crossfades every 5 seconds; swipe left or right to change slide.
 * Fills its (relatively positioned) parent.
 */
export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = SLIDES.length;

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => clearTimeout(t);
  }, [index, reduceMotion, count]);

  const go = (i: number) => setIndex((i + count) % count);

  return (
    <div
      className="absolute inset-0"
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos from the bakery"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 45) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      {SLIDES.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          fill
          priority={i === 0}
          loading={i === 0 ? undefined : "lazy"}
          sizes="100vw"
          aria-hidden={i !== index}
          className={`object-cover transition-opacity duration-[1100ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Darkens the lower part so the text stays readable on every photo */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-cocoa via-cocoa/65 to-cocoa/15"
      />
    </div>
  );
}
