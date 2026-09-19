import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/sections";
import { ButtonLink, SectionLabel, Tag } from "@/components/ui";
import { MARKETS, PROCESS, SERVICES, SERVICES_BY_SLUG } from "@/constants";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_BY_SLUG[slug];

  if (!service) {
    return { title: "Expertise introuvable", robots: { index: false, follow: true } };
  }

  return buildMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: [
      service.label,
      `agence ${service.label.toLowerCase()}`,
      ...service.stack.slice(0, 6).map((tool) => `${tool} ${service.label.toLowerCase()}`),
      ...MARKETS.map((market) => `${service.label} ${market.country}`),
    ],
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_BY_SLUG[slug];

  if (!service) {
    notFound();
  }

  const others = SERVICES.filter((item) => item.slug !== service.slug);

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Expertises", path: "/services" },
          { name: service.label, path: `/services/${service.slug}` },
        ])}
      />
      <section className="relative overflow-hidden border-b border-ink/10 bg-ink text-bone">
        <div
          aria-hidden="true"
          className="grid-paper-invert pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(75%_75%_at_25%_0%,#000,transparent_72%)]"
        />
        <div className="shell relative py-16 md:py-24">
          <nav aria-label="Fil d'Ariane" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-invert">
              <li>
                <Link href="/" className="transition-colors hover:text-bone">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="transition-colors hover:text-bone">
                  Expertises
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ember">{service.label}</li>
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center border border-white/20 text-ember">
                  <Icon name={service.icon} className="size-6" />
                </span>
                <span className="font-mono text-[0.7rem] tracking-[0.22em] text-muted-invert">
                  expertise {service.index}
                </span>
              </div>
              <h1 className="display text-[clamp(2.2rem,5.6vw,4rem)] text-bone">
                {service.title}
              </h1>
              <p className="max-w-2xl text-lg text-ember">{service.tagline}</p>
            </div>

            <div className="flex flex-col gap-4 border-l border-white/15 pl-6">
              <p className="text-sm leading-relaxed text-muted-invert">
                {service.summary}
              </p>
              <ButtonLink href="/contact" variant="ghost">
                Discuter de ce besoin
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-bone py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            <SectionLabel>Notre approche</SectionLabel>
            {service.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="max-w-2xl text-base leading-relaxed text-muted first-of-type:text-lg first-of-type:text-ink"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="flex flex-col gap-6 border border-ink/12 bg-paper p-7">
            <h2 className="eyebrow text-clay">Technologies mobilisées</h2>
            <ul className="flex flex-wrap gap-2">
              {service.stack.map((tool) => (
                <li key={tool}>
                  <Tag>{tool}</Tag>
                </li>
              ))}
            </ul>
            <div className="mt-2 border-t border-ink/12 pt-6">
              <h2 className="eyebrow text-clay">Déroulé d&apos;une mission</h2>
              <ol className="mt-4 flex flex-col gap-3">
                {PROCESS.map((step) => (
                  <li key={step.step} className="flex items-baseline gap-3 text-sm text-muted">
                    <span className="font-mono text-[0.68rem] tracking-[0.16em] text-clay">
                      {step.step}
                    </span>
                    <span className="text-ink">{step.title}</span>
                    <span className="ml-auto font-mono text-[0.62rem] uppercase tracking-[0.12em]">
                      {step.duration}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper py-16 md:py-24">
        <div className="shell">
          <SectionLabel>Ce que vous recevez</SectionLabel>
          <h2 className="display mt-5 max-w-3xl text-[clamp(1.8rem,4vw,2.8rem)] text-ink">
            Des livrables concrets, pas des intentions.
          </h2>

          <ul className="mt-12 grid gap-px border border-ink/12 bg-ink/12 md:grid-cols-2 xl:grid-cols-3">
            {service.deliverables.map((deliverable, index) => (
              <Reveal
                as="li"
                key={deliverable.title}
                delay={index * 60}
                className="flex flex-col gap-3 bg-paper p-7"
              >
                <span className="font-mono text-[0.68rem] tracking-[0.2em] text-clay">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg text-ink">{deliverable.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{deliverable.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-bone py-16 md:py-20">
        <div className="shell">
          <SectionLabel>Autres expertises</SectionLabel>
          <ul className="mt-8 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-2 xl:grid-cols-4">
            {others.map((item) => (
              <li key={item.slug} className="bg-bone">
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex h-full flex-col gap-4 p-6 transition-colors hover:bg-paper"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-mono text-[0.68rem] tracking-[0.2em] text-clay">
                      {item.index}
                    </span>
                    <Icon
                      name="arrow"
                      className="size-4 text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-ink"
                    />
                  </span>
                  <span className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                    {item.label}
                  </span>
                  <span className="text-sm leading-relaxed text-muted">{item.tagline}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
