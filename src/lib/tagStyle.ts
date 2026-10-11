import type { Product } from "./site";

/** Badge colours for product tags, shared by the home menu and the /menu page. */
export const tagStyle: Record<NonNullable<Product["tag"]>, string> = {
  Bestseller: "bg-marigold text-cocoa",
  New: "bg-terracotta text-white",
  Eggless: "bg-pistadeep text-white",
  Seasonal: "bg-cocoa text-cream",
};
