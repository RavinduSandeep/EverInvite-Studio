import Image from "next/image";
import Link from "next/link";
import type { InvitationSample } from "@/types";
import { ButtonLink } from "@/components/ui/Button";
import PreviewButton from "./PreviewButton";

/**
 * Gallery card.
 *
 * "Preview" opens the published invitation itself in a new tab when the design
 * has a live URL. Designs that are not published yet fall back to an on-site
 * preview of their screenshots, so the button is never a dead end.
 */
export default function InvitationCard({
  invitation,
  priority = false,
}: {
  invitation: InvitationSample;
  priority?: boolean;
}) {
  const href = `/invitations/${invitation.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-lift">
      <Link
        href={href}
        aria-label={`${invitation.title} — ${invitation.coupleOrEventName}`}
        className="relative block aspect-4/5 overflow-hidden bg-cream"
      >
        <Image
          src={invitation.thumbnail}
          alt={`${invitation.title} invitation for ${invitation.coupleOrEventName}, shown on a phone`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          priority={priority}
          className="object-cover object-top"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <div>
          <h3 className="font-display text-lg leading-snug wrap-anywhere">
            <Link href={href} className="transition-colors hover:text-gold">
              {invitation.title}
            </Link>
          </h3>
          <p className="mt-1 text-[0.8125rem] text-ink-muted">
            {invitation.category} · {invitation.styles.join(", ")}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-ink-soft">
          {invitation.shortDescription}
        </p>

        <ul aria-label="Colour palette" className="flex gap-1.5">
          {invitation.colourPalette.map((colour) => (
            <li
              key={colour}
              title={colour}
              style={{ backgroundColor: colour }}
              className="h-4.5 w-4.5 rounded-full border border-ink/12"
            />
          ))}
        </ul>

        <ul className="flex flex-wrap gap-x-3 gap-y-1">
          {invitation.features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-1.5 text-xs text-ink-muted"
            >
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold/50" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          <PreviewButton invitation={invitation} className="flex-1" />
          <ButtonLink
            href={`/contact?design=${invitation.slug}`}
            size="sm"
            className="flex-[1.4]"
          >
            Choose This Design
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
