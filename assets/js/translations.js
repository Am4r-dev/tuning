/* ─── ÜBERSETZUNGEN ──────────────────────────────────────────────
   Deutsch ist die Basissprache und steht direkt im HTML – so ist die
   Seite auch ohne JavaScript vollständig und Google indexiert sie als
   deutsche Seite (wichtig für Suchanfragen nach "Einfach Scooter").

   Hier stehen nur die Übersetzungen der weiteren Sprachen.
   Schlüssel = Wert des `data-i18n`- bzw. `data-i18n-aria-label`-
   Attributs im Markup. Werte dürfen einfaches HTML enthalten
   (<strong>, <code>).

   Neue Sprache: unten einen weiteren Block anlegen (z. B. `fr: { ... }`)
   und in index.html einen Button mit `data-lang="fr"` ergänzen.
   ──────────────────────────────────────────────────────────────── */
window.BW_TRANSLATIONS = {

  en: {
    /* Kopfbereich */
    'nav.shop':             'eBay shop',
    'nav.lang.aria':        'Language selection',

    /* Einstieg */
    'hero.kicker':          'Guide · Einfach Scooter',
    'hero.title':           'Flashing your scooter with the Einfach Scooter tuning adapter',
    'hero.lead':            'This is the official guide for the tuning adapters sold by Einfach Scooter. It walks you through installing the firmware on Xiaomi and Brightway scooters – from the required downloads to putting the scooter back together.',
    'hero.cta.guide':       'Go to the guide',
    'hero.cta.shop':        'Adapters on eBay',
    'hero.warning':         'Firmware changes are made at your own risk. Check the rules that apply in your country: road approval, warranty and insurance coverage may be voided.',

    /* 01 – Downloads */
    'dl.intro':             'Both programs are needed on your Windows PC. BWFlasher is free open-source software; the FTDI driver comes from the manufacturer of the chip inside the adapter.',
    'dl.flasher.desc':      'Program that writes the firmware to the scooter through the adapter. Version 0.6.0 for Windows (64-bit).',
    'dl.flasher.aria':      'Download BWFlasher version 0.6.0',
    'dl.driver.desc':       'Lets Windows recognise the adapter as a COM port. For Windows 10 and 11.',
    'dl.driver.aria':       'Download the FTDI USB driver',

    /* 02 – Firmware */
    'sec.firmware':         'Choose the firmware',
    'fw.intro':             'Only download the file for your own model. Firmware for a different model can render the scooter unusable.',
    'fw.4pro2nd.aria':      'Download firmware for Xiaomi 4 Pro 2nd',
    'fw.5.aria':            'Download firmware for Xiaomi 5',
    'fw.5pro.aria':         'Download firmware for Xiaomi 5 Pro',
    'fw.5max.aria':         'Download firmware for Xiaomi 5 Max',

    /* 03 – Vorbereitung */
    'sec.prep':             'Preparation',
    'prep.need.title':      'What you need',
    'prep.need.1':          'Windows PC or laptop',
    'prep.need.2':          'Tuning adapter from Einfach Scooter with the matching dashboard cable',
    'prep.need.3':          'BWFlasher and the FTDI driver (section 01)',
    'prep.need.4':          'Firmware file for your model (section 02)',
    'prep.need.5':          'Scooter with a sufficiently charged battery',
    'prep.setup.title':     'Setting up the software',
    'prep.setup.1':         'Run BWFlasher and complete the installation.',
    'prep.setup.2':         'Extract <code>CDM2123620_Setup</code> and run the driver setup.',
    'prep.setup.3':         'Restart the PC so the adapter is detected as a COM port.',

    /* 04 – Anleitung */
    'sec.steps':            'Step by step',
    'steps.list.aria':      'Guide to installing the firmware',
    'steps.1':              'Turn the scooter on and <strong>switch on the rear light</strong>. Throughout the process it tells you whether the scooter still has power.',
    'steps.2':              '<strong>Remove the handlebar.</strong>',
    'steps.3':              '<strong>Unplug the dashboard cable</strong> and connect the tuning adapter.',
    'steps.4':              'Check: the <strong>rear light must still be on.</strong> The scooter must not power down.',
    'steps.5':              'Connect the adapter to the PC via USB and <strong>open BWFlasher</strong>.',
    'steps.6':              'Select the correct COM port under <code>Serial Port</code>. In most cases this is <strong>not</strong> <code>COM1</code>.',
    'steps.7':              'Use the <code>Browse</code> button to <strong>select the firmware file</strong> you downloaded for your model in section 02.',
    'steps.8':              'Enable <code>Debug Mode</code> and check once more that the <strong>rear light is on</strong>.',
    'steps.9':              'Click <code>Start Update</code>. The rear light <strong>going out is normal</strong>.',
    'steps.10':             'Wait until the progress bar reaches <strong>100&nbsp;%</strong> and the console stops printing messages. Then unplug the adapter and reassemble the scooter.',

    /* 05 – Fehlerbehebung */
    'sec.trouble':          'Troubleshooting',
    'trouble.stuck.title':  'The transfer stays at 0&nbsp;%',
    'trouble.stuck.1':      'Is the scooter switched on? The rear light should be lit.',
    'trouble.stuck.2':      'Are all connections firmly seated – cable, adapter and USB?',
    'trouble.stuck.3':      'Close the program, power the scooter off and on again, then retry.',
    'trouble.crash.title':  'The program crashes or stops responding',
    'trouble.crash.1':      'Switch the scooter off, wait a moment and switch it back on.',
    'trouble.crash.2':      'Restart BWFlasher and start the process again from the beginning.',
    'trouble.crash.note':   'If none of this helps, get in touch – by email or through our eBay shop. We will help you out.',

    /* 06 – Über & Kontakt */
    'sec.about':            'About Einfach Scooter',
    'about.title':          'Who we are',
    'about.p1':             'Einfach Scooter sells tuning adapters for electric scooters made by Xiaomi and Brightway. The adapter sits between the scooter and a Windows PC and connects to the controller, which is how the firmware gets installed.',
    'about.p2':             'This site belongs to the adapter: it holds the matching firmware, the required programs and the full guide. All adapters are shipped through our eBay shop.',
    'contact.title':        'Contact &amp; support',
    'contact.p1':           'We are happy to answer questions about the adapter or the guide. Please include your scooter model when you write to us.',
    'contact.shop':         'Einfach Scooter on eBay',

    /* Footer */
    'footer.contact':       'Contact',
    'footer.legal':         'Einfach Scooter is not affiliated with Xiaomi or Brightway. Firmware changes are made at your own risk; road approval, warranty and insurance coverage may be voided. Please observe the laws that apply in your country.'
  }

};
