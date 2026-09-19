import { Icon } from "@/components/icons";
import { ButtonLink, SectionLabel } from "@/components/ui";
import { CONTACT, LINKS } from "@/constants";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-clay text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.6)_0px,rgba(255,255,255,0.6)_1px,transparent_1px,transparent_11px)]"
      />

      <div className="shell relative grid gap-10 py-16 md:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <SectionLabel tone="accent">Premier échange gratuit</SectionLabel>
          <h2 className="display text-[clamp(2rem,5vw,3.4rem)] text-white">
            Parlons de votre projet
            <br className="hidden sm:block" /> pendant trente minutes.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/85">
            Décrivez-nous votre besoin : vous repartez avec un avis technique
            argumenté, une estimation de charge et les risques que nous voyons —
            que nous travaillions ensemble ou non.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <ButtonLink href="/contact" variant="invert">
            Décrire mon projet
          </ButtonLink>
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 border border-white/40 px-5 py-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-white/10"
          >
            <Icon name="whatsapp" className="size-4" />
            WhatsApp · {CONTACT.whatsappDisplay}
          </a>
          <a
            href={LINKS.email}
            className="group inline-flex items-center justify-center gap-2.5 border border-white/40 px-5 py-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-white/10"
          >
            <Icon name="mail" className="size-4" />
            <span className="break-all normal-case tracking-[0.06em]">
              {CONTACT.email}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
