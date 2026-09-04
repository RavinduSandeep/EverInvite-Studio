import { whyChooseUs } from "@/data/services";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function WhyChooseUs() {
  return (
    <Section id="why-us">
      <SectionHeading
        eyebrow="Why work with us"
        title="Made for your day, not for a template"
        description="No inflated claims, no invented numbers. Just what you can expect when you work with the studio."
      />

      <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.05}>
            <div>
              <div aria-hidden="true" className="mb-3 h-px w-10 bg-gold/40" />
              <h3 className="text-lg leading-snug">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
