import { Phone } from "lucide-react";
import { site, waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

/**
 * Always-available contact shortcuts.
 * Phones: a bar fixed to the bottom with Call and WhatsApp.
 * Larger screens: a floating WhatsApp button.
 */
export default function ContactDock() {
  const href = waLink("Hi Humble Crumble! I have a question.");
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md gap-3">
          <a href={site.phoneHref} className="btn btn-outline flex-1 !min-h-[48px]">
            <Phone className="size-[1.1rem]" aria-hidden />
            Call
          </a>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa flex-[1.4] !min-h-[48px]"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden size-14 place-items-center rounded-full bg-wa text-white shadow-lift transition hover:scale-105 hover:bg-wa-dark md:grid"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </>
  );
}
