# 🎨 ZWEITLIEBE DESIGN STYLE GUIDE
## Nach rebuy.de Vorbild - Professional E-Commerce Design

---

## 📊 DESIGN-PHILOSOPHIE

### **Kernprinzipien**
1. **Vertrauen schaffen** - Durch klare Trust-Indicators und Transparenz
2. **Conversion optimieren** - Jedes Element dient der Kaufentscheidung
3. **Nachhaltigkeit betonen** - CO₂-Ersparnis und Kreislaufwirtschaft
4. **Mobile-first** - Responsive Design für alle Geräte
5. **Accessibility** - Barrierefreie Nutzung für alle

### **rebuy.de Inspirationen übernommen:**
- ✅ Prominente Garantie-Badges (36 Monate)
- ✅ Zustandsanzeigen mit Farbkodierung
- ✅ Conversion-optimierte Call-to-Actions
- ✅ Trust-Strip im Header
- ✅ Kundenbewertungen prominent platziert
- ✅ Nachhaltigkeits-Messaging (CO₂-Ersparnis)

---

## 🎨 FARBPALETTE

### **Primary Colors - Zweitliebe Brand**
```css
--primary-green: #2D5A27        /* Hauptmarkenfarbe - dunkel, vertrauensvoll */
--primary-green-light: #4A7C59  /* Mittleres Grün für Hover-States */
--accent-green: #6B9B6A         /* Heller Akzent für Highlights */
--success-green: #22C55E        /* Erfolg, Verfügbarkeit */
```

### **Secondary Colors**
```css
--trust-blue: #1E40AF           /* Vertrauen, Garantie-Badges */
--warning-amber: #F59E0B        /* Wenige verfügbar, Warnung */
--error-red: #EF4444           /* Nicht verfügbar, Sale-Badges */
```

### **Neutral Grays (rebuy.de inspired)**
```css
--gray-900: #111827            /* Haupttext - maximaler Kontrast */
--gray-800: #1F2937            /* Sekundärtext */
--gray-700: #374151            /* Labels, Navigation */
--gray-600: #4B5563            /* Disabled States */
--gray-500: #6B7280            /* Platzhalter */
--gray-400: #9CA3AF            /* Borders */
--gray-300: #D1D5DB            /* Light borders */
--gray-200: #E5E7EB            /* Background light */
--gray-100: #F3F4F6            /* Section background */
--gray-50: #F9FAFB             /* Page background */
```

---

## 📝 TYPOGRAFIE

### **Font Stack**
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
```

### **Type Scale**
```css
--text-xs: 12px     /* Badges, Labels */
--text-sm: 14px     /* Secondary Text */
--text-base: 16px   /* Body Text */
--text-lg: 18px     /* Preise */
--text-xl: 20px     /* Subheadlines */
--text-2xl: 24px    /* H3 */
--text-3xl: 30px    /* H2 */
--text-4xl: 36px    /* H1 */
```

### **Font Weights**
```css
--font-normal: 400    /* Body Text */
--font-medium: 500    /* Emphasis */
--font-semibold: 600  /* Headings */
--font-bold: 700      /* Strong Headlines */
```

---

## 🧩 KOMPONENTEN-SYSTEM

### **1. BUTTONS (rebuy.de Style)**

#### Primary Button
```css
.btn-primary {
  background: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-green-light) 100%);
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: white;
  color: var(--primary-green);
  border: 2px solid var(--primary-green);
  padding: 14px 30px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;
}
```

### **2. TRUST INDICATORS**

#### Trust Badge
```css
.trust-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--success-green);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}
```

#### Condition Indicators
```css
.condition-new { background: #DCFCE7; color: #166534; }      /* Neuwertig */
.condition-excellent { background: #DBEAFE; color: #1E40AF; }  /* Sehr gut */
.condition-good { background: #FEF3C7; color: #92400E; }       /* Gut */
.condition-fair { background: #FEE2E2; color: #991B1B; }       /* Akzeptabel */
```

### **3. CARDS**

#### Product Card
```css
.product-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 24px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
}
```

### **4. RATING SYSTEM**

#### Star Ratings
```css
.rating-stars {
  display: flex;
  gap: 2px;
  color: #FCD34D;
}
```

---

## 📱 RESPONSIVE DESIGN

### **Breakpoints**
```css
@media (max-width: 480px)  { /* Mobile */ }
@media (max-width: 768px)  { /* Tablet */ }
@media (max-width: 1024px) { /* Desktop */ }
@media (min-width: 1025px) { /* Large Desktop */ }
```

### **Mobile-First Anpassungen**
- Simplified Trust Strip (nur Icons)
- Stacked Header Layout
- Full-width CTAs
- Reduced spacing
- Hidden secondary information

---

## 🎯 CONVERSION-OPTIMIERUNG

### **Trust-Building Elements**
1. **36 Monate Garantie** - Prominent in Header und auf Produktkarten
2. **4.8/5 Sterne Rating** - Mit Anzahl Bewertungen
3. **Kostenloser Versand** - Ab 10€ Mindestbestellwert
4. **CO₂-Ersparnis** - Nachhaltigkeits-Badge auf jedem Produkt
5. **Verfügbarkeit** - Klare Anzeige ob lieferbar

### **Call-to-Action Hierarchy**
1. **Primary:** "Jetzt Bücher entdecken" / "In den Warenkorb"
2. **Secondary:** "Kategorien durchstöbern" / "Quick View"
3. **Tertiary:** "Mehr Details" / Navigation Links

### **Price Display (rebuy.de Style)**
```css
.price-comparison {
  display: flex;
  align-items: center;
  gap: 8px;
}

.current-price {
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-green);
}

.original-price {
  text-decoration: line-through;
  color: var(--gray-500);
}

.savings-badge {
  background: var(--error-red);
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
}
```

---

## 🛡️ TRUST & SECURITY INDICATORS

### **Header Trust Strip**
- 36 Monate Garantie
- Kostenloser Versand ab 10€
- 4.8/5 Kundenbewertung
- 180.000+ Bücher verfügbar

### **Product Level Trust**
- Zustandsanzeige (Neuwertig, Sehr gut, Gut, Akzeptabel)
- CO₂-Ersparnis pro Buch
- Kundenbewertungen mit Sterne-Rating
- Verfügbarkeits-Status
- ISBN-Nummer für Vertrauen

### **Checkout Trust**
- SSL-Verschlüsselung Badge
- Trusted Shop Siegel
- Zahlungsarten-Logos
- Rückgaberecht prominent

---

## 🌱 NACHHALTIGKEIT MESSAGING

### **Environmental Impact**
```css
.sustainability-impact {
  background: linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%);
  border: 1px solid #86EFAC;
  border-radius: 12px;
  padding: 24px;
  margin: 32px 0;
}

.co2-saved {
  color: var(--success-green);
  font-weight: 700;
  font-size: 18px;
}
```

### **Sustainability Stats Strip**
- 15.000kg CO₂ eingespart
- 50.000+ zufriedene Kunden
- 180.000+ Bücher im Sortiment
- 36 Monate Garantie

---

## 🎨 ANIMATIONS & MICRO-INTERACTIONS

### **Hover Effects**
```css
.transition-smooth { transition: all 0.2s ease-in-out; }

/* Card Hover */
.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}

/* Button Hover */
.btn-primary:hover {
  transform: translateY(-1px);
  background: linear-gradient(135deg, var(--primary-green-light) 0%, var(--accent-green) 100%);
}

/* Image Zoom */
.product-image:hover {
  transform: scale(1.05);
}
```

### **Loading States**
```css
.skeleton {
  background: linear-gradient(90deg, var(--gray-200) 0%, var(--gray-300) 50%, var(--gray-200) 100%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}
```

---

## 📊 PERFORMANCE GUIDELINES

### **Image Optimization**
- WebP Format für moderne Browser
- Responsive Images mit `srcset`
- Lazy Loading für Below-the-fold Content
- Optimale Größen: 400x400px für Produktbilder

### **CSS Optimization**
- Critical CSS inline
- Non-critical CSS lazy loaded
- CSS Custom Properties für Theming
- Minimierte und komprimierte Stylesheets

### **JavaScript Performance**
- ES6+ Module System
- Code Splitting
- Lazy Loading für Komponenten
- Service Worker für Caching

---

## ✅ ACCESSIBILITY STANDARDS

### **WCAG 2.1 AA Compliance**
- Mindestkontrast 4.5:1 für normalen Text
- Mindestkontrast 3:1 für großen Text
- Fokus-Indikatoren für alle interaktiven Elemente
- Alt-Texte für alle Bilder
- Semantisches HTML

### **Screen Reader Support**
```html
<!-- Labels für Form Elements -->
<label for="search">Buchsuche</label>
<input id="search" type="search" aria-describedby="search-help">

<!-- ARIA Labels für Buttons -->
<button aria-label="Zum Warenkorb hinzufügen">
  <svg>...</svg>
</button>

<!-- Skip Links -->
<a href="#main-content" class="sr-only">Zum Hauptinhalt springen</a>
```

---

## 🚀 IMPLEMENTATION ROADMAP

### **Phase 1: Foundation (Woche 1-2)**
- [ ] Design System CSS implementieren
- [ ] Color Palette & Typography einrichten
- [ ] Button & Card Komponenten
- [ ] Grid & Layout System

### **Phase 2: Components (Woche 3-4)**
- [ ] Header & Navigation redesign
- [ ] Hero Section nach rebuy.de Vorbild
- [ ] Produktkarten mit Trust-Indicators
- [ ] Footer mit Service-Informationen

### **Phase 3: Advanced Features (Woche 5-6)**
- [ ] Search & Filter Funktionalität
- [ ] Trust-Badges Integration
- [ ] Rating & Review System
- [ ] Mobile Optimierung

### **Phase 4: Performance & Testing (Woche 7-8)**
- [ ] Performance Optimierung
- [ ] A/B Testing Setup
- [ ] Accessibility Audit
- [ ] Cross-Browser Testing

---

## 📈 SUCCESS METRICS

### **Conversion Rate Optimization**
- **Ziel:** +25% Conversion Rate
- **Methode:** A/B Testing gegen aktuelles Design
- **KPIs:** Add-to-Cart Rate, Checkout Completion, Bounce Rate

### **Trust & Credibility**
- **Ziel:** Erhöhung der Vertrauensindikatoren
- **Methode:** User Surveys & Heat Mapping
- **KPIs:** Time on Site, Return Visitors, Customer Reviews

### **Mobile Performance**
- **Ziel:** <2s Load Time auf Mobile
- **Methode:** Core Web Vitals Monitoring
- **KPIs:** LCP, FID, CLS Scores

---

## 🎨 BRAND GUIDELINES

### **Logo Usage**
- Mindestgröße: 120px Breite
- Clear Space: Minimum 1x Logo Height
- Kontrast: Mindestens 4.5:1 zum Hintergrund

### **Voice & Tone**
- **Vertrauensvoll** - Durch klare Kommunikation
- **Nachhaltig** - Umweltbewusste Botschaften
- **Zugänglich** - Einfache, verständliche Sprache
- **Persönlich** - Direkter Kundenbezug

### **Content Guidelines**
- Trust-Indicators prominent platzieren
- Benefit-orientierte Headlines
- Social Proof durch Kundenbewertungen
- Transparente Preis- und Versandkosten

---

*Dieses Style Guide Dokument dient als zentrale Referenz für alle Design-Entscheidungen im Zweitliebe-Projekt und orientiert sich an den bewährten Conversion-Optimierungs-Prinzipien von rebuy.de.* 