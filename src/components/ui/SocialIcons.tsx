/**
 * Small social glyphs.
 * The icon library dropped its brand marks, so these are drawn here. They are
 * decorative: every link that uses one carries its own accessible label.
 */

type IconProps = { className?: string };

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M14.5 8.5h2.2M14.5 8.5V6.9c0-1 .8-1.9 1.9-1.9h.8" />
      <path d="M14.5 8.5V19" />
      <path d="M11 12h3.5" />
      <rect x="3" y="3" width="18" height="18" rx="5" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M13.5 4v10.2a3.3 3.3 0 1 1-3.3-3.3" />
      <path d="M13.5 4c.3 2 1.9 3.5 4 3.7" />
    </svg>
  );
}
