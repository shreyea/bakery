"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { site, waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

/**
 * Always-available contact shortcuts.
 * Phones: a floating Call / WhatsApp pill. On the home page it stays out of the way
 * while the hero (which has its own buttons) is on screen, then slides in.
 * Larger screens: a floating WhatsApp button.
 */
export default function ContactDock() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const href = waLink("Hi Humble Crumble! I have a question.");

  useEffect(() => {
    const update = () => {
      const hasHero = !!document.getElementById("top");
      setVisible(!hasHero || window.scrollY > window.innerHeight * 0.55);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return (
    <>
      <div
        className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.9rem,env(safe-area-inset-bottom))] transition duration-300 md:hidden ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[22rem] gap-1.5 rounded-full bg-paper/95 p-1.5 shadow-lift ring-1 ring-cocoa/10 backdrop-blur ${
            visible ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <a
            href={site.phoneHref}
            tabIndex={visible ? 0 : -1}
            className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-cocoa text-[0.95rem] font-semibold text-cream transition active:scale-[0.97]"
          >
            <Phone className="size-[1.05rem]" aria-hidden />
            Call
          </a>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={visible ? 0 : -1}
            className="inline-flex h-12 flex-[1.4] items-center justify-center gap-2 rounded-full bg-wa text-[0.95rem] font-semibold text-white transition active:scale-[0.97]"
          >
            <WhatsAppIcon className="size-[1.15rem]" />
            WhatsApp
          </a>
        </div>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden size-14 place-items-center rounded-full bg-wa text-white shadow-lift transition hover:scale-105 hover:bg-wa-dark md:grid"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  );
}
