import Link from "next/link";
import type { ReactNode } from "react";

import { Icon } from "@/components/icons";
import { cn } from "@/lib/cn";

type Tone = "light" | "dark" | "accent";

/* ------------------------------------------------------------------ */
/* Boutons                                                             */
/* ------------------------------------------------------------------ */

const BUTTON_BASE =
  "group inline-flex items-center justify-center gap-2.5 rounded-[2px] px-5 py-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] transition-colors duration-200";

const BUTTON_VARIANTS = {
  primary: "bg-clay text-white hover:bg-ink",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-bone",
  invert: "bg-bone text-ink hover:bg-ember hover:text-white",
  ghost: "border border-white/25 text-bone hover:border-bone hover:bg-bone hover:text-ink",
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  className,
  withArrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  withArrow?: boolean;
}) {
  const content = (
    <>
      <span>{children}</span>
      {withArrow ? (
        <Icon
          name="arrow"
          className="size-3.5 transition-transform duration-200 group-hover:translate-x-1"
        />
      ) : null}
    </>
  );
  const classes = cn(BUTTON_BASE, BUTTON_VARIANTS[variant], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Titres de section                                                   */
/* ------------------------------------------------------------------ */

const LABEL_TONES: Record<Tone, string> = {
  light: "text-clay",
  dark: "text-ember",
  accent: "text-white",
};

export function SectionLabel({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <div className={cn("flex items-center gap-3", LABEL_TONES[tone])}>
      <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

export function SectionHeading({
  label,
  title,
  lead,
  tone = "light",
  align = "left",
  className,
}: {
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <SectionLabel tone={tone}>{label}</SectionLabel>
      <h2
        className={cn(
          "display text-[clamp(2rem,5vw,3.4rem)]",
          tone === "light" ? "text-ink" : "text-bone",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-muted" : "text-muted-invert",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Étiquette technologique                                             */
/* ------------------------------------------------------------------ */

export function Tag({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[2px] border px-2.5 py-1 font-mono text-[0.68rem] tracking-[0.06em]",
        tone === "light"
          ? "border-ink/15 bg-paper text-muted"
          : "border-white/15 bg-white/[0.04] text-muted-invert",
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Pastille de disponibilité                                           */
/* ------------------------------------------------------------------ */

export function StatusPill({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em]",
        tone === "light" ? "border-ink/15 text-muted" : "border-white/20 text-muted-invert",
      )}
    >
      <span className="relative flex size-1.5" aria-hidden="true">
        <span className="absolute inline-flex size-full animate-blink rounded-full bg-moss" />
        <span className="relative inline-flex size-1.5 rounded-full bg-moss" />
      </span>
      {children}
    </span>
  );
}
