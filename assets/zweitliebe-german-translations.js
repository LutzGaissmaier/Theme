// 🎓 ZWEITLIEBE - STUDIBUCH-OPTIMIERTE ÜBERSETZUNGEN & FEATURES 
// Komplette Deutsche Lokalisierung für Fachbuch-E-Commerce

(function() {
  'use strict';

  // 📚 FACHBUCH-SPEZIFISCHE ÜBERSETZUNGEN
  const studiBuchTranslations = {
    // Hauptnavigation
    'Search for cameras...': 'Nach Fachbüchern suchen...',
    'Search for a laptop...': 'ISBN, Autor oder Titel eingeben...',
    'Search for smart tech...': 'Medizin, BWL, Jura, Informatik...',
    
    // E-Commerce Texte
    'Add to cart': 'In den Warenkorb',
    'Buy now': 'Jetzt kaufen',
    'Quick add': 'Schnell hinzufügen',
    'View details': 'Details ansehen',
    'Choose options': 'Optionen auswählen',
    'Sold out': 'Ausverkauft',
    'In stock': 'Auf Lager',
    'Low stock': 'Nur noch wenige verfügbar',
    'Out of stock': 'Nicht auf Lager',
    
    // Warenkorb
    'Your cart': 'Dein Warenkorb',
    'Cart is empty': 'Warenkorb ist leer',
    'Continue shopping': 'Weiter stöbern',
    'Checkout': 'Zur Kasse',
    'Update cart': 'Warenkorb aktualisieren',
    'Remove item': 'Artikel entfernen',
    
    // Produktseiten - Fachbuch-spezifisch
    'Popular right now': 'Sehr gefragt bei Studierenden',
    'Selling fast!': 'Wird oft gekauft!',
    'Grab yours while you can': 'Sichere dir dein Exemplar',
    'Add a stand out message': 'Perfekt für dein Studium',
    
    // Bewertungen & Trust
    'Write a review': 'Bewertung schreiben',
    'Customer reviews': 'Kundenbewertungen',
    'Be the first': 'Schreibe die erste Bewertung',
    '5 stars': '5 Sterne',
    '4 stars': '4 Sterne',
    
    // Newsletter & Marketing
    'Sign up to our Newsletter': 'Newsletter für Studierende',
    'Subscribe': 'Anmelden',
    'Email address': 'E-Mail-Adresse',
    
    // Navigation & Suche
    'All products': 'Alle Fachbücher',
    'Collections': 'Fachbereiche',
    'Search': 'Suchen',
    'Search results': 'Suchergebnisse',
    'No results found': 'Keine Bücher gefunden',
    
    // Produktspezifische Begriffe
    'Author': 'Autor/in',
    'Publisher': 'Verlag',
    'Edition': 'Auflage',
    'ISBN': 'ISBN',
    'Condition': 'Zustand',
    'Language': 'Sprache',
    'Pages': 'Seiten',
    'Publication date': 'Erscheinungsdatum',
    
    // Filterung
    'Filter by': 'Filtern nach',
    'Sort by': 'Sortieren nach',
    'Price: Low to High': 'Preis: Niedrig bis Hoch',
    'Price: High to Low': 'Preis: Hoch bis Niedrig',
    'Newest': 'Neueste',
    'Best selling': 'Meistverkauft',
    'Alphabetically': 'Alphabetisch',
    
    // Versand & Service
    'Free shipping': 'Kostenloser Versand',
    'Fast delivery': 'Schnelle Lieferung',
    'Customer service': 'Kundenservice',
    'Return policy': 'Rückgaberecht',
    'Warranty': '36 Monate Garantie'
  };

  // 🎯 FACHBEREICH-SPEZIFISCHE SUCHVORSCHLÄGE
  const fachbereichSuggestions = [
    'Medizin & Gesundheit',
    'BWL & Wirtschaft', 
    'Jura & Rechtswissenschaften',
    'Informatik & IT',
    'Psychologie',
    'Ingenieurswissenschaften',
    'Mathematik & Statistik',
    'Biologie & Chemie',
    'Physik',
    'Pädagogik',
    'Soziologie',
    'Geschichte',
    'Philosophie',
    'Sprach- & Literaturwissenschaft'
  ];

  // 📊 STUDIBUCH-TYPISCHE FEATURES
  function initStudiBuchFeatures() {
    
    // 1. Fachbereich-spezifische Suchverbesserung
    const searchInputs = document.querySelectorAll('input[type="search"], .search__input, [data-search-input]');
    searchInputs.forEach((input, index) => {
      const placeholders = [
        'Nach Fachbüchern suchen...',
        'ISBN, Autor oder Titel eingeben...',
        'Medizin, BWL, Jura, Informatik...'
      ];
      input.setAttribute('placeholder', placeholders[index % placeholders.length]);
      
      // Datalist für Fachbereich-Vorschläge
      if (!document.getElementById('fachbereich-suggestions')) {
        const datalist = document.createElement('datalist');
        datalist.id = 'fachbereich-suggestions';
        fachbereichSuggestions.forEach(suggestion => {
          const option = document.createElement('option');
          option.value = suggestion;
          datalist.appendChild(option);
        });
        document.body.appendChild(datalist);
      }
      input.setAttribute('list', 'fachbereich-suggestions');
    });

    // 2. Produktkarten mit Studenten-Features anreichern
    const productCards = document.querySelectorAll('.card--product, .product-card, [data-product-card]');
    productCards.forEach(card => {
      // Füge Trust-Badges hinzu wenn noch nicht vorhanden
      if (!card.querySelector('.student-trust-badge')) {
        const trustBadge = document.createElement('div');
        trustBadge.className = 'student-trust-badge';
        trustBadge.style.cssText = `
          position: absolute;
          top: 8px;
          right: 8px;
          background: var(--success-green, #22C55E);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          z-index: 2;
        `;
        trustBadge.textContent = '✓ 36M Garantie';
        card.style.position = 'relative';
        card.appendChild(trustBadge);
      }
      
      // CO₂-Ersparnis Badge
      if (!card.querySelector('.co2-savings-badge')) {
        const co2Badge = document.createElement('div');
        co2Badge.className = 'co2-savings-badge';
        co2Badge.style.cssText = `
          position: absolute;
          bottom: 8px;
          left: 8px;
          background: var(--accent-green, #4ADE80);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 600;
          z-index: 2;
        `;
        co2Badge.textContent = '🌱 -2.5kg CO₂';
        card.appendChild(co2Badge);
      }
    });

    // 3. Warenkorb mit Nachhaltigkeit-Calculator
    const cartDrawer = document.querySelector('.cart-drawer, .cart, [data-cart]');
    if (cartDrawer && !cartDrawer.querySelector('.sustainability-calculator')) {
      const sustainabilityCalc = document.createElement('div');
      sustainabilityCalc.className = 'sustainability-calculator';
      sustainabilityCalc.style.cssText = `
        background: linear-gradient(135deg, var(--success-green, #22C55E) 0%, var(--accent-green, #4ADE80) 100%);
        color: white;
        padding: var(--space-md, 16px);
        border-radius: var(--radius-md, 8px);
        margin: var(--space-md, 16px) 0;
        text-align: center;
      `;
      sustainabilityCalc.innerHTML = `
        <h4 style="margin: 0 0 8px 0; font-size: 16px;">🌱 Dein Umwelt-Impact</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 14px;">
          <div><strong>~5kg CO₂</strong><br><small>gespart</small></div>
          <div><strong>70% weniger</strong><br><small>Ressourcen</small></div>
        </div>
        <p style="margin: 8px 0 0 0; font-size: 12px; opacity: 0.9;">
          Mit gebrauchten Büchern hilfst du der Umwelt! 🌍
        </p>
      `;
      
      const cartFooter = cartDrawer.querySelector('.cart__footer, .cart-drawer__footer');
      if (cartFooter) {
        cartFooter.insertBefore(sustainabilityCalc, cartFooter.firstChild);
      } else {
        cartDrawer.appendChild(sustainabilityCalc);
      }
    }

    // 4. Header mit Studenten-Benefits
    const header = document.querySelector('header, .header, [data-header]');
    if (header && !header.querySelector('.student-benefits-strip')) {
      const benefitsStrip = document.createElement('div');
      benefitsStrip.className = 'student-benefits-strip';
      benefitsStrip.style.cssText = `
        background: var(--primary-green, #2D5A27);
        color: white;
        padding: 6px 0;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
      `;
      benefitsStrip.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; gap: 24px; flex-wrap: wrap;">
          <span>📚 180.000+ Fachbücher</span>
          <span>🚚 Kostenloser Versand ab 10€</span>
          <span>🛡️ 36 Monate Garantie</span>
          <span>⭐ 4.8/5 von Studierenden</span>
        </div>
      `;
      header.insertBefore(benefitsStrip, header.firstChild);
    }

    // 5. Intelligente Produkt-Empfehlungen
    const recommendationSections = document.querySelectorAll('[data-recommendations], .product-recommendations');
    recommendationSections.forEach(section => {
      const heading = section.querySelector('h2, h3, .heading');
      if (heading && !heading.textContent.includes('Studierende')) {
        const studentTexts = [
          'Andere Studierende kauften auch',
          'Beliebte Kombinationen für dein Studium',
          'Kommilitonen empfehlen außerdem'
        ];
        heading.textContent = studentTexts[Math.floor(Math.random() * studentTexts.length)];
      }
    });
  }

  // 🚀 PROGRESSIVE ENHANCEMENT
  function enhanceUserExperience() {
    
    // Füge Fachbereich-Icons hinzu
    const fachbereichIcons = {
      'medizin': '🩺',
      'bwl': '💼', 
      'jura': '⚖️',
      'informatik': '💻',
      'psychologie': '🧠',
      'mathematik': '📐',
      'physik': '⚛️',
      'biologie': '🧬',
      'chemie': '🧪'
    };

    // Navigation Links mit Icons versehen
    const navLinks = document.querySelectorAll('nav a, .navigation a, [data-nav-link]');
    navLinks.forEach(link => {
      const text = link.textContent.toLowerCase();
      for (const [fach, icon] of Object.entries(fachbereichIcons)) {
        if (text.includes(fach)) {
          link.innerHTML = `${icon} ${link.innerHTML}`;
          break;
        }
      }
    });

    // Search-as-you-type mit Fachbereich-Erkennung
    const searchField = document.querySelector('input[type="search"]');
    if (searchField) {
      searchField.addEventListener('input', debounce(function() {
        const query = this.value.toLowerCase();
        
        // Fachbereich-spezifische Hilfe anzeigen
        if (query.length > 2) {
          let suggestions = fachbereichSuggestions.filter(fach => 
            fach.toLowerCase().includes(query)
          );
          
          // Zeige Fachbereich-spezifische Tipps
          if (suggestions.length > 0) {
            showSearchSuggestions(suggestions, this);
          }
        }
      }, 300));
    }
  }

  // 🔧 UTILITY FUNCTIONS
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  function showSearchSuggestions(suggestions, input) {
    // Entferne alte Suggestions
    const oldSuggestions = document.querySelector('.fachbereich-suggestions');
    if (oldSuggestions) {
      oldSuggestions.remove();
    }

    // Erstelle neue Suggestion Box
    const suggestionBox = document.createElement('div');
    suggestionBox.className = 'fachbereich-suggestions';
    suggestionBox.style.cssText = `
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid var(--gray-200, #E5E7EB);
      border-radius: 8px;
      box-shadow: var(--shadow-lg, 0 10px 25px rgba(0,0,0,0.1));
      z-index: 1000;
      max-height: 200px;
      overflow-y: auto;
    `;

    suggestions.slice(0, 5).forEach(suggestion => {
      const suggestionItem = document.createElement('div');
      suggestionItem.style.cssText = `
        padding: 12px 16px;
        cursor: pointer;
        border-bottom: 1px solid var(--gray-100, #F3F4F6);
        transition: background-color 0.2s;
      `;
      suggestionItem.textContent = suggestion;
      
      suggestionItem.addEventListener('click', () => {
        input.value = suggestion;
        suggestionBox.remove();
        // Trigger search
        const searchForm = input.closest('form');
        if (searchForm) {
          searchForm.submit();
        }
      });
      
      suggestionItem.addEventListener('mouseenter', () => {
        suggestionItem.style.backgroundColor = 'var(--gray-50, #F9FAFB)';
      });
      
      suggestionItem.addEventListener('mouseleave', () => {
        suggestionItem.style.backgroundColor = 'transparent';
      });
      
      suggestionBox.appendChild(suggestionItem);
    });

    // Position relative to input
    const inputRect = input.getBoundingClientRect();
    const inputContainer = input.parentElement;
    inputContainer.style.position = 'relative';
    inputContainer.appendChild(suggestionBox);

    // Remove suggestions when clicking outside
    document.addEventListener('click', function removeSuggestions(e) {
      if (!suggestionBox.contains(e.target) && e.target !== input) {
        suggestionBox.remove();
        document.removeEventListener('click', removeSuggestions);
      }
    });
  }

  // 🎯 HAUPTINITIALISIERUNG
  function initZweitliebe() {
    console.log('🎓 Zweitliebe StudiBuch-Optimierungen geladen');
    
    // Basis-Übersetzungen anwenden
    for (const [english, german] of Object.entries(studiBuchTranslations)) {
      document.body.innerHTML = document.body.innerHTML
        .replace(new RegExp(english, 'g'), german);
    }

    // Features initialisieren
    initStudiBuchFeatures();
    enhanceUserExperience();

    // ⚡ ULTRA AGGRESSIVE ÜBERSCHREIBUNG: Wiederhole alle 500ms für die ersten 30 Sekunden
    let aggressiveCounter = 0;
    const aggressiveInterval = setInterval(() => {
      aggressiveCounter++;
      
      // Überschreibe Suchplatzhalter
      const searchInputs = document.querySelectorAll('input[type="search"], .search__input');
      searchInputs.forEach(input => {
        const placeholder = input.getAttribute('placeholder');
        if (placeholder && (placeholder.includes('camera') || placeholder.includes('laptop') || placeholder.includes('tech'))) {
          input.setAttribute('placeholder', 'Nach Fachbüchern suchen...');
        }
      });
      
      // 🔥 NUCLEAR BACKGROUND ELIMINATION
      // Entferne ALLE Background-Images von ALLEN Elementen
      const allElements = document.querySelectorAll('*');
      allElements.forEach(element => {
        const computedStyle = getComputedStyle(element);
        const hasBackgroundImage = computedStyle.backgroundImage !== 'none';
        
        if (hasBackgroundImage || element.style.backgroundImage) {
          // Nur überschreiben wenn es nicht Product/Cart/Footer/Header ist
          const classList = element.className;
          const isExcluded = classList && (
            classList.includes('product') || 
            classList.includes('cart') || 
            classList.includes('footer') || 
            classList.includes('header') ||
            classList.includes('nav')
          );
          
          if (!isExcluded) {
            element.style.backgroundImage = 'none';
            element.style.background = 'linear-gradient(135deg, rgba(45, 90, 39, 0.9) 0%, rgba(74, 124, 89, 0.7) 100%)';
          }
        }
      });
      
      // Spezielle Behandlung für große Container
      const mainContainers = document.querySelectorAll('main, .main, section:first-child, .index-section:first-child');
      mainContainers.forEach(container => {
        container.style.backgroundImage = 'none';
        container.style.background = 'linear-gradient(135deg, rgba(45, 90, 39, 0.9) 0%, rgba(74, 124, 89, 0.7) 100%)';
        container.style.minHeight = '80vh';
      });
      
      // Verstecke alle SVGs die Tech-Pattern enthalten könnten
      const allSvgs = document.querySelectorAll('svg');
      allSvgs.forEach(svg => {
        const viewBox = svg.getAttribute('viewBox');
        if (viewBox && (viewBox.includes('camera') || viewBox.includes('watch') || viewBox.includes('computer'))) {
          svg.style.display = 'none';
        }
      });
      
      // Stoppe nach 60 Zyklen (30 Sekunden)
      if (aggressiveCounter >= 60) {
        clearInterval(aggressiveInterval);
      }
    }, 500);
  }

  // 🚀 AUTO-START
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initZweitliebe);
  } else {
    initZweitliebe();
  }

  // Re-initialisiere bei dynamischen Inhalten
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length > 0) {
        // Verzögerte Re-initialisierung für neue Inhalte
        setTimeout(() => {
          initStudiBuchFeatures();
        }, 100);
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

})(); 