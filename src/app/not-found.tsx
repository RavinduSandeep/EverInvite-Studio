import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <Container className="max-w-xl text-center">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">
          This page could not be found
        </h1>
        <div aria-hidden="true" className="mx-auto my-7 h-px w-16 bg-line-strong" />
        <p className="text-base leading-relaxed text-ink-soft">
          The link may be old, or the design you were looking for may have been renamed.
          The full gallery is only one tap away.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/invitations" size="lg">
            Browse the designs
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/" variant="outline" size="lg">
            Back to home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
