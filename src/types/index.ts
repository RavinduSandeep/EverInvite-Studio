export type EventCategory =
  | "Wedding"
  | "Engagement"
  | "Homecoming"
  | "Birthday"
  | "Baby Shower"
  | "Anniversary"
  | "Corporate"
  | "Other";

export type DesignStyle =
  | "Elegant"
  | "Minimal"
  | "Floral"
  | "Luxury"
  | "Traditional"
  | "Modern"
  | "Dark"
  | "Colourful"
  | "Coastal"
  | "Vintage";

export interface InvitationSample {
  id: string;
  slug: string;
  title: string;
  coupleOrEventName: string;
  category: EventCategory;
  styles: DesignStyle[];
  shortDescription: string;
  fullDescription: string;
  /** Card thumbnail. Usually the mobile screenshot, shown inside a phone frame. */
  thumbnail: string;
  mobileScreenshot?: string;
  desktopScreenshot?: string;
  /**
   * Public, embeddable URL of the published invitation.
   * Leave undefined while a sample is not deployed — the UI then shows
   * screenshots only and hides the live demo controls.
   */
  liveUrl?: string;
  features: string[];
  colourPalette: string[];
  featured: boolean;
  published: boolean;
}

export interface Package {
  id: string;
  name: string;
  /** Leave price empty to show the "contact for a quote" label instead. */
  price: string;
  summary: string;
  features: string[];
  featured: boolean;
  ctaLabel: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  event: string;
  quote: string;
}

export interface ServiceFeature {
  name: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}
