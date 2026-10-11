import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, IndianRupee, Phone } from "lucide-react";
import MenuItemRow from "@/components/MenuItemRow";
import MenuNav from "@/components/MenuNav";
import VegMark from "@/components/VegMark";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  categoryBlurbs,
  categoryImages,
  extraMenu,
  products,
  rupees,
  site,
  waLink,
  type Category,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu | Humble Crumble, Panaji",
  description:
    "The full Humble Crumble menu: breads, pastries, eggless cakes, cookies, Goan favourites, savoury bakes and café drinks.",
};

const photoCategories = Object.keys(categoryImages) as Category[];

const slug = (s: string) => s.toLowerCase().replace(/[^a-z]+/g, "-").replace(/(^-|-$)/g, "");

const sections = [
  ...photoCategories.map((c) => ({ id: slug(c), label: c })),
  ...extraMenu.map((s) => ({ id: s.id, label: s.title })),
];

function SectionHeader({
  index,
  title,
  blurb,
}: {
  index: number;
  title: string;
  blurb: string;
}) {
  return (
    <header className="flex flex-col gap-3 border-b border-cocoa/15 pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
      <div className="flex items-baseline gap-4">
        <span className="font-display text-lg text-terracotta">{String(index).padStart(2, "0")}</span>
        <h2 className="text-[2rem] leading-none sm:text-5xl">{title}</h2>
      </div>
      <p className="max-w-sm text-sm leading-relaxed text-muted sm:text-right">{blurb}</p>
    </header>
  );
}

export default function MenuPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-butter/45">
        <div className="wrap grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16 lg:py-24">
          <div>
            <Link
              href="/"
              className="mb-6 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-paper px-4 text-sm font-semibold ring-1 ring-line transition hover:bg-cocoa hover:text-cream"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Back to home
            </Link>
            <p className="kicker">Our menu</p>
            <h1 className="mt-4 text-[3rem] font-medium leading-[1.02] sm:text-6xl lg:text-[4.8rem]">
              Everything <em className="font-normal text-terracotta">we bake</em>
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-cocoa/75">
              Morning bread, evening cakes, a few Goan favourites and something hot to drink.
            </p>
          </div>

          <ul className="space-y-4 rounded-3xl bg-paper p-6 shadow-soft ring-1 ring-line sm:p-8">
            {[
              { icon: <VegMark />, text: "Everything is vegetarian. Cakes can be made eggless." },
              { icon: <IndianRupee className="size-4 text-terracotta" aria-hidden />, text: "Prices in rupees, as of today." },
              { icon: <Clock className="size-4 text-terracotta" aria-hidden />, text: "Open daily, 8 am to 10 pm." },
              { icon: <WhatsAppIcon className="size-4 text-wa" />, text: "Tap the green icon to check an item on WhatsApp." },
            ].map((r) => (
              <li key={r.text} className="flex items-start gap-3 text-[0.95rem]">
                <span className="mt-1 grid size-5 shrink-0 place-items-center">{r.icon}</span>
                {r.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <MenuNav sections={sections} />

      {/* Photo categories */}
      {photoCategories.map((c, i) => {
        const items = products.filter((p) => p.category === c);
        return (
          <section
            key={c}
            id={slug(c)}
            className={`!scroll-mt-32 py-14 sm:py-20 lg:!scroll-mt-36 ${i % 2 === 0 ? "bg-cream" : "bg-paper"}`}
          >
            <div className="wrap">
              <SectionHeader index={i + 1} title={c} blurb={categoryBlurbs[c]} />
              <div className="mt-8 grid gap-4 lg:grid-cols-2 lg:gap-5">
                {items.map((p) => (
                  <MenuItemRow key={p.id} p={p} />
                ))}
              </div>

              {c === "Cakes" && (
                <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-3xl bg-cocoa p-6 text-cream sm:flex-row sm:items-center sm:p-8">
                  <div>
                    <h3 className="text-2xl !text-cream">Want something made just for you?</h3>
                    <p className="mt-1 text-sm text-cream/70">
                      Tell us the occasion, size and flavour and we&apos;ll confirm on WhatsApp.
                    </p>
                  </div>
                  <Link href="/#cakes" className="btn bg-marigold text-cocoa hover:bg-butter">
                    Plan a custom cake
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Text-only sections, laid out like a printed menu */}
      {extraMenu.map((s, i) => {
        const n = photoCategories.length + i + 1;
        const tint = n % 2 === 1 ? "bg-cream" : "bg-paper";
        return (
          <section
            key={s.id}
            id={s.id}
            className={`!scroll-mt-32 py-14 sm:py-20 lg:!scroll-mt-36 ${tint}`}
          >
            <div className="wrap">
              <SectionHeader index={n} title={s.title} blurb={s.blurb} />
              <ul className="mt-8 grid gap-x-14 rounded-3xl bg-paper p-6 shadow-soft ring-1 ring-line sm:p-10 md:grid-cols-2">
                {s.items.map((it) => (
                  <li key={it.name} className="border-b border-line py-4 last:border-b-0">
                    <div className="flex items-end gap-3">
                      <VegMark className="mb-[7px]" />
                      <h3 className="text-lg leading-tight sm:text-xl">{it.name}</h3>
                      <span
                        aria-hidden
                        className="mb-1.5 min-w-4 flex-1 border-b-2 border-dotted border-cocoa/25"
                      />
                      <p className="whitespace-nowrap font-display text-xl text-terracotta">
                        {rupees(it.price)}
                        {it.unit && (
                          <span className="ml-1 font-sans text-xs font-medium text-muted">{it.unit}</span>
                        )}
                      </p>
                    </div>
                    {it.desc && (
                      <p className="mt-1.5 pl-[27px] text-sm leading-relaxed text-muted">{it.desc}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      {/* Closing call to action */}
      <section className="bg-cream pb-16 pt-4 sm:pb-24">
        <div className="wrap">
          <div className="rounded-[2rem] bg-terracotta p-8 text-center text-cream sm:p-14">
            <h2 className="mx-auto max-w-xl text-balance text-3xl !text-cream sm:text-5xl">
              Can&apos;t see what you&apos;re after?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-cream/80">
              Message us. We take special requests, gift boxes and bulk orders.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={waLink("Hi Humble Crumble! I have a special request.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa h-[3.25rem]"
              >
                <WhatsAppIcon />
                Message us on WhatsApp
              </a>
              <a href={site.phoneHref} className="btn btn-outline-light hidden h-[3.25rem] sm:inline-flex">
                <Phone className="size-[1.1rem]" aria-hidden />
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          <p className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-cocoa underline underline-offset-4 hover:text-terracotta"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Back to home
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
