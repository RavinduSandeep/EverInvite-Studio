import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";
import { absoluteUrl } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl(siteConfig.siteUrl, "/sitemap.xml"),
  };
}
