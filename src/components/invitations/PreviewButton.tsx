"use client";

import { useRef, useState } from "react";
import { Eye, ExternalLink } from "lucide-react";
import type { InvitationSample } from "@/types";
import { Button, ButtonLink } from "@/components/ui/Button";
import PreviewModal from "./PreviewModal";

/**
 * Preview control.
 *
 * When the invitation is published, this opens the real invitation website in
 * a new tab, which is what visitors expect from a portfolio piece. Designs
 * without a live URL open an on-site preview of their screenshots instead, so
 * the button always leads somewhere useful.
 */
export default function PreviewButton({
  invitation,
  variant = "outline",
  size = "sm",
  className,
  label = "Preview",
}: {
  invitation: InvitationSample;
  variant?: "primary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  if (invitation.liveUrl) {
    return (
      <ButtonLink
        href={invitation.liveUrl}
        external
        variant={variant}
        size={size}
        className={className}
        aria-label={`Open the ${invitation.title} invitation in a new tab`}
      >
        {label}
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </ButtonLink>
    );
  }

  return (
    <>
      <Button
        ref={triggerRef}
        type="button"
        variant={variant}
        size={size}
        className={className}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        <Eye className="h-4 w-4" aria-hidden="true" />
        {label}
      </Button>
      {open ? (
        <PreviewModal
          invitation={invitation}
          returnFocusTo={triggerRef}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}
