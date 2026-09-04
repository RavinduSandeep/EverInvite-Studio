"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Check, Mail, MessageCircle, X } from "lucide-react";
import { hasWhatsApp, siteConfig } from "@/config/siteConfig";
import { publishedInvitations } from "@/data/invitations";
import { packages } from "@/data/packages";
import { allServiceNames } from "@/data/services";
import { buildEnquiryMessage, enquiryDestination, buildMailtoUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Button, ButtonLink } from "@/components/ui/Button";

const eventTypes = [
  "Wedding",
  "Engagement",
  "Homecoming",
  "Birthday",
  "Baby shower",
  "Anniversary",
  "Corporate event",
  "Other celebration",
];

const heardFromOptions = [
  "Instagram",
  "Facebook",
  "TikTok",
  "A friend or family member",
  "Google search",
  "Saw an invitation you made",
  "Somewhere else",
];

interface Errors {
  name?: string;
  whatsapp?: string;
  eventType?: string;
}

const fieldClass =
  "min-h-12 w-full rounded-xl border border-line bg-paper px-4 text-[0.9375rem] text-ink placeholder:text-ink-muted/70 focus:border-gold focus:outline-none";

const labelClass = "mb-1.5 block text-sm font-medium text-ink";

export default function EnquiryForm() {
  const searchParams = useSearchParams();

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [designSlug, setDesignSlug] = useState(searchParams.get("design") ?? "");
  const [packageId, setPackageId] = useState(searchParams.get("package") ?? "");
  const [colours, setColours] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [heardFrom, setHeardFrom] = useState("");

  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<null | { href: string; channel: "whatsapp" | "email" }>(
    null,
  );

  const selectedDesign = useMemo(
    () => publishedInvitations.find((i) => i.slug === designSlug),
    [designSlug],
  );
  const selectedPackage = useMemo(
    () => packages.find((p) => p.id === packageId),
    [packageId],
  );

  const toggleFeature = (feature: string) => {
    setFeatures((current) =>
      current.includes(feature)
        ? current.filter((f) => f !== feature)
        : [...current, feature],
    );
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please tell us your name.";
    if (!whatsapp.trim()) {
      next.whatsapp = "We need a number to reply to.";
    } else if (whatsapp.replace(/\D/g, "").length < 9) {
      next.whatsapp = "Please enter a complete phone number.";
    }
    if (!eventType) next.eventType = "Please choose the type of event.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      const firstInvalid = document.querySelector<HTMLElement>("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }

    const text = buildEnquiryMessage({
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      email: email.trim() || undefined,
      eventType,
      eventDate: eventDate || undefined,
      designTitle: selectedDesign
        ? `${selectedDesign.title} (${selectedDesign.coupleOrEventName})`
        : undefined,
      designUrl: selectedDesign?.liveUrl,
      packageName: selectedPackage?.name,
      colours: colours.trim() || undefined,
      features,
      message: message.trim() || undefined,
      heardFrom: heardFrom || undefined,
    });

    const destination = enquiryDestination(text);
    // Opened from inside the click handler so it is not treated as a pop-up.
    window.open(destination.href, "_blank", "noopener,noreferrer");
    setSent({ ...destination });
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-paper p-8 text-center shadow-card">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-tint text-gold">
          <Check className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="mt-4 text-2xl">Your enquiry is ready to send</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
          {sent.channel === "whatsapp"
            ? "We opened WhatsApp with your details already written out. Press send there and we will reply with a quotation."
            : "We opened your email app with your details already written out. Press send there and we will reply with a quotation."}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <ButtonLink href={sent.href} external>
            {sent.channel === "whatsapp" ? (
              <>
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Open it again
              </>
            ) : (
              <>
                <Mail className="h-4 w-4" aria-hidden="true" />
                Open it again
              </>
            )}
          </ButtonLink>
          <Button type="button" variant="outline" onClick={() => setSent(null)}>
            Edit my details
          </Button>
        </div>
        <p className="mt-6 text-xs text-ink-muted">
          Nothing was sent anywhere else. Your details stayed in your browser until you
          pressed send.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-line bg-paper p-6 shadow-card sm:p-8"
    >
      {selectedDesign ? (
        <div className="mb-8 flex items-center gap-4 rounded-xl border border-gold/30 bg-gold-tint/40 p-3">
          <Image
            src={selectedDesign.thumbnail}
            alt=""
            width={56}
            height={72}
            className="h-18 w-14 shrink-0 rounded-lg object-cover object-top"
          />
          <div className="min-w-0 flex-1">
            <p className="text-[0.6875rem] tracking-[0.2em] text-gold uppercase">
              Selected design
            </p>
            <p className="truncate font-display text-lg leading-tight">
              {selectedDesign.title}
            </p>
            <p className="truncate text-xs text-ink-muted">
              {selectedDesign.coupleOrEventName}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setDesignSlug("")}
            aria-label="Remove the selected design"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink-muted hover:text-ink"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(fieldClass, errors.name && "border-rose")}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-xs text-rose">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="whatsapp" className={labelClass}>
            WhatsApp number <span className="text-gold">*</span>
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+94 77 123 4567"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            aria-invalid={Boolean(errors.whatsapp)}
            aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
            className={cn(fieldClass, errors.whatsapp && "border-rose")}
          />
          {errors.whatsapp ? (
            <p id="whatsapp-error" className="mt-1.5 text-xs text-rose">
              {errors.whatsapp}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-ink-muted">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="eventType" className={labelClass}>
            Type of event <span className="text-gold">*</span>
          </label>
          <select
            id="eventType"
            name="eventType"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            aria-invalid={Boolean(errors.eventType)}
            aria-describedby={errors.eventType ? "eventType-error" : undefined}
            className={cn(fieldClass, errors.eventType && "border-rose")}
          >
            <option value="">Please choose</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.eventType ? (
            <p id="eventType-error" className="mt-1.5 text-xs text-rose">
              {errors.eventType}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="eventDate" className={labelClass}>
            Event date <span className="text-ink-muted">(or your best guess)</span>
          </label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="design" className={labelClass}>
            Invitation design
          </label>
          <select
            id="design"
            name="design"
            value={designSlug}
            onChange={(e) => setDesignSlug(e.target.value)}
            className={fieldClass}
          >
            <option value="">Not sure yet, or something custom</option>
            {publishedInvitations.map((invitation) => (
              <option key={invitation.slug} value={invitation.slug}>
                {invitation.title} — {invitation.coupleOrEventName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="package" className={labelClass}>
            Package
          </label>
          <select
            id="package"
            name="package"
            value={packageId}
            onChange={(e) => setPackageId(e.target.value)}
            className={fieldClass}
          >
            <option value="">Not sure yet, please advise</option>
            {packages.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="colours" className={labelClass}>
            Preferred colours
          </label>
          <input
            id="colours"
            name="colours"
            type="text"
            placeholder="Ivory and gold, deep green…"
            value={colours}
            onChange={(e) => setColours(e.target.value)}
            className={fieldClass}
          />
        </div>
      </div>

      <fieldset className="mt-7">
        <legend className={labelClass}>Features you would like</legend>
        <p className="mb-3 text-xs text-ink-muted">
          Choose as many as you like. Availability depends on the package.
        </p>
        <div className="grid gap-x-4 gap-y-2 sm:grid-cols-2">
          {allServiceNames.map((feature) => {
            const id = `feature-${feature.toLowerCase().replace(/[^a-z]+/g, "-")}`;
            return (
              <label
                key={feature}
                htmlFor={id}
                className="flex min-h-11 cursor-pointer items-center gap-2.5 text-sm text-ink-soft"
              >
                <input
                  id={id}
                  type="checkbox"
                  checked={features.includes(feature)}
                  onChange={() => toggleFeature(feature)}
                  className="h-4.5 w-4.5 shrink-0 accent-[#a8823f]"
                />
                {feature}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Anything else we should know
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Venue, ceremony timings, how many guests, or anything you have in mind."
            className={cn(fieldClass, "min-h-32 resize-y py-3 leading-relaxed")}
          />
        </div>

        <div>
          <label htmlFor="heardFrom" className={labelClass}>
            How did you find us?
          </label>
          <select
            id="heardFrom"
            name="heardFrom"
            value={heardFrom}
            onChange={(e) => setHeardFrom(e.target.value)}
            className={fieldClass}
          >
            <option value="">Prefer not to say</option>
            {heardFromOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 border-t border-line pt-6">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {hasWhatsApp() ? (
            <>
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Send on WhatsApp
            </>
          ) : (
            <>
              <Mail className="h-4 w-4" aria-hidden="true" />
              Send by email
            </>
          )}
        </Button>
        <p className="mt-3 text-xs leading-relaxed text-ink-muted">
          Your answers are turned into a message you can read and send yourself. Nothing
          is submitted to any other service. Prefer email?{" "}
          <a
            href={buildMailtoUrl(
              `Hello ${siteConfig.name}, I would like to ask about a digital invitation.`,
            )}
            className="text-gold underline underline-offset-4"
          >
            Write to {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </form>
  );
}
