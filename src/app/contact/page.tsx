import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/ui";
import { CONTACT, LINKS, NEXT_STEPS, PAGE_SEO, SITE } from "@/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.contact);

const CHANNELS = [
  {
    icon: "whatsapp" as const,
    label: "WhatsApp",
    value: CONTACT.whatsappDisplay,
    hint: "Le plus rapide, du lundi au samedi.",
    href: LINKS.whatsapp,
    external: true,
  },
  {
    icon: "mail" as const,
    label: "E-mail",
    value: CONTACT.email,
    hint: "Pour les demandes détaillées et les cahiers des charges.",
    href: LINKS.email,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title={
          <>
            Décrivez votre projet.
            <br className="hidden sm:block" /> Nous répondons sous 24 h.
          </>
        }
        lead="Un besoin précis ou une idée encore floue : dans les deux cas, le premier échange est gratuit et sans engagement. Vous repartez avec un avis technique honnête, même si la réponse est « ce n'est pas le bon moment »."
        aside={
          <ul className="flex flex-col gap-3">
            {CHANNELS.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 border border-ink/12 bg-paper p-5 transition-colors hover:border-ink/30"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center border border-ink/15 text-clay transition-colors group-hover:bg-clay group-hover:text-white">
                    <Icon name={channel.icon} className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                      {channel.label}
                    </span>
                    <span className="mt-1 block break-all font-display text-base font-semibold tracking-[-0.01em] text-ink">
                      {channel.value}
                    </span>
                    <span className="mt-1 block text-xs text-muted">{channel.hint}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        }
      />

      <section className="border-b border-ink/10 bg-bone py-16 md:py-24">
        <div className="shell grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <div className="flex flex-col gap-8">
            <SectionLabel>Formulaire</SectionLabel>
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-10">
            <div className="flex flex-col gap-6 border border-ink/12 bg-paper p-7">
              <h2 className="eyebrow text-clay">Ce qui se passe ensuite</h2>
              <ol className="flex flex-col gap-6">
                {NEXT_STEPS.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border border-ink/20 font-mono text-[0.65rem] text-clay">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block font-display text-base font-semibold tracking-[-0.01em] text-ink">
                        {step.title}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">
                        {step.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col gap-4 bg-ink p-7 text-bone">
              <h2 className="eyebrow text-ember">Coordonnées directes</h2>
              <a
                href={LINKS.email}
                className="flex items-center gap-3 break-all text-sm transition-colors hover:text-ember"
              >
                <Icon name="mail" className="size-4 shrink-0 text-ember" />
                {CONTACT.email}
              </a>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors hover:text-ember"
              >
                <Icon name="whatsapp" className="size-4 shrink-0 text-ember" />
                {CONTACT.whatsappDisplay}
              </a>
              <p className="flex items-center gap-3 text-sm text-muted-invert">
                <Icon name="clock" className="size-4 shrink-0 text-ember" />
                {CONTACT.responseTime}
              </p>
              <p className="mt-2 border-t border-white/10 pt-4 font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.14em] text-muted-invert">
                {SITE.coverage.join(" · ")}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
