/* ─── ÜBERSETZUNGEN ──────────────────────────────────────────────
   Deutsch ist die Basissprache und steht direkt im HTML – so ist die
   Seite auch ohne JavaScript vollständig und Google indexiert sie als
   deutsche Seite (wichtig für Suchanfragen wie "Xiaomi E-Scooter
   entdrosseln" oder "Einfach Scooter").

   Hier stehen nur die Übersetzungen der weiteren Sprachen.
   Schlüssel = Wert des `data-i18n`- bzw. `data-i18n-aria-label`-
   Attributs im Markup. Werte dürfen einfaches HTML enthalten
   (<strong>, <code>).

   Achtung: Die FAQ-Antworten stehen zusätzlich als FAQPage-Daten in
   index.html. Wird eine Antwort geändert, muss der JSON-LD-Block
   angepasst werden – sonst passt er nicht mehr zum sichtbaren Text.

   Neue Sprache: unten einen weiteren Block anlegen (z. B. `fr: { ... }`)
   und in index.html einen Button mit `data-lang="fr"` ergänzen.
   ──────────────────────────────────────────────────────────────── */
window.BW_TRANSLATIONS = {

  en: {
    /* Kopfbereich */
    'nav.shop':             'Buy the tuning chip',
    'nav.lang.aria':        'Language selection',

    /* Einstieg */
    'hero.kicker':          'Guide · Einfach Scooter',
    'hero.title':           'Derestricting a Xiaomi e-scooter – with the tuning chip from Einfach Scooter',
    'hero.lead':            'Want to make your e-scooter faster? The top speed lives in the firmware of the controller. With the tuning chip from Einfach Scooter you write new firmware to your Xiaomi scooter and derestrict it in about 30 minutes – no soldering, no workshop. This page is the complete guide.',
    'hero.cta.shop':        'Buy the tuning chip on eBay',
    'hero.cta.guide':       'Go to the guide',
    'hero.warning':         'Derestricting voids your e-scooter’s road approval: insurance cover and permission to ride on public roads no longer apply. Use the scooter on private property only and observe the rules in your country. Firmware changes are made at your own risk.',

    /* 01 – Tuning-Chip */
    'sec.chip':             'The tuning chip for your Xiaomi scooter',
    'chip.title':           'It does not work without the tuning chip',
    'chip.p1':              'The firmware cannot be replaced through the app or over Bluetooth. The scooter has to be addressed through the cable at the display – and that is what the tuning chip is for. It is also called a flash adapter or USB adapter and sits between the dashboard cable of your Xiaomi scooter and the USB port of your Windows PC.',
    'chip.p2':              'You get the matching tuning chip including the dashboard cable directly from us on eBay. Firmware, this guide and email support are included at no extra cost.',
    'chip.f1':              'Fits Xiaomi 4 Pro 2nd, Xiaomi 5, Xiaomi 5 Pro and Xiaomi 5 Max',
    'chip.f2':              'No soldering, no permanent change to the hardware',
    'chip.f3':              'Reusable – works for further scooters as well',
    'chip.f4':              'Firmware, guide and support included',
    'chip.cta':             'Order on eBay now',
    'chip.note':            'Orders and shipping run through eBay. We answer questions by email.',

    /* 02 – Downloads */
    'dl.intro':             'Besides the tuning chip you need two programs on your Windows PC. BWFlasher transfers the firmware, the FTDI driver makes Windows recognise the chip in the first place. Both are free.',
    'dl.flasher.desc':      'Program that writes the firmware to the scooter through the tuning chip. Version 0.6.0 for Windows (64-bit).',
    'dl.flasher.aria':      'Download BWFlasher version 0.6.0',
    'dl.driver.title':      'FTDI USB driver',
    'dl.driver.desc':       'Lets Windows recognise the tuning chip as a COM port. For Windows 10 and 11.',
    'dl.driver.aria':       'Download the FTDI USB driver',

    /* 03 – Firmware */
    'sec.firmware':         'Firmware for your Xiaomi model',
    'fw.intro':             'Whether you want to derestrict a Xiaomi 4 Pro 2nd, flash your Xiaomi 5 or install firmware on a Xiaomi 5 Max: every model has its own file. Only download the firmware for your own model – firmware for a different model can render the scooter unusable. It is then transferred using the tuning chip.',
    'fw.4pro2nd.aria':      'Download firmware for Xiaomi 4 Pro 2nd',
    'fw.5.aria':            'Download firmware for Xiaomi 5',
    'fw.5pro.aria':         'Download firmware for Xiaomi 5 Pro',
    'fw.5max.aria':         'Download firmware for Xiaomi 5 Max',

    /* 04 – Vorbereitung */
    'sec.prep':             'Preparation',
    'prep.need.title':      'What you need',
    'prep.need.1':          'Windows PC or laptop',
    'prep.need.2':          'Tuning chip from Einfach Scooter with the matching dashboard cable',
    'prep.need.3':          'BWFlasher and the FTDI driver (section 02)',
    'prep.need.4':          'Firmware file for your Xiaomi model (section 03)',
    'prep.need.5':          'Scooter with a sufficiently charged battery',
    'prep.setup.title':     'Setting up the software',
    'prep.setup.1':         'Run BWFlasher and complete the installation.',
    'prep.setup.2':         'Extract <code>CDM2123620_Setup</code> and run the driver setup.',
    'prep.setup.3':         'Restart the PC so the tuning chip is detected as a COM port.',

    /* 05 – Anleitung */
    'sec.steps':            'Flashing a Xiaomi scooter – step by step',
    'steps.intro':          'Set aside about 30 minutes and work through the steps in order. One thing matters above all: the scooter has to stay powered on for the whole procedure.',
    'steps.list.aria':      'Guide to derestricting the Xiaomi scooter',
    'steps.1':              'Turn the scooter on and <strong>switch on the rear light</strong>. Throughout the process it tells you whether the scooter still has power.',
    'steps.2':              '<strong>Remove the handlebar.</strong>',
    'steps.3':              '<strong>Unplug the dashboard cable</strong> and connect the tuning chip.',
    'steps.4':              'Check: the <strong>rear light must still be on.</strong> The scooter must not power down.',
    'steps.5':              'Connect the tuning chip to the PC via USB and <strong>open BWFlasher</strong>.',
    'steps.6':              'Select the correct COM port under <code>Serial Port</code>. In most cases this is <strong>not</strong> <code>COM1</code>.',
    'steps.7':              'Use the <code>Browse</code> button to <strong>select the firmware file</strong> you downloaded for your model in section 03.',
    'steps.8':              'Enable <code>Debug Mode</code> and check once more that the <strong>rear light is on</strong>.',
    'steps.9':              'Click <code>Start Update</code>. The rear light <strong>going out is normal</strong>.',
    'steps.10':             'Wait until the progress bar reaches <strong>100&nbsp;%</strong> and the console stops printing messages. Then unplug the tuning chip and reassemble the scooter.',

    /* Kaufhinweis */
    'cta.band':             'No tuning chip yet? Without it you cannot reach the controller of your scooter – we have the right one for your model.',
    'cta.band.btn':         'Buy the tuning chip',

    /* 06 – Häufige Fragen */
    'sec.faq':              'Frequently asked questions',
    'faq.entdrosseln.q':    'How do I derestrict my Xiaomi e-scooter?',
    'faq.entdrosseln.a':    'The scooter gets new firmware. You plug the tuning chip in between the scooter’s dashboard cable and your Windows PC, select the correct COM port and the firmware file for your model in BWFlasher, and start the transfer. The full ten-step guide is further up this page. Without the tuning chip there is no way to reach the scooter’s controller.',
    'faq.schneller.q':      'How do I make my e-scooter faster?',
    'faq.schneller.a':      'The top speed is stored in the firmware of the controller, not in the mechanics. Anyone who wants to make their e-scooter faster therefore has to replace the firmware – there is nothing to adjust on the parts themselves. That is exactly what the tuning chip and BWFlasher are for.',
    'faq.chip.q':           'What is a tuning chip and why do I need one?',
    'faq.chip.a':           'The tuning chip – also called a flash adapter or USB adapter – is the link between your Xiaomi scooter and your PC. It is plugged into the dashboard cable in place of the display and connected to the computer over USB. The firmware cannot be replaced through the app or over Bluetooth, so there is no way around the chip.',
    'faq.firmware.q':       'Which firmware do I need for my scooter?',
    'faq.firmware.a':       'The firmware depends on the model. Files for Xiaomi 4 Pro 2nd, Xiaomi 5, Xiaomi 5 Pro and Xiaomi 5 Max are available in section 03. Only download the file for your own model – the wrong firmware can render the scooter unusable.',
    'faq.bwflasher.q':      'What is BWFlasher?',
    'faq.bwflasher.a':      'BWFlasher is a free open-source program for Windows that transfers the firmware to the scooter’s controller. We provide it for download in section 02; it is developed by the ScooterTeam. Without a suitable adapter the program cannot reach the scooter.',
    'faq.comport.q':        'Which COM port is the right one?',
    'faq.comport.a':        'Once the FTDI driver is installed and the tuning chip is plugged into the USB port, it appears in the Windows Device Manager under <code>Ports (COM &amp; LPT)</code> as <code>USB Serial Port</code>. Select that entry under <code>Serial Port</code> in BWFlasher. In most cases it is not <code>COM1</code>.',
    'faq.notfound.q':       'Why does BWFlasher not detect my scooter?',
    'faq.notfound.a':       'Usually the FTDI driver is missing or the scooter has powered down. Check in this order:',
    'faq.notfound.1':       'Is the rear light on? The scooter has to stay switched on.',
    'faq.notfound.2':       'Is the FTDI driver installed and was the PC restarted afterwards?',
    'faq.notfound.3':       'Is the correct COM port selected under <code>Serial Port</code>?',
    'faq.notfound.4':       'Are the dashboard cable, tuning chip and USB plug firmly seated?',
    'faq.stuck.q':          'Why does the transfer stay at 0&nbsp;%?',
    'faq.stuck.a':          'In that case BWFlasher gets no reply from the scooter. Check that the scooter is switched on and the rear light is lit, and that all connections are firmly seated. Then close the program, power the scooter off and on again, and start over.',
    'faq.crash.q':          'The program crashes or stops responding',
    'faq.crash.a':          'Switch the scooter off, wait a moment and switch it back on. Then restart BWFlasher and begin the procedure from the start.',
    'faq.crash.note':       'If none of this helps, get in touch – by email or through our eBay shop. We will help you out.',
    'faq.legal.q':          'Is derestricting allowed?',
    'faq.legal.a':          'Changing the firmware voids the road approval of the e-scooter. Insurance cover no longer applies and the scooter may no longer be ridden on public roads. Using it on private property is permitted. Find out about the rules in your country before derestricting.',

    /* 07 – Über & Kontakt */
    'sec.about':            'About Einfach Scooter',
    'about.title':          'Who we are',
    'about.p1':             'Einfach Scooter sells tuning chips for Xiaomi e-scooters. The chip is plugged in between the scooter and a Windows PC and connects to the controller – which is how the firmware gets replaced and the scooter derestricted.',
    'about.p2':             'This site belongs to the tuning chip: it holds the matching firmware, the required programs and the full guide. Orders go through our eBay shop.',
    'contact.title':        'Contact &amp; support',
    'contact.p1':           'We are happy to answer questions about the tuning chip or the guide. Please include your scooter model when you write to us.',
    'contact.shop':         'Tuning chips in the Einfach Scooter eBay shop',

    /* Footer */
    'footer.contact':       'Contact',
    'footer.faq':           'FAQ',
    'footer.legal':         'Einfach Scooter is not affiliated with Xiaomi. Derestricting an e-scooter voids its road approval; insurance cover and permission to ride on public roads no longer apply. Use is permitted on private property only. Firmware changes are made at your own risk – please observe the laws that apply in your country.'
  }

};
