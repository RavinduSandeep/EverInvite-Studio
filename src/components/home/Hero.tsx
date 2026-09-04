import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { featuredInvitations } from "@/data/invitations";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export default function Hero() {
  const showcase = featuredInvitations.slice(0, 3);

  return (
    <section className="bg-ivory pt-16 pb-14 sm:pt-24 sm:pb-20">
      <Container>
        <Reveal className="text-center">
          <div>
            <p className="eyebrow">Digital web invitations</p>
            <h1 className="mx-auto mt-5 max-w-3xl text-[clamp(2.125rem,5.5vw,3.75rem)] leading-[1.12] text-pretty">
              {siteConfig.tagline}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
              Elegant, mobile-first invitation websites for weddings, birthdays and every
              celebration in between — designed for you, shared with a single link.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <ButtonLink href="/invitations" size="lg">
                Browse designs
                <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline" size="lg">
                Start your order
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        {/* Real invitations, on the device guests open them with. */}
        {showcase.length ? (
          <Reveal delay={0.12}>
            <ul className="mt-14 flex items-end justify-center gap-4 sm:gap-7">
              {showcase.map((invitation, index) => (
                <li
                  key={invitation.id}
                  className={
                    index === 1
                      ? "w-[38%] max-w-[230px]"
                      : "hidden w-[32%] max-w-[195px] sm:block"
                  }
                >
                  <div className="overflow-hidden rounded-[1.5rem] border border-line bg-cream shadow-lift">
                    <Image
                      src={invitation.thumbnail}
                      alt={`${invitation.title} invitation for ${invitation.coupleOrEventName}`}
                      width={373}
                      height={807}
                      priority={index === 1}
                      sizes="(min-width: 640px) 230px, 40vw"
                      className="h-auto w-full"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
