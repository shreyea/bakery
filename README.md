# Humble Crumble: bakery website (design mock-up)

A mobile-first, single-page website for a neighbourhood bakery in Panaji, Goa.
Built with Next.js 14, Tailwind CSS and TypeScript. It is an enquiry site, not a shop: every
"order" action goes to WhatsApp or a phone call.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
```

## Change the content

Almost everything lives in **`src/lib/site.ts`**: phone and WhatsApp number, address, hours,
menu items and prices, reviews, FAQs and the bake schedule.

| What                          | Where                      |
| ----------------------------- | -------------------------- |
| Colours, fonts                | `tailwind.config.ts`, `src/app/layout.tsx` |
| Buttons, form fields, spacing | `src/app/globals.css` |
| Order of sections             | `src/app/page.tsx`         |
| Individual sections           | `src/components/*`         |
| Photos                        | `public/images/*.webp`     |

**WhatsApp:** set `site.whatsapp` (country code + number, digits only, e.g. `919876543210`).
Every "Ask on WhatsApp" button opens a chat with a message already typed for that item,
and the "Plan your cake" form turns its answers into one message.

## Notes

- **Photos** are stock images (Unsplash), already resized and compressed to WebP (about 1.4 MB in
  total, 20-150 KB each). Swap in the client's own photos with the same file names, or edit
  the paths in `site.ts`. Use roughly 520 px square for menu items and 680 px wide for the large photos.
- **Sample content:** names, address, phone number, prices, reviews and the FSSAI number are placeholders.
- **Zomato and Swiggy:** the links in `site.ts` (`delivery`) are generic city pages. Replace them with the bakery's own
  restaurant pages. The buttons show the names in brand colours as text, not the official logos.
- Instagram links point to `#` until the real profile is known.
- No cart, no backend, no tracking.
