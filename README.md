# selbstgelernt.de

Affiliate-Website rund um IT-Skills, Onlinekurse und Lernpfade — betrieben von der
S&A Concept UG, geschrieben aus der Perspektive eines Wirtschaftsinformatik-Studenten.

## Technik

- [Astro 5](https://astro.build), statischer Build — kein Server, keine Datenbank, nichts zu warten
- Keine Cookies, keine Webfonts, kein Tracking → kein Cookie-Banner nötig
- Sitemap automatisch (`/sitemap-index.xml`), robots.txt in `public/`

```bash
npm install        # einmalig
npm run dev        # Vorschau auf http://localhost:4321 (zeigt auch Entwürfe)
npm run build      # erzeugt die fertige Website in dist/ (ohne Entwürfe!)
```

## Einen Artikel schreiben (die einzige Anleitung, die du brauchst)

1. Neue Datei anlegen: `src/content/artikel/mein-artikel-slug.md` — der Dateiname wird die URL.
2. Frontmatter oben in die Datei (zwischen `---`):

   ```yaml
   ---
   title: "Titel des Artikels (max. ~60 Zeichen für Google)"
   description: "Meta-Beschreibung, max. 160 Zeichen — erscheint im Google-Snippet."
   pubDate: 2026-07-15
   kategorie: kursvergleich   # oder: lernpfad | ratgeber
   affiliate: true            # true, wenn Partner-Links im Text sind
   entwurf: true              # true = erscheint NUR in npm run dev, nie live
   ---
   ```

3. Darunter normalen Markdown-Text schreiben.
4. Zum Veröffentlichen: `entwurf: true` entfernen (oder auf `false`) und neu deployen.

## Affiliate-Links — so funktioniert das hier

**Einfach normale Links schreiben**, z. B. `[Kursname](https://www.datacamp.com/...)`.
Der Build erkennt Partner-Domains automatisch und

- kennzeichnet den Link mit `*` (rechtliche Pflicht),
- setzt `rel="sponsored"` (Google-Vorgabe),
- tauscht die URL gegen den Affiliate-Deeplink — sobald er in
  **`src/data/partner.mjs`** hinterlegt ist. Das ist die EINZIGE Stelle für Affiliate-URLs.

Status und To-dos der Partnerprogramme stehen als Kommentar in `src/data/partner.mjs`.

Artikel mit `affiliate: true` bekommen automatisch die Transparenz-Box am Anfang.

## Deployment

`npm run build` → Inhalt von `dist/` auf den Webspace laden (IONOS: per SFTP oder Deploy-Now).
Nach jedem Deploy mit neuen Artikeln: Google Search Console → Sitemap neu einlesen lassen.

## Offene TODOs vor Launch

- [ ] Domain selbstgelernt.de registrieren + Hosting verbinden
- [ ] `src/pages/ueber.astro`: Vorname + persönliche Sätze + Foto des Autors (wichtig für Google/E-E-A-T)
- [ ] Partnerprogramme beantragen (Coursera/DataCamp/Udemy via Impact bzw. Rakuten) — erst NACH Live-Gang
- [ ] Affiliate-Deeplinks in `src/data/partner.mjs` eintragen
- [ ] Die 3 Entwurfs-Artikel redigieren und `entwurf` entfernen
- [ ] Google Search Console einrichten, Sitemap einreichen
