import type { Metadata } from "next";

import { ButtonLink, SectionLabel } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-bone">
      <div
        aria-hidden="true"
        className="grid-paper pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(70%_70%_at_50%_30%,#000,transparent_72%)]"
      />
      <div className="shell relative flex flex-col items-start gap-7 py-24">
        <SectionLabel>Erreur 404</SectionLabel>
        <h1 className="display text-[clamp(2.5rem,8vw,5rem)] text-ink">
          Cette page n&apos;existe pas
          <br />
          (ou plus).
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-muted">
          Le lien est peut-être obsolète. Revenez à l&apos;accueil ou consultez
          directement nos expertises.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Retour à l&apos;accueil</ButtonLink>
          <ButtonLink href="/services" variant="outline">
            Voir les expertises
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
