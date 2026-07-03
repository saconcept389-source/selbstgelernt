import { visit } from 'unist-util-visit';
import { partnerDomains } from '../data/partner.mjs';

/**
 * Rehype-Plugin: kennzeichnet Links zu Partner-Domains automatisch.
 * - setzt rel="sponsored nofollow noopener" + target="_blank"
 * - hängt den Sternchen-Marker (*) an den Linktext (Pflicht-Kennzeichnung)
 * - tauscht die URL gegen den Affiliate-Deeplink, sobald in partner.mjs hinterlegt
 *
 * Artikel bleiben dadurch sauberes Markdown mit normalen Produkt-Links;
 * die Monetarisierung liegt zentral in src/data/partner.mjs.
 */
export function affiliateLinks() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'a' || !node.properties?.href) return;
      let url;
      try {
        url = new URL(node.properties.href);
      } catch {
        return; // relative/interne Links unverändert lassen
      }
      const domain = url.hostname.replace(/^www\./, '');
      const partner = partnerDomains[domain];
      if (!partner) return;

      if (partner.deeplink) {
        node.properties.href = partner.deeplink(node.properties.href);
      }
      node.properties.rel = 'sponsored nofollow noopener';
      node.properties.target = '_blank';
      node.children.push({
        type: 'element',
        tagName: 'span',
        properties: { className: ['aff-mark'], title: 'Provisions-Link: Wir erhalten ggf. eine Provision, für dich ändert sich der Preis nicht.' },
        children: [{ type: 'text', value: ' *' }],
      });
    });
  };
}
