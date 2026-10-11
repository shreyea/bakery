import Image from "next/image";
import { productMessage, rupees, waLink, type Product } from "@/lib/site";
import { tagStyle } from "@/lib/tagStyle";
import VegMark from "./VegMark";
import WhatsAppIcon from "./WhatsAppIcon";

/** One menu item as a horizontal card: photo, details, price and a WhatsApp shortcut. */
export default function MenuItemRow({ p }: { p: Product }) {
  return (
    <article className="flex gap-4 rounded-3xl bg-paper p-3 shadow-soft ring-1 ring-line/80 sm:gap-5 sm:p-4">
      <div className="relative size-[6.5rem] shrink-0 overflow-hidden rounded-2xl bg-butter sm:size-36">
        <Image
          src={p.image}
          alt={p.alt}
          fill
          loading="lazy"
          sizes="(min-width:640px) 144px, 104px"
          className="object-cover"
        />
        {p.tag && (
          <span
            className={`absolute left-1.5 top-1.5 rounded-full px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-wider ${tagStyle[p.tag]}`}
          >
            {p.tag}
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col py-0.5">
        <div className="flex items-start gap-2">
          <VegMark className="mt-[6px]" />
          <h3 className="text-[1.05rem] font-medium leading-snug sm:text-xl">{p.name}</h3>
        </div>
        <p className="mt-1.5 line-clamp-3 text-[0.85rem] leading-relaxed text-muted">{p.desc}</p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
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
            aria-label={`Ask about ${p.name} on WhatsApp`}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-wa/40 text-wa transition hover:bg-wa hover:text-white"
          >
            <WhatsAppIcon className="size-5" />
          </a>
        </div>
      </div>
    </article>
  );
}
