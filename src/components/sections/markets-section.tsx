import Link from "next/link";

import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { MARKETS } from "@/constants";

/** Maillage interne vers les pages de marché (France, Belgique, Suisse). */
export function MarketsSection() {
  return (
    <section id="marches" className="border-b border-ink/10 bg-bone py-20 md:py-28">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="Marchés"
            title={
              <>
                France, Belgique, Suisse :
                <br className="hidden sm:block" /> une heure d&apos;écart, pas plus.
              </>
            }
            className="max-w-2xl"
          />
          <Link
            href="/marches"
            className="group inline-flex w-fit items-center gap-3 border-b border-ink/25 pb-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink transition-colors hover:border-clay hover:text-clay md:mb-2"
          >
            Voir les trois marchés
            <Icon
              name="arrow"
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <ul className="mt-14 grid gap-px border border-ink/12 bg-ink/12 lg:grid-cols-3">
          {MARKETS.map((market, index) => (
            <Reveal as="li" key={market.slug} delay={index * 80} className="bg-bone">
              <Link
                href={`/marches/${market.slug}`}
                className="group flex h-full flex-col gap-5 p-7 transition-colors hover:bg-paper"
              >
                <span className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center border border-ink/15 font-mono text-[0.7rem] tracking-[0.1em] text-clay">
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

                <span className="mt-auto flex flex-wrap gap-x-3 gap-y-1 border-t border-ink/10 pt-5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted">
                  {market.cities.slice(0, 4).map((city) => (
                    <span key={city}>{city}</span>
                  ))}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
