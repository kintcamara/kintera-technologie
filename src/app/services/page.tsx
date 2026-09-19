import type { Metadata } from "next";
import Link from "next/link";

import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/sections";
import { Tag } from "@/components/ui";
import { PAGE_SEO, SERVICES } from "@/constants";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata(PAGE_SEO.services);

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Expertises", path: "/services" },
        ])}
      />
      <PageHero
        label="Expertises"
        title={
          <>
            Cinq expertises qui
            <br className="hidden sm:block" /> se renforcent mutuellement.
          </>
        }
        lead="Nous n'assemblons pas des prestataires : la même équipe conçoit l'architecture, écrit le code, automatise le déploiement et pilote le projet. C'est ce qui évite les zones grises entre les intervenants."
        aside={
          <ul className="flex flex-col gap-2 border-l border-ink/15 pl-5">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <a
                  href={`#${service.slug}`}
                  className="group flex items-baseline gap-3 py-1 text-sm text-muted transition-colors hover:text-ink"
                >
                  <span className="font-mono text-[0.68rem] tracking-[0.16em] text-clay">
                    {service.index}
                  </span>
                  {service.label}
                </a>
              </li>
            ))}
          </ul>
        }
      />

      <section className="bg-bone">
        {SERVICES.map((service, index) => {
          const surface = index % 2 === 1 ? "bg-paper" : "bg-bone";
          return (
            <article
              key={service.slug}
              id={service.slug}
              className={`scroll-mt-24 border-b border-ink/10 py-16 md:py-20 ${surface}`}
            >
              <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                <Reveal className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span className="flex size-12 items-center justify-center border border-ink/15 text-clay">
                      <Icon name={service.icon} className="size-6" />
                    </span>
                    <span className="font-mono text-[0.7rem] tracking-[0.2em] text-muted">
                      {service.index} / 05
                    </span>
                  </div>
                  <h2 className="display text-[clamp(1.75rem,3.6vw,2.6rem)] text-ink">
                    {service.title}
                  </h2>
                  <p className="text-base font-medium text-clay">{service.tagline}</p>
                  <p className="text-sm leading-relaxed text-muted sm:text-base">
                    {service.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.stack.map((tool) => (
                      <Tag key={tool}>{tool}</Tag>
                    ))}
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group mt-2 inline-flex w-fit items-center gap-3 border-b border-ink/25 pb-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink transition-colors hover:border-clay hover:text-clay"
                  >
                    Voir la page complète
                    <Icon
                      name="arrow"
                      className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </Reveal>

                <Reveal delay={90}>
                  <ul className="grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-2">
                    {service.deliverables.map((deliverable) => (
                      <li
                        key={deliverable.title}
                        className={`flex flex-col gap-2 p-6 ${surface}`}
                      >
                        <span className="flex items-center gap-2.5 font-display text-base font-semibold tracking-[-0.01em] text-ink">
                          <span className="size-1.5 rotate-45 bg-clay" aria-hidden="true" />
                          {deliverable.title}
                        </span>
                        <span className="text-sm leading-relaxed text-muted">
                          {deliverable.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </article>
          );
        })}
      </section>

      <CtaSection />
    </>
  );
}
