import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { delivery, formatTime, hours, nav, site } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  const weekday = hours[1];
  const weekend = hours[0];

  return (
    <footer className="rounded-t-[2rem] bg-cocoa text-cream sm:rounded-t-[3rem]">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:py-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo light />
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-cream/70">
            A small neighbourhood bakery in Panaji, Goa, baking bread, pastries and cakes since{" "}
            {site.founded}.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex min-h-[44px] items-center gap-2.5 rounded-full bg-cream/10 px-4 text-sm font-semibold transition hover:bg-marigold hover:text-cocoa"
            >
              <Instagram className="size-[1.1rem]" aria-hidden />
              {site.instagram}
            </a>
            {delivery.map((d) => (
              <a
                key={d.name}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center rounded-full bg-cream/10 px-4 text-sm font-semibold transition hover:bg-marigold hover:text-cocoa"
              >
                {d.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="!font-sans text-xs font-semibold uppercase tracking-[0.16em] !text-marigold">
            Explore
          </h3>
          <ul className="mt-4 space-y-0.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="inline-block py-1.5 text-cream/80 hover:text-marigold">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="!font-sans text-xs font-semibold uppercase tracking-[0.16em] !text-marigold">
            Hours
          </h3>
          <dl className="mt-4 space-y-2.5 text-[0.95rem] text-cream/80">
            <div>
              <dt className="text-cream/50">Mon to Fri</dt>
              <dd>
                {formatTime(weekday.open)} to {formatTime(weekday.close)}
              </dd>
            </div>
            <div>
              <dt className="text-cream/50">Sat and Sun</dt>
              <dd>
                {formatTime(weekend.open)} to {formatTime(weekend.close)}
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <h3 className="!font-sans text-xs font-semibold uppercase tracking-[0.16em] !text-marigold">
            Reach us
          </h3>
          <ul className="mt-4 space-y-3.5 text-[0.95rem] text-cream/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-[1.1rem] shrink-0 text-marigold" aria-hidden />
              <span>
                {site.address[0]}
                <br />
                {site.address[1]}
              </span>
            </li>
            <li>
              <a href={site.phoneHref} className="flex gap-3 hover:text-marigold">
                <Phone className="mt-0.5 size-[1.1rem] shrink-0 text-marigold" aria-hidden />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex gap-3 break-all hover:text-marigold">
                <Mail className="mt-0.5 size-[1.1rem] shrink-0 text-marigold" aria-hidden />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 pb-24 md:pb-0">
        <div className="wrap flex flex-col gap-1.5 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. FSSAI Lic. No. {site.fssai}
          </p>
          <p>Design concept for client review. Sample content and stock photos.</p>
        </div>
      </div>
    </footer>
  );
}
