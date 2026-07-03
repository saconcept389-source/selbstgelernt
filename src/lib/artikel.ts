import { getCollection } from 'astro:content';

type Kategorie = 'lernpfad' | 'kursvergleich' | 'ratgeber';

/**
 * Alle Artikel, neueste zuerst.
 * Entwürfe (entwurf: true) erscheinen nur im Dev-Modus — im Live-Build
 * ist damit garantiert, dass nichts Unredigiertes online geht.
 */
export async function getArtikel(kategorie?: Kategorie) {
  const alle = await getCollection('artikel', ({ data }) => {
    if (import.meta.env.PROD && data.entwurf) return false;
    return kategorie ? data.kategorie === kategorie : true;
  });
  return alle.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
