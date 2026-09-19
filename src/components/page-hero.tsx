import type { ReactNode } from "react";

import { SectionLabel } from "@/components/ui";

export function PageHero({
  label,
  title,
  lead,
  aside,
}: {
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-bone">
      <div
        aria-hidden="true"
        className="grid-paper pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(80%_80%_at_20%_0%,#000,transparent_75%)]"
      />
      <div className="shell relative grid gap-10 py-16 md:py-24 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <div className="flex flex-col gap-6">
          <SectionLabel>{label}</SectionLabel>
          <h1 className="display text-[clamp(2.3rem,6vw,4.2rem)] text-ink">{title}</h1>
          {lead ? (
            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {lead}
            </p>
          ) : null}
        </div>
        {aside ? <div className="lg:pb-2">{aside}</div> : null}
      </div>
    </section>
  );
}
