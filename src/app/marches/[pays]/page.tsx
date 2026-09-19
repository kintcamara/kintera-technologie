import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { CtaSection } from "@/components/sections";
import { ButtonLink, SectionHeading, SectionLabel, Tag } from "@/components/ui";
import { CONTACT, MARKETS, MARKETS_BY_SLUG, SERVICES } from "@/constants";
import { buildMetadata, marketLanguages } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";

type PageProps = { params: Promise<{ pays: string }> };

export function generateStaticParams() {
  return MARKETS.map((market) => ({ pays: market.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { pays } = await params;
  const market = MARKETS_BY_SLUG[pays];

  if (!market) {
    return { title: "Marché introuvable", robots: { index: false, follow: true } };
  }

  return buildMetadata({
    title: market.metaTitle,
    description: market.metaDescription,
    path: `/marches/${market.slug}`,
    keywords: [
      ...market.keywords,
      ...SERVICES.map((service) => `${service.label} ${market.country}`),
      ...market.cities.slice(0, 5).map((city) => `agence informatique ${city}`),
    ],
    ogLocale: market.ogLocale,
    languages: marketLanguages(),
  });
}

export default async function MarketPage({ params }: PageProps) {
  const { pays } = await params;
  const market = MARKETS_BY_SLUG[pays];

  if (!market) {
    notFound();
  }

  const others = MARKETS.filter((item) => item.slug !== market.slug);

  return (
    <>
      <JsonLd data={faqSchema(market.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Marchés", path: "/marches" },
          { name: market.country, path: `/marches/${market.slug}` },
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
                <Link href="/marches" className="transition-colors hover:text-bone">
                  Marchés
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ember">{market.country}</li>
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div className="flex flex-col gap-6">
              <span className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center border border-white/20 font-mono text-sm tracking-[0.1em] text-ember">
                  {market.code}
                </span>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-invert">
                  Marché {market.country}
                </span>
              </span>
              <h1 className="display text-[clamp(2.2rem,5.6vw,4rem)] text-bone">
                {market.heading}
              </h1>
              <p className="max-w-2xl text-lg text-ember">{market.lead}</p>
            </div>

            <div className="flex flex-col gap-4 border-l border-white/15 pl-6">
              <p className="text-sm leading-relaxed text-muted-invert">
                {CONTACT.responseTime} · Premier échange gratuit, en
                visioconférence ou par téléphone.
              </p>
              <ButtonLink href="/contact" variant="ghost">
                Demander un devis
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-bone py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            <SectionLabel>Notre approche</SectionLabel>
            {market.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="max-w-2xl text-base leading-relaxed text-muted first-of-type:text-lg first-of-type:text-ink"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="flex flex-col gap-5 border border-ink/12 bg-paper p-7">
            <h2 className="eyebrow text-clay">Modalités pratiques</h2>
            <dl className="flex flex-col divide-y divide-ink/10">
              {market.practical.map((item) => (
                <div key={item.label} className="flex flex-col gap-1 py-3 first:pt-0">
                  <dt className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                    {item.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            label={`Pourquoi nous, ${market.inCountry}`}
            title="Ce qui change concrètement pour vous."
            className="max-w-3xl"
          />

          <ul className="mt-12 grid gap-px border border-ink/12 bg-ink/12 md:grid-cols-2">
            {market.highlights.map((highlight, index) => (
              <Reveal
                as="li"
                key={highlight.title}
                delay={index * 70}
                className="flex flex-col gap-3 bg-paper p-7"
              >
                <span className="font-mono text-[0.68rem] tracking-[0.2em] text-clay">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl text-ink">{highlight.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{highlight.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-bone py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            label="Expertises mobilisables"
            title={`Nos cinq métiers, mobilisables ${market.inCountry}.`}
            className="max-w-3xl"
          />

          <ul className="mt-12 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service) => (
              <li key={service.slug} className="bg-bone">
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col gap-3 p-6 transition-colors hover:bg-paper"
                >
                  <span className="flex items-center justify-between">
                    <span className="flex size-9 items-center justify-center border border-ink/15 text-clay">
                      <Icon name={service.icon} className="size-4" />
                    </span>
                    <Icon
                      name="arrow"
                      className="size-4 text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-ink"
                    />
                  </span>
                  <span className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                    {service.label}
                  </span>
                  <span className="text-sm leading-relaxed text-muted">
                    {service.tagline}
                  </span>
                </Link>
              </li>
            ))}
            <li className="bg-clay">
              <Link
                href="/contact"
                className="group flex h-full flex-col justify-between gap-3 p-6 text-white transition-colors hover:bg-ink"
              >
                <span className="flex items-center justify-between">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/80">
                    Votre projet
                  </span>
                  <Icon
                    name="arrow"
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
                <span className="font-display text-lg font-semibold tracking-[-0.02em]">
                  Un besoin qui mêle plusieurs expertises ?
                </span>
                <span className="text-sm leading-relaxed text-white/85">
                  Décrivez-le en quelques lignes : nous répondons sous 24 h avec
                  un avis technique argumenté.
                </span>
              </Link>
            </li>
          </ul>

          <div className="mt-12 flex flex-col gap-4 border-t border-ink/12 pt-8">
            <h2 className="eyebrow text-clay">Villes où nous intervenons</h2>
            <ul className="flex flex-wrap gap-2">
              {market.cities.map((city) => (
                <li key={city}>
                  <Tag>{city}</Tag>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper py-16 md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            label="Questions fréquentes"
            title={`Travailler avec nous ${market.inCountry}.`}
          />

          <div className="border-t border-ink/12">
            {market.faq.map((item) => (
              <details key={item.question} className="group border-b border-ink/12 py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-lg font-semibold tracking-[-0.02em] text-ink transition-colors group-hover:text-clay sm:text-xl">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative mt-2 flex size-5 shrink-0 items-center justify-center"
                  >
                    <span className="absolute h-px w-4 bg-ink transition-colors group-hover:bg-clay" />
                    <span className="absolute h-4 w-px bg-ink transition-all duration-300 group-open:rotate-90 group-open:opacity-0 group-hover:bg-clay" />
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-bone py-14">
        <div className="shell flex flex-col gap-6">
          <SectionLabel>Autres marchés</SectionLabel>
          <ul className="grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-2">
            {others.map((item) => (
              <li key={item.slug} className="bg-bone">
                <Link
                  href={`/marches/${item.slug}`}
                  className="group flex items-center justify-between gap-4 p-6 transition-colors hover:bg-paper"
                >
                  <span className="flex flex-col gap-1">
                    <span className="font-mono text-[0.68rem] tracking-[0.2em] text-clay">
                      {item.code}
                    </span>
                    <span className="font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                      {item.country}
                    </span>
                  </span>
                  <Icon
                    name="arrow"
                    className="size-4 text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-ink"
                  />
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
