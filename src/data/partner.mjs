/**
 * Zentrale Partner-Konfiguration.
 *
 * deeplink: null  → Link bleibt der normale Produkt-Link, wird aber bereits
 *                   als Werbelink gekennzeichnet (rel="sponsored" + Sternchen).
 * deeplink: (url) => '…'  → nach Freischaltung des Partnerprogramms hier den
 *                   Affiliate-Deeplink-Wrapper eintragen — EINE Stelle, alle
 *                   Artikel sind sofort monetarisiert.
 *
 * Status Partnerprogramme (03.07.2026):
 *   Coursera  — via Impact, 15–45 % Provision, 30-Tage-Cookie  → TODO: bewerben
 *   DataCamp  — via Impact, bis 30 %, 30-Tage-Cookie           → TODO: bewerben
 *   Udemy     — via Rakuten/Impact, ~10 %, 7-Tage-Cookie       → TODO: bewerben
 */
export const partnerDomains = {
  'coursera.org': { name: 'Coursera', deeplink: null },
  'datacamp.com': { name: 'DataCamp', deeplink: null },
  'udemy.com': { name: 'Udemy', deeplink: null },
  'amazon.de': { name: 'Amazon', deeplink: null },
};
