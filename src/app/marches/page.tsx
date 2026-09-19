import type { Metadata } from "next";
import Link from "next/link";

import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/sections";
import { SectionHeading } from "@/components/ui";
import { MARKETS, PAGE_SEO, SITE } from "@/constants";
import { buildMetadata, marketLanguages } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  ...PAGE_SEO.marches,
  languages: marketLanguages(),
});

export default function MarchesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Marchés", path: "/marches" },
        ])}
      />

      <PageHero
        label="Marchés"
        title={
          <>
            France, Belgique, Suisse :
            <br className="hidden sm:block" /> trois marchés, une équipe.
          </>
        }
        lead={`${SITE.name} travaille au quotidien avec des entreprises francophones d'Europe. Même langue, même créneau horaire, mêmes exigences de qualité — et des modalités adaptées au cadre de chaque pays.`}
        aside={
          <ul className="flex flex-col gap-2 border-l border-ink/15 pl-5">
            {MARKETS.map((market) => (
              <li key={market.slug}>
                <Link
                  href={`/marches/${market.slug}`}
                  className="group flex items-baseline gap-3 py-1 text-sm text-muted transition-colors hover:text-ink"
                >
                  <span className="font-mono text-[0.68rem] tracking-[0.16em] text-clay">
                    {market.code}
                  </span>
                  {market.country}
                </Link>
              </li>
            ))}
          </ul>
        }
      />

      <section className="border-b border-ink/10 bg-bone py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            label="Où nous intervenons"
            title="Le même niveau d'exigence, quel que soit le pays."
            lead="Nos engagements contractuels ne changent pas d'un marché à l'autre. Ce qui change, ce sont la devise, le cadre fiscal, les obligations de conformité et les contraintes d'hébergement — et nous les traitons explicitement."
            className="max-w-3xl"
          />

          <div className="mt-14 grid gap-px border border-ink/12 bg-ink/12 lg:grid-cols-3">
            {MARKETS.map((market, index) => (
              <Reveal key={market.slug} delay={index * 80} className="bg-bone">
                <Link
                  href={`/marches/${market.slug}`}
                  className="group flex h-full flex-col gap-5 p-7 transition-colors hover:bg-paper"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-mono text-[0.7rem] tracking-[0.2em] text-clay">
                      {market.code}
                    </span>
                    <Icon
                      name="arrow"
                      className="size-4 text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-ink"
                    />
                  </span>

                  <span className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">
                    {market.country}
                  </span>

                  <span className="text-sm leading-relaxed text-muted">{market.lead}</span>

                  <span className="mt-auto flex flex-col gap-2 border-t border-ink/10 pt-5">
                    {market.practical.slice(0, 3).map((item) => (
                      <span
                        key={item.label}
                        className="flex items-baseline justify-between gap-4 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted"
                      >
                        <span>{item.label}</span>
                        <span className="text-right normal-case tracking-normal text-ink/80">
                          {item.value.split(",")[0]}
                        </span>
                      </span>
                    ))}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            <SectionHeading
              label="Travailler à distance"
              title="Une équipe externe, pas une équipe lointaine."
            />
            <p className="text-base leading-relaxed text-muted">
              Le décalage horaire n&apos;excède jamais une heure avec Paris,
              Bruxelles ou Genève. Les points quotidiens se tiennent à votre
              heure, les urgences se traitent dans la journée, et les
              déplacements sur site sont réservés aux moments qui les
              justifient : cadrage, comité de pilotage, mise en production
              sensible.
            </p>
            <p className="text-base leading-relaxed text-muted">
              Vous gardez la maîtrise de tout : le dépôt de code est à votre
              nom, l&apos;infrastructure est créée sur vos comptes, la
              documentation reste à jour. Changer de prestataire — y compris
              nous quitter — ne doit jamais être un projet en soi.
            </p>
          </div>

          <ul className="grid gap-px self-start border border-ink/12 bg-ink/12">
            {MARKETS.map((market) => (
              <li key={market.slug} className="flex flex-col gap-3 bg-paper p-7">
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[0.68rem] tracking-[0.2em] text-clay">
                    {market.code}
                  </span>
                  <span className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                    {market.country}
                  </span>
                </span>
                <span className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted">
                  {market.cities.slice(0, 6).map((city) => (
                    <span key={city}>{city}</span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
