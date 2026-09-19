import { ImageResponse } from "next/og";

import { CONTACT, MARKETS, SITE } from "@/constants";

/** Générée à la compilation : le site reste exportable en statique. */
export const dynamic = "force-static";

export const alt = `${SITE.name} — ${SITE.baseline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Image de partage générée à la compilation (réseaux sociaux, messageries). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#14110f",
          color: "#f5f2ec",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              backgroundColor: "#f5f2ec",
              color: "#14110f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            K
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
              Kintera
            </div>
            <div style={{ fontSize: 15, letterSpacing: 6, color: "#a8a29a" }}>
              TECHNOLOGIE
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            Du premier commit à la production, sans mauvaise surprise.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 54, height: 4, backgroundColor: "#e4572e" }} />
            <div style={{ fontSize: 26, color: "#a8a29a" }}>{SITE.baseline}</div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #2e2823",
            paddingTop: 26,
            fontSize: 21,
            color: "#a8a29a",
          }}
        >
          <div style={{ display: "flex", gap: 18 }}>
            {MARKETS.map((market) => (
              <div key={market.slug} style={{ display: "flex" }}>
                {market.country}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", color: "#e4572e" }}>{CONTACT.email}</div>
        </div>
      </div>
    ),
    size,
  );
}
