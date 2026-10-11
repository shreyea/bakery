"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { nav, site, waLink } from "@/lib/site";
import { useLockBody } from "@/lib/useLockBody";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // On inner pages, put a "Home" link first so there's always an obvious way back.
  const links = pathname === "/" ? nav : [{ label: "Home", href: "/" }, ...nav];

  useLockBody(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="bg-cocoa text-cream">
        <p className="wrap py-2 text-center text-[0.78rem] font-medium">
          Open daily, 8 am to 10 pm
          <span className="hidden sm:inline">
            {" "}
            &nbsp;·&nbsp; Also on Zomato &amp; Swiggy &nbsp;·&nbsp; Cakes need 2 days&apos; notice
          </span>
        </p>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-shadow duration-300 ${
          scrolled ? "border-line bg-cream/95 shadow-soft backdrop-blur" : "border-transparent bg-cream"
        }`}
      >
        <div className="wrap flex h-[66px] items-center justify-between gap-4 lg:h-[74px]">
          <Link href="/" aria-label={`${site.name}, home`} className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {links.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="rounded-full px-4 py-2.5 text-[0.93rem] font-semibold text-cocoa/75 transition hover:bg-butter hover:text-cocoa"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-cocoa hover:text-terracotta xl:flex"
            >
              <Phone className="size-4" aria-hidden />
              {site.phoneDisplay}
            </a>
            <a
              href={waLink("Hi Humble Crumble! I have a question.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa hidden !min-h-[44px] lg:inline-flex"
            >
              <WhatsAppIcon className="size-[1.15rem]" />
              WhatsApp us
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid size-11 place-items-center rounded-full bg-cocoa text-cream lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-cream lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="wrap flex h-[66px] shrink-0 items-center justify-between">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-11 place-items-center rounded-full bg-cocoa text-cream"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="wrap flex flex-1 flex-col justify-center overflow-y-auto py-4" aria-label="Mobile">
            <ul>
              {links.map((n) => (
                <li key={n.href} className="border-b border-line">
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-display text-[2rem] leading-none"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="wrap shrink-0 space-y-3 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-2">
            <a
              href={waLink("Hi Humble Crumble! I have a question.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa w-full"
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
            <a href={site.phoneHref} className="btn btn-outline w-full">
              <Phone className="size-[1.1rem]" aria-hidden />
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
