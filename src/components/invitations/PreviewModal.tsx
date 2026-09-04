"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Monitor, Smartphone, X } from "lucide-react";
import type { InvitationSample } from "@/types";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";

type Device = "mobile" | "desktop";

/** How long to wait for the live invitation before offering the fallback. */
const LOAD_TIMEOUT_MS = 9000;

export default function PreviewModal({
  invitation,
  onClose,
  returnFocusTo,
}: {
  invitation: InvitationSample;
  onClose: () => void;
  /** The control that opened the dialog, so focus can be handed straight back. */
  returnFocusTo?: React.RefObject<HTMLElement | null>;
}) {
  const [device, setDevice] = useState<Device>("mobile");
  // Both are stored as "which frame this applies to", so switching device
  // resets them during render rather than through an effect.
  const [loadedDevice, setLoadedDevice] = useState<Device | null>(null);
  const [timedOutDevice, setTimedOutDevice] = useState<Device | null>(null);
  const loaded = loadedDevice === device;
  const timedOut = timedOutDevice === device;

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const hasLive = Boolean(invitation.liveUrl);
  const screenshot =
    device === "mobile"
      ? (invitation.mobileScreenshot ?? invitation.thumbnail)
      : (invitation.desktopScreenshot ?? invitation.thumbnail);

  const close = useCallback(() => {
    onClose();
  }, [onClose]);

  // Move focus into the dialog and lock the page behind it. Focus is handed
  // back in the cleanup, which runs after the dialog has been removed — doing
  // it any earlier and the browser simply drops focus onto the body.
  useEffect(() => {
    // Captured on mount: the control that opened the dialog stays mounted for
    // as long as the dialog is open, so this stays valid.
    const opener =
      returnFocusTo?.current ?? (document.activeElement as HTMLElement | null);
    closeRef.current?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      // Deferred by a frame: React runs this cleanup before it removes the
      // dialog from the DOM, and that removal would drop focus onto the body.
      if (opener) requestAnimationFrame(() => opener.focus());
    };
    // The trigger ref is stable for the life of the dialog.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Escape closes; Tab cycles inside the dialog only.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [close]);

  // If the invitation refuses to be embedded, stop showing the spinner and
  // offer to open it in a new tab instead.
  useEffect(() => {
    if (!hasLive || loaded) return;
    const timer = window.setTimeout(() => setTimedOutDevice(device), LOAD_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
  }, [hasLive, loaded, device]);

  return (
    <div
      className="fixed inset-0 z-70 flex flex-col bg-ink/70 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Preview of ${invitation.title}, ${invitation.coupleOrEventName}`}
        className="flex h-full w-full flex-col"
      >
        {/* Toolbar */}
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 bg-ivory px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <p className="truncate font-display text-lg leading-tight">
              {invitation.title}
            </p>
            <p className="truncate text-xs text-ink-muted">
              {invitation.coupleOrEventName}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div
              role="group"
              aria-label="Preview size"
              className="flex rounded-full border border-line bg-paper p-1"
            >
              <button
                type="button"
                onClick={() => setDevice("mobile")}
                aria-pressed={device === "mobile"}
                className={cn(
                  "flex min-h-9 items-center gap-1.5 rounded-full px-3 text-xs transition-colors",
                  device === "mobile" ? "bg-ink text-ivory" : "text-ink-soft",
                )}
              >
                <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                Mobile
              </button>
              <button
                type="button"
                onClick={() => setDevice("desktop")}
                aria-pressed={device === "desktop"}
                className={cn(
                  "flex min-h-9 items-center gap-1.5 rounded-full px-3 text-xs transition-colors",
                  device === "desktop" ? "bg-ink text-ivory" : "text-ink-soft",
                )}
              >
                <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
                Desktop
              </button>
            </div>

            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close preview"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Stage */}
        <div className="flex flex-1 items-center justify-center overflow-auto p-4 sm:p-6">
          <div
            className={cn(
              "relative h-full w-full overflow-hidden rounded-2xl border border-line bg-paper shadow-lift",
              device === "mobile" ? "max-w-[390px]" : "max-w-5xl",
            )}
          >
            {hasLive ? (
              <>
                <iframe
                  // The iframe is created only when the dialog is mounted, so
                  // nothing loads until a visitor asks to preview.
                  src={invitation.liveUrl}
                  title={`Live preview of ${invitation.title}`}
                  loading="lazy"
                  key={device}
                  onLoad={() => setLoadedDevice(device)}
                  className="h-full w-full border-0 bg-paper"
                />
                {!loaded ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-paper px-6 text-center">
                    {timedOut ? (
                      <>
                        <p className="text-sm text-ink-soft">
                          This invitation cannot be shown inside another page.
                        </p>
                        <ButtonLink
                          href={invitation.liveUrl!}
                          external
                          size="sm"
                          variant="outline"
                        >
                          Open the invitation
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </ButtonLink>
                      </>
                    ) : (
                      <>
                        <span
                          aria-hidden="true"
                          className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-gold"
                        />
                        <p className="text-sm text-ink-muted">Loading the invitation…</p>
                      </>
                    )}
                  </div>
                ) : null}
              </>
            ) : (
              // No live link yet: show the captured screenshot instead.
              <div className="relative h-full w-full overflow-y-auto bg-cream">
                <Image
                  src={screenshot}
                  alt={`${invitation.title} invitation for ${invitation.coupleOrEventName}, ${device} view`}
                  width={device === "mobile" ? 373 : 1291}
                  height={807}
                  className="h-auto w-full"
                />
              </div>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 bg-ivory px-4 py-3 sm:px-6">
          <p className="text-xs text-ink-muted">
            {hasLive
              ? "A live preview of the published invitation."
              : "Screenshots of the finished invitation. This design is not published publicly."}
          </p>
          <div className="flex gap-2">
            {hasLive ? (
              <ButtonLink href={invitation.liveUrl!} external size="sm" variant="outline">
                Open in new tab
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            ) : null}
            <ButtonLink href={`/contact?design=${invitation.slug}`} size="sm">
              Use this design
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
