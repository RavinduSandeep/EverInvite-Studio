import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/siteConfig";

/**
 * Social sharing card, generated rather than stored as a binary asset so it
 * always matches whatever is set in siteConfig.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fbf8f3",
          color: "#1c1a17",
          fontFamily: "Georgia, serif",
          padding: "80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#a8823f",
          }}
        >
          {`${siteConfig.shortName} Studio`}
        </div>

        <div
          style={{
            marginTop: 36,
            fontSize: 76,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Beautiful web invitations for unforgettable celebrations
        </div>

        <div
          style={{
            marginTop: 40,
            width: 160,
            height: 1,
            backgroundColor: "#d8bf92",
          }}
        />

        <div style={{ marginTop: 36, fontSize: 28, color: "#4b463f" }}>
          Weddings · Engagements · Homecomings · Celebrations
        </div>
      </div>
    ),
    size,
  );
}
