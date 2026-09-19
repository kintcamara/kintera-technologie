import { NextResponse } from "next/server";

import { CONTACT, SITE } from "@/constants";
import { formatContactMessage, validateContact } from "@/lib/contact";
import type { ContactPayload } from "@/lib/contact";

/**
 * Réception des demandes du formulaire de contact.
 *
 * L'envoi d'e-mail est optionnel : renseignez NEXT_PUBLIC_RESEND_API_KEY et
 * NEXT_PUBLIC_CONTACT_EMAIL dans vos variables d'environnement pour l'activer.
 * Sans configuration, la route répond `not_configured` et l'interface
 * bascule automatiquement sur l'e-mail ou WhatsApp.
 */

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const hits = new Map<string, { count: number; reset: number }>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || now > entry.reset) {
    hits.set(key, { count: 1, reset: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

function clean(value: unknown, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "inconnu";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, code: "rate_limited", message: "Trop de demandes. Réessayez dans une minute." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, code: "bad_request" }, { status: 400 });
  }

  // Champ piège : rempli uniquement par les robots.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true, code: "accepted" });
  }

  const payload: ContactPayload = {
    name: clean(body.name, 120),
    company: clean(body.company, 160),
    email: clean(body.email, 160),
    phone: clean(body.phone, 60),
    subject: clean(body.subject, 160),
    budget: clean(body.budget, 80),
    timeline: clean(body.timeline, 80),
    message: clean(body.message, 4000),
  };

  const { valid, errors } = validateContact(payload);
  if (!valid) {
    return NextResponse.json({ ok: false, code: "invalid", errors }, { status: 422 });
  }

  const apiKey = process.env.NEXT_PUBLIC_RESEND_API_KEY;
  const from = process.env.NEXT_PUBLIC_CONTACT_FROM_EMAIL;
  const to = process.env.NEXT_PUBLIC_CONTACT_TO_EMAIL ?? CONTACT.email;

  if (!apiKey || !from) {
    // Pas de service d'envoi configuré : l'interface prendra le relais.
    return NextResponse.json({ ok: false, code: "not_configured" }, { status: 200 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `[${SITE.shortName}] ${payload.subject} — ${payload.name}`,
      text: formatContactMessage(payload),
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, code: "send_failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, code: "sent" });
}
