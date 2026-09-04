import type { Metadata } from "next";
import {
  getCategoryFilters,
  getStyleFilters,
  publishedInvitations,
} from "@/data/invitations";
import Container from "@/components/ui/Container";
import InvitationGallery from "@/components/invitations/InvitationGallery";
import ContactCta from "@/components/home/ContactCta";

export const metadata: Metadata = {
  title: "Invitation Designs",
  description:
    "Browse our digital wedding and event invitation designs. Preview each one, then choose the design closest to the celebration you are planning.",
  alternates: { canonical: "/invitations" },
};

export default function InvitationsPage() {
  return (
    <>
      <section className="bg-ivory pt-12 pb-10 sm:pt-16">
        <Container>
          <p className="eyebrow">The portfolio</p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-[1.1] text-balance sm:text-5xl">
            Invitation designs
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            Every design below was built for a real celebration. Preview one to see how it
            behaves, then tell us which direction feels like yours. Any design can be
            recoloured and rewritten for your event.
          </p>
        </Container>
      </section>

      <section className="bg-ivory pb-20">
        <Container>
          <InvitationGallery
            invitations={publishedInvitations}
            categories={getCategoryFilters()}
            styles={getStyleFilters()}
          />
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
