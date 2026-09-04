import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms under which ${siteConfig.name} designs and delivers digital invitations.`,
  alternates: { canonical: "/terms" },
};

/**
 * General, editable terms.
 * TODO: review these before launch and align them with the wording you use in
 * your written quotations, which always take precedence.
 */
export default function TermsPage() {
  return (
    <section className="bg-ivory py-12 sm:py-16">
      <Container className="max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-ink-muted">
          These terms describe how we work. The written quotation you receive is the
          agreement between us, and it takes precedence over anything on this page.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink-soft">
          <div>
            <h2 className="text-xl text-ink">What we provide</h2>
            <p className="mt-2">
              We design and build a digital invitation for your event, based on the
              package and features listed in your quotation. Anything not written in that
              quotation is not included.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-ink">What we need from you</h2>
            <p className="mt-2">
              Accurate event details, the names as you want them spelled, and any
              photographs you would like used. Delays in sending these move the delivery
              date. Please make sure you have the right to use any photograph or music
              you send us.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-ink">Revisions</h2>
            <p className="mt-2">
              Your quotation states how many rounds of revisions are included. Further
              changes, or changes that alter the agreed design direction, are quoted
              separately. We do not offer unlimited revisions.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-ink">Timelines</h2>
            <p className="mt-2">
              Delivery dates are agreed in writing once we understand the scope of your
              invitation. We keep to them where we can, and we tell you promptly if
              anything is likely to move.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-ink">Payment</h2>
            <p className="mt-2">
              Payment terms, including any deposit, are set out in your quotation. Work
              begins once the agreed deposit has been received.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-ink">Publishing and hosting</h2>
            <p className="mt-2">
              We publish your invitation and keep it online for the period stated in your
              quotation, which can be extended by arrangement. We do not promise that any
              link will remain online indefinitely. Occasional short interruptions caused
              by our hosting provider are outside our control.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-ink">Ownership</h2>
            <p className="mt-2">
              Your content, including your photographs and text, remains yours. The
              design and code of the invitation remain ours, and you receive the right to
              use the published invitation for your event. We may show the finished
              invitation as an example of our work unless you ask us not to.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-ink">Cancellations</h2>
            <p className="mt-2">
              If you cancel after work has begun, the portion of the work already
              completed remains payable. Any refund position is set out in your
              quotation.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-ink">Questions</h2>
            <p className="mt-2">
              Anything unclear here can be asked before you commit. Write to{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-gold underline underline-offset-4"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
