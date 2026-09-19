import { Icon } from "@/components/icons";
import { PIPELINE_BRANCH, PIPELINE_COMMIT, PIPELINE_STAGES } from "@/constants";
import { cn } from "@/lib/cn";

/**
 * Panneau d'illustration : une chaîne de déploiement en cours d'exécution.
 * Purement décoratif, mais fidèle à ce que nous mettons en place.
 */
export function PipelinePanel() {
  return (
    <figure className="relative w-full border border-ink/12 bg-ink text-bone shadow-[0_28px_70px_-40px_rgba(20,17,15,0.85)]">
      {/* Repères d'angle façon plan technique */}
      <span
        aria-hidden="true"
        className="absolute -left-px -top-px size-3 border-l border-t border-ember"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-px -right-px size-3 border-b border-r border-ember"
      />

      <figcaption className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3.5">
        <span className="flex items-center gap-2.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-invert">
          <Icon name="pipeline" className="size-4 text-ember" />
          pipeline · {PIPELINE_BRANCH}
        </span>
        <span className="font-mono text-[0.65rem] tracking-[0.12em] text-muted-invert">
          #{PIPELINE_COMMIT}
        </span>
      </figcaption>

      <ul className="divide-y divide-white/[0.07]">
        {PIPELINE_STAGES.map((stage) => (
          <li key={stage.name} className="flex items-center gap-4 px-5 py-4">
            <span
              className={cn(
                "flex size-6 shrink-0 items-center justify-center rounded-full border",
                stage.state === "done"
                  ? "border-moss/60 bg-moss/15 text-moss"
                  : "border-ember/60 bg-ember/15 text-ember",
              )}
              aria-hidden="true"
            >
              {stage.state === "done" ? (
                <Icon name="check" className="size-3.5" />
              ) : (
                <span className="size-1.5 animate-blink rounded-full bg-ember" />
              )}
            </span>

            <span className="min-w-0 flex-1">
              <span className="block truncate font-mono text-[0.78rem] tracking-[0.02em] text-bone">
                {stage.name}
              </span>
              <span className="block truncate text-[0.72rem] text-muted-invert">
                {stage.detail}
              </span>
            </span>

            <span
              className={cn(
                "shrink-0 font-mono text-[0.68rem] tracking-[0.08em]",
                stage.state === "done" ? "text-muted-invert" : "text-ember",
              )}
            >
              {stage.duration}
            </span>

            <span className="sr-only">
              {stage.state === "done" ? "étape terminée" : "étape en cours"}
            </span>
          </li>
        ))}
      </ul>

      <div className="border-t border-white/10 px-5 py-4">
        <div className="flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-invert">
          <span>trafic basculé</span>
          <span className="text-ember">62 %</span>
        </div>
        <div className="mt-2.5 h-1 w-full overflow-hidden bg-white/10" aria-hidden="true">
          <span className="block h-full w-[62%] bg-ember" />
        </div>
        <p className="mt-3 font-mono text-[0.65rem] tracking-[0.08em] text-muted-invert">
          retour arrière disponible · 1 commande
        </p>
      </div>
    </figure>
  );
}
