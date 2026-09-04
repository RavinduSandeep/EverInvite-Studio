import type { Metadata } from "next";
import { Check } from "lucide-react";
import { serviceGroups } from "@/data/services";
import Container from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import HowItWorks from "@/components/home/HowItWorks";
import ContactCta from "@/components/home/ContactCta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Everything that can go into your digital invitation: animated openings, countdowns, venue directions, WhatsApp RSVP, galleries, music and more.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ivory pt-12 pb-8 sm:pt-16">
        <Container>
          <p className="eyebrow">Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-[1.1] text-balance sm:text-5xl">
            What we can build into your invitation
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Start from any design in the gallery and add only the parts your day needs.
            Which of these are available depends on the package you choose, and we will
            tell you clearly before you commit to anything.
          </p>
        </Container>
      </section>

      <Section spacing="topNone">
        <div className="grid gap-6 lg:grid-cols-2">
          {serviceGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-paper p-7 shadow-card">
                <h2 className="text-2xl">{group.title}</h2>
                <ul className="mt-5 space-y-4">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex gap-3">
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-gold"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-medium text-ink">{item.name}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <HowItWorks />
      <ContactCta />
    </>
  );
}
