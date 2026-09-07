import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import {
  getInvitationBySlug,
  getRelatedInvitations,
  publishedInvitations,
} from "@/data/invitations";
import Container from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import PreviewButton from "@/components/invitations/PreviewButton";
import LivePhonePreview from "@/components/invitations/LivePhonePreview";
import InvitationCard from "@/components/invitations/InvitationCard";
import ContactCta from "@/components/home/ContactCta";

export function generateStaticParams() {
  return publishedInvitations.map((invitation) => ({ slug: invitation.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/invitations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const invitation = getInvitationBySlug(slug);

  if (!invitation) {
    return { title: "Design not found" };
  }

  return {
    title: `${invitation.title} — ${invitation.coupleOrEventName}`,
    description: invitation.shortDescription,
    alternates: { canonical: `/invitations/${invitation.slug}` },
    openGraph: {
      title: `${invitation.title} — digital ${invitation.category.toLowerCase()} invitation`,
      description: invitation.shortDescription,
      images: [
        {
          url: invitation.desktopScreenshot ?? invitation.thumbnail,
          alt: `${invitation.title} invitation design`,
        },
      ],
    },
  };
}

export default async function InvitationPage({
  params,
}: PageProps<"/invitations/[slug]">) {
  const { slug } = await params;
  const invitation = getInvitationBySlug(slug);

  if (!invitation) notFound();

  const related = getRelatedInvitations(invitation.slug);

  return (
    <>
      <section className="bg-ivory pt-10 pb-16 sm:pb-20">
        <Container>
          <Link
            href="/invitations"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-ink transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to gallery
          </Link>

          <div className="mt-7 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
            <div>
              <h1 className="text-4xl leading-[1.1] wrap-anywhere">{invitation.title}</h1>
              <p className="mt-2 text-ink-muted">
                {invitation.coupleOrEventName} · {invitation.category} ·{" "}
                {invitation.styles.join(", ")}
              </p>

              <p className="mt-6 leading-relaxed text-ink-soft">
                {invitation.fullDescription}
              </p>

              <h2 className="mt-8 text-[0.8125rem] font-bold tracking-[0.1em] text-ink-muted uppercase">
                Colour palette
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {invitation.colourPalette.map((colour) => (
                  <li
                    key={colour}
                    title={colour}
                    style={{ backgroundColor: colour }}
                    className="h-9 w-9 rounded-full border border-ink/12"
                  >
                    <span className="sr-only">{colour}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-8 text-[0.8125rem] font-bold tracking-[0.1em] text-ink-muted uppercase">
                Features included
              </h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {invitation.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-[0.9375rem]">
                    <Check className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <PreviewButton
                  invitation={invitation}
                  variant="outline"
                  size="lg"
                  label={invitation.liveUrl ? "Preview live invitation" : "Preview design"}
                />
                <ButtonLink href={`/contact?design=${invitation.slug}`} size="lg">
                  Choose This Design
                </ButtonLink>
              </div>

              {!invitation.liveUrl ? (
                <p className="mt-4 max-w-md text-sm text-ink-muted">
                  This design was built for a private celebration, so it is shown here as
                  screenshots rather than a live link.
                </p>
              ) : null}
            </div>

            {/* The invitation as guests actually see it: live in a phone when it is published. */}
            <div className="flex flex-wrap items-start gap-5">
              <LivePhonePreview invitation={invitation} />

              {invitation.desktopScreenshot ? (
                <figure className="min-w-[260px] flex-1">
                  <div className="aspect-16/10 overflow-hidden rounded-xl border border-line bg-cream">
                    <Image
                      src={invitation.desktopScreenshot}
                      alt={`${invitation.title} invitation shown on a laptop`}
                      width={1291}
                      height={807}
                      sizes="(min-width: 1024px) 460px, 90vw"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <figcaption className="mt-2 text-center font-mono text-xs text-ink-faint">
                    desktop
                  </figcaption>
                </figure>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      {related.length ? (
        <Section tone="paper">
          <SectionHeading eyebrow="More designs" title="You might also like" align="left" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <InvitationCard key={item.id} invitation={item} />
            ))}
          </div>
        </Section>
      ) : null}

      <ContactCta />
    </>
  );
}
