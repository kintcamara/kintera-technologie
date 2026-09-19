"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import { Icon } from "@/components/icons";
import { CONTACT, FORM_FIELDS, LINKS } from "@/constants";
import { cn } from "@/lib/cn";
import { formatContactMessage, validateContact } from "@/lib/contact";
import type { ContactPayload } from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

const EMPTY: ContactPayload = {
  name: "",
  company: "",
  email: "",
  phone: "",
  subject: "",
  budget: "",
  timeline: "",
  message: "",
};

const FIELD_CLASS =
  "w-full border border-ink/15 bg-bone px-4 py-3 text-sm text-ink transition-colors placeholder:text-muted/60 focus:border-clay focus:outline-none focus:ring-1 focus:ring-clay";

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");

  const update = (name: string, value: string) => {
    setValues((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
  };

  const mailtoHref = () => {
    const subject = `Demande de projet — ${values.subject || "Kintera Technologie"}`;
    return `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(formatContactMessage(values))}`;
  };

  const whatsappHref = () =>
    `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(
      formatContactMessage(values),
    )}`;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { valid, errors: found } = validateContact(values);
    if (!valid) {
      setErrors(found);
      setStatus("idle");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        code?: string;
        errors?: Partial<Record<keyof ContactPayload, string>>;
      };

      if (data.ok) {
        setStatus("sent");
        return;
      }

      // Erreurs de saisie renvoyées par le serveur : on les affiche sur les champs.
      if (response.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        return;
      }

      if (response.status === 429) {
        setStatus("error");
        return;
      }

      // Pas de service d'envoi branché (ou route indisponible) :
      // on ouvre la messagerie du visiteur avec la demande pré-remplie.
      setStatus("fallback");
      window.location.href = mailtoHref();
    } catch {
      setStatus("fallback");
      window.location.href = mailtoHref();
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-5 border border-moss/30 bg-moss/5 p-8">
        <span className="flex size-12 items-center justify-center rounded-full bg-moss text-white">
          <Icon name="check" className="size-6" />
        </span>
        <h3 className="text-2xl text-ink">Message envoyé.</h3>
        <p className="max-w-md text-sm leading-relaxed text-muted">
          Merci {values.name.split(" ")[0]}. Nous revenons vers vous sous 24 heures
          ouvrées. Pour une réponse immédiate, WhatsApp reste le plus rapide.
        </p>
        <a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-ink px-5 py-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-bone transition-colors hover:bg-clay"
        >
          <Icon name="whatsapp" className="size-4" />
          Ouvrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid gap-5 sm:grid-cols-2">
        {FORM_FIELDS.map((field) => {
          const error = errors[field.name as keyof ContactPayload];
          const id = `champ-${field.name}`;

          return (
            <div
              key={field.name}
              className={cn("flex flex-col gap-2", field.full && "sm:col-span-2")}
            >
              <label
                htmlFor={id}
                className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted"
              >
                {field.label}
                {field.required ? (
                  <span className="text-clay" aria-hidden="true">
                    *
                  </span>
                ) : (
                  <span className="normal-case tracking-normal text-muted/70">
                    (facultatif)
                  </span>
                )}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={id}
                  name={field.name}
                  rows={6}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={values[field.name as keyof ContactPayload]}
                  onChange={(event) => update(field.name, event.target.value)}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? `${id}-erreur` : undefined}
                  className={cn(FIELD_CLASS, "resize-y leading-relaxed")}
                />
              ) : field.type === "select" ? (
                <select
                  id={id}
                  name={field.name}
                  required={field.required}
                  value={values[field.name as keyof ContactPayload]}
                  onChange={(event) => update(field.name, event.target.value)}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? `${id}-erreur` : undefined}
                  className={cn(FIELD_CLASS, "appearance-none pr-10")}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%235b564f' stroke-width='1.5'><path d='m6 9 6 6 6-6'/></svg>\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "1.1rem",
                  }}
                >
                  <option value="">Sélectionner…</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={id}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  value={values[field.name as keyof ContactPayload]}
                  onChange={(event) => update(field.name, event.target.value)}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? `${id}-erreur` : undefined}
                  className={FIELD_CLASS}
                />
              )}

              {error ? (
                <p id={`${id}-erreur`} className="text-xs text-clay">
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Champ piège anti-robots, masqué aux visiteurs et aux lecteurs d'écran. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="champ-website">Ne pas remplir</label>
        <input
          id="champ-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-4 border-t border-ink/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs leading-relaxed text-muted">
          Vos informations servent uniquement à répondre à votre demande. Aucune
          communication commerciale, aucun partage à des tiers.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-2.5 bg-clay px-6 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Envoi en cours…" : "Envoyer la demande"}
          <Icon
            name="arrow"
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          />
        </button>
      </div>

      {status === "fallback" ? (
        <div
          role="status"
          className="flex flex-col gap-3 border border-ink/15 bg-paper p-5 text-sm text-muted"
        >
          <p className="text-ink">
            Votre messagerie vient de s&apos;ouvrir avec la demande pré-remplie.
          </p>
          <p>
            Si rien ne se passe, envoyez-la directement à{" "}
            <a href={mailtoHref()} className="text-clay underline underline-offset-2">
              {CONTACT.email}
            </a>{" "}
            ou par{" "}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-clay underline underline-offset-2"
            >
              WhatsApp
            </a>
            .
          </p>
        </div>
      ) : null}

      {status === "error" ? (
        <div
          role="alert"
          className="flex flex-col gap-3 border border-clay/40 bg-clay/5 p-5 text-sm text-muted"
        >
          <p className="text-ink">L&apos;envoi n&apos;a pas abouti.</p>
          <p>
            Écrivez-nous à{" "}
            <a href={mailtoHref()} className="text-clay underline underline-offset-2">
              {CONTACT.email}
            </a>{" "}
            ou contactez-nous sur{" "}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-clay underline underline-offset-2"
            >
              WhatsApp
            </a>
            .
          </p>
        </div>
      ) : null}
    </form>
  );
}
