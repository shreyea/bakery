import Image from "next/image";
import { Phone } from "lucide-react";
import { img, site } from "@/lib/site";
import CakePlanner from "./CakePlanner";
import SectionHead from "./SectionHead";

export default function CakeStudio() {
  return (
    <section id="cakes" className="section rounded-t-[2rem] bg-cocoa text-cream sm:rounded-t-[3rem]">
      {/* Mobile order: words, form, photo. Desktop: words + photo left, form right. */}
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-x-16 lg:gap-y-10">
        <div>
          <SectionHead
            tone="light"
            kicker="Custom cakes"
            title="Tell us the occasion, we'll take care of the cake"
            text="Birthdays, anniversaries, a surprise for the office. Share a few details and a reference photo if you have one, and we'll confirm the design and price on WhatsApp, usually within the hour."
          />

          <ul className="mt-8 space-y-3 text-[0.98rem] text-cream/85">
            {[
              "Eggless on request, same price",
              "Names and messages are free",
              "Order 2 days ahead (4 to 5 for tiered cakes)",
              "50% advance on UPI, rest on collection",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-marigold" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <div className="lg:sticky lg:top-24">
            <CakePlanner />
            <p className="mt-5 text-center text-sm text-cream/70">
              Prefer to talk it through?{" "}
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-1.5 font-semibold text-marigold underline underline-offset-4"
              >
                <Phone className="size-3.5" aria-hidden />
                {site.phoneDisplay}
              </a>
            </p>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-[78%] max-w-[340px] overflow-hidden rounded-[1.75rem] bg-cocoa-soft lg:col-start-1 lg:mx-0">
          <Image
            src={img("cake-studio")}
            alt="Ombre chocolate cake with white piped rosettes on a stand"
            fill
            loading="lazy"
            sizes="340px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
