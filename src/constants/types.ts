/**
 * Types partagés par l'ensemble des données du site.
 * Toute la donnée éditoriale vit dans `src/constants` : aucun texte métier
 * ne doit être écrit en dur dans les composants.
 */

export type IconKey =
  | "pipeline"
  | "server"
  | "layers"
  | "device"
  | "compass"
  | "shield"
  | "gauge"
  | "spark"
  | "loop"
  | "mail"
  | "whatsapp"
  | "arrow"
  | "check"
  | "clock"
  | "map";

export interface NavItem {
  label: string;
  href: string;
}

export interface Deliverable {
  title: string;
  text: string;
}

export interface Service {
  /** Identifiant d'URL : /services/[slug] */
  slug: string;
  /** Numéro affiché dans l'index éditorial (01, 02, ...) */
  index: string;
  /** Libellé court, utilisé dans les menus et les listes */
  label: string;
  /** Titre long, utilisé en page de détail */
  title: string;
  /** Accroche d'une ligne */
  tagline: string;
  /** Résumé affiché sur la page d'accueil */
  summary: string;
  /** Meta description de la page de détail (150–160 caractères) */
  metaDescription: string;
  /** Corps de texte de la page de détail */
  body: string[];
  /** Ce que le client reçoit concrètement */
  deliverables: Deliverable[];
  /** Technologies et outils mobilisés */
  stack: string[];
  icon: IconKey;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  text: string;
  outputs: string[];
}

export interface StackGroup {
  title: string;
  items: string[];
}

export interface Engagement {
  icon: IconKey;
  title: string;
  text: string;
}

export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ValueItem {
  title: string;
  text: string;
}
