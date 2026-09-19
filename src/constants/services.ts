import type { Service } from "./types";

export const SERVICES: Service[] = [
  {
    slug: "devops-ci-cd",
    index: "01",
    label: "DevOps & CI/CD",
    title: "DevOps, intégration et déploiement continus",
    tagline: "Mettre en production doit être un non-événement.",
    summary:
      "Chaînes d'intégration et de déploiement automatisées, infrastructure décrite en code, supervision et astreinte. Vos équipes livrent plusieurs fois par semaine sans redouter la mise en production.",
    metaDescription:
      "Automatisez vos déploiements : pipelines CI/CD, Docker, Kubernetes, Terraform, supervision et astreinte. Mettez en production plusieurs fois par semaine.",
    body: [
      "Une équipe produit avance à la vitesse de sa chaîne de livraison. Nous industrialisons la vôtre : construction, tests, analyse de qualité, signature des artefacts, déploiement progressif et retour arrière immédiat en cas d'incident.",
      "Nous décrivons l'ensemble de l'infrastructure sous forme de code versionné : plus de serveur configuré à la main, plus d'environnement que personne n'ose reconstruire. Chaque environnement — développement, recette, production — se recrée à l'identique.",
      "Nous restons ensuite disponibles pour l'exploitation : tableaux de bord, alertes utiles (et uniquement celles-là), analyses post-incident et optimisation continue des coûts d'hébergement.",
    ],
    deliverables: [
      {
        title: "Pipelines automatisés",
        text: "Build, tests, sécurité et déploiement déclenchés à chaque fusion, avec environnements éphémères par branche.",
      },
      {
        title: "Infrastructure as Code",
        text: "Terraform et Ansible, environnements reproductibles, secrets centralisés et chiffrés.",
      },
      {
        title: "Conteneurisation & orchestration",
        text: "Images Docker optimisées, déploiement Kubernetes ou Swarm, montée en charge automatique.",
      },
      {
        title: "Observabilité",
        text: "Métriques, journaux et traces unifiés, alertes calibrées, tableaux de bord lisibles par les équipes métier.",
      },
      {
        title: "Plan de reprise",
        text: "Sauvegardes testées, procédures de restauration documentées, exercices de retour arrière.",
      },
      {
        title: "Transfert de compétences",
        text: "Documentation d'exploitation et sessions de prise en main avec vos équipes internes.",
      },
    ],
    stack: [
      "Docker",
      "Kubernetes",
      "GitLab CI",
      "GitHub Actions",
      "Terraform",
      "Nginx",
      "Prometheus",
      "Grafana",
      "AWS",
      "OVH",
      "HOSTINGER",

    ],
    icon: "pipeline",
  },
  {
    slug: "backend",
    index: "02",
    label: "Développement backend",
    title: "Développement backend & architecture d'API",
    tagline: "Le socle qui tient la charge, les années et les audits.",
    summary:
      "API robustes, modèles de données pensés pour durer, authentification, paiements et intégrations tierces. Un backend testé, documenté et lisible par la prochaine équipe.",
    metaDescription:
      "API REST et GraphQL, modèles de données, authentification, paiements et intégrations tierces. Backend Laravel, Node.js ou Python testé et documenté.",
    body: [
      "Nous construisons le cœur de vos applications : modèle de données, règles métier, API consommées par vos interfaces web et mobiles, traitements asynchrones et intégrations avec l'existant.",
      "Chaque service est livré avec sa documentation d'API, ses tests automatisés et ses journaux exploitables. L'objectif n'est pas seulement que le code fonctionne aujourd'hui, mais qu'un développeur qui découvre le projet dans deux ans comprenne immédiatement comment il s'articule.",
      "Nous intervenons aussi bien sur de nouvelles plateformes que sur la reprise d'un existant : audit, remise sous tests, découpage progressif d'un monolithe, migration de base de données sans interruption de service.",
    ],
    deliverables: [
      {
        title: "API REST ou GraphQL",
        text: "Contrats versionnés, documentation OpenAPI, pagination, filtrage et gestion fine des erreurs.",
      },
      {
        title: "Modèle de données",
        text: "Schéma relationnel normalisé, migrations versionnées, index et requêtes optimisés.",
      },
      {
        title: "Sécurité applicative",
        text: "Authentification JWT ou OAuth2, rôles et permissions, limitation de débit, journalisation des accès.",
      },
      {
        title: "Traitements asynchrones",
        text: "Files d'attente, tâches planifiées, notifications transactionnelles et e-mails.",
      },
      {
        title: "Intégrations",
        text: "Paiement, SMS, cartographie, ERP, services internes : connecteurs isolés et testables.",
      },
      {
        title: "Tests & qualité",
        text: "Tests unitaires et fonctionnels, revue de code systématique, analyse statique en intégration continue.",
      },
    ],
    stack: [
      "Laravel",
      "Symfony",
      "PHP 8",
      "Node.js",
      "NestJS",
      "Python",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "RabbitMQ",
      "OpenAPI",
    ],
    icon: "server",
  },
  {
    slug: "frontend",
    index: "03",
    label: "Développement frontend",
    title: "Développement frontend & interfaces produit",
    tagline: "Une interface rapide, accessible et fidèle à votre marque.",
    summary:
      "Applications web et interfaces métier construites avec Next.js, React et TypeScript. Design system, performances mesurées, accessibilité et référencement traités dès la première ligne.",
    metaDescription:
      "Applications web et back-offices en Next.js, React et TypeScript : design system, performances mesurées, accessibilité et référencement dès la conception.",
    body: [
      "Nous développons les interfaces que vos clients et vos équipes utilisent tous les jours : site vitrine, plateforme SaaS, espace client, back-office métier, tableau de bord de pilotage.",
      "Nous travaillons à partir d'un design system : typographie, couleurs, composants, états d'interaction. Le résultat est cohérent d'un écran à l'autre, s'adapte du mobile au grand écran, et reste utilisable au clavier comme au lecteur d'écran.",
      "La performance n'est pas une option de fin de projet : rendu serveur, découpage du code, optimisation des images et budget de performance suivi à chaque livraison.",
    ],
    deliverables: [
      {
        title: "Design system",
        text: "Bibliothèque de composants typés, tokens de couleur et de typographie, variantes documentées.",
      },
      {
        title: "Applications Next.js",
        text: "Rendu serveur, routage moderne, données mises en cache, formulaires validés côté client et serveur.",
      },
      {
        title: "Back-offices métier",
        text: "Tableaux filtrables, exports, gestion des rôles, interfaces pensées pour un usage quotidien intensif.",
      },
      {
        title: "Accessibilité",
        text: "Navigation clavier, contrastes vérifiés, sémantique HTML et attributs ARIA maîtrisés.",
      },
      {
        title: "Performance & SEO",
        text: "Core Web Vitals suivis, métadonnées, données structurées, plan de site et rendu social.",
      },
      {
        title: "Intégration continue",
        text: "Prévisualisation automatique de chaque branche pour valider avant la mise en production.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "Vite",
      "Storybook",
      "Playwright",
      "Figma",
    ],
    icon: "layers",
  },
  {
    slug: "mobile",
    index: "04",
    label: "Développement mobile",
    title: "Applications mobiles iOS & Android",
    tagline: "Une base de code, deux magasins, une expérience native.",
    summary:
      "Applications multiplateformes Flutter et React Native : mode hors-ligne, notifications, paiement, géolocalisation, publication sur l'App Store et Google Play et suivi des versions.",
    metaDescription:
      "Applications iOS et Android en Flutter ou React Native : mode hors-ligne, notifications, paiement, publication sur l'App Store et Google Play.",
    body: [
      "Nous concevons des applications mobiles qui tiennent compte du terrain : réseau instable, appareils d'entrée de gamme, usage à une main, batterie limitée. Le mode hors-ligne et la synchronisation différée sont pensés dès la conception, pas ajoutés à la fin.",
      "Une seule base de code alimente iOS et Android, ce qui divise le coût de développement et surtout celui de la maintenance. Nous passons au natif uniquement lorsque la fonctionnalité l'exige réellement.",
      "Nous prenons en charge la publication complète : comptes développeur, fiches des magasins, captures, politique de confidentialité, versions de test internes puis déploiement progressif auprès de vos utilisateurs.",
    ],
    deliverables: [
      {
        title: "Application multiplateforme",
        text: "Flutter ou React Native, architecture modulaire, thème clair et sombre, animations sobres.",
      },
      {
        title: "Mode hors-ligne",
        text: "Base locale, file de synchronisation, résolution des conflits, reprise automatique du réseau.",
      },
      {
        title: "Services connectés",
        text: "Notifications push, paiement mobile, cartographie, authentification biométrique, partage de fichiers.",
      },
      {
        title: "Publication",
        text: "Signature, fiches App Store et Google Play, versions de test, déploiement progressif.",
      },
      {
        title: "Livraison continue mobile",
        text: "Compilation automatisée et distribution aux testeurs à chaque validation.",
      },
      {
        title: "Suivi en production",
        text: "Rapports de plantage, mesure d'usage, tableau de bord d'adoption des versions.",
      },
    ],
    stack: [
      "Flutter",
      "Dart",
      "React Native",
      "Expo",
      "Firebase",
      "SQLite",
      "Fastlane",
      "App Store Connect",
      "Google Play Console",
    ],
    icon: "device",
  },
  {
    slug: "gestion-de-projets-it",
    index: "05",
    label: "Gestion de projets IT",
    title: "Gestion et pilotage de projets IT",
    tagline: "Un interlocuteur unique, un budget tenu, zéro zone grise.",
    summary:
      "Cadrage, chiffrage, pilotage d'équipes internes ou de prestataires, comités réguliers et reporting clair. Nous prenons la responsabilité de la livraison, pas seulement du planning.",
    metaDescription:
      "Cadrage, chiffrage, pilotage d'équipes et de prestataires, comités et reporting : un interlocuteur unique, responsable de la livraison de votre projet IT.",
    body: [
      "Beaucoup de projets n'échouent pas sur la technique mais sur le pilotage : périmètre qui glisse, décisions qui attendent, équipes qui travaillent sans priorité partagée. Nous prenons ce rôle en charge.",
      "Nous commençons par un cadrage sans complaisance : objectifs métier, périmètre minimum utile, risques, budget et trajectoire de livraison. Puis nous pilotons l'exécution au rythme de vos contraintes, avec un point d'avancement écrit et une démonstration à chaque itération.",
      "Nous pouvons également auditer un projet en difficulté, reprendre la relation avec un prestataire existant, ou structurer votre équipe interne : rituels, outillage, définition du « terminé », indicateurs de qualité.",
    ],
    deliverables: [
      {
        title: "Cadrage & chiffrage",
        text: "Ateliers de cadrage, expression de besoin, périmètre priorisé, budget et calendrier argumentés.",
      },
      {
        title: "Direction de projet",
        text: "Pilotage des équipes internes et prestataires, arbitrages, gestion des risques et du périmètre.",
      },
      {
        title: "Reporting",
        text: "Point d'avancement écrit chaque semaine, comité de pilotage mensuel, indicateurs partagés.",
      },
      {
        title: "Audit de projet",
        text: "Diagnostic technique et organisationnel, plan de remédiation chiffré et priorisé.",
      },
      {
        title: "Recette & conduite du changement",
        text: "Plan de recette, formation des utilisateurs, documentation, reprise des données.",
      },
      {
        title: "Contractualisation",
        text: "Cahier des charges, critères d'acceptation, jalons de facturation et clauses de réversibilité.",
      },
    ],
    stack: [
      "Scrum",
      "Kanban",
      "Jira",
      "Linear",
      "Notion",
      "Confluence",
      "Figma",
      "Cahier des charges",
      "Comité de pilotage",
    ],
    icon: "compass",
  },
];

/** Accès direct par slug (pages de détail). */
export const SERVICES_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((service) => [service.slug, service]),
);
