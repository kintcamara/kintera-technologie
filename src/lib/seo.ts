import type { Metadata } from "next";

import { CORE_KEYWORDS, MARKETS, SITE } from "@/constants";

/** Construit une URL absolue à partir d'un chemin interne. */
export function absoluteUrl(path = "/"): string {
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Balises hreflang par défaut.
 *
 * Le site est entièrement en français et sert les trois marchés visés :
 * on déclare donc une version linguistique unique plus un `x-default`,
 * plutôt que de dupliquer la même URL par pays (ce que les moteurs
 * ignorent). Les pages de marché, elles, se déclarent entre elles :
 * voir `marketLanguages()`.
 */
function defaultLanguages(path: string): Record<string, string> {
  return {
    fr: absoluteUrl(path),
    "x-default": absoluteUrl(path),
  };
}

/** Hreflang croisé entre les pages France / Belgique / Suisse. */
export function marketLanguages(): Record<string, string> {
  const languages: Record<string, string> = {
    "x-default": absoluteUrl("/marches"),
  };

  for (const market of MARKETS) {
    languages[market.hreflang] = absoluteUrl(`/marches/${market.slug}`);
  }

  return languages;
}

export interface BuildMetadataInput {
  title: string;
  description: string;
  /** Chemin interne de la page, avec la barre oblique initiale */
  path: string;
  keywords?: string[];
  /** Locales alternatives annoncées à Open Graph */
  ogLocale?: string;
  /** Remplace les balises hreflang par défaut */
  languages?: Record<string, string>;
  /** Retire la page de l'index des moteurs */
  noIndex?: boolean;
  /** `false` pour conserver le gabarit « %s · Kintera Technologie » */
  absoluteTitle?: boolean;
}

/**
 * Fabrique les métadonnées d'une page : titre, description, URL canonique,
 * hreflang, Open Graph et carte Twitter, à partir d'une seule déclaration.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  ogLocale = SITE.locale,
  languages,
  noIndex,
  absoluteTitle,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = absoluteTitle ? title : `${title} · ${SITE.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ?? CORE_KEYWORDS,
    alternates: {
      canonical: url,
      languages: languages ?? defaultLanguages(path),
    },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: ogLocale,
      alternateLocale: MARKETS.map((market) => market.ogLocale).filter(
        (locale) => locale !== ogLocale,
      ),
      url,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
  };
}
