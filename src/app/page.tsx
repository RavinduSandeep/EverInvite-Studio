import { faqs } from "@/data/faqs";
import Hero from "@/components/home/Hero";
import ValueStrip from "@/components/home/ValueStrip";
import FeaturedInvitations from "@/components/home/FeaturedInvitations";
import ServicesSection from "@/components/home/ServicesSection";
import HowItWorks from "@/components/home/HowItWorks";
import PackagesSection from "@/components/home/PackagesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FaqSection";
import ContactCta from "@/components/home/ContactCta";

/** Question and answer pairs, so search engines can surface them directly. */
function faqStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData()) }}
      />
      <Hero />
      <ValueStrip />
      <FeaturedInvitations />
      <ServicesSection />
      <HowItWorks />
      <PackagesSection />
      <WhyChooseUs />
      <Testimonials />
      <FaqSection />
      <ContactCta />
    </>
  );
}
