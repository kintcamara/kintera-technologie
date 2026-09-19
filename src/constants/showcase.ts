/** Contenu de la visualisation « chaîne de livraison » affichée dans le hero. */
export interface PipelineStage {
  name: string;
  detail: string;
  duration: string;
  state: "done" | "running";
}

export const PIPELINE_BRANCH = "main";
export const PIPELINE_COMMIT = "a7f3c21";

export const PIPELINE_STAGES: PipelineStage[] = [
  { name: "build", detail: "image docker · multi-stage", duration: "48 s", state: "done" },
  { name: "test", detail: "unitaires + fonctionnels", duration: "1 m 12", state: "done" },
  { name: "scan", detail: "dépendances · secrets", duration: "22 s", state: "done" },
  { name: "deploy:staging", detail: "environnement de recette", duration: "31 s", state: "done" },
  { name: "deploy:prod", detail: "déploiement progressif", duration: "en cours", state: "running" },
];

/** Trois preuves de sérieux affichées sous le hero. */
export const HERO_PROOFS: { value: string; label: string }[] = [
  { value: "05", label: "expertises complémentaires" },
  { value: "24 h", label: "délai de réponse" },
  { value: "0", label: "dépendance à l'agence" },
];
