import Image from "next/image";
import { img, site } from "@/lib/site";

export default function Story() {
  return (
    <section id="story" className="section bg-paper">
      <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto w-full max-w-[460px] pb-8 lg:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-butter">
            <Image
              src={img("story-main")}
              alt="A tray of golden croissants fresh from the oven"
              fill
              loading="lazy"
              sizes="(min-width:1024px) 460px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-[-0.5rem] w-[38%] overflow-hidden rounded-2xl border-[5px] border-paper shadow-soft sm:right-[-1.5rem]">
            <div className="relative aspect-square bg-butter">
              <Image
                src={img("story-small")}
                alt="Slices of freshly baked sourdough"
                fill
                loading="lazy"
                sizes="180px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="kicker">Our story</p>
          <h2 className="text-balance mt-3 text-[2.1rem] leading-[1.1] sm:text-[2.8rem]">
            It started with one borrowed oven
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-cocoa/80 sm:text-[1.05rem]">
            <p>
              In {site.founded}, Reena Fernandes began baking sourdough and pão in her
              family home in Fontainhas, with a second-hand oven and a lot of patience.
              Neighbours told neighbours, and within a few months she was selling out every
              Sunday morning.
            </p>
            <p>
              Her brother Joel left his hotel job to help, and in 2016 they opened a small
              shop on Rua de Ourém. We still bake in small batches with the same recipes,
              and there is still a queue for the 8 am bread on Saturdays.
            </p>
          </div>

          <p className="mt-6 font-display text-lg italic text-cocoa">
            Reena &amp; Joel
          </p>
        </div>
      </div>
    </section>
  );
}
