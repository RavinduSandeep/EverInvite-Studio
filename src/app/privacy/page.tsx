import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles the information you share when you enquire about a digital invitation.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

/**
 * General, editable privacy policy.
 * TODO: have this reviewed before launch, and adjust it if you later add
 * analytics, a newsletter, or any service that stores enquiries.
 */
export default function PrivacyPage() {
  return (
    <section className="bg-ivory py-12 sm:py-16">
      <Container className="max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl leading-[1.1] sm:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-ink-muted">
          This page explains, in plain language, what happens to the information you give
          us.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink-soft">
          <div>
            <h2 className="text-xl text-ink">Information you send us</h2>
            <p className="mt-2">
              When you use the enquiry form on this website, your answers are turned into
              a message inside your own browser. Pressing send opens WhatsApp or your
              email app with that message ready. The form does not upload your details to
              this website or to any third party, and nothing you type is stored here.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-ink">Information we keep</h2>
            <p className="mt-2">
              Once you contact us, we keep the messages you send and the details you give
              us so we can prepare a quotation and build your invitation. That normally
              includes names, contact numbers, event details and any photographs you
              share with us. We keep them for as long as we are working together and for
              a reasonable period afterwards for our records.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-ink">How we use it</h2>
            <p className="mt-2">
              Your information is used to answer your enquiry, prepare your quotation and
              design your invitation. We do not sell it and we do not share it with
              anyone who is not helping to deliver your invitation.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-ink">Your invitation and your guests</h2>
            <p className="mt-2">
              A published invitation is a public web page for anyone who has the link.
              You decide what appears on it. If your invitation collects replies from
              guests, those replies reach you through the channel you choose, such as
              WhatsApp. Please only include details about other people, including family
              names and photographs, if you have their agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-ink">This website</h2>
            <p className="mt-2">
              This site does not set advertising cookies and does not track you across
              other websites. Our hosting provider keeps standard server logs, which is
              normal for any website. Fonts are loaded from Google Fonts.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-ink">Asking us to remove your details</h2>
            <p className="mt-2">
              You can ask us at any time for a copy of what we hold about you, or ask us
              to delete it. Write to{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-gold underline underline-offset-4"
              >
                {siteConfig.email}
              </a>{" "}
              and we will confirm what we have done.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-ink">Changes to this policy</h2>
            <p className="mt-2">
              If the way we work changes, this page will be updated. The version you are
              reading is the one that applies today.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
