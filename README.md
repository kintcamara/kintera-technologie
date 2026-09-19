# Kintera Technologie — site vitrine

Site vitrine de l'agence **Kintera Technologie** : Next.js 16 (App Router),
TypeScript et Tailwind CSS v4.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production
npm run start      # servir le build
npm run typecheck  # vérification TypeScript seule
```

Node 20 ou supérieur est recommandé.

## Structure

```
src/
├── app/                     Routes (App Router)
│   ├── page.tsx             Accueil
│   ├── services/            Liste des expertises
│   │   └── [slug]/          Page détaillée par expertise
│   ├── marches/             France, Belgique, Suisse
│   │   └── [pays]/          Page détaillée par marché
│   ├── agence/              Présentation de l'agence
│   ├── contact/             Formulaire et coordonnées
│   ├── api/contact/         Réception des demandes du formulaire
│   ├── sitemap.ts           Plan de site
│   ├── robots.ts            robots.txt
│   ├── opengraph-image.tsx  Image de partage générée à la compilation
│   └── globals.css          Système de design (couleurs, typographies)
├── components/              Composants d'interface
│   └── sections/            Sections de la page d'accueil
├── constants/               TOUT le contenu éditorial du site
└── lib/                     seo.ts (métadonnées), structured-data.ts (schema.org),
                             contact.ts (validation), cn.ts
```

## Modifier le contenu

Aucun texte métier n'est écrit en dur dans les composants : tout se trouve
dans `src/constants`.

| Fichier | Contenu |
| --- | --- |
| `site.ts` | Nom, accroche, **e-mail, WhatsApp**, navigation, zones d'intervention, bandeau défilant |
| `services.ts` | Les cinq expertises : titres, textes, livrables, technologies |
| `method.ts` | Étapes de la méthode, engagements, repères chiffrés, valeurs, cas d'usage |
| `stack.ts` | Technologies groupées par famille |
| `faq.ts` | Questions fréquentes |
| `contact.ts` | Champs du formulaire, budgets, échéances, étapes de suivi |
| `seo.ts` | Marchés ciblés (France, Belgique, Suisse), mots-clés, métadonnées de chaque page |
| `showcase.ts` | Illustration « chaîne de livraison » du hero |
| `types.ts` | Types TypeScript partagés |

Changer une coordonnée (e-mail ou WhatsApp) se fait à un seul endroit :
`src/constants/site.ts`, objet `CONTACT`. Tous les liens `mailto:` et
`wa.me` du site en découlent.

Ajouter une expertise : ajoutez une entrée dans `SERVICES`
(`src/constants/services.ts`). La page de liste, la page de détail
`/services/[slug]`, le menu du pied de page, le plan de site et les options
du formulaire se mettent à jour automatiquement.

## Système de design

Défini dans `src/app/globals.css` (bloc `@theme`) :

- **Couleurs** — encre `#14110f`, papier `#f5f2ec` / `#fbf9f5`,
  terre cuite `#c2451f` (accent), braise `#e4572e` (accent sur fond sombre),
  vert profond `#1e4d40`. Tous les couples texte/fond utilisés respectent un
  contraste d'au moins 4,5:1 (AA).
- **Typographies** — Bricolage Grotesque (titres), Manrope (texte courant),
  IBM Plex Mono (libellés techniques), chargées via `next/font`.
- **Animations** — désactivées automatiquement si le visiteur a activé
  « réduire les animations » dans son système.

## Référencement (France, Belgique, Suisse)

Le site vise les trois marchés francophones d'Europe. Tout est piloté
depuis `src/constants/seo.ts` :

- **Pages de marché** — `/marches/france`, `/marches/belgique`,
  `/marches/suisse` : contenu propre à chaque pays (devise, facturation,
  conformité, hébergement, villes, questions fréquentes), plus la page
  d'ensemble `/marches`.
- **Métadonnées** — chaque page déclare son titre (≤ 65 caractères), sa
  description (140–160 caractères), son URL canonique et ses mots-clés via
  `buildMetadata()` (`src/lib/seo.ts`). Une seule fonction, aucun oubli.
- **hreflang** — les pages générales déclarent `fr` + `x-default` ; les
  trois pages de marché se déclarent entre elles en `fr-FR`, `fr-BE` et
  `fr-CH`, avec `x-default` sur `/marches`.
- **Open Graph** — `og:locale` adapté au marché, `og:locale:alternate`
  pour les deux autres, et une image de partage 1200 × 630 générée à la
  compilation (`src/app/opengraph-image.tsx`).
- **Données structurées** (`src/lib/structured-data.ts`) —
  `ProfessionalService` avec `areaServed` FR/BE/CH et catalogue d'offres,
  `WebSite`, `Service` sur chaque page d'expertise, `FAQPage` sur
  l'accueil et les pages de marché, `BreadcrumbList` sur les pages
  profondes.
- **Plan de site et robots** — `/sitemap.xml` régénéré automatiquement à
  partir des constantes, `/robots.txt` pointant vers lui.

Deux réglages à faire avant la mise en ligne : `NEXT_PUBLIC_SITE_URL`
(le domaine réel, sinon les URL canoniques pointent vers le domaine par
défaut) et `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` pour la Search Console.

Ce qui reste hors du code, et qui pèse autant que la technique : une
fiche Google Business Profile, quelques liens entrants depuis des
annuaires professionnels crédibles, et des contenus publiés
régulièrement sur les sujets que vos clients cherchent.

## Formulaire de contact

`POST /api/contact` valide la demande côté serveur, limite le débit
(5 requêtes/minute/IP) et filtre les robots via un champ piège.

L'envoi d'e-mail est optionnel : renseignez `NEXT_PUBLIC_RESEND_API_KEY` et
`NEXT_PUBLIC_CONTACT_EMAIL` (voir `.env.example`) pour l'activer. Sans
configuration, la route répond `not_configured` et l'interface ouvre
automatiquement la messagerie du visiteur, avec un repli WhatsApp.

## Déploiement continu (GitHub Actions → VPS)

Le dépôt embarque une chaîne complète, sans registre d'images : GitHub
Actions construit l'image Docker, l'exporte en archive, la copie sur le
serveur par SSH, la charge et redémarre le conteneur.

Fichiers concernés :

| Fichier | Rôle |
| --- | --- |
| `.github/workflows/deploy-frontend.yml` | La chaîne complète (racine du dépôt) |
| `Dockerfile` | Image multi-étapes, sortie `standalone`, exécution sans root |
| `build-prod.sh` | Construction locale ou en intégration continue |
| `deploy/nginx.conf.example` | Reverse proxy et certificat TLS |
| `src/app/api/health/route.ts` | Sonde de santé du conteneur |

### Déroulé

1. **Contrôle qualité** — `npm ci`, `npm run typecheck`, `npm run build`.
   Un échec bloque le déploiement.
2. **Image Docker** — `build-prod.sh` produit `kintera:frontend`.
3. **Transfert** — `docker save` puis copie SSH de l'archive vers `/tmp`.
4. **Mise en ligne** — l'image en place est étiquetée `kintera:previous`,
   la nouvelle est chargée, le conteneur redémarre sur le port 5310
   (exposé uniquement en local, Nginx fait le reste).
5. **Vérification** — la sonde `/api/health` est interrogée pendant une
   minute. **En cas d'échec, la version précédente est automatiquement
   remise en service** et la chaîne s'arrête en erreur.

Les branches `develop` et les pull requests s'arrêtent à l'étape 1 :
seuls `master`, `main` et un lancement manuel (`workflow_dispatch`)
déploient réellement.

### Secrets et variables à créer sur GitHub

`Settings → Secrets and variables → Actions`

**Secrets** (obligatoires) : `SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY`,
`SSH_PORT`.
**Secrets** (optionnels, formulaire de contact et Search Console) :
`NEXT_PUBLIC_RESEND_API_KEY`, `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_CONTACT_TO_EMAIL`,
`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
**Variable** : `NEXT_PUBLIC_SITE_URL` — le domaine de production.

### Prérequis sur le VPS

```bash
# Docker
curl -fsSL https://get.docker.com | sh
usermod -aG docker "$USER"      # puis reconnexion

# Clé de déploiement (à générer sur votre poste, pas sur le serveur)
ssh-keygen -t ed25519 -C "github-actions" -f ~/.ssh/kintera_deploy
ssh-copy-id -i ~/.ssh/kintera_deploy.pub user@votre-serveur
# Contenu de ~/.ssh/kintera_deploy  → secret SSH_PRIVATE_KEY
```

Puis Nginx et le certificat TLS, à partir de
`deploy/nginx.conf.example`.

### Construire et tester l'image en local

```bash
NEXT_PUBLIC_SITE_URL=https://kintera-technologie.com ./build-prod.sh
docker run --rm -p 5310:3000 kintera:frontend
curl http://localhost:5310/api/health
```

### Retour arrière manuel

```bash
docker stop kintera-frontend && docker rm kintera-frontend
docker run -d --name kintera-frontend --restart unless-stopped \
  -p 127.0.0.1:5310:3000 kintera:previous
```

## En cas de souci d'installation

**« Turbopack is not supported on this platform »** ou
**« Attempted to load @next/swc-… but an error occurred »** : le binaire
natif de Next a été mal téléchargé (fichier tronqué). Réinstallation
propre :

```bash
rm -rf node_modules .next
npm cache clean --force
npm install
```

Si le message persiste, régénérez le verrou pour votre machine
(`rm -f package-lock.json && npm install`) et vérifiez que Node tourne bien
dans l'architecture de la machine : `node -p "process.arch"` doit afficher
`arm64` sur un Mac Apple Silicon (s'il affiche `x64`, Node tourne sous
Rosetta : réinstallez la version arm64).

Dépannage immédiat sans réinstaller, avec Webpack au lieu de Turbopack :

```bash
npm run dev:webpack
```

## Avant la mise en ligne

1. Renseigner `NEXT_PUBLIC_SITE_URL` (voir `.env.example`) : cette valeur
   alimente les métadonnées, le plan de site, les balises hreflang et les
   données structurées.
2. Configurer l'envoi d'e-mails ou conserver le repli messagerie/WhatsApp.
3. Déployer (Vercel, ou `npm run build` puis `npm run start` derrière Nginx).
# kintera-technologie
# kintera-technologie
