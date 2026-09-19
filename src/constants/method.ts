import type { Engagement, Metric, ProcessStep, ValueItem } from "./types";

/** Les quatre temps d'une mission Kintera. */
export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Cadrage",
    duration: "3 à 5 jours",
    text: "Nous écoutons le besoin métier avant de parler technique. À la sortie, vous savez ce qui sera construit, dans quel ordre, pour quel budget — et ce que nous vous déconseillons de construire.",
    outputs: ["Note de cadrage", "Périmètre priorisé", "Budget et calendrier"],
  },
  {
    step: "02",
    title: "Architecture",
    duration: "1 à 2 semaines",
    text: "Choix des technologies, modèle de données, schéma d'infrastructure et maquettes des écrans clés. Les décisions structurantes sont prises et documentées avant la première ligne de code.",
    outputs: ["Schéma d'architecture", "Design system", "Environnements prêts"],
  },
  {
    step: "03",
    title: "Construction",
    duration: "Itérations de 2 semaines",
    text: "Développement par incréments livrés en recette à chaque fin d'itération. Vous testez du logiciel réel, pas des captures d'écran, et vous réorientez tant que c'est peu coûteux.",
    outputs: ["Version testable", "Démonstration", "Rapport d'avancement"],
  },
  {
    step: "04",
    title: "Exploitation",
    duration: "En continu",
    text: "Mise en production progressive, supervision, correctifs et évolutions. Le code, l'infrastructure et la documentation vous appartiennent : vous pouvez partir quand vous voulez.",
    outputs: ["Supervision active", "Documentation", "Transfert de compétences"],
  },
];

/** Engagements contractuels mis en avant sur la page d'accueil. */
export const ENGAGEMENTS: Engagement[] = [
  {
    icon: "shield",
    title: "Le code vous appartient",
    text: "Dépôt Git à votre nom, infrastructure sur vos comptes, documentation à jour. Aucune dépendance artificielle à l'agence.",
  },
  {
    icon: "gauge",
    title: "Budget annoncé, budget tenu",
    text: "Chiffrage détaillé par lot. Toute évolution de périmètre est chiffrée et validée avant d'être engagée.",
  },
  {
    icon: "loop",
    title: "Une démonstration toutes les deux semaines",
    text: "Vous voyez le produit avancer en continu. Pas d'effet tunnel, pas de découverte désagréable à la livraison.",
  },
  {
    icon: "spark",
    title: "Des équipes réduites et seniors",
    text: "Deux à quatre personnes qui connaissent votre projet, pas une rotation de profils juniors facturés au forfait.",
  },
];

/** Repères chiffrés : engagements de service, pas statistiques marketing. */
export const METRICS: Metric[] = [
  {
    value: "24 h",
    label: "Délai de réponse",
    detail: "Toute demande entrante reçoit une réponse argumentée sous 24 heures ouvrées.",
  },
  {
    value: "2 sem.",
    label: "Rythme de livraison",
    detail: "Une version testable et une démonstration à chaque fin d'itération.",
  },
  {
    value: "99,9 %",
    label: "Disponibilité visée",
    detail: "Objectif de disponibilité des plateformes que nous exploitons, supervision incluse.",
  },
  {
    value: "100 %",
    label: "Réversibilité",
    detail: "Code, infrastructure et documentation transférables à tout moment, sans frais de sortie.",
  },
];

/** Ce qui nous distingue — page Agence. */
export const VALUES: ValueItem[] = [
  {
    title: "L'ingénierie avant la mode",
    text: "Nous choisissons des technologies éprouvées, que vos équipes pourront recruter et maintenir dans cinq ans. Une nouveauté n'entre dans un projet que si elle résout un problème réel.",
  },
  {
    title: "Dire non fait partie du travail",
    text: "Nous déconseillons régulièrement des fonctionnalités, des refontes complètes ou des budgets surdimensionnés. Un projet réussi est souvent un projet réduit au bon périmètre.",
  },
  {
    title: "La production est le seul juge",
    text: "Une fonctionnalité n'existe pas tant qu'elle n'est pas déployée, supervisée et utilisée. C'est pour cela que nous automatisons la livraison dès le premier jour.",
  },
  {
    title: "Transmettre, pas retenir",
    text: "Nous documentons, nous formons, nous laissons une base saine. Notre réussite se mesure à votre autonomie, pas à la durée de notre contrat.",
  },
];

/** Cas d'usage types, formulés sans référence client nominative. */
export const USE_CASES: ValueItem[] = [
  {
    title: "Plateforme métier sur mesure",
    text: "Gestion d'annonces, de candidatures, de stocks ou d'interventions : back-office, API et application mobile pour les équipes terrain.",
  },
  {
    title: "Modernisation d'un existant",
    text: "Reprise d'une application vieillissante : remise sous tests, conteneurisation, migration d'hébergement sans interruption de service.",
  },
  {
    title: "Industrialisation de la livraison",
    text: "Passage de mises en production manuelles et risquées à des déploiements automatisés, traçables et réversibles en une commande.",
  },
];
