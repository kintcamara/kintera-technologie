import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { ENGAGEMENTS, METRICS } from "@/constants";

export function EngagementsSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-bone md:py-28">
      <div
        aria-hidden="true"
        className="grid-paper-invert pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(80%_60%_at_20%_0%,#000,transparent_70%)]"
      />

      <div className="shell relative">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="flex flex-col gap-10">
            <SectionHeading
              tone="dark"
              label="Engagements"
              title={
                <>
                  Ce que nous signons,
                  <br className="hidden sm:block" /> noir sur blanc.
                </>
              }
              lead="Nous préférons des engagements vérifiables à des promesses. Ces quatre-là figurent dans chacun de nos contrats."
            />

            <dl className="grid grid-cols-2 gap-px border border-white/12 bg-white/12">
              {METRICS.map((metric) => (
                <div key={metric.label} className="bg-ink p-5">
                  <dt className="font-display text-3xl font-semibold tracking-[-0.03em] text-ember">
                    {metric.value}
                  </dt>
                  <dd className="mt-2">
                    <span className="block font-mono text-[0.65rem] uppercase tracking-[0.16em] text-bone">
                      {metric.label}
                    </span>
                    <span className="mt-2 block text-[0.8rem] leading-relaxed text-muted-invert">
                      {metric.detail}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="flex flex-col">
            {ENGAGEMENTS.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 80}
                className="group flex items-start gap-5 border-b border-white/10 py-7 first:border-t first:border-white/10"
              >
                <span className="flex size-11 shrink-0 items-center justify-center border border-white/15 text-ember transition-colors duration-300 group-hover:border-ember group-hover:bg-ember group-hover:text-ink">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <span>
                  <span className="block font-display text-lg font-semibold tracking-[-0.02em] text-bone">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted-invert">
                    {item.text}
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
