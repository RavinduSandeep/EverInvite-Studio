import { ArrowRight } from "lucide-react";
import { serviceGroups } from "@/data/services";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Home page summary of what can go into an invitation.
 * The full menu lives on /services.
 */
export default function ServicesSection() {
  return (
    <Section id="services" tone="cream">
      <SectionHeading
        eyebrow="What goes inside"
        title="Everything your guests need, in one link"
        description="Pick the parts that suit your day. What is available depends on the package you choose."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {serviceGroups.map((group, groupIndex) => (
          <Reveal key={group.title} delay={groupIndex * 0.06} className="h-full">
            <div className="h-full rounded-2xl border border-line bg-paper p-6 shadow-card sm:p-7">
              <h3 className="text-xl">{group.title}</h3>
              <ul className="mt-4 space-y-3.5">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="text-sm font-medium text-ink">{item.name}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <ButtonLink href="/services" variant="outline" size="lg">
          See the full list of features
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </Section>
  );
}
