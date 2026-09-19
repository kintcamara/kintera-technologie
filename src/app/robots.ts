import type { MetadataRoute } from "next";

import { SITE } from "@/constants";

/** Générée à la compilation : le site reste exportable en statique. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
