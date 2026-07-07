# KI-Prompts für selbstgelernt.de

Fertige Prompts für Claude oder ChatGPT — abgestimmt auf die Nische, die Stimme und die
Technik dieser Seite. So bekommst du Entwürfe, die schon fast passen, statt beliebiger KI-Texte.

**So nutzt du sie:** Kopiere zuerst den **Kontext-Block** (einmal pro Chat), dann darunter den
Prompt für deine Aufgabe. Das Ergebnis immer selbst gegenlesen — die KI schreibt den Entwurf,
deine Erfahrung macht ihn echt (und genau das ist unser Vorteil bei Google).

---

## 0) Kontext-Block — immer zuerst einfügen

```
Du hilfst mir bei selbstgelernt.de, einer deutschen Affiliate-Website übers Lernen von
IT-Skills (SQL, Python, Datenanalyse, Excel, Power BI, IT-Zertifikate).

Autor bin ich, Edgar — Wirtschaftsinformatik-Student, der die Kurse selbst durcharbeitet.
Zielgruppe: Einsteiger und Studierende, die eine ehrliche Empfehlung suchen.

Stimme und Regeln (immer einhalten):
- Deutsch, den Leser duzen.
- Ehrlich und nützlich, kein Werbe-Sprech. Nenne immer auch die kostenlose Alternative.
- Sag klar, für wen ein Kurs NICHT geeignet ist – das fehlt in jeder Verkaufsbeschreibung.
- Schreib aus erster Hand ("ich habe … im Studium durchgearbeitet"), aber erfinde nichts.
- Keine Keyword-Wiederholung, keine Textwüste. Nutze konkrete Zahlen: Preise, Dauer, Aufwand.
- Affiliate-Links schreibst du als ganz normale Markdown-Links – die Kennzeichnung mit
  Sternchen passiert auf der Seite automatisch.
- Nutze Zwischenüberschriften (##), gern eine kurze Vergleichstabelle, und ein knappes Fazit.
```

---

## 1) Neuer Kursvergleich (Geld-Artikel)

```
Schreib mir einen vollständigen Kursvergleich-Artikel zum Thema: <THEMA, z. B. "Tableau lernen">.

Aufbau:
- Kurze Einleitung: warum das Thema relevant ist (mit einer konkreten Zahl/Fakt).
- Eine Vergleichstabelle mit 4–5 Optionen (Spalten: Kurs | Für wen | Preis | Urteil),
  darunter immer mindestens eine kostenlose Option.
- Pro Top-Kurs ein kurzer Absatz mit "Stark:", "Schwach:" und "Nicht geeignet für:".
- Ein "Bevor du zahlst"-Abschnitt mit der besten Gratis-Option.
- Ein Fazit mit klarer Empfehlung nach Ziel.

Gib mir am Ende auch den fertigen Frontmatter-Block (siehe unten) mit passendem title
(max ~60 Zeichen) und description (max 160 Zeichen), kategorie: kursvergleich, affiliate: true,
entwurf: true.
```

## 2) Neuer Lernpfad (Schritt-für-Schritt)

```
Schreib einen Lernpfad-Artikel: "<ZIEL, z. B. 'Cloud Engineer werden'> — der realistische
Weg für Einsteiger".

Aufbau:
- Ehrliche Einleitung mit realistischer Gesamtdauer (keine "in 4 Wochen"-Versprechen).
- 4–6 nummerierte Schritte, jeder mit: was man lernt, wie lange es dauert, welche Kurse/Gratis-
  Ressourcen passen.
- Ein Abschnitt "Was du dir sparen kannst".
- Eine Zeitplan-Tabelle (Phase | Dauer | Kosten).
- Verlinke, wo sinnvoll, auf passende bestehende Artikel (Liste unten).

Danach der Frontmatter-Block, kategorie: lernpfad, affiliate: true, entwurf: true.
```

## 3) Neuer Ratgeber (Vertrauens-Artikel)

```
Schreib einen Ratgeber-Artikel zur Einsteiger-Frage: "<FRAGE, z. B. 'Bootcamp oder
Selbststudium?'>".

Ton: ehrlich, entscheidungshelfend, ohne Verkaufsdruck. Gib eine klare Empfehlung statt
"kommt drauf an". Baue eine schnelle Entscheidungshilfe ein (z. B. "Wenn X → dann Y").
Reine Ratgeber dürfen ohne Kurs-Links auskommen.

Danach der Frontmatter-Block, kategorie: ratgeber, affiliate: false (oder true, falls
Kurs-Links vorkommen), entwurf: true.
```

## 4) Themen-Ideen aus einem Kurs, den du gerade machst

```
Ich habe gerade diesen Kurs / dieses Thema bearbeitet: <KURS/THEMA>.
Gib mir 10 konkrete Artikel-Ideen für selbstgelernt.de, die daraus entstehen könnten.
Pro Idee: der wahrscheinliche Suchbegriff (wie Leute googeln), die passende kategorie
(kursvergleich/lernpfad/ratgeber) und in einem Satz der Blickwinkel, den nur ich als
Student aus erster Hand liefern kann. Sortiere nach realistischer Einsteiger-Chance
(wenig umkämpft zuerst).
```

## 5) Titel & Meta-Description optimieren

```
Hier ist mein Artikel: <TEXT ODER THEMA>.
Gib mir 5 Titel-Varianten (je max ~60 Zeichen, das Haupt-Suchwort vorne) und
3 Meta-Descriptions (je max 160 Zeichen, mit einem Grund zu klicken).
Keine Clickbait-Übertreibung – der Titel muss halten, was der Artikel liefert.
```

## 6) Interne Verlinkung vorschlagen

```
Hier ist mein neuer Artikel: <TEXT>.
Schlag mir 3–5 Stellen vor, an denen ich sinnvoll auf einen bestehenden Artikel verlinken
kann (Liste unten). Gib pro Vorschlag den Ankertext und das Ziel an. Verlinke nur, wo es
dem Leser wirklich weiterhilft, nicht künstlich.
```

## 7) Ehrlichkeits- & Qualitäts-Check (Redigat)

```
Lies meinen Entwurf kritisch gegen: <TEXT>.
Prüfe: Klingt irgendwas nach Werbe-Sprech statt nach echter Erfahrung? Fehlt die kostenlose
Alternative? Sage ich klar, für wen es NICHT taugt? Gibt es leere Floskeln oder
Keyword-Wiederholung? Stimmen Preise/Zahlen? Markiere die Stellen und schlag konkrete
Umformulierungen im Stil der Seite vor.
```

---

## Bausteine zum Einsetzen

**Frontmatter-Block** (oben in jede Artikel-Datei, zwischen die `---`):

```yaml
---
title: "… (max ~60 Zeichen, Suchwort vorne)"
description: "… (max 160 Zeichen)"
pubDate: 2026-07-03
kategorie: kursvergleich   # oder: lernpfad | ratgeber
affiliate: true            # false bei reinen Ratgebern ohne Kurs-Links
entwurf: true              # true lassen, bis du drübergelesen hast
---
```

**Bestehende Artikel** (für interne Verlinkung — Pfad = `/artikel/<slug>`):

| Slug | Thema |
|---|---|
| `sql-lernen-beste-kurse` | SQL-Kurse im Vergleich |
| `python-lernen-beste-kurse` | Python-Kurse im Vergleich |
| `it-zertifikate-lohnen-sich` | Welche IT-Zertifikate sich lohnen |
| `data-analyst-werden-lernpfad` | Lernpfad Data Analyst (Hub-Artikel) |
| `power-bi-lernen-pl-300` | Power BI / PL-300 |
| `excel-lernen-kostenlos-oder-kurs` | Excel lernen |
| `it-ohne-studium` | In die IT ohne Studium |
| `welche-programmiersprache-zuerst` | Welche Sprache zuerst lernen |

**Partner-Domains**, die automatisch als Provisions-Link gekennzeichnet werden (in
`src/data/partner.mjs` gepflegt): coursera.org, datacamp.com, udemy.com, amazon.de.
Neue Partner dort einmal eintragen — danach werden ihre Links überall automatisch erkannt.
