import Link from "next/link";

import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading, Tag } from "@/components/ui";
import { SERVICES } from "@/constants";

export function ServicesSection() {
  return (
    <section id="services" className="border-b border-ink/10 bg-bone py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          label="Expertises"
          title={
            <>
              Cinq métiers, une seule
              <br className="hidden sm:block" /> équipe responsable.
            </>
          }
          lead="Nous couvrons la chaîne complète : l'infrastructure qui héberge, le code qui tourne, l'interface que vos clients utilisent, et le pilotage qui tient l'ensemble."
          className="max-w-3xl"
        />

        <div className="mt-14 border-b border-ink/12">
          {SERVICES.map((service, index) => (
            <Reveal key={service.slug} delay={index * 60}>
              <Link
                href={`/services/${service.slug}`}
                className="group grid grid-cols-1 items-start gap-5 border-t border-ink/12 px-1 py-8 transition-colors duration-300 hover:bg-paper md:grid-cols-[5rem_minmax(0,1fr)_auto] md:gap-8 md:px-4"
              >
                <span className="flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.18em] text-clay md:block">
                  {service.index}
                  <span className="h-px w-6 bg-clay/40 md:hidden" aria-hidden="true" />
                </span>

                <span className="flex flex-col gap-3">
                  <span className="flex items-baseline gap-3">
                    <span className="display text-[clamp(1.5rem,3.4vw,2.25rem)] text-ink transition-colors duration-300 group-hover:text-clay">
                      {service.label}
                    </span>
                  </span>
                  <span className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                    {service.summary}
                  </span>
                  <span className="mt-1 flex flex-wrap gap-2">
                    {service.stack.slice(0, 5).map((tool) => (
                      <Tag key={tool}>{tool}</Tag>
                    ))}
                  </span>
                </span>

                <span className="flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted transition-colors duration-300 group-hover:text-ink md:self-center">
                  Détail
                  <span className="flex size-9 items-center justify-center rounded-full border border-ink/20 transition-all duration-300 group-hover:border-clay group-hover:bg-clay group-hover:text-white">
                    <Icon name="arrow" className="size-4" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
