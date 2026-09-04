import { ArrowRight, MessageCircle } from "lucide-react";
import { hasWhatsApp } from "@/config/siteConfig";
import { quickWhatsAppUrl } from "@/lib/whatsapp";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export default function ContactCta() {
  return (
    <section className="bg-ink py-16 text-ivory sm:py-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div>
            <p className="eyebrow text-gold-tint">Let&apos;s begin</p>
            <h2 className="mt-3 text-3xl text-balance text-ivory sm:text-4xl">
              Tell us about your celebration
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ivory/70">
              Browse the designs, pick the one closest to what you imagined, and send us
              your details. We will reply with a quotation and a realistic timeline.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink
                href="/invitations"
                size="lg"
                className="bg-ivory text-ink hover:bg-cream"
              >
                Browse the designs
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href={quickWhatsAppUrl()}
                external
                size="lg"
                className="border border-ivory/25 bg-transparent text-ivory hover:bg-ivory/10"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {hasWhatsApp() ? "Start on WhatsApp" : "Start by email"}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
