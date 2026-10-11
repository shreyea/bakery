"use client";
import { useEffect, useState } from "react";
import { hours } from "./site";

/**
 * Live open/closed state for the shop, based on the visitor's clock.
 * `ready` is false until the first client render so server and client markup match.
 */
export function useOpenStatus() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  const today = now?.getDay() ?? -1;
  const hr = now ? now.getHours() + now.getMinutes() / 60 : 0;
  const slot = today >= 0 ? hours[today] : null;
  const isOpen = !!slot && hr >= slot.open && hr < slot.close;

  return { ready: now !== null, today, isOpen, slot, hr };
}
