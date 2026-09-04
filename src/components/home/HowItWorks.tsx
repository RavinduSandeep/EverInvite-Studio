import { processSteps } from "@/data/services";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeading
        eyebrow="How it works"
        title="From first message to shared link"
        description="Six simple steps. You never have to touch anything technical."
      />

      <ol className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
        {processSteps.map((step, index) => (
          <Reveal key={step.step} delay={index * 0.05} className="h-full">
            <li className="flex h-full gap-4 rounded-2xl border border-line bg-paper p-6 shadow-card">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold-tint font-display text-lg text-gold"
              >
                {step.step}
              </span>
              <div>
                <h3 className="text-lg leading-snug">
                  <span className="sr-only">Step {step.step}: </span>
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
