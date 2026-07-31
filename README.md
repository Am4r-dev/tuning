# einfach-scooter.de

Website von **Einfach Scooter** – Anleitung zum Entdrosseln von Xiaomi
E-Scootern mit dem Tuning-Chip. Statische Seite auf GitHub Pages, kein
Build-Schritt: `index.html` öffnen genügt.

Produktbegriff ist durchgängig **Tuning-Chip** (mit „Flash-Adapter" und
„USB-Adapter" als Synonym im Fließtext) – danach wird tatsächlich gesucht,
nach „Tuning-Adapter" so gut wie nicht.

Lokal mit Server ansehen (nötig, damit Caching und Pfade sich wie live verhalten):

```bash
python -m http.server 8123
```

## Aufbau

```
index.html                   nur Markup + strukturierte Daten (JSON-LD)
assets/css/tokens.css        Farben, Fonts, Radien, Maße (CSS-Variablen)
assets/css/base.css          Reset, Element-Defaults, Utilities
assets/css/layout.css        Header, Content-Wrapper, Abschnitte, Footer
assets/css/components.css    Buttons, Listen, Panels, Schritte, Fehlerbehebung
assets/js/translations.js    englische Übersetzungen (nur Daten)
assets/js/i18n.js            Sprachumschaltung
assets/js/main.js            Aufklappen der Fehlerbehebung
assets/favicon.svg           Favicon (ES-Monogramm)
robots.txt                   erlaubt alles, verweist auf die Sitemap
sitemap.xml                  eine URL – bei Änderungen `lastmod` anpassen
CNAME                        einfach-scooter.de
```

Die CSS-Dateien werden in dieser Reihenfolge eingebunden – Tokens zuerst,
Komponenten zuletzt. Die Skripte laufen mit `defer`, `translations.js` vor
`i18n.js`. Es werden keine externen Ressourcen geladen (keine Google Fonts,
keine CDNs): schneller, und es fließen keine Besucherdaten an Dritte.

## Mehrsprachigkeit

Deutsch ist die **Basissprache** und steht direkt im HTML. Das ist bewusst so:
Google indexiert die Seite dadurch als deutsche Seite, und sie funktioniert
auch ohne JavaScript vollständig. Jeder übersetzbare Text trägt ein
`data-i18n`-Attribut:

```html
<h3 data-i18n="prep.need.title">Was du brauchst</h3>
```

In `translations.js` steht nur die englische Fassung:

```js
'prep.need.title': 'What you need',
```

Beim Umschalten sichert `i18n.js` den deutschen Originaltext und tauscht ihn
gegen den Wert aus dem Wörterbuch – zurück auf `de` wird das Original
wiederhergestellt. Für `aria-label` gilt dasselbe über `data-i18n-aria-label`.

## Suchmaschinen

Der Markenname steht an diesen Stellen und sollte dort auch bleiben:

- `<title>` und `<meta name="description">` – beginnen mit „Einfach Scooter"
- `<h1>` und der Einleitungstext
- Abschnitt 06 „Über Einfach Scooter" (Fließtext mit Marke und Angebot)
- Header, Footer und JSON-LD (`Organization`, `WebSite`, `HowTo`)
- `alternateName`: „Einfach-Scooter" – deckt die Schreibweise mit Bindestrich ab

Bei Textänderungen: Die Schritte im sichtbaren Text und die `HowTo`-Schritte im
JSON-LD müssen inhaltlich übereinstimmen, sonst wertet Google das ab.

## Häufige Änderungen

**Text ändern:** deutschen Text in `index.html`, englischen in `translations.js`.

**Sprache hinzufügen:** in `translations.js` einen Block anlegen (z. B. `fr: { ... }`)
und in `index.html` einen Button `<button type="button" data-lang="fr">FR</button>`
in `.lang-switch` ergänzen. Die Verdrahtung passiert automatisch.

**Firmware ergänzen:** ein `.item` in der Firmware-`.item-list` kopieren, Name,
Link und `data-i18n-aria-label`-Schlüssel anpassen, Schlüssel in
`translations.js` nachtragen.

**Schritt ergänzen:** ein `.step` in `.steps` kopieren, Nummer und
`data-i18n`-Schlüssel hochzählen, Schlüssel in `translations.js` nachtragen –
und den Schritt im `HowTo`-Block in `index.html` mit aufnehmen.

**Farbe oder Schrift ändern:** ausschließlich in `tokens.css`.

## Offen

- **Impressum und Datenschutzerklärung fehlen.** Für eine gewerblich genutzte
  Seite in Deutschland sind beide Pflicht (§ 5 DDG). Dafür werden Name,
  Anschrift und Kontaktdaten des Betreibers benötigt.
