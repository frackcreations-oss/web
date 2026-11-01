import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return locales.flatMap((locale) => [
    {
      url: `${SITE_URL}/${locale}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: locale === "en" ? 1 : 0.9,
    },
    {
      url: `${SITE_URL}/${locale}/package`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]);
}
