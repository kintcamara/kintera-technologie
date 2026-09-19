import { Icon } from "@/components/icons";
import { PipelinePanel } from "@/components/pipeline-panel";
import { Reveal } from "@/components/reveal";
import { ButtonLink, StatusPill } from "@/components/ui";
import { CONTACT, HERO_PROOFS, LINKS, SITE } from "@/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-bone">
      {/* Trame technique et halo chaud en arrière-plan */}
      <div
        aria-hidden="true"
        className="grid-paper pointer-events-none absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(90%_70%_at_50%_0%,#000_20%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(228,87,46,0.16),transparent_62%)]"
      />

      <div className="shell relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:py-32">
        <div className="flex flex-col items-start gap-8">
          <Reveal>
            <StatusPill>{CONTACT.availability}</StatusPill>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display text-[clamp(2.6rem,7.4vw,5.4rem)] text-ink">
              Du premier commit
              <br />
              à la <span className="underline-sketch">production</span>,
              <br />
              <span className="text-muted">sans mauvaise surprise.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {SITE.name} est un studio d&apos;ingénierie logicielle. Nous construisons
              vos applications web et mobiles, automatisons vos déploiements et
              pilotons vos projets IT — avec des équipes réduites, seniores, et un
              budget qui ne dérive pas.
            </p>
          </Reveal>

          <Reveal delay={240} className="w-full">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/contact">Démarrer un projet</ButtonLink>
              <ButtonLink href="/services" variant="outline">
                Voir nos expertises
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={320} className="w-full">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
              >
                <Icon name="whatsapp" className="size-4 text-moss" />
                <span className="border-b border-transparent pb-0.5 group-hover:border-ink">
                  {CONTACT.whatsappDisplay}
                </span>
              </a>
              <a
                href={LINKS.email}
                className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
              >
                <Icon name="mail" className="size-4 text-clay" />
                <span className="break-all border-b border-transparent pb-0.5 group-hover:border-ink">
                  {CONTACT.email}
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="w-full">
          <div className="relative">
            <PipelinePanel />
            <dl className="mt-6 grid grid-cols-3 gap-px border border-ink/12 bg-ink/12">
              {HERO_PROOFS.map((proof) => (
                <div key={proof.label} className="bg-bone px-3 py-4 text-center">
                  <dt className="font-display text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">
                    {proof.value}
                  </dt>
                  <dd className="mt-1 font-mono text-[0.6rem] uppercase leading-snug tracking-[0.12em] text-muted">
                    {proof.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
