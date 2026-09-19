import { MARQUEE_ITEMS } from "@/constants";

/** Bandeau défilant : double la liste pour une boucle sans couture. */
export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="border-b border-ink/10 bg-paper py-4" aria-hidden="true">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="flex w-max animate-marquee items-center gap-10 pr-10">
          {items.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-10 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted"
            >
              {item}
              <span className="size-1 rotate-45 bg-clay" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
