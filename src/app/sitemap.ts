import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";
import { publishedInvitations } from "@/data/invitations";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/invitations", priority: 0.9 },
    { path: "/services", priority: 0.8 },
    { path: "/packages", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ].map(({ path, priority }) => ({
    url: absoluteUrl(siteConfig.siteUrl, path),
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));

  const invitationRoutes = publishedInvitations.map((invitation) => ({
    url: absoluteUrl(siteConfig.siteUrl, `/invitations/${invitation.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...invitationRoutes];
}
