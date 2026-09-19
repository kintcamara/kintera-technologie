import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { FAQ } from "@/constants";

export function FaqSection() {
  return (
    <section id="faq" className="border-b border-ink/10 bg-bone py-20 md:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          label="Questions fréquentes"
          title="Les réponses que l'on nous demande avant de signer."
          lead="Une question qui n'y figure pas ? Écrivez-nous, la réponse arrive sous 24 heures ouvrées."
        />

        <div className="border-t border-ink/12">
          {FAQ.map((item, index) => (
            <Reveal key={item.question} delay={index * 50}>
              <details className="group border-b border-ink/12 py-5">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
