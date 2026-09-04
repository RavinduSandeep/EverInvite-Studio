/** Join class names, dropping anything falsy. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Absolute URL for metadata, built from the configured production domain. */
export function absoluteUrl(siteUrl: string, path = ""): string {
  const base = siteUrl.replace(/\/$/, "");
  if (!path) return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** "2026" — evaluated at render time so the footer never goes stale. */
export function currentYear(): number {
  return new Date().getFullYear();
}
