import Image from "next/image";
import { Instagram } from "lucide-react";
import { gallery, site } from "@/lib/site";
import SectionHead from "./SectionHead";

export default function Gallery() {
  return (
    <section className="section bg-cream">
      <div className="wrap">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHead kicker="Around the shop" title="A few things from this week" />
          <a
            href="#"
            className="inline-flex min-h-[44px] items-center gap-2 self-start rounded-full border border-cocoa/30 px-5 text-sm font-semibold transition hover:bg-cocoa hover:text-cream sm:mb-2 sm:self-auto"
          >
            <Instagram className="size-4" aria-hidden />
            {site.instagram}
          </a>
        </div>

        {/* One large tile plus four small ones */}
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <li
              key={g.src}
              className={`relative aspect-square overflow-hidden rounded-3xl bg-butter ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                loading="lazy"
                sizes={i === 0 ? "(min-width:1024px) 580px, 100vw" : "(min-width:1024px) 280px, 50vw"}
                className="object-cover transition duration-500 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
