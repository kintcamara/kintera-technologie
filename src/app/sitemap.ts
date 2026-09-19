import type { MetadataRoute } from "next";

import { MARKETS, SERVICES, SITE } from "@/constants";

/** Générée à la compilation : le site reste exportable en statique. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = ["", "/services", "/marches", "/agence", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE.url}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...SERVICES.map((service) => ({
      url: `${SITE.url}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...MARKETS.map((market) => ({
      url: `${SITE.url}/marches/${market.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
