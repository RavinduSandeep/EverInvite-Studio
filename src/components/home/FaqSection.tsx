import { Plus } from "lucide-react";
import { faqs } from "@/data/faqs";
import { Section, SectionHeading } from "@/components/ui/Section";

/**
 * Native disclosure elements: keyboard accessible and usable before any
 * JavaScript has loaded, which keeps the page light.
 */
export default function FaqSection({ limit }: { limit?: number }) {
  const shown = limit ? faqs.slice(0, limit) : faqs;

  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="Questions"
        title="Things couples ask us"
        description="If your question is not here, send it over on WhatsApp and we will answer honestly."
      />

      <div className="mx-auto mt-12 max-w-3xl divide-y divide-line border-y border-line">
        {shown.map((faq) => (
          <details key={faq.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-[0.9375rem] font-medium text-ink [&::-webkit-details-marker]:hidden">
              {faq.question}
              <Plus
                aria-hidden="true"
                className="h-4.5 w-4.5 shrink-0 text-gold transition-transform duration-200 group-open:rotate-45"
              />
            </summary>
            <p className="pb-5 text-sm leading-relaxed text-ink-soft">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
