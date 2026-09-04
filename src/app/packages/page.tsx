import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PackagesSection from "@/components/home/PackagesSection";
import FaqSection from "@/components/home/FaqSection";
import ContactCta from "@/components/home/ContactCta";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Three ways to start your digital invitation: Essential, Premium and Signature. Every invitation is quoted individually for your event.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <section className="bg-ivory pt-12 pb-10 sm:pt-16">
        <Container>
          <p className="eyebrow">Packages</p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-[1.1] text-balance sm:text-5xl">
            Choose the level of invitation you need
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Prices depend on the design, the number of sections and the features you ask
            for, so each invitation is quoted on its own. Send us your details and you
            will get a written quotation with everything listed.
          </p>
        </Container>
      </section>

      <PackagesSection tone="ivory" showHeading={false} />
      <FaqSection limit={6} />
      <ContactCta />
    </>
  );
}
