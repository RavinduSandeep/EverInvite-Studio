import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { quickWhatsAppUrl } from "@/lib/whatsapp";
import Container from "@/components/ui/Container";
import EnquiryForm from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Start Your Invitation",
  description:
    "Tell us about your celebration and we will send a quotation. Choose a design, pick a package and send your details straight to WhatsApp.",
  alternates: { canonical: "/contact" },
};

const contactItems = [
  {
    label: "WhatsApp",
    value: siteConfig.whatsappNumber,
    href: quickWhatsAppUrl(),
    Icon: MessageCircle,
    external: true,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    Icon: Phone,
    external: false,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    Icon: Mail,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <section className="bg-ivory py-12 sm:py-16">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow">Start your invitation</p>
          <h1 className="mt-3 text-4xl leading-[1.1] text-balance sm:text-5xl">
            Tell us about your celebration
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Fill in what you know so far. Anything you are unsure about can be left
            blank. Your answers become a message you send yourself, so nothing is
            submitted anywhere until you press send.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          <Suspense
            fallback={
              <div className="rounded-2xl border border-line bg-paper p-8 text-sm text-ink-muted shadow-card">
                Loading the form…
              </div>
            }
          >
            <EnquiryForm />
          </Suspense>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-line bg-cream p-6">
              <h2 className="text-xl">Or reach us directly</h2>
              <ul className="mt-5 space-y-4">
                {contactItems.map(({ label, value, href, Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex items-start gap-3 text-sm transition-colors hover:text-gold"
                    >
                      <Icon
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="block text-xs tracking-wide text-ink-muted uppercase">
                          {label}
                        </span>
                        <span className="break-all text-ink-soft">{value}</span>
                      </span>
                    </a>
                  </li>
                ))}
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    <span className="block text-xs tracking-wide text-ink-muted uppercase">
                      Where we work
                    </span>
                    <span className="text-ink-soft">{siteConfig.location}</span>
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    <span className="block text-xs tracking-wide text-ink-muted uppercase">
                      Hours
                    </span>
                    <span className="text-ink-soft">{siteConfig.workingHours}</span>
                  </span>
                </li>
              </ul>

            </div>

            <p className="mt-5 text-xs leading-relaxed text-ink-muted">
              {siteConfig.servingNote} We usually reply within one working day.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
