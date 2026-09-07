import type { InvitationSample } from "@/types";

/**
 * The invitation portfolio.
 *
 * Each entry below is a real invitation built by the studio. Screenshots in
 * /public/images/invitations were captured from the running projects.
 *
 * To add a new sample: copy an entry, give it a unique `id` and `slug`, drop
 * the two screenshots into /public/images/invitations using the same naming
 * pattern, and set `published: true` when it is ready to show.
 *
 * `liveUrl` is optional on purpose. A sample with no live URL still appears in
 * the gallery with its screenshots; the site simply hides the live demo
 * controls for it. Add the URL once the invitation is deployed.
 */
export const invitations: InvitationSample[] = [
  {
    id: "inv-001",
    slug: "minelli-sachintha",
    title: "Royal Blue & Gold",
    coupleOrEventName: "Minelli & Sachintha",
    category: "Wedding",
    styles: ["Elegant", "Luxury", "Traditional"],
    shortDescription:
      "A formal royal blue and gold invitation with a hand-drawn envelope opening and a full Poruwa ceremony schedule.",
    fullDescription:
      "Our flagship wedding invitation, designed for a traditional Sri Lankan ceremony. Guests arrive at a sealed envelope that opens with a tap, revealing an ivory card set in royal blue and muted gold. Beneath it sit the family blessings, the ceremony timings, a live countdown, the venue with directions, and RSVP buttons that connect straight to the couple. Every ornament is drawn rather than photographed, so the invitation stays crisp on any screen and loads quickly even on mobile data.",
    thumbnail: "/images/invitations/minelli-sachintha-mobile.jpg",
    mobileScreenshot: "/images/invitations/minelli-sachintha-mobile.jpg",
    desktopScreenshot: "/images/invitations/minelli-sachintha-desktop.jpg",
    liveUrl: "https://minelli-sachintha-invitation.vercel.app/",
    features: [
      "Animated envelope opening",
      "Personalised guest greeting",
      "Family blessings from both sides",
      "Live countdown to the ceremony",
      "Venue card with map directions",
      "Add to calendar",
      "Call and WhatsApp RSVP",
      "Background music toggle",
    ],
    colourPalette: ["#fefcf7", "#1f5db3", "#0d2647", "#d4af37"],
    featured: true,
    published: true,
  },
  {
    id: "inv-002",
    slug: "amaya-dilshan",
    title: "Emerald Garden",
    coupleOrEventName: "Amaya & Dilshan",
    category: "Wedding",
    styles: ["Elegant", "Floral", "Luxury"],
    shortDescription:
      "Deep emerald and champagne gold with botanical corners and a wax-sealed envelope that unfolds as you arrive.",
    fullDescription:
      "Designed for a garden ceremony in the hills. The invitation opens with a wax seal that lifts away, the flap folds back and the card rises out of the envelope. Foliage illustrations draw themselves into the corners as you scroll, the couple's names arrive letter by letter, and the countdown flips like a station board. Deep emerald carries the formality while champagne gold is kept for the small details, so the palette stays rich rather than heavy.",
    thumbnail: "/images/invitations/amaya-dilshan-mobile.jpg",
    mobileScreenshot: "/images/invitations/amaya-dilshan-mobile.jpg",
    desktopScreenshot: "/images/invitations/amaya-dilshan-desktop.jpg",
    liveUrl: "https://amaya-dilshan-invitation-eoah.vercel.app/",
    features: [
      "Wax seal envelope opening",
      "Self-drawing botanical corners",
      "Letter-by-letter name reveal",
      "Flip-digit countdown",
      "Family blessings from both sides",
      "Venue card with map directions",
      "Add to calendar",
      "Call and WhatsApp RSVP",
    ],
    colourPalette: ["#fbf9f3", "#0f6b4f", "#073626", "#c9a961"],
    featured: true,
    published: true,
  },
  {
    id: "inv-003",
    slug: "sanduni-kavindu",
    title: "Written in the Stars",
    coupleOrEventName: "Sanduni & Kavindu",
    category: "Wedding",
    styles: ["Dark", "Modern", "Luxury"],
    shortDescription:
      "A midnight invitation for an evening reception, with a drifting starfield and rose gold rings that turn slowly above the names.",
    fullDescription:
      "Built for an evening ring ceremony. The whole invitation sits under a live starfield that drifts gently behind the card, with constellations traced across the sky. A pair of rose gold rings turn slowly above the couple's names. Deep navy glass panels hold the ceremony details, and every accent is rose gold rather than yellow gold, which keeps the palette modern. Motion is reduced automatically for guests who prefer less movement.",
    thumbnail: "/images/invitations/sanduni-kavindu-mobile.jpg",
    mobileScreenshot: "/images/invitations/sanduni-kavindu-mobile.jpg",
    desktopScreenshot: "/images/invitations/sanduni-kavindu-desktop.jpg",
    liveUrl: "https://sanduni-kavindu-invitation.vercel.app/",
    features: [
      "Drifting starfield background",
      "Turning ring animation",
      "Animated envelope opening",
      "Live countdown to the ceremony",
      "Family blessings from both sides",
      "Venue card with map directions",
      "Add to calendar",
      "Call and WhatsApp RSVP",
    ],
    colourPalette: ["#050a1a", "#1f3474", "#c58b6e", "#f3f0ea"],
    featured: true,
    published: true,
  },
  {
    id: "inv-004",
    slug: "ishara-tharindu",
    title: "Blush Orchard",
    coupleOrEventName: "Ishara & Tharindu",
    category: "Wedding",
    styles: ["Floral", "Elegant", "Minimal"],
    shortDescription:
      "Soft dusty rose and sage, with watercolour peonies and petals that drift down the page as you read.",
    fullDescription:
      "A softer, more romantic direction for a daytime orchard wedding. Petals drift slowly down the page, watercolour peonies frame the corners, and the envelope can be swiped upward like a real card being drawn out. Dusty rose leads, sage green answers it, and the type stays light so the whole invitation feels calm rather than decorated. Every movement follows the finger, so it reads as a physical object rather than a web page.",
    thumbnail: "/images/invitations/ishara-tharindu-mobile.jpg",
    mobileScreenshot: "/images/invitations/ishara-tharindu-mobile.jpg",
    desktopScreenshot: "/images/invitations/ishara-tharindu-desktop.jpg",
    liveUrl: "https://ishara-tharindu-invitation.vercel.app/",
    features: [
      "Swipe-to-open envelope",
      "Falling petal effect",
      "Watercolour floral corners",
      "Live countdown to the ceremony",
      "Family blessings from both sides",
      "Venue card with map directions",
      "Add to calendar",
      "Call and WhatsApp RSVP",
    ],
    colourPalette: ["#fffafb", "#b8697a", "#5f2f3d", "#728a6d"],
    featured: false,
    published: true,
  },
  {
    id: "inv-005",
    slug: "hansika-chamod",
    title: "Vintage Burgundy",
    coupleOrEventName: "Hansika & Chamod",
    category: "Wedding",
    styles: ["Vintage", "Traditional", "Luxury"],
    shortDescription:
      "Heritage burgundy and antique gold on aged parchment, with a wax seal that cracks open and a burst of confetti.",
    fullDescription:
      "A heritage-hall wedding treated like a pressed, wax-sealed letter. The seal cracks apart when it is tapped, the flap lifts, and a parchment card slides out under a shower of confetti. Antique gold rules and vector ornaments carry the period feel, while the burgundy stays deep enough to read as formal rather than festive. Best suited to evening receptions and traditional venues.",
    thumbnail: "/images/invitations/hansika-chamod-mobile.jpg",
    mobileScreenshot: "/images/invitations/hansika-chamod-mobile.jpg",
    desktopScreenshot: "/images/invitations/hansika-chamod-desktop.jpg",
    liveUrl: "https://hansika-chamod-invitation.vercel.app/",
    features: [
      "Cracking wax seal opening",
      "Confetti celebration effect",
      "Vector ring and heart animations",
      "Live countdown to the ceremony",
      "Family blessings from both sides",
      "Venue card with map directions",
      "Add to calendar",
      "Call and WhatsApp RSVP",
    ],
    colourPalette: ["#fdf8ee", "#7d1f3a", "#3d0f1c", "#c9a227"],
    featured: false,
    published: true,
  },
  {
    id: "inv-006",
    slug: "dinithi-lahiru",
    title: "Coral Bay",
    coupleOrEventName: "Dinithi & Lahiru",
    category: "Wedding",
    styles: ["Coastal", "Modern", "Colourful"],
    shortDescription:
      "A beach ceremony in deep teal and coral, with a living ocean that moves gently behind every section.",
    fullDescription:
      "Made for a beach ceremony at golden hour. A live ocean is rendered behind the invitation, with shorelines that ripple and shift as the day moves, and wave-shaped dividers carry you from one section to the next. Deep teal grounds the page while coral picks out the details. On devices that cannot render the moving ocean it falls back to a soft sand-and-sea gradient, so nobody sees a broken page.",
    thumbnail: "/images/invitations/dinithi-lahiru-mobile.jpg",
    mobileScreenshot: "/images/invitations/dinithi-lahiru-mobile.jpg",
    desktopScreenshot: "/images/invitations/dinithi-lahiru-desktop.jpg",
    liveUrl: "https://dinithi-lahiru-invitation.vercel.app/",
    features: [
      "Living ocean background",
      "Wave-shaped section dividers",
      "Animated envelope opening",
      "Scroll reveal animations",
      "Live countdown to the ceremony",
      "Venue card with map directions",
      "Add to calendar",
      "Call and WhatsApp RSVP",
    ],
    colourPalette: ["#fdfcf9", "#0e7c86", "#073a40", "#e46b4c"],
    featured: false,
    published: true,
  },
];

/** Every invitation that should be visible on the public site. */
export const publishedInvitations = invitations.filter((i) => i.published);

/** The subset shown on the home page. */
export const featuredInvitations = publishedInvitations.filter((i) => i.featured);

export function getInvitationBySlug(slug: string): InvitationSample | undefined {
  return publishedInvitations.find((i) => i.slug === slug);
}

/** Other designs to suggest at the bottom of a sample page. */
export function getRelatedInvitations(slug: string, limit = 3): InvitationSample[] {
  const current = getInvitationBySlug(slug);
  if (!current) return publishedInvitations.slice(0, limit);

  const scored = publishedInvitations
    .filter((i) => i.slug !== slug)
    .map((i) => ({
      invitation: i,
      score:
        (i.category === current.category ? 2 : 0) +
        i.styles.filter((s) => current.styles.includes(s)).length,
    }))
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((s) => s.invitation);
}

/** Category filters, built from the data so unused categories never appear. */
export function getCategoryFilters(): string[] {
  const used = new Set(publishedInvitations.map((i) => i.category));
  return ["All", ...Array.from(used)];
}

/** Style filters, built from the data and sorted by how often they appear. */
export function getStyleFilters(): string[] {
  const counts = new Map<string, number>();
  for (const invitation of publishedInvitations) {
    for (const style of invitation.styles) {
      counts.set(style, (counts.get(style) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([style]) => style);
}
