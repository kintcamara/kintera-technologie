import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Sonde de santé utilisée par Docker, le répartiteur de charge et la
 * supervision. Ne renvoie aucune information sensible.
 */
export function GET() {
  return NextResponse.json(
    { status: "ok", uptime: Math.round(process.uptime()) },
    { headers: { "Cache-Control": "no-store" } },
  );
}
