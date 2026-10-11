import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bike, Clock, Leaf, Phone, Star } from "lucide-react";
import { delivery, img, site, waLink } from "@/lib/site";
import HeroCarousel from "./HeroCarousel";
import WhatsAppIcon from "./WhatsAppIcon";

const stack = [
  { src: img("hero-main") },
  { src: img("p-croissant") },
  { src: img("p-truffle-cake") },
];

/** Phones and small tablets: a photo carousel with the message laid over the image. */
function MobileHero() {
  return (
    <section className="lg:hidden">
      <div className="relative h-[calc(100svh-6.5rem)] min-h-[33rem] max-h-[44rem] overflow-hidden rounded-b-[2rem] bg-cocoa">
        <HeroCarousel />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 px-5 pb-9 text-cream sm:px-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-3.5 py-1.5 text-[0.8rem] font-medium backdrop-blur-sm">
            <Star className="size-3.5 fill-marigold text-marigold" aria-hidden />
            4.8 <span className="text-cream/60">&middot;</span> 1,100+ Google reviews
          </p>

          <h1 className="text-balance mt-4 text-[2.5rem] font-medium leading-[1.05] !text-cream sm:text-6xl">
            Fresh bread,{" "}
            <em className="font-normal text-marigold">baked daily</em> in Panaji.
          </h1>

          <p className="mt-3 max-w-sm text-base leading-relaxed text-cream/80">
            Pão, sourdough, croissants and eggless cakes.
          </p>

          <div className="pointer-events-auto mt-6 grid grid-cols-2 gap-3 sm:max-w-md">
            <Link
              href="/menu"
              className="btn h-[3.1rem] bg-cream !px-4 text-cocoa hover:bg-marigold"
            >
              View menu
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href={waLink("Hi Humble Crumble! I'd like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa h-[3.1rem] !px-4"
            >
              <WhatsAppIcon className="size-[1.1rem]" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Info strip */}
      <dl className="wrap grid grid-cols-3 gap-3 py-6 text-center">
        <div>
          <dt className="mx-auto grid size-9 place-items-center rounded-full bg-butter text-terracotta">
            <Clock className="size-4" aria-hidden />
          </dt>
          <dd className="mt-2 text-[0.8rem] font-semibold leading-tight">Open daily</dd>
          <dd className="text-xs text-muted">8 am to 10 pm</dd>
        </div>
        <div>
          <dt className="mx-auto grid size-9 place-items-center rounded-full bg-butter text-terracotta">
            <Leaf className="size-4" aria-hidden />
          </dt>
          <dd className="mt-2 text-[0.8rem] font-semibold leading-tight">Eggless</dd>
          <dd className="text-xs text-muted">on request</dd>
        </div>
        <div>
          <dt className="mx-auto grid size-9 place-items-center rounded-full bg-butter text-terracotta">
            <Bike className="size-4" aria-hidden />
          </dt>
          <dd className="mt-2 text-[0.8rem] font-semibold leading-tight">Delivery on</dd>
          <dd className="text-xs">
            {delivery.map((d, i) => (
              <span key={d.name}>
                {i > 0 && <span className="text-muted"> &amp; </span>}
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline-offset-2 hover:underline"
                  style={{ color: d.colour }}
                >
                  {d.name}
                </a>
              </span>
            ))}
          </dd>
        </div>
      </dl>
    </section>
  );
}

/** Laptops and desktops: text on the left, a photo mosaic on the right. */
function DesktopHero() {
  return (
    <section className="relative hidden overflow-hidden bg-butter/45 lg:block">
      {/* Both columns share one row height, so the text and the photos line up. */}
      <div className="wrap grid gap-14 pb-24 pt-14 lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col justify-center">
          <h1 className="text-balance text-[4.3rem] font-medium leading-[1.05]">
            Fresh bread, <em className="font-normal text-terracotta">baked daily</em> in Panaji.
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-cocoa/75">
            Pão, sourdough, croissants and eggless cakes.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href={waLink("Hi Humble Crumble! I'd like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa h-[3.25rem] shadow-soft"
            >
              <WhatsAppIcon />
              Order on WhatsApp
            </a>
            <a href={site.phoneHref} className="btn btn-outline h-[3.25rem]">
              <Phone className="size-[1.1rem]" aria-hidden />
              Call the shop
            </a>
          </div>

          <p className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-sm text-cocoa/65">
            Also on
            {delivery.map((d) => (
              <a
                key={d.name}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-paper px-3 py-1 text-[0.8rem] font-semibold ring-1 ring-line transition hover:ring-cocoa/40"
                style={{ color: d.colour }}
              >
                {d.name}
              </a>
            ))}
          </p>
        </div>

        {/* Photo mosaic: fills the full height of the row */}
        <div className="relative min-h-[480px]">
          <div className="absolute inset-0 grid grid-cols-[1.35fr_1fr] grid-rows-2 gap-4">
            <div className="relative row-span-2 overflow-hidden rounded-[1.75rem] bg-butter shadow-lift">
              <Image
                src={img("hero-main")}
                alt="Sourdough loaves dusted with flour next to a stalk of wheat"
                fill
                priority
                sizes="300px"
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-[1.75rem] bg-butter shadow-soft">
              <Image
                src={img("p-croissant")}
                alt="Golden butter croissants"
                fill
                priority
                sizes="240px"
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-[1.75rem] bg-butter shadow-soft">
              <Image
                src={img("p-truffle-cake")}
                alt="Chocolate truffle cake with piped rosettes"
                fill
                priority
                sizes="240px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 left-6 flex items-center gap-3.5 rounded-2xl bg-paper p-3 pr-5 shadow-lift">
            <span className="flex -space-x-3" aria-hidden>
              {stack.map((s) => (
                <span
                  key={s.src}
                  className="relative size-10 overflow-hidden rounded-full border-2 border-paper bg-butter"
                >
                  <Image src={s.src} alt="" fill sizes="40px" className="object-cover" />
                </span>
              ))}
            </span>
            <p className="leading-tight">
              <span className="block text-sm font-semibold">Baked fresh every day</span>
              <span className="text-xs text-muted">Open 8 am to 10 pm</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <div id="top">
      <MobileHero />
      <DesktopHero />
    </div>
  );
}
