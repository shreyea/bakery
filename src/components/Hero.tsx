import Image from "next/image";
import { Phone, Star } from "lucide-react";
import { delivery, img, site, waLink, yearsBaking } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

const stack = [
  { src: img("hero-main"), alt: "Sourdough loaf" },
  { src: img("p-croissant"), alt: "Butter croissants" },
  { src: img("p-truffle-cake"), alt: "Chocolate truffle cake" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-butter/45">
      {/* Both columns share one row height, so the text block and the photos line up top and bottom. */}
      <div className="wrap grid gap-14 pb-20 pt-9 sm:pt-12 lg:grid-cols-2 lg:items-stretch lg:gap-14 lg:pb-24 lg:pt-14">
        {/* Words */}
        <div className="flex flex-col justify-center">
          <h1 className="text-balance text-[2.75rem] font-medium leading-[1.04] sm:text-6xl lg:text-[4.3rem]">
            Fresh bread every morning,{" "}
            <em className="font-normal text-terracotta">cakes for every birthday.</em>
          </h1>

          <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-cocoa/75 sm:text-lg">
            A neighbourhood bakery in Panaji, Goa. Pão, sourdough, butter croissants,
            eggless cakes and cookies you&apos;ll finish before you reach home.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Hi Humble Crumble! I'd like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa shadow-soft"
            >
              <WhatsAppIcon />
              Order on WhatsApp
            </a>
            <a href={site.phoneHref} className="btn btn-outline hidden sm:inline-flex">
              <Phone className="size-[1.1rem]" aria-hidden />
              Call the shop
            </a>
          </div>

          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-cocoa/70">
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

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-cocoa/10 pt-6">
            <div>
              <dt className="sr-only">Google rating</dt>
              <dd className="flex items-center gap-1 font-display text-2xl">
                4.8 <Star className="size-4 fill-marigold text-marigold" aria-hidden />
              </dd>
              <p className="mt-0.5 text-xs text-cocoa/65">1,100+ reviews</p>
            </div>
            <div>
              <dt className="sr-only">Years baking</dt>
              <dd className="font-display text-2xl">{yearsBaking}+</dd>
              <p className="mt-0.5 text-xs text-cocoa/65">Years in Panaji</p>
            </div>
            <div>
              <dt className="sr-only">Dietary</dt>
              <dd className="font-display text-2xl">100%</dd>
              <p className="mt-0.5 text-xs text-cocoa/65">Vegetarian</p>
            </div>
          </dl>
        </div>

        {/* Photo mosaic: fills the full height of the row on desktop */}
        <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none lg:min-h-[540px]">
          <div className="grid grid-cols-[1.35fr_1fr] gap-3 sm:gap-4 lg:absolute lg:inset-0 lg:grid-rows-2">
            <div className="relative row-span-2 min-h-[18rem] overflow-hidden rounded-[1.75rem] bg-butter shadow-lift">
              <Image
                src={img("hero-main")}
                alt="Sourdough loaves dusted with flour next to a stalk of wheat"
                fill
                priority
                sizes="(min-width:1024px) 300px, 55vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[1.75rem] bg-butter shadow-soft lg:aspect-auto">
              <Image
                src={img("p-croissant")}
                alt="Golden butter croissants"
                fill
                priority
                sizes="(min-width:1024px) 240px, 40vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[1.75rem] bg-butter shadow-soft lg:aspect-auto">
              <Image
                src={img("p-truffle-cake")}
                alt="Chocolate truffle cake with piped rosettes"
                fill
                priority
                sizes="(min-width:1024px) 240px, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-5 left-3 flex items-center gap-3.5 rounded-2xl bg-paper p-3 pr-5 shadow-lift sm:left-6 lg:-bottom-6">
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
              <span className="text-xs text-muted">Pão, croissants, cakes and more</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
