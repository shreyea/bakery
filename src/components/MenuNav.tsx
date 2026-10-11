"use client";
import { useEffect, useRef, useState } from "react";

type Section = { id: string; label: string };

/** Sticky category bar for the /menu page. Highlights the section you're reading. */
export default function MenuNav({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0].id);
  const barRef = useRef<HTMLDivElement>(null);

  // Scroll-spy
  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (top) setActive(top.target.id);
      },
      { rootMargin: "-150px 0px -55% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [sections]);

  // Keep the active pill visible in the horizontally scrolling bar.
  useEffect(() => {
    const bar = barRef.current;
    const pill = bar?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!bar || !pill) return;
    bar.scrollTo({
      left: pill.offsetLeft - bar.clientWidth / 2 + pill.clientWidth / 2,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <div className="sticky top-[66px] z-40 border-b border-line bg-cream/95 backdrop-blur lg:top-[74px]">
      <div className="wrap">
        <div
          ref={barRef}
          role="navigation"
          aria-label="Menu categories"
          className="no-scrollbar flex gap-2 overflow-x-auto py-3"
        >
          {sections.map((s) => {
            const on = s.id === active;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                data-id={s.id}
                onClick={() => setActive(s.id)}
                aria-current={on ? "true" : undefined}
                className={`inline-flex min-h-[44px] shrink-0 items-center rounded-full border px-5 text-[0.9rem] font-medium transition ${
                  on
                    ? "border-cocoa bg-cocoa text-cream"
                    : "border-line bg-paper text-cocoa/75 hover:border-cocoa/40"
                }`}
              >
                {s.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
