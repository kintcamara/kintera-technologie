"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Icon, LogoMark } from "@/components/icons";
import { CONTACT, LINKS, NAV, SITE } from "@/constants";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Le menu mobile se referme à chaque navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-bone/95 backdrop-blur-md transition-colors duration-300",
        scrolled || open ? "border-ink/12" : "border-transparent",
      )}
    >
      <div className="shell flex h-18 items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${SITE.name} — accueil`}
        >
          <LogoMark className="size-9 text-ink" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.05rem] font-semibold tracking-[-0.02em] text-ink">
              Kintera
            </span>
            <span className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.28em] text-muted">
              Technologie
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navigation principale">
          {NAV.map((item) => {
            const active =
              item.href !== "/" &&
              !item.href.startsWith("/#") &&
              pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-1 text-sm font-medium transition-colors duration-200",
                  active ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-clay transition-transform duration-300",
                    active && "scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
          >
            <Icon name="whatsapp" className="size-4" />
            {CONTACT.whatsappDisplay}
          </a>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-[2px] bg-ink px-4 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-bone transition-colors duration-200 hover:bg-clay"
          >
            Démarrer un projet
            <Icon
              name="arrow"
              className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="flex size-10 items-center justify-center border border-ink/15 lg:hidden"
        >
          <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
          <span className="flex w-5 flex-col gap-[5px]" aria-hidden="true">
            <span
              className={cn(
                "h-px w-full bg-ink transition-transform duration-300",
                open && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-ink transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-full bg-ink transition-transform duration-300",
                open && "-translate-y-[6px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="menu-mobile"
          className="border-t border-ink/10 bg-bone lg:hidden"
        >
          <div className="shell flex flex-col gap-1 py-6">
            {NAV.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-baseline gap-4 border-b border-ink/8 py-4 text-2xl font-display font-semibold tracking-[-0.02em] text-ink"
              >
                <span className="font-mono text-[0.65rem] tracking-[0.2em] text-clay">
                  0{index + 1}
                </span>
                {item.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-moss px-5 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-white"
              >
                <Icon name="whatsapp" className="size-4" />
                WhatsApp
              </a>
              <a
                href={LINKS.email}
                className="inline-flex items-center justify-center gap-2 border border-ink/20 px-5 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink"
              >
                <Icon name="mail" className="size-4" />
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
