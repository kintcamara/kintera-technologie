import Link from "next/link";

import { Icon, LogoMark } from "@/components/icons";
import { CONTACT, FOOTER_NAV, LINKS, SITE } from "@/constants";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink text-bone">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_repeat(3,0.8fr)_1.05fr]">
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3" aria-label={SITE.name}>
              <LogoMark className="size-9 text-bone" knockout="var(--color-ink)" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[1.05rem] font-semibold tracking-[-0.02em]">
                  Kintera
                </span>
                <span className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.28em] text-muted-invert">
                  Technologie
                </span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-invert">
              {SITE.baseline}. {SITE.promise}
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-invert">
              {SITE.coverage.map((zone) => (
                <li key={zone} className="flex items-center gap-2">
                  <Icon name="map" className="size-3.5 text-ember" />
                  {zone}
                </li>
              ))}
            </ul>
          </div>

          {FOOTER_NAV.map((group) => (
            <nav key={group.title} aria-label={group.title} className="flex flex-col gap-5">
              <h3 className="eyebrow text-ember">{group.title}</h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-invert transition-colors hover:text-bone"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="flex flex-col gap-5">
            <h3 className="eyebrow text-ember">Contact</h3>
            <a
              href={LINKS.email}
              className="group flex items-start gap-3 text-sm text-bone transition-colors hover:text-ember"
            >
              <Icon name="mail" className="mt-0.5 size-4 shrink-0 text-ember" />
              <span className="break-all">{CONTACT.email}</span>
            </a>
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 text-sm text-bone transition-colors hover:text-ember"
            >
              <Icon name="whatsapp" className="mt-0.5 size-4 shrink-0 text-ember" />
              <span>
                {CONTACT.whatsappDisplay}
                <span className="block font-mono text-[0.65rem] tracking-[0.12em] text-muted-invert">
                  WhatsApp · {CONTACT.phoneDial}
                </span>
              </span>
            </a>
            <p className="flex items-start gap-3 text-sm text-muted-invert">
              <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-ember" />
              {CONTACT.responseTime}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-invert md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.legalName}. Tous droits réservés.
          </p>
          <p className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-moss" aria-hidden="true" />
            {CONTACT.availability}
          </p>
        </div>
      </div>
    </footer>
  );
}
