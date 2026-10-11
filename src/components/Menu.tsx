"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  categoryImages,
  featuredIds,
  productMessage,
  products,
  rupees,
  waLink,
  type Category,
  type Product,
} from "@/lib/site";
import { tagStyle } from "@/lib/tagStyle";
import SectionHead from "./SectionHead";
import VegMark from "./VegMark";
import WhatsAppIcon from "./WhatsAppIcon";

const categoryList = Object.keys(categoryImages) as Category[];

function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-paper shadow-soft ring-1 ring-line/80 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-square overflow-hidden bg-butter">
        <Image
          src={p.image}
          alt={p.alt}
          fill
          loading="lazy"
          sizes="(min-width:1024px) 280px, (min-width:640px) 33vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {p.tag && (
          <span
            className={`absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-wider ${tagStyle[p.tag]}`}
          >
            {p.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3.5 sm:p-5">
        <div className="flex items-start gap-2">
          <VegMark className="mt-[5px]" />
          <h3 className="text-[1.02rem] font-medium leading-snug sm:text-lg">{p.name}</h3>
        </div>
        <p className="mt-2 line-clamp-4 text-[0.82rem] leading-relaxed text-muted sm:text-sm">
          {p.desc}
        </p>

        <div className="mt-auto pt-4">
          <p className="font-display text-xl text-terracotta">
            {rupees(p.price)}
            {p.unit && (
              <span className="ml-1 font-sans text-xs font-medium text-muted">{p.unit}</span>
            )}
          </p>
          <a
            href={waLink(productMessage(p))}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-wa/40 px-3 text-[0.82rem] font-semibold text-wa transition hover:bg-wa hover:text-white sm:text-sm"
          >
            <WhatsAppIcon className="size-4" />
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Menu() {
  const [active, setActive] = useState<Category | null>(null);
  const [showAll, setShowAll] = useState(false);

  const featured = featuredIds.map((id) => products.find((p) => p.id === id)!);
  const rest = products.filter((p) => !featuredIds.includes(p.id));
  const everything = [...featured, ...rest];

  const filtered = active ? products.filter((p) => p.category === active) : everything;
  const collapsed = !active && !showAll;
  const list = collapsed ? featured : filtered;

  return (
    <section id="menu" className="section bg-cream">
      <div className="wrap">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <SectionHead
            kicker="The menu"
            title="What's on the counter today"
            text="Pick a category, or scroll through our favourites. Message us before you come to check what's fresh, or to keep something aside."
          />
          <Link href="/menu" className="btn btn-dark shrink-0 self-start lg:mb-2 lg:self-auto">
            Full menu
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        {/* Category tiles double as filters */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {categoryList.map((c) => {
            const on = active === c;
            const count = products.filter((p) => p.category === c).length;
            return (
              <button
                key={c}
                onClick={() => setActive(on ? null : c)}
                aria-pressed={on}
                className={`group relative aspect-[5/4] overflow-hidden rounded-3xl text-left outline-offset-4 transition duration-300 ${
                  on ? "ring-4 ring-terracotta ring-offset-2 ring-offset-cream" : ""
                }`}
              >
                <Image
                  src={categoryImages[c]}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(min-width:1024px) 280px, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-cocoa/90 via-cocoa/40 to-cocoa/5"
                />
                <span className="absolute inset-x-4 bottom-3.5 text-cream">
                  <span className="block font-display text-xl leading-tight sm:text-2xl">{c}</span>
                  <span className="text-xs text-cream/75">{count} items</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex min-h-[44px] items-center justify-between gap-4">
          <p className="font-display text-xl sm:text-2xl">
            {active ? active : "Our favourites"}
          </p>
          {active && (
            <button
              onClick={() => setActive(null)}
              className="text-sm font-semibold text-terracotta underline underline-offset-4"
            >
              Clear filter
            </button>
          )}
        </div>

        <div
          key={active ?? "all"}
          className="mt-4 grid animate-fade-up grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
        >
          {list.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>

        {collapsed && (
          <div className="mt-10 text-center">
            <button onClick={() => setShowAll(true)} className="btn btn-outline">
              See all {everything.length} items
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
