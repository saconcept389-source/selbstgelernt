import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artikel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artikel' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160, 'Meta-Description: max. 160 Zeichen'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    kategorie: z.enum(['lernpfad', 'kursvergleich', 'ratgeber']),
    // true = Artikel enthält Partner-Links → Pflicht-Hinweisbox wird eingeblendet
    affiliate: z.boolean().default(false),
    // true = noch nicht redigiert → erscheint nur im Dev-Modus, nie im Live-Build
    entwurf: z.boolean().default(false),
  }),
});

export const collections = { artikel };
