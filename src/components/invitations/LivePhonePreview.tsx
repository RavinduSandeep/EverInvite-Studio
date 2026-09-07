"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { InvitationSample } from "@/types";
import { PhoneFrame } from "@/components/ui/DeviceFrames";

/**
 * The invitation running live inside a phone bezel.
 *
 * The page is rendered at a real phone viewport and then scaled down to fit
 * the frame, so the invitation lays itself out exactly as it does on a guest's
 * phone rather than squeezing into a 280px viewport. Designs without a live
 * URL, and live ones that fail to appear in time, show the screenshot instead.
 */

/** Viewport the invitation is rendered at before scaling. */
const DEVICE_WIDTH = 390;
/** Matches the frame's 9:18 screen. */
const DEVICE_HEIGHT = DEVICE_WIDTH * 2;
/** How long to wait for the live invitation before falling back to the screenshot. */
const LOAD_TIMEOUT_MS = 9000;

export default function LivePhonePreview({
  invitation,
  screenWidth = 280,
}: {
  invitation: InvitationSample;
  /** Visible width of the phone screen in CSS pixels. */
  screenWidth?: number;
}) {
  const [loaded, setLoaded] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  const live = invitation.liveUrl;
  const screenshot = invitation.mobileScreenshot ?? invitation.thumbnail;
  const scale = screenWidth / DEVICE_WIDTH;

  useEffect(() => {
    if (!live || loaded) return;
    const timer = window.setTimeout(() => setTimedOut(true), LOAD_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
  }, [live, loaded]);

  const showLive = Boolean(live) && !(timedOut && !loaded);

  return (
    // The bezel adds 8px of padding on each side of the screen.
    <figure style={{ width: screenWidth + 16 }} className="max-w-full shrink-0">
      <PhoneFrame screenClassName="aspect-9/18">
        {showLive ? (
          <>
            <iframe
              src={live}
              title={`Live preview of ${invitation.title}`}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              style={{
                width: DEVICE_WIDTH,
                height: DEVICE_HEIGHT,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
              className="absolute top-0 left-0 border-0 bg-cream"
            />
            {!loaded ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-cream">
                <span
                  aria-hidden="true"
                  className="h-7 w-7 animate-spin rounded-full border-2 border-line border-t-gold"
                />
                <p className="text-xs text-ink-muted">Loading the invitation…</p>
              </div>
            ) : null}
          </>
        ) : (
          <Image
            src={screenshot}
            alt={`${invitation.title} invitation shown on a phone`}
            width={373}
            height={807}
            sizes={`${screenWidth}px`}
            className="h-full w-full object-cover object-top"
          />
        )}
      </PhoneFrame>
      <figcaption className="mt-2 flex items-center justify-center gap-2 font-mono text-xs text-ink-faint">
        {showLive ? (
          <>
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full ${loaded ? "bg-emerald-500" : "bg-line"}`}
            />
            live · try it
          </>
        ) : live ? (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gold underline underline-offset-4"
          >
            Open the invitation
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        ) : (
          "mobile"
        )}
      </figcaption>
    </figure>
  );
}
