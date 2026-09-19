import { SERVICES } from "./services";
import { SITE } from "./site";

/* ------------------------------------------------------------------ */
/* Marchés ciblés                                                      */
/* ------------------------------------------------------------------ */

export interface MarketHighlight {
  title: string;
  text: string;
}

export interface Market {
  /** Segment d'URL : /marches/[slug] */
  slug: string;
  /** Nom du pays */
  country: string;
  /** Code ISO, affiché dans les repères */
  code: string;
  /** Tournure locative employée dans les titres : « en France », « en Suisse » */
  inCountry: string;
  /** Attribut hreflang de la page */
  hreflang: string;
  /** Locale Open Graph */
  ogLocale: string;
  /** Titre de la balise <title> */
  metaTitle: string;
  /** Meta description (150–160 caractères) */
  metaDescription: string;
  /** Titre principal de la page */
  heading: string;
  /** Accroche sous le titre */
  lead: string;
  /** Corps de texte */
  body: string[];
  /** Arguments propres au marché */
  highlights: MarketHighlight[];
  /** Modalités concrètes : devise, facturation, conformité, horaires */
  practical: { label: string; value: string }[];
  /** Villes citées pour les recherches locales */
  cities: string[];
  /** Requêtes visées */
  keywords: string[];
  /** Questions fréquentes propres au marché */
  faq: { question: string; answer: string }[];
}

export const MARKETS: Market[] = [
  {
    slug: "france",
    country: "France",
    code: "FR",
    inCountry: "en France",
    hreflang: "fr-FR",
    ogLocale: "fr_FR",
    metaTitle: "Agence DevOps & développement en France",
    metaDescription:
      "Agence technique pour les entreprises françaises : DevOps et CI/CD, développement backend, frontend et mobile, gestion de projets IT. Devis sous 5 jours.",
    heading: "Votre agence technique pour le marché français",
    lead: "Nous accompagnons des startups, PME et ETI françaises sur l'ensemble de leur chaîne logicielle : infrastructure, développement, mise en production et pilotage.",
    body: [
      "Les équipes françaises qui nous contactent ont souvent le même point de départ : un produit qui fonctionne, une mise en production qui fait peur, et une dette technique qui ralentit chaque nouvelle fonctionnalité. Nous intervenons sur les trois à la fois — automatiser la livraison, assainir le code, redonner de la visibilité au pilotage.",
      "Nous travaillons à distance avec, au maximum, une heure de décalage horaire : les réunions se calent sans contrainte, les urgences se traitent dans la journée. Les déplacements sur site sont possibles pour le cadrage, les comités de pilotage et les mises en production sensibles.",
      "Nos livrables sont pensés pour un contexte français : documentation en français, code et commentaires en anglais selon vos conventions, hébergement chez un fournisseur européen si vos données l'exigent, et conformité RGPD traitée dès la conception plutôt qu'en fin de projet.",
    ],
    highlights: [
      {
        title: "Même fuseau horaire, ou presque",
        text: "Une heure d'écart au maximum : réunions quotidiennes, réactivité en journée, astreinte alignée sur vos horaires ouvrés.",
      },
      {
        title: "Hébergement européen",
        text: "OVHcloud, Scaleway, AWS Paris : vos données restent en France ou dans l'Union européenne si votre secteur l'impose.",
      },
      {
        title: "RGPD dès la conception",
        text: "Minimisation des données, durées de conservation, registre des traitements, chiffrement : intégrés à l'architecture, pas ajoutés après coup.",
      },
      {
        title: "Un coût maîtrisé",
        text: "Un budget sensiblement inférieur à celui d'une ESN parisienne, à niveau d'ingénierie équivalent, sans rotation d'équipe.",
      },
    ],
    practical: [
      { label: "Devise", value: "Euro (EUR)" },
      { label: "Facturation", value: "Hors taxes, autoliquidation de la TVA pour les entreprises assujetties" },
      { label: "Décalage horaire", value: "0 à 1 heure" },
      { label: "Langue de travail", value: "Français, documentation technique en anglais sur demande" },
      { label: "Conformité", value: "RGPD, hébergement UE possible" },
    ],
    cities: [
      "Paris",
      "Lyon",
      "Marseille",
      "Toulouse",
      "Bordeaux",
      "Lille",
      "Nantes",
      "Strasbourg",
      "Rennes",
      "Nice",
    ],
    keywords: [
      "agence DevOps France",
      "prestataire CI/CD France",
      "agence développement web France",
      "développement backend sur mesure",
      "agence application mobile France",
      "externalisation développement informatique",
      "gestion de projet IT externalisée",
    ],
    faq: [
      {
        question: "Comment se passe la facturation depuis l'étranger ?",
        answer:
          "Nous facturons hors taxes. Pour une entreprise française assujettie disposant d'un numéro de TVA intracommunautaire, la TVA est autoliquidée par vos soins selon le régime des prestations de services. Votre comptable confirmera le traitement applicable à votre situation.",
      },
      {
        question: "Pouvez-vous héberger nos données en France ?",
        answer:
          "Oui. Nous déployons couramment sur OVHcloud, Scaleway ou les régions européennes d'AWS et de Google Cloud. L'infrastructure est créée sur vos propres comptes : vous en gardez la propriété et la maîtrise des coûts.",
      },
      {
        question: "Intervenez-vous sur site ?",
        answer:
          "Pour les moments qui le justifient : atelier de cadrage, comité de pilotage trimestriel, mise en production critique. Le quotidien se gère à distance, ce qui évite de facturer des déplacements sans valeur ajoutée.",
      },
    ],
  },
  {
    slug: "belgique",
    country: "Belgique",
    code: "BE",
    inCountry: "en Belgique",
    hreflang: "fr-BE",
    ogLocale: "fr_BE",
    metaTitle: "Agence DevOps & développement en Belgique",
    metaDescription:
      "Partenaire technique des entreprises belges : DevOps, CI/CD, développement web et mobile, pilotage de projets IT. Interfaces FR/NL/EN, conformité RGPD.",
    heading: "Votre partenaire technique en Belgique",
    lead: "De Bruxelles à Anvers, nous construisons et exploitons les plateformes d'entreprises belges qui cherchent une équipe d'ingénierie fiable plutôt qu'un fournisseur de plus.",
    body: [
      "Le marché belge a une particularité que nous traitons sérieusement : le multilinguisme. Une plateforme destinée au public belge se pense en français et en néerlandais, souvent en anglais, dès le modèle de données — pas au moment de la traduction. Nous mettons en place l'internationalisation en amont, y compris pour les contenus saisis par vos équipes.",
      "Nous intervenons aussi bien sur des plateformes métier internes que sur des produits destinés au public : gestion d'interventions, portails clients, applications mobiles terrain, intégrations avec des systèmes existants.",
      "Nos engagements contractuels restent identiques quel que soit le pays : code et infrastructure à votre nom, budget chiffré par lot, démonstration toutes les deux semaines, aucune dépendance à l'agence.",
    ],
    highlights: [
      {
        title: "Multilingue par construction",
        text: "Interfaces et contenus FR / NL / EN pensés dès l'architecture, avec gestion des traductions par vos équipes.",
      },
      {
        title: "Zone euro, facturation simple",
        text: "Facturation en euros, autoliquidation de la TVA pour les entreprises disposant d'un numéro BE.",
      },
      {
        title: "Proximité horaire",
        text: "Une heure d'écart au maximum : vos équipes et les nôtres travaillent sur le même créneau.",
      },
      {
        title: "RGPD et APD",
        text: "Traitement des données conforme au RGPD, documentation exploitable en cas de contrôle de l'Autorité de protection des données.",
      },
    ],
    practical: [
      { label: "Devise", value: "Euro (EUR)" },
      { label: "Facturation", value: "Hors taxes, autoliquidation de la TVA pour les assujettis belges" },
      { label: "Décalage horaire", value: "0 à 1 heure" },
      { label: "Langues", value: "Français, néerlandais et anglais pour les interfaces livrées" },
      { label: "Conformité", value: "RGPD, hébergement UE possible" },
    ],
    cities: [
      "Bruxelles",
      "Anvers",
      "Gand",
      "Liège",
      "Charleroi",
      "Bruges",
      "Namur",
      "Louvain",
      "Mons",
      "Louvain-la-Neuve",
    ],
    keywords: [
      "agence DevOps Belgique",
      "développement web Bruxelles",
      "agence informatique Belgique",
      "développement application mobile Belgique",
      "prestataire IT Bruxelles",
      "intégration continue Belgique",
      "gestion de projet informatique Belgique",
    ],
    faq: [
      {
        question: "Gérez-vous les projets bilingues français / néerlandais ?",
        answer:
          "Oui. Nous mettons en place l'internationalisation dès la conception : routage par langue, contenus traduisibles en base, interface d'administration permettant à vos équipes de gérer les traductions sans passer par un développeur.",
      },
      {
        question: "Travaillez-vous avec des marchés publics ou des appels d'offres ?",
        answer:
          "Nous pouvons produire les pièces techniques d'un dossier de réponse — architecture, méthodologie, plan de charge, réversibilité — en sous-traitance d'un intégrateur local ou en accompagnement direct de votre équipe.",
      },
      {
        question: "Quel est le délai pour démarrer ?",
        answer:
          "Comptez une à deux semaines entre la validation du devis et la première itération : le temps de cadrer le périmètre, d'ouvrir les accès et de préparer les environnements.",
      },
    ],
  },
  {
    slug: "suisse",
    country: "Suisse",
    code: "CH",
    inCountry: "en Suisse romande",
    hreflang: "fr-CH",
    ogLocale: "fr_CH",
    metaTitle: "Développement & DevOps en Suisse romande",
    metaDescription:
      "Ingénierie logicielle pour les entreprises suisses : DevOps, CI/CD, développement sur mesure, hébergement en Suisse, conformité nLPD et RGPD.",
    heading: "Ingénierie logicielle pour la Suisse romande",
    lead: "Genève, Lausanne, Neuchâtel : nous apportons aux entreprises suisses une capacité d'ingénierie sérieuse, avec les exigences de rigueur et de confidentialité que suppose ce marché.",
    body: [
      "La Suisse impose deux contraintes que nous traitons de front : la localisation des données et la protection de la vie privée. Nous déployons chez des hébergeurs suisses — Infomaniak, Exoscale — lorsque vos données doivent rester sur le territoire, et nous documentons les traitements selon la nLPD comme selon le RGPD quand vos clients sont européens.",
      "Le niveau d'exigence technique attendu ici correspond à notre manière de travailler : tests automatisés, revue de code systématique, infrastructure décrite en code, procédures de restauration réellement testées. Rien d'exceptionnel — simplement ce qui devrait être la norme.",
      "Nous intervenons en complément d'équipes internes, sur des projets où le recrutement local est long ou coûteux, sans imposer la rotation de profils propre aux grandes sociétés de services.",
    ],
    highlights: [
      {
        title: "Hébergement en Suisse",
        text: "Infomaniak, Exoscale ou cloud privé : vos données restent sur le territoire suisse lorsque c'est nécessaire.",
      },
      {
        title: "nLPD et RGPD",
        text: "Registre des traitements, durées de conservation, chiffrement au repos et en transit, documentation en français.",
      },
      {
        title: "Facturation en CHF ou EUR",
        text: "Devis dans la devise de votre choix, hors TVA suisse ; l'acquisition de prestations depuis l'étranger relève de l'impôt sur les acquisitions.",
      },
      {
        title: "Une alternative au recrutement",
        text: "Une capacité d'ingénierie mobilisable en quelques semaines, sans charge salariale ni délai de recrutement local.",
      },
    ],
    practical: [
      { label: "Devise", value: "Franc suisse (CHF) ou euro (EUR)" },
      { label: "Facturation", value: "Hors TVA suisse ; impôt sur les acquisitions à la charge du destinataire assujetti" },
      { label: "Décalage horaire", value: "0 à 1 heure" },
      { label: "Langue de travail", value: "Français, anglais technique" },
      { label: "Conformité", value: "nLPD, RGPD, hébergement en Suisse possible" },
    ],
    cities: [
      "Genève",
      "Lausanne",
      "Zurich",
      "Berne",
      "Bâle",
      "Neuchâtel",
      "Fribourg",
      "Sion",
      "Montreux",
      "Nyon",
    ],
    keywords: [
      "agence DevOps Suisse",
      "développement logiciel Genève",
      "agence informatique Lausanne",
      "prestataire IT Suisse romande",
      "hébergement données Suisse",
      "développement application mobile Suisse",
      "conformité nLPD développement",
    ],
    faq: [
      {
        question: "Pouvez-vous garantir que nos données restent en Suisse ?",
        answer:
          "Oui, en déployant chez un hébergeur suisse (Infomaniak, Exoscale) ou sur votre propre infrastructure. L'ensemble de la chaîne — base de données, sauvegardes, journaux, fichiers — est alors localisé sur le territoire suisse, ce que nous documentons dans le dossier d'architecture.",
      },
      {
        question: "Comment traitez-vous la conformité nLPD ?",
        answer:
          "Nous appliquons les mêmes principes que pour le RGPD — minimisation, finalité, durées de conservation, sécurité — et produisons la documentation technique nécessaire à votre registre des activités de traitement. L'analyse juridique reste du ressort de votre conseil.",
      },
      {
        question: "Facturez-vous en francs suisses ?",
        answer:
          "Oui, en CHF ou en EUR selon votre préférence. Nos devis sont hors TVA suisse : en tant que destinataire assujetti, l'impôt sur les acquisitions vous incombe. Votre fiduciaire confirmera le traitement exact.",
      },
    ],
  },
];

export const MARKETS_BY_SLUG: Record<string, Market> = Object.fromEntries(
  MARKETS.map((market) => [market.slug, market]),
);

/* ------------------------------------------------------------------ */
/* Référencement : valeurs par défaut et métadonnées par page          */
/* ------------------------------------------------------------------ */

/** Mots-clés génériques, repris sur toutes les pages. */
export const CORE_KEYWORDS: string[] = [
  "agence DevOps",
  "agence informatique francophone",
  "intégration continue",
  "déploiement continu",
  "développement backend sur mesure",
  "développement frontend Next.js",
  "développement application mobile",
  "gestion de projet IT",
  "infogérance applicative",
  "Kintera Technologie",
];

/** Mots-clés géographiques dérivés des marchés ciblés. */
export const MARKET_KEYWORDS: string[] = MARKETS.flatMap((market) =>
  market.keywords.slice(0, 3),
);

/** Mots-clés dérivés du catalogue de services. */
export const SERVICE_KEYWORDS: string[] = SERVICES.map(
  (service) => `${service.label} pour entreprises`,
);

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

/** Métadonnées des pages fixes : une seule source de vérité. */
export const PAGE_SEO = {
  home: {
    title: `${SITE.name} — ${SITE.baseline}`,
    description:
      "Agence DevOps et développement sur mesure pour la France, la Belgique et la Suisse : CI/CD, backend, frontend, mobile, gestion de projets IT.",
    path: "/",
    keywords: [...CORE_KEYWORDS, ...MARKET_KEYWORDS],
  },
  services: {
    title: "Expertises : DevOps & développement",
    description:
      "Cinq expertises : chaînes CI/CD, API et bases de données, interfaces web, applications iOS et Android, pilotage de projets IT. Livrables détaillés.",
    path: "/services",
    keywords: [...CORE_KEYWORDS, ...SERVICE_KEYWORDS],
  },
  agence: {
    title: "L'agence : studio d'ingénierie",
    description:
      "Ni freelance isolé, ni ESN anonyme : une équipe réduite et stable, des engagements contractuels vérifiables et du code que vos équipes peuvent reprendre.",
    path: "/agence",
    keywords: [...CORE_KEYWORDS, "studio ingénierie logicielle", "équipe technique externalisée"],
  },
  contact: {
    title: "Contact : parlons de votre projet",
    description:
      "Premier échange gratuit et sans engagement. Avis technique argumenté, estimation de charge et risques identifiés, par e-mail ou sur WhatsApp.",
    path: "/contact",
    keywords: [...CORE_KEYWORDS, "devis développement informatique", "consultation technique gratuite"],
  },
  marches: {
    title: "France, Belgique, Suisse : nos marchés",
    description:
      "Kintera Technologie accompagne les entreprises de France, Belgique et Suisse romande : collaboration, facturation, hébergement et conformité.",
    path: "/marches",
    keywords: [...CORE_KEYWORDS, ...MARKET_KEYWORDS],
  },
} satisfies Record<string, PageSeo>;
