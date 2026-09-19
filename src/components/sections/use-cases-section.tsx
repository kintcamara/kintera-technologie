import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { USE_CASES } from "@/constants";

export function UseCasesSection() {
  return (
    <section className="border-b border-ink/10 bg-paper py-20 md:py-28">
      <div className="shell">
        <SectionHeading
          label="Interventions types"
          title="Trois situations où l'on nous appelle."
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {USE_CASES.map((useCase, index) => (
            <Reveal
              key={useCase.title}
              delay={index * 80}
              className="flex flex-col gap-4 border-t-2 border-ink pt-6"
            >
              <span className="font-mono text-[0.68rem] tracking-[0.2em] text-clay">
                {`0${index + 1}`}
              </span>
              <h3 className="text-xl text-ink">{useCase.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{useCase.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
