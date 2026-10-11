"use client";
import { formatTime, hours } from "@/lib/site";
import { useOpenStatus } from "@/lib/useOpenStatus";

/** Opening hours with today highlighted and a live open/closed badge. */
export default function HoursTable() {
  const { ready, today, isOpen } = useOpenStatus();

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <h3 className="whitespace-nowrap text-[1.35rem] sm:text-2xl">Opening hours</h3>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-wider transition-opacity ${
            ready ? "opacity-100" : "opacity-0"
          } ${isOpen ? "bg-pista text-pistadeep" : "bg-blush text-terracotta"}`}
        >
          <span
            className={`size-2 rounded-full ${isOpen ? "bg-pistadeep" : "bg-terracotta"}`}
            aria-hidden
          />
          {isOpen ? "Open now" : "Closed now"}
        </span>
      </div>

      <dl className="mt-4 divide-y divide-line">
        {[1, 2, 3, 4, 5, 6, 0].map((d) => {
          const h = hours[d];
          const isToday = d === today;
          return (
            <div
              key={h.day}
              className={`flex items-center justify-between py-3 text-[0.95rem] ${
                isToday ? "font-semibold text-cocoa" : "text-muted"
              }`}
            >
              <dt>
                {h.day}
                {isToday && <span className="ml-2 text-xs font-medium text-terracotta">Today</span>}
              </dt>
              <dd className="tabular-nums">
                {formatTime(h.open)} to {formatTime(h.close)}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
