import type { Package } from "@/types";

/**
 * Packages.
 *
 * Prices are intentionally empty. While `price` is an empty string the site
 * shows `ctaLabel` (for example "Request Price") instead of a number, so no
 * figure is published until you decide on one.
 *
 * To publish a price, set it as a plain string, for example:
 *   price: "35,000"
 * The currency prefix comes from siteConfig.currency.
 */
export const packages: Package[] = [
  {
    id: "essential",
    name: "Essential",
    price: "", // TODO: add your price, e.g. "25,000"
    summary:
      "A clean, single-page invitation with everything a guest needs to attend.",
    features: [
      "One-page invitation design",
      "Event details and ceremony timings",
      "Venue card with map directions",
      "Basic RSVP",
      "Designed for mobile first",
      "Standard colour and text customisation",
    ],
    featured: false,
    ctaLabel: "Request Price",
  },
  {
    id: "premium",
    name: "Premium",
    price: "", // TODO: add your price
    summary:
      "The full invitation experience, with an animated opening and the sections most couples ask for.",
    features: [
      "Everything in Essential",
      "Animated envelope opening",
      "Live countdown to the day",
      "Photo gallery",
      "Background music",
      "Event timeline",
      "Advanced design customisation",
    ],
    featured: true,
    ctaLabel: "Request Price",
  },
  {
    id: "signature",
    name: "Signature",
    price: "", // TODO: add your price
    summary:
      "A concept designed around your event alone, for couples who want something no one else has.",
    features: [
      "Everything in Premium",
      "Fully custom design concept",
      "Advanced animations and visual effects",
      "Multiple event sections, such as homecoming",
      "Custom domain support",
      "Priority revisions",
      "Additional features on request",
    ],
    featured: false,
    ctaLabel: "Contact for Quote",
  },
];

export function getPackageById(id: string): Package | undefined {
  return packages.find((p) => p.id === id);
}
