/** Structure d'une demande envoyée depuis le formulaire de contact. */
export interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  budget: string;
  timeline: string;
  message: string;
}

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

/** Validation partagée entre le client et la route API. */
export function validateContact(payload: Partial<ContactPayload>) {
  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  if (!payload.name || payload.name.trim().length < 2) {
    errors.name = "Merci d'indiquer votre nom.";
  }
  if (!payload.email || !EMAIL_PATTERN.test(payload.email.trim())) {
    errors.email = "Adresse e-mail invalide.";
  }
  if (!payload.subject) {
    errors.subject = "Sélectionnez un besoin.";
  }
  if (!payload.message || payload.message.trim().length < 20) {
    errors.message = "Décrivez votre projet en quelques lignes (20 caractères minimum).";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}

/** Mise en forme texte d'une demande, réutilisée pour l'e-mail et WhatsApp. */
export function formatContactMessage(payload: ContactPayload): string {
  const lines = [
    `Nom : ${payload.name}`,
    payload.company ? `Société : ${payload.company}` : null,
    `E-mail : ${payload.email}`,
    payload.phone ? `Téléphone : ${payload.phone}` : null,
    `Besoin : ${payload.subject}`,
    payload.budget ? `Budget : ${payload.budget}` : null,
    payload.timeline ? `Échéance : ${payload.timeline}` : null,
    "",
    payload.message,
  ];

  return lines.filter((line) => line !== null).join("\n");
}
