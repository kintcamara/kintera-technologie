import type { Metadata } from "next";

import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaSection, MethodSection } from "@/components/sections";
import { SectionHeading, SectionLabel, StatusPill } from "@/components/ui";
import { CONTACT, METRICS, PAGE_SEO, SERVICES, SITE, VALUES } from "@/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.agence);

export default function AgencePage() {
  return (
    <>
      <PageHero
        label="L'agence"
        title={
          <>
            Un studio à taille humaine,
            <br className="hidden sm:block" /> exigeant sur l&apos;ingénierie.
          </>
        }
        lead={`${SITE.name} réunit des ingénieurs logiciels et des profils d'exploitation autour d'une conviction simple : un logiciel n'a de valeur qu'une fois en production, utilisé, supervisé et maintenable par d'autres que ceux qui l'ont écrit.`}
        aside={
          <div className="flex flex-col items-start gap-4">
            <StatusPill>{CONTACT.availability}</StatusPill>
            <p className="font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.14em] text-muted">
              {SITE.coverage.join(" · ")}
            </p>
          </div>
        }
      />

      <section className="border-b border-ink/10 bg-bone py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            <SectionLabel>Notre position</SectionLabel>
            <h2 className="display text-[clamp(1.8rem,4vw,2.8rem)] text-ink">
              Ni freelance isolé, ni ESN anonyme.
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Le freelance seul finit par devenir un point de fragilité : congés,
              maladie, changement de mission. La grande société de services, elle,
              dilue la responsabilité entre un commercial, un chef de projet et des
              développeurs qui changent tous les six mois.
            </p>
            <p className="text-base leading-relaxed text-muted">
              Nous occupons l&apos;espace entre les deux : une équipe réduite et
              stable, qui connaît votre contexte, s&apos;engage sur un périmètre et
              reste joignable directement — sans couche intermédiaire.
            </p>
            <p className="text-base leading-relaxed text-muted">
              Concrètement, chaque projet est porté par un binôme référent qui
              connaît le code et l&apos;infrastructure, complété selon les besoins
              par les compétences de l&apos;agence : {SERVICES.map((service) => service.label).join(", ")}.
            </p>
          </div>

          <ul className="grid gap-px self-start border border-ink/12 bg-ink/12">
            {VALUES.map((value, index) => (
              <Reveal
                as="li"
                key={value.title}
                delay={index * 70}
                className="flex flex-col gap-3 bg-bone p-7"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[0.68rem] tracking-[0.2em] text-clay">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-ink/10" aria-hidden="true" />
                </span>
                <h3 className="text-xl text-ink">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{value.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-ink/10 bg-ink py-16 text-bone md:py-24">
        <div
          aria-hidden="true"
          className="grid-paper-invert pointer-events-none absolute inset-0 opacity-35 [mask-image:radial-gradient(70%_70%_at_80%_10%,#000,transparent_70%)]"
        />
        <div className="shell relative">
          <SectionHeading
            tone="dark"
            label="Repères"
            title="Nos règles de fonctionnement."
            lead="Elles ne sont pas négociables, parce que ce sont elles qui garantissent la qualité de ce que nous livrons."
            className="max-w-3xl"
          />

          <dl className="mt-12 grid gap-px border border-white/12 bg-white/12 sm:grid-cols-2 xl:grid-cols-4">
            {METRICS.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-3 bg-ink p-7">
                <dt className="font-display text-4xl font-semibold tracking-[-0.03em] text-ember">
                  {metric.value}
                </dt>
                <dd className="flex flex-col gap-2">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-bone">
                    {metric.label}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-invert">
                    {metric.detail}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-8">
            <span className="flex items-center gap-2.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-invert">
              <Icon name="map" className="size-4 text-ember" />
              Interventions : {SITE.coverage.join(" · ")}
            </span>
            <span className="flex items-center gap-2.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-invert">
              <Icon name="clock" className="size-4 text-ember" />
              {CONTACT.responseTime}
            </span>
          </div>
        </div>
      </section>

      <MethodSection />

      <CtaSection />
    </>
  );
}
