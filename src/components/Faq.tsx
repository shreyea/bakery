import { Plus } from "lucide-react";
import { faqs } from "@/lib/site";
import SectionHead from "./SectionHead";

export default function Faq() {
  return (
    <section className="section bg-paper">
      <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHead
          kicker="Good to know"
          title="Questions we get asked a lot"
          text="Can't find yours? Message us on WhatsApp, we're quick to reply."
        />

        <div className="divide-y divide-cocoa/15 border-y border-cocoa/15">
          {faqs.map((f) => (
            <details key={f.q} className="group py-1">
              <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-3 text-left font-display text-[1.15rem] leading-snug sm:text-xl [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus
                  className="size-5 shrink-0 text-terracotta transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="max-w-xl pb-4 text-[0.98rem] leading-relaxed text-cocoa/80">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
