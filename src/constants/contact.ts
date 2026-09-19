import { SERVICES } from "./services";
import type { IconKey } from "./types";

/** Options du champ « budget » du formulaire. */
export const BUDGET_OPTIONS: string[] = [
  "Moins de 5 000 €",
  "5 000 € – 15 000 €",
  "15 000 € – 40 000 €",
  "Plus de 40 000 €",
  "À définir ensemble",
];

/** Options du champ « échéance ». */
export const TIMELINE_OPTIONS: string[] = [
  "Dès que possible",
  "Sous 1 à 3 mois",
  "Dans plus de 3 mois",
  "Simple prise de renseignements",
];

/** Options du champ « besoin », alimentées par la liste des services. */
export const SUBJECT_OPTIONS: string[] = [
  ...SERVICES.map((service) => service.label),
  "Audit d'un projet existant",
  "Autre demande",
];

export interface ContactChannel {
  icon: IconKey;
  label: string;
  value: string;
  href: string;
  hint: string;
  external?: boolean;
}

/** Ce qui se passe après l'envoi d'un message. */
export const NEXT_STEPS: { title: string; text: string }[] = [
  {
    title: "Accusé de réception",
    text: "Nous confirmons la bonne réception de votre demande sous 24 heures ouvrées, avec le nom de votre interlocuteur.",
  },
  {
    title: "Échange de 30 minutes",
    text: "Visioconférence ou appel : vous exposez le contexte, nous posons les questions qui font bouger le chiffrage.",
  },
  {
    title: "Proposition écrite",
    text: "Sous cinq jours ouvrés : périmètre, approche technique, calendrier et budget détaillé lot par lot.",
  },
];

/** Champs du formulaire, décrits en données pour rester modifiables. */
export interface FormFieldConfig {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  autoComplete?: string;
  /** Largeur sur la grille à deux colonnes */
  full?: boolean;
}

export const FORM_FIELDS: FormFieldConfig[] = [
  {
    name: "name",
    label: "Nom et prénom",
    type: "text",
    required: true,
    placeholder: "Awa Diallo",
    autoComplete: "name",
  },
  {
    name: "company",
    label: "Société",
    type: "text",
    placeholder: "Nom de votre structure",
    autoComplete: "organization",
  },
  {
    name: "email",
    label: "E-mail professionnel",
    type: "email",
    required: true,
    placeholder: "vous@entreprise.com",
    autoComplete: "email",
  },
  {
    name: "phone",
    label: "Téléphone / WhatsApp",
    type: "tel",
    placeholder: "+212 600 000 000",
    autoComplete: "tel",
  },
  {
    name: "subject",
    label: "Votre besoin",
    type: "select",
    required: true,
    options: SUBJECT_OPTIONS,
  },
  {
    name: "budget",
    label: "Budget envisagé",
    type: "select",
    options: BUDGET_OPTIONS,
  },
  {
    name: "timeline",
    label: "Échéance",
    type: "select",
    options: TIMELINE_OPTIONS,
  },
  {
    name: "message",
    label: "Décrivez votre projet",
    type: "textarea",
    required: true,
    full: true,
    placeholder:
      "Contexte, objectifs, existant technique, contraintes de délai… Quelques lignes suffisent pour démarrer.",
  },
];
