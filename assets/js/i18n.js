/* ─── SPRACHUMSCHALTUNG ──────────────────────────────────────────
   Ersetzt Texte anhand von `data-i18n` / `data-i18n-aria-label`.

   Funktionsweise:
   Beim Start wird der im HTML stehende Text als Basissprache (de)
   gespeichert. Beim Wechsel liefert BW_TRANSLATIONS[lang] die
   Ersatztexte; zurück auf die Basissprache wird der gespeicherte
   Originaltext wiederhergestellt. Dadurch steht jeder Text genau
   einmal im Markup und einmal pro Fremdsprache.

   Abhängigkeit: translations.js (muss vorher geladen werden).
   ──────────────────────────────────────────────────────────────── */
(function (window, document) {
  'use strict';

  var BASE_LANG   = 'de';
  var TEXT_ATTR   = 'data-i18n';
  var ARIA_ATTR   = 'data-i18n-aria-label';

  var dictionaries = window.BW_TRANSLATIONS || {};
  var originals    = [];   // [{ el, html, ariaLabel }]
  var currentLang  = BASE_LANG;

  /** Basissprache aus dem Markup sichern. */
  function captureOriginals() {
    var selector = '[' + TEXT_ATTR + '],[' + ARIA_ATTR + ']';
    Array.prototype.forEach.call(document.querySelectorAll(selector), function (el) {
      originals.push({
        el: el,
        html: el.innerHTML,
        ariaLabel: el.getAttribute('aria-label')
      });
    });
  }

  /** Einen Eintrag auf die Zielsprache setzen (dict === null → Basissprache). */
  function applyToElement(entry, dict) {
    var el = entry.el;
    var textKey = el.getAttribute(TEXT_ATTR);
    var ariaKey = el.getAttribute(ARIA_ATTR);

    if (textKey) {
      /* Werte stammen ausschließlich aus translations.js, keine Nutzereingaben. */
      el.innerHTML = (dict && dict[textKey]) || entry.html;
    }

    if (ariaKey) {
      var label = (dict && dict[ariaKey]) || entry.ariaLabel;
      if (label) { el.setAttribute('aria-label', label); }
    }
  }

  /** Zustand der Sprachbuttons angleichen. */
  function syncSwitcher(lang) {
    Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  /** Öffentliche API: Sprache setzen. */
  function setLang(lang) {
    if (lang !== BASE_LANG && !dictionaries[lang]) { return; }

    var dict = lang === BASE_LANG ? null : dictionaries[lang];
    originals.forEach(function (entry) { applyToElement(entry, dict); });

    document.documentElement.lang = lang;
    currentLang = lang;
    syncSwitcher(lang);
  }

  /** Klicks auf den Sprachumschalter delegiert entgegennehmen. */
  function bindSwitcher() {
    var switcher = document.querySelector('.lang-switch');
    if (!switcher) { return; }

    switcher.addEventListener('click', function (event) {
      var btn = event.target.closest('[data-lang]');
      if (btn) { setLang(btn.getAttribute('data-lang')); }
    });
  }

  function init() {
    captureOriginals();
    bindSwitcher();
    syncSwitcher(currentLang);
  }

  init();

  window.BW = window.BW || {};
  window.BW.i18n = {
    setLang: setLang,
    getLang: function () { return currentLang; }
  };

})(window, document);
