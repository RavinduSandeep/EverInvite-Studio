import { testimonials } from "@/data/testimonials";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/**
 * Hidden entirely until there are genuine testimonials to show.
 * Nothing here is ever invented.
 */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section id="testimonials" tone="cream">
      <SectionHeading
        eyebrow="In their words"
        title="What couples have said"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.id} delay={index * 0.06} className="h-full">
            <figure className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6 shadow-card">
              <blockquote className="flex-1 text-sm leading-relaxed text-ink-soft">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <p className="font-display text-lg leading-tight">{testimonial.name}</p>
                <p className="text-xs text-ink-muted">{testimonial.event}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
