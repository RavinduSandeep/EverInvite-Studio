import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { currentYear } from "@/lib/utils";
import Container from "@/components/ui/Container";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/components/ui/SocialIcons";

const explore = [
  { label: "Invitations", href: "/invitations" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Questions", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Instagram", href: siteConfig.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: siteConfig.facebook, Icon: FacebookIcon },
  { label: "TikTok", href: siteConfig.tiktok, Icon: TikTokIcon },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl">{siteConfig.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
              {siteConfig.tagline} {siteConfig.servingNote}
            </p>
            {socials.length ? (
              <ul className="mt-6 flex gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${siteConfig.shortName} on ${label}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink-soft transition-colors hover:border-gold hover:text-gold"
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-medium tracking-wide text-ink">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-medium tracking-wide text-ink">Get in touch</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 break-all transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-ink-muted">
              {siteConfig.workingHours}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-muted">
            © {currentYear()} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            <li>
              <Link
                href="/privacy"
                className="text-xs text-ink-muted transition-colors hover:text-gold"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-xs text-ink-muted transition-colors hover:text-gold"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
