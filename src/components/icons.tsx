import type { ReactNode } from "react";

import type { IconKey } from "@/constants";

type IconProps = {
  name: IconKey;
  className?: string;
};

const PATHS: Record<IconKey, ReactNode> = {
  pipeline: (
    <>
      <circle cx="4" cy="12" r="2.4" />
      <circle cx="20" cy="6" r="2.2" />
      <circle cx="20" cy="18" r="2.2" />
      <path d="M6.4 11.2 17.8 6.6M6.4 12.8l11.4 4.6" />
      <path d="M11 3.5v3M13.5 20.5h-3" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <path d="M7 7.5h.01M7 16.5h.01M11 7.5h3M11 16.5h3" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 3 7.8l9 4.8 9-4.8L12 3Z" />
      <path d="m3 12.4 9 4.8 9-4.8" />
      <path d="m3 16.8 9 4.8 9-4.8" />
    </>
  ),
  device: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M10.5 5.5h3" />
      <path d="M9 18.5h6" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.4 8.6-2 5.2-5.2 2 2-5.2 5.2-2Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.8 4.8 5.6v6c0 4.1 2.9 7.9 7.2 9.6 4.3-1.7 7.2-5.5 7.2-9.6v-6L12 2.8Z" />
      <path d="m9 12 2.2 2.2L15.4 10" />
    </>
  ),
  gauge: (
    <>
      <path d="M3.6 17a9 9 0 1 1 16.8 0" />
      <path d="m12 13 4-3.4" />
      <circle cx="12" cy="13.6" r="1.4" />
    </>
  ),
  spark: (
    <>
      <path d="M12 2.6 13.9 9l6.4 1.9-6.4 1.9L12 19.2l-1.9-6.4L3.7 10.9 10.1 9 12 2.6Z" />
      <path d="M18.8 17.4 19.7 20l2.6.9-2.6.9-.9 2.6" opacity="0" />
    </>
  ),
  loop: (
    <>
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.6" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 15.4" />
      <path d="M20 4.4v4.2h-4.2M4 19.6v-4.2h4.2" />
    </>
  ),
  mail: (
    <>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2" />
      <path d="m3.6 6.6 8.4 6 8.4-6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3.2 20.8 4.6 16A8.3 8.3 0 1 1 8 19.4l-4.8 1.4Z" />
      <path d="M9 9.2c.3 2.4 2.4 4.5 4.8 4.8l.9-1.4 1.8.8c-.3 1.2-1.5 1.8-2.7 1.6-2.9-.5-5.3-2.9-5.8-5.8-.2-1.2.4-2.4 1.6-2.7l.8 1.8-1.4.9Z" />
    </>
  ),
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  check: <path d="m4.5 12.5 4.5 4.5L19.5 6.5" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.4l3.4 2" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}

/** Monogramme Kintera : un « K » construit à la règle et au compas. */
export function LogoMark({
  className,
  knockout = "var(--color-bone)",
}: {
  className?: string;
  /** Couleur du « K » évidé : à inverser lorsque le carré est clair. */
  knockout?: string;
}) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className={className}>
      <rect x="0.7" y="0.7" width="30.6" height="30.6" rx="3" fill="currentColor" />
      <path
        d="M10 7v18M10 16.2 20.4 7M10 15.8 20.4 25"
        stroke={knockout}
        strokeWidth="2.1"
        strokeLinecap="square"
        fill="none"
      />
      <circle cx="20.6" cy="16" r="2.1" fill="var(--color-ember)" />
    </svg>
  );
}
