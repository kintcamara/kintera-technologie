import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { PROCESS } from "@/constants";

export function MethodSection() {
  return (
    <section
      id="methode"
      className="relative overflow-hidden border-b border-ink/10 bg-paper py-20 md:py-28"
    >
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="Méthode"
            title={
              <>
                Une trajectoire lisible,
                <br className="hidden sm:block" /> du cadrage à l&apos;exploitation.
              </>
            }
            className="max-w-2xl"
          />
          <p className="max-w-sm text-sm leading-relaxed text-muted md:pb-3">
            Chaque étape produit un livrable écrit. À tout moment, vous savez ce qui
            est fait, ce qui reste, et ce que cela coûte.
          </p>
        </div>

        <ol className="mt-14 grid gap-px border border-ink/12 bg-ink/12 md:grid-cols-2 xl:grid-cols-4">
          {PROCESS.map((step, index) => (
            <Reveal
              as="li"
              key={step.step}
              delay={index * 90}
              className="group relative flex flex-col gap-5 bg-paper p-7 transition-colors duration-300 hover:bg-bone"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.7rem] tracking-[0.2em] text-clay">
                  {step.step}
                </span>
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                  {step.duration}
                </span>
              </div>

              <h3 className="text-2xl text-ink">{step.title}</h3>

              <p className="text-sm leading-relaxed text-muted">{step.text}</p>

              <ul className="mt-auto flex flex-col gap-2 border-t border-ink/10 pt-5">
                {step.outputs.map((output) => (
                  <li
                    key={output}
                    className="flex items-start gap-2.5 font-mono text-[0.68rem] tracking-[0.06em] text-ink/80"
                  >
                    <span
                      className="mt-1.5 size-1 shrink-0 rotate-45 bg-clay"
                      aria-hidden="true"
                    />
                    {output}
                  </li>
                ))}
              </ul>

              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-clay transition-transform duration-500 group-hover:scale-x-100"
              />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
