import { Reveal } from "@/components/reveal";
import { SectionHeading, Tag } from "@/components/ui";
import { STACK_GROUPS } from "@/constants";

export function StackSection() {
  return (
    <section
      id="technologies"
      className="border-b border-ink/10 bg-bone py-20 md:py-28"
    >
      <div className="shell">
        <SectionHeading
          label="Technologies"
          title="Des outils choisis pour durer."
          lead="Nous privilégions des technologies matures, largement documentées et faciles à recruter. Votre plateforme doit rester maintenable longtemps après notre départ."
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-px border border-ink/12 bg-ink/12 md:grid-cols-2">
          {STACK_GROUPS.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 70}
              className="flex flex-col gap-5 bg-bone p-7"
            >
              <h3 className="flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-clay">
                <span className="size-1.5 rotate-45 bg-clay" aria-hidden="true" />
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
