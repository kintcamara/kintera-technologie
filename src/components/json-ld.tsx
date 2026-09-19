/**
 * Insère un bloc de données structurées schema.org.
 * Le contenu provient exclusivement des constantes du site.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
