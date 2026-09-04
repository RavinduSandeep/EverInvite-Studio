import { ArrowRight } from "lucide-react";
import { featuredInvitations, publishedInvitations } from "@/data/invitations";
import { Section, SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import InvitationCard from "@/components/invitations/InvitationCard";

export default function FeaturedInvitations() {
  const shown = featuredInvitations.length ? featuredInvitations : publishedInvitations;

  return (
    <Section id="invitations">
      <SectionHeading
        eyebrow="Recent work"
        title="Invitations we have designed"
        description="Every design here was built for a real celebration. Open one to see how it behaves on a phone, then make it your own."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.slice(0, 3).map((invitation, index) => (
          <Reveal key={invitation.id} delay={index * 0.06} className="h-full">
            <InvitationCard invitation={invitation} priority={index === 0} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <ButtonLink href="/invitations" variant="outline" size="lg">
          View all {publishedInvitations.length} designs
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </ButtonLink>
      </div>
    </Section>
  );
}
