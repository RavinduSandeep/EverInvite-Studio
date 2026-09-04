"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { hasWhatsApp } from "@/config/siteConfig";
import { quickWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Floating enquiry button.
 *
 * Hidden on the contact page so it can never sit over the form's own fields
 * or its submit button, which is the one place those would collide.
 */
export default function FloatingWhatsApp() {
  const pathname = usePathname();
  if (pathname.startsWith("/contact")) return null;

  const label = hasWhatsApp() ? "Message us on WhatsApp" : "Email us about an invitation";

  return (
    <a
      href={quickWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-ivory shadow-lift transition-transform duration-200 hover:scale-105 sm:right-6 sm:bottom-6"
      style={{
        marginBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
