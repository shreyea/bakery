import { ArrowUpRight, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { delivery, site, waLink } from "@/lib/site";
import HoursTable from "./HoursTable";
import SectionHead from "./SectionHead";
import WhatsAppIcon from "./WhatsAppIcon";

/** Hand-drawn style neighbourhood map, so the mock-up needs no third-party embed. */
function MapSketch() {
  return (
    <svg
      viewBox="0 0 600 340"
      className="absolute inset-0 block size-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Sketch map: the bakery is on Rua de Ourém in Fontainhas, Panaji"
    >
      <rect width="600" height="340" fill="#F3E7C9" />
      <rect x="40" y="30" width="120" height="80" rx="10" fill="#DCE5C6" />
      <rect x="430" y="200" width="130" height="70" rx="10" fill="#DCE5C6" />
      <path
        d="M0 300 C120 270 220 320 340 296 S520 270 600 292 V340 H0 Z"
        fill="#CFE2E4"
      />
      <g stroke="#FFFBF1" strokeWidth="18" strokeLinecap="round" fill="none">
        <path d="M0 150 H600" />
        <path d="M150 0 V340" />
        <path d="M300 0 V340" />
        <path d="M450 0 V340" />
        <path d="M0 60 L600 100" opacity=".7" />
      </g>
      <g stroke="#E3D1A5" strokeWidth="2" strokeDasharray="7 8" fill="none">
        <path d="M0 150 H600" />
        <path d="M300 0 V340" />
      </g>
      <g fontFamily="var(--font-sans)" fontSize="13" fontWeight="600" letterSpacing="1" fill="#8C7560">
        <text x="312" y="36">RUA DE OURÉM</text>
        <text x="24" y="138">18TH JUNE ROAD</text>
        <text x="50" y="74">GARDEN</text>
        <text x="448" y="238">CHURCH SQ.</text>
        <text x="236" y="326" fill="#6E9AA0">MANDOVI RIVER</text>
      </g>
      <g transform="translate(300 150)">
        <path
          d="M0 -44 C-19 -44 -30 -30 -30 -15 C-30 7 0 36 0 36 C0 36 30 7 30 -15 C30 -30 19 -44 0 -44Z"
          fill="#A8472B"
        />
        <circle cy="-15" r="11" fill="#FFFBF1" />
      </g>
    </svg>
  );
}

export default function Visit() {
  return (
    <section id="visit" className="section bg-butter/45">
      <div className="wrap">
        <SectionHead
          kicker="Find us"
          title="Come by, the kettle's on"
          text="We're in the heart of Fontainhas, a short walk from the Panjim church square. Parking is easy on weekday mornings."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col overflow-hidden rounded-3xl border border-line bg-[#F3E7C9]">
            <div className="relative min-h-[14rem] flex-1 sm:min-h-[19rem]">
              <MapSketch />
            </div>
            <div className="flex flex-col gap-4 bg-paper p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <p className="flex gap-3 leading-snug">
                <MapPin className="mt-0.5 size-5 shrink-0 text-terracotta" aria-hidden />
                <span>
                  <span className="block font-semibold">{site.address[0]}</span>
                  <span className="text-muted">{site.address[1]}</span>
                </span>
              </p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark !min-h-[44px] shrink-0"
              >
                <Navigation className="size-4" aria-hidden />
                Get directions
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-line bg-paper p-6 sm:p-8">
              <HoursTable />
            </div>

            {/* Delivery partners */}
            <div className="rounded-3xl bg-cocoa p-6 text-cream sm:p-8">
              <p className="kicker !text-marigold">Delivery</p>
              <h3 className="mt-2 text-2xl !text-cream">Prefer it at your door?</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                We&apos;re also on Zomato and Swiggy, delivered fresh from our Panaji
                kitchen.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {delivery.map((d) => (
                  <a
                    key={d.name}
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-2xl bg-paper px-5 py-4 text-cocoa transition hover:bg-butter"
                  >
                    <span
                      className="font-display text-2xl font-semibold italic lowercase"
                      style={{ color: d.colour }}
                    >
                      {d.name}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-cocoa/70">
                      Order
                      <ArrowUpRight
                        className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={waLink("Hi Humble Crumble! I have a question.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
              >
                <WhatsAppIcon />
                WhatsApp us
              </a>
              <a href={site.phoneHref} className="btn btn-outline">
                <Phone className="size-[1.1rem]" aria-hidden />
                {site.phoneDisplay}
              </a>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 text-sm font-semibold text-muted hover:text-terracotta"
            >
              <Mail className="size-4" aria-hidden />
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
