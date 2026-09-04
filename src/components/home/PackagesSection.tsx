import { Check } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { packages } from "@/data/packages";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function PackagesSection({
  tone = "cream",
  showHeading = true,
}: {
  tone?: "ivory" | "cream" | "paper";
  /** Off when the page already carries its own heading. */
  showHeading?: boolean;
}) {
  return (
    <Section id="packages" tone={tone} spacing={showHeading ? "default" : "topNone"}>
      {showHeading ? (
        <SectionHeading
          eyebrow="Packages"
          title="Three ways to start"
          description="Every invitation is quoted individually, because no two events need the same thing. Tell us what you have in mind and we will send a price."
        />
      ) : null}

      <div className={cn("grid gap-6 lg:grid-cols-3", showHeading && "mt-12")}>
        {packages.map((pkg, index) => (
          <Reveal key={pkg.id} delay={index * 0.06} className="h-full">
            <div
              className={cn(
                "flex h-full flex-col rounded-2xl border bg-paper p-7 shadow-card",
                pkg.featured ? "border-gold" : "border-line",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl">{pkg.name}</h3>
                {pkg.featured ? (
                  <span className="rounded-full bg-gold-tint px-3 py-1 text-[0.6875rem] tracking-wide text-gold uppercase">
                    Most chosen
                  </span>
                ) : null}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{pkg.summary}</p>

              <p className="mt-5 font-display text-2xl text-ink">
                {pkg.price ? (
                  <>
                    <span className="text-base text-ink-muted">{siteConfig.currency} </span>
                    {pkg.price}
                  </>
                ) : (
                  <span className="text-xl text-ink-soft">Priced on request</span>
                )}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-sm text-ink-soft">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <ButtonLink
                href={`/contact?package=${pkg.id}`}
                variant={pkg.featured ? "primary" : "outline"}
                className="mt-7 w-full"
              >
                {pkg.ctaLabel}
              </ButtonLink>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-ink-muted">
        Revision rounds and the hosting period are agreed in writing before work begins,
        so you always know what is included.
      </p>
    </Section>
  );
}
