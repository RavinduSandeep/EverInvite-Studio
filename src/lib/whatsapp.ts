import { hasWhatsApp, siteConfig, whatsAppDigits } from "@/config/siteConfig";

export interface EnquiryDetails {
  name: string;
  whatsapp: string;
  email?: string;
  eventType: string;
  eventDate?: string;
  designTitle?: string;
  designUrl?: string;
  packageName?: string;
  colours?: string;
  features?: string[];
  message?: string;
  heardFrom?: string;
}

/**
 * The enquiry as a plain, readable message.
 * Kept as plain text on purpose: it has to be legible inside WhatsApp and
 * inside an email client, so no markdown and no decoration.
 */
export function buildEnquiryMessage(details: EnquiryDetails): string {
  const lines: string[] = [
    `Hello ${siteConfig.name},`,
    "",
    "I would like to request a digital web invitation.",
    "",
    `Name: ${details.name}`,
    `WhatsApp: ${details.whatsapp}`,
  ];

  if (details.email) lines.push(`Email: ${details.email}`);
  lines.push(`Event type: ${details.eventType}`);
  if (details.eventDate) lines.push(`Event date: ${details.eventDate}`);
  if (details.designTitle) lines.push(`Selected design: ${details.designTitle}`);
  if (details.designUrl) lines.push(`Design link: ${details.designUrl}`);
  if (details.packageName) lines.push(`Selected package: ${details.packageName}`);
  if (details.colours) lines.push(`Preferred colours: ${details.colours}`);
  if (details.features?.length) {
    lines.push(`Required features: ${details.features.join(", ")}`);
  }
  if (details.message) {
    lines.push("", "Additional information:", details.message);
  }
  if (details.heardFrom) lines.push("", `How I found you: ${details.heardFrom}`);

  lines.push("", "Please send me more information and a quotation.");

  return lines.join("\n");
}

/** wa.me link with the message pre-filled. */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${whatsAppDigits()}?text=${encodeURIComponent(message)}`;
}

/** mailto link with the same message, used as the fallback. */
export function buildMailtoUrl(message: string, subject?: string): string {
  const params = new URLSearchParams({
    subject: subject ?? `Invitation enquiry — ${siteConfig.name}`,
    body: message,
  });
  return `mailto:${siteConfig.email}?${params.toString()}`;
}

/**
 * Where an enquiry should go.
 * WhatsApp when a real number is configured, email while it is still the
 * placeholder, so a visitor never opens a dead WhatsApp link.
 */
export function enquiryDestination(message: string): {
  href: string;
  channel: "whatsapp" | "email";
} {
  return hasWhatsApp()
    ? { href: buildWhatsAppUrl(message), channel: "whatsapp" }
    : { href: buildMailtoUrl(message), channel: "email" };
}

/** A short opener for the floating button and hero CTA. */
export function quickWhatsAppUrl(context?: string): string {
  const message = context
    ? `Hello ${siteConfig.name}, I am interested in a digital invitation for my ${context}. Could you send me more information?`
    : `Hello ${siteConfig.name}, I am interested in a digital invitation. Could you send me more information?`;
  return enquiryDestination(message).href;
}
