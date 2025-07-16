/**
 * Deutsche Übersetzungen - JavaScript
 * Ersetzt englische Texte dynamisch durch deutsche
 */

(function() {
  'use strict';

  // Übersetzungsmap für englische -> deutsche Texte
  const translations = {
    // Header und Navigation
    'Gift cards now available': 'Geschenkkarten verfügbar',
    'Learn more': 'Mehr erfahren',
    'Brands': 'Marken',
    'FAQ': 'Häufige Fragen',
    'Home': 'Startseite',
    'Expert help': 'KI Einkaufshilfe',
    'Customer service': 'Kundenservice',
    
    // Trust Banner
    'Free shipping over $100': 'Kostenloser Versand ab 10€',
    'Free shipping': 'Kostenloser Versand',
    'Free help & advice': 'Kostenlose Hilfe & Beratung',
    'Free help and advice': 'Kostenlose Hilfe & Beratung',
    'Hassle-free returns': 'Problemlose Rückgabe',
    'Open 7 days a week': '7 Tage die Woche geöffnet',
    
    // Shop Bereich
    'Shop our range': 'Unser Sortiment entdecken',
    'Choose a department': 'Abteilung wählen',
    'Choose department': 'Abteilung wählen',
    'View all': 'Alle anzeigen',
    'Shop now': 'Jetzt einkaufen',
    'Browse categories': 'Kategorien durchsuchen',
    
    // Buttons und Links
    'Add to cart': 'In den Warenkorb',
    'Buy now': 'Jetzt kaufen',
    'Quick view': 'Schnellansicht',
    'View details': 'Details anzeigen',
    'Read more': 'Weiterlesen',
    'Show more': 'Mehr anzeigen',
    'Load more': 'Mehr laden',
    
    // Produktbereiche
    'Out of stock': 'Ausverkauft',
    'In stock': 'Auf Lager',
    'Low stock': 'Wenige verfügbar',
    'Sale': 'Angebot',
    'New': 'Neu',
    'Best seller': 'Bestseller',
    'Featured': 'Empfohlen',
    
    // Navigation
    'Previous': 'Zurück',
    'Next': 'Weiter',
    'Back': 'Zurück',
    'Continue': 'Weiter',
    
    // Formulare
    'Subscribe': 'Abonnieren',
    'Submit': 'Senden',
    'Search': 'Suchen',
    'Filter': 'Filtern',
    'Sort by': 'Sortieren nach',
    'Clear': 'Löschen',
    'Reset': 'Zurücksetzen',
    
    // Währung und Preise
    '$': '€',
    'USD': 'EUR'
  };

  // Funktion zum Ersetzen von Text in einem Element
  function replaceTextInElement(element) {
    // Text nodes durchgehen
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    const textNodes = [];
    let node;

    while (node = walker.nextNode()) {
      textNodes.push(node);
    }

    textNodes.forEach(textNode => {
      let text = textNode.textContent;
      let hasChanged = false;

      // Übersetzungen anwenden
      for (const [english, german] of Object.entries(translations)) {
        const regex = new RegExp(english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        if (regex.test(text)) {
          text = text.replace(regex, german);
          hasChanged = true;
        }
      }

      // Text aktualisieren wenn verändert
      if (hasChanged) {
        textNode.textContent = text;
      }
    });
  }

  // Funktion zum Ersetzen von Attributen
  function replaceAttributeTexts(element) {
    const attributesToCheck = ['aria-label', 'title', 'alt', 'placeholder', 'data-original-title'];
    
    attributesToCheck.forEach(attr => {
      if (element.hasAttribute(attr)) {
        let value = element.getAttribute(attr);
        let hasChanged = false;

        for (const [english, german] of Object.entries(translations)) {
          const regex = new RegExp(english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
          if (regex.test(value)) {
            value = value.replace(regex, german);
            hasChanged = true;
          }
        }

        if (hasChanged) {
          element.setAttribute(attr, value);
        }
      }
    });
  }

  // Funktion für spezielle Selektoren
  function replaceSpecialElements() {
    
    // ⚡ KRITISCH: Ersetze englische Suchplatzhalter sofort
    const searchInputs = document.querySelectorAll('input[type="search"], .search__input, #header-search');
    searchInputs.forEach(input => {
      const placeholder = input.getAttribute('placeholder');
      if (placeholder) {
        if (placeholder.includes('camera')) {
          input.setAttribute('placeholder', 'Nach Büchern suchen...');
        } else if (placeholder.includes('laptop')) {
          input.setAttribute('placeholder', 'Autor oder Titel eingeben...');
        } else if (placeholder.includes('tech') || placeholder.includes('smart')) {
          input.setAttribute('placeholder', 'ISBN oder Verlag suchen...');
        } else if (placeholder.includes('Search for') || placeholder.includes('Search')) {
          input.setAttribute('placeholder', 'Nach Büchern suchen...');
        }
      }
    });
    
    // Entferne alle Tech-Hintergründe via JavaScript
    const slideshowElements = document.querySelectorAll('.hero-slideshow, .slideshow, .navigation-slideshow, .slide, [class*="slideshow"], [class*="hero"]');
    slideshowElements.forEach(element => {
      if (element.style.backgroundImage) {
        element.style.backgroundImage = 'none';
        element.style.background = 'linear-gradient(135deg, rgba(45, 90, 39, 0.9) 0%, rgba(74, 124, 89, 0.7) 100%)';
      }
    });
    
    // Verstecke Tech-SVGs
    const techSvgs = document.querySelectorAll('svg[viewBox*="camera"], svg[viewBox*="watch"], svg[viewBox*="computer"]');
    techSvgs.forEach(svg => {
      svg.style.display = 'none';
    });
    
    // Verstecke Tech-Bilder
    const techImages = document.querySelectorAll('img[alt*="camera"], img[alt*="watch"], img[alt*="computer"], img[alt*="technology"]');
    techImages.forEach(img => {
      img.style.display = 'none';
    });
    // Home Link in Navigation
    const homeLinks = document.querySelectorAll('a[href="/"], a[href="' + window.location.origin + '/"]');
    homeLinks.forEach(link => {
      if (link.textContent.trim() === 'Home') {
        link.textContent = 'Startseite';
      }
    });

    // Trust Banner spezifische Behandlung
    const trustItems = document.querySelectorAll('.trust-bar__item, .announcement-bar__item');
    trustItems.forEach((item, index) => {
      const textElement = item.querySelector('.trust-bar__text, .announcement-bar__text');
      if (textElement) {
        const text = textElement.textContent.trim();
        switch (index) {
          case 0:
            if (text.includes('Free shipping') || text.includes('shipping')) {
              textElement.textContent = 'Kostenloser Versand ab 10€';
            }
            break;
          case 1:
            if (text.includes('help') || text.includes('advice')) {
              textElement.textContent = 'Kostenlose Hilfe & Beratung';
            }
            break;
          case 2:
            if (text.includes('returns') || text.includes('hassle')) {
              textElement.textContent = 'Problemlose Rückgabe';
            }
            break;
          case 3:
            if (text.includes('Open') || text.includes('days')) {
              textElement.textContent = '7 Tage die Woche geöffnet';
            }
            break;
        }
      }
    });

    // Currency Symbols
    const priceElements = document.querySelectorAll('.price, .money, [data-currency]');
    priceElements.forEach(element => {
      element.innerHTML = element.innerHTML.replace(/\$([0-9,.])/g, '€$1');
    });
  }

  // Hauptfunktion zum Durchsuchen und Ersetzen
  function translatePage(targetElement = document.body) {
    // Text in Elementen ersetzen
    replaceTextInElement(targetElement);
    
    // Alle Elemente durchgehen und Attribute prüfen
    const allElements = targetElement.querySelectorAll('*');
    allElements.forEach(element => {
      replaceAttributeTexts(element);
    });

    // Spezielle Elemente behandeln
    replaceSpecialElements();
  }

  // Funktion für dynamisch geladene Inhalte
  function observeChanges() {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            translatePage(node);
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // Initialization
  function init() {
    // Sofortige Übersetzung wenn DOM bereit ist
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        translatePage();
        observeChanges();
      });
    } else {
      translatePage();
      observeChanges();
    }

    // Zusätzliche Übersetzung nach kurzer Verzögerung für verzögert geladene Inhalte
    setTimeout(() => {
      translatePage();
    }, 1000);

    // Weitere Übersetzung nach AJAX-Laden
    setTimeout(() => {
      translatePage();
    }, 3000);

    // ⚡ AGGRESSIVE ÜBERSCHREIBUNG: Wiederhole alle 1 Sekunde für die ersten 10 Sekunden
    let aggressiveCounter = 0;
    const aggressiveInterval = setInterval(() => {
      aggressiveCounter++;
      
      // Überschreibe Suchplatzhalter
      const searchInputs = document.querySelectorAll('input[type="search"], .search__input');
      searchInputs.forEach(input => {
        const placeholder = input.getAttribute('placeholder');
        if (placeholder && (placeholder.includes('camera') || placeholder.includes('laptop') || placeholder.includes('tech'))) {
          input.setAttribute('placeholder', 'Nach Büchern suchen...');
        }
      });
      
      // Entferne Tech-Hintergründe
      const slides = document.querySelectorAll('.slide, [class*="slide"]');
      slides.forEach(slide => {
        if (slide.style.backgroundImage || getComputedStyle(slide).backgroundImage !== 'none') {
          slide.style.backgroundImage = 'none';
          slide.style.background = 'linear-gradient(135deg, rgba(45, 90, 39, 0.9) 0%, rgba(74, 124, 89, 0.7) 100%)';
        }
      });
      
      // Stoppe nach 10 Sekunden
      if (aggressiveCounter >= 10) {
        clearInterval(aggressiveInterval);
      }
    }, 1000);
  }

  // Script starten
  init();

  // Für externe Zugriffe verfügbar machen
  window.zweitliebeTranslations = {
    translate: translatePage,
    addTranslation: function(english, german) {
      translations[english] = german;
    }
  };

})(); 