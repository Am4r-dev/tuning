/* ─── SEITENVERHALTEN ────────────────────────────────────────────
   Die Seite kommt mit einer einzigen interaktiven Komponente aus:
   der aufklappbaren Fehlerbehebung. Alles andere ist statisches HTML.
   ──────────────────────────────────────────────────────────────── */
(function (window, document) {
  'use strict';

  /* ─── FEHLERBEHEBUNG AUFKLAPPEN ────────────────────────────────
     Ein Klick auf .faq-trigger zeigt das zugehörige .faq-body.
     Sichtbarkeit über das `hidden`-Attribut, Optik über .open. */
  function initFaq() {
    var faq = document.querySelector('.faq');
    if (!faq) { return; }

    faq.addEventListener('click', function (event) {
      var trigger = event.target.closest('.faq-trigger');
      if (!trigger || !faq.contains(trigger)) { return; }

      var item = trigger.closest('.faq-item');
      var body = item.querySelector('.faq-body');
      var willOpen = !item.classList.contains('open');

      item.classList.toggle('open', willOpen);
      body.hidden = !willOpen;
      trigger.setAttribute('aria-expanded', String(willOpen));
    });
  }

  initFaq();

})(window, document);
