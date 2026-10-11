import { Wheat } from "lucide-react";
import { site } from "@/lib/site";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-full ${
          light ? "bg-marigold text-cocoa" : "bg-cocoa text-marigold"
        }`}
      >
        <Wheat className="size-5" strokeWidth={1.8} aria-hidden />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`whitespace-nowrap font-display text-[1.2rem] sm:text-[1.3rem] ${
            light ? "text-cream" : "text-cocoa"
          }`}
        >
          {site.name}
        </span>
        <span
          className={`mt-1 whitespace-nowrap text-[0.58rem] font-semibold uppercase tracking-[0.24em] ${
            light ? "text-marigold" : "text-terracotta"
          }`}
        >
          {site.tagline}
        </span>
      </span>
    </span>
  );
}
