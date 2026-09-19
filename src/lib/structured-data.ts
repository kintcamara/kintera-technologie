import { CONTACT, MARKETS, SERVICES, SITE } from "@/constants";
import type { FaqItem, Service } from "@/constants";
import { absoluteUrl } from "@/lib/seo";

/**
 * Données structurées schema.org.
 *
 * Elles décrivent l'agence, ses prestations et ses pages aux moteurs de
 * recherche : elles conditionnent l'affichage enrichi (fil d'Ariane,
 * questions fréquentes) et la compréhension des zones desservies.
 */

const ORGANIZATION_ID = `${SITE.url}/#organisation`;
const WEBSITE_ID = `${SITE.url}/#site`;

/** Zones desservies, exprimées en pays schema.org. */
const AREA_SERVED = MARKETS.map((market) => ({
  "@type": "Country",
  name: market.country,
  identifier: market.code,
}));

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.description,
    slogan: SITE.baseline,
    url: SITE.url,
    email: CONTACT.email,
    telephone: `+${CONTACT.whatsappRaw}`,
    foundingDate: String(SITE.foundedYear),
    areaServed: AREA_SERVED,
    knowsLanguage: ["fr", "en"],
    availableLanguage: ["fr", "en"],
    priceRange: "€€",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations d'ingénierie logicielle",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
          url: absoluteUrl(`/services/${service.slug}`),
        },
      })),
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACT.email,
        telephone: `+${CONTACT.whatsappRaw}`,
        availableLanguage: ["fr", "en"],
        areaServed: MARKETS.map((market) => market.code),
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "fr",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    alternateName: service.label,
    description: service.summary,
    url: absoluteUrl(`/services/${service.slug}`),
    serviceType: service.label,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: AREA_SERVED,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact"),
      availableLanguage: ["fr", "en"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Livrables — ${service.label}`,
      itemListElement: service.deliverables.map((deliverable) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: deliverable.title,
          description: deliverable.text,
        },
      })),
    },
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
