import type { NavItem } from "./types";

/** Identité de l'agence. */
export const SITE = {
  name: "Kintera Technologie",
  shortName: "Kintera",
  legalName: "Kintera Technologie",
  baseline: "Studio d'ingénierie logicielle & DevOps",
  /** Phrase d'accroche principale (hero) */
  promise: "Nous concevons, livrons et opérons vos plateformes numériques.",
  description:
    "Kintera Technologie est un studio d'ingénierie logicielle : DevOps et CI/CD, développement backend, frontend et mobile, pilotage de projets IT. Des équipes réduites, des livraisons régulières, du code que vos équipes peuvent reprendre.",
  /**
   * Domaine de production. Défini par NEXT_PUBLIC_SITE_URL sur
   * l'hébergement ; la valeur de repli sert au développement local.
   * Il alimente les URL canoniques, le plan de site et les balises hreflang.
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kintera-technologie.com").replace(
    /\/$/,
    "",
  ),
  locale: "fr_FR",
  foundedYear: 2021,
  /** Zones d'intervention affichées dans le pied de page */
  coverage: ["Maroc", "Afrique de l'Ouest", "Europe", "À distance"],
} as const;

/** Coordonnées : une seule source de vérité pour tout le site. */
export const CONTACT = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "kintcamarapro@gmail.com",
  /** Format international sans espaces, utilisé pour les liens wa.me */
  whatsappRaw: process.env.NEXT_PUBLIC_WHATSAPP_RAW ?? "212600554582",
  /** Format lisible affiché à l'écran */
  whatsappDisplay: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY ?? "+212 600 554 582",
  /** Tel qu'indiqué par le client (indicatif international en 00) */
  phoneDial: "00212600554582",
  responseTime: "Réponse sous 24 h ouvrées",
  availability: "Ouvert à de nouveaux projets",
} as const;

/** Message pré-rempli lors d'un clic sur le bouton WhatsApp. */
export const WHATSAPP_PREFILL =
  "Bonjour Kintera Technologie, je souhaite échanger au sujet d'un projet.";

export const LINKS = {
  whatsapp: `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(
    WHATSAPP_PREFILL,
  )}`,
  email: `mailto:${CONTACT.email}`,
  phone: `tel:+${CONTACT.whatsappRaw}`,
} as const;

export const NAV: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Marchés", href: "/marches" },
  { label: "Méthode", href: "/#methode" },
  { label: "Agence", href: "/agence" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV: { title: string; items: NavItem[] }[] = [
  {
    title: "Expertises",
    items: [
      { label: "DevOps & CI/CD", href: "/services/devops-ci-cd" },
      { label: "Développement backend", href: "/services/backend" },
      { label: "Développement frontend", href: "/services/frontend" },
      { label: "Développement mobile", href: "/services/mobile" },
      { label: "Gestion de projets IT", href: "/services/gestion-de-projets-it" },
    ],
  },
  {
    title: "Marchés",
    items: [
      { label: "France", href: "/marches/france" },
      { label: "Belgique", href: "/marches/belgique" },
      { label: "Suisse romande", href: "/marches/suisse" },
      { label: "Tous les marchés", href: "/marches" },
    ],
  },
  {
    title: "Agence",
    items: [
      { label: "Notre méthode", href: "/#methode" },
      { label: "Qui sommes-nous", href: "/agence" },
      { label: "Technologies", href: "/#technologies" },
      { label: "Questions fréquentes", href: "/#faq" },
      { label: "Démarrer un projet", href: "/contact" },
    ],
  },
];

/** Bandeau défilant sous le hero. */
export const MARQUEE_ITEMS: string[] = [
  "Kubernetes",
  "Docker",
  "GitLab CI",
  "GitHub Actions",
  "Terraform",
  "NestJS",
  "Next.js",
  "Laravel",
  "Symfony",
  "Node.js",
  "Flutter",
  "PostgreSQL",
  "Observabilité",
  "Infrastructure as Code",
  "Zéro interruption",
];
