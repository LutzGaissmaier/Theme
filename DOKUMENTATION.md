# Zweitliebe Theme - Dokumentation

## Übersicht

Das Zweitliebe Theme ist ein vollständig angepasstes Shopify-Theme für einen Buchshop mit 180.000 Büchern. Es bietet eine komplette deutsche Übersetzung, buchspezifische Suchfunktionen und ein ansprechendes Design im Zweitliebe-Branding.

## Verzeichnisstruktur

- `assets/`: Enthält alle statischen Dateien wie CSS, JavaScript und Bilder
- `config/`: Enthält Konfigurationsdateien für das Theme
- `layout/`: Enthält die Hauptlayout-Dateien
- `locales/`: Enthält Übersetzungsdateien (de.json für Deutsch)
- `sections/`: Enthält wiederverwendbare Abschnitte für Seiten
- `snippets/`: Enthält wiederverwendbare Code-Snippets
- `templates/`: Enthält Vorlagen für verschiedene Seitentypen

## Hauptfunktionen

### 1. Vollständige deutsche Übersetzung
Alle Texte und Beschriftungen wurden ins Deutsche übersetzt, um eine nahtlose Benutzererfahrung für deutschsprachige Kunden zu bieten.

### 2. Buchshop-spezifische Anpassungen
- Suchfunktion für Bücher, Autoren und ISBN
- Kategorien für verschiedene Buchtypen
- Angepasste Produktkarten für Bücher

### 3. Zweitliebe-Branding
- Farbschema: Hauptfarbe #8FBC8F (Zweitliebe-Grün)
- Logo und Favicon
- Typografie: Inter-Schriftart

### 4. SEO-Optimierung
- Meta-Tags für bessere Suchmaschinenplatzierung
- Strukturierte Daten für Bücher
- Optimierte Seitentitel und Beschreibungen

## Anpassung des Themes

### Farben ändern
Die Hauptfarben können in der Datei `config/settings_data.json` geändert werden:

```json
"color_scheme_1_bg": "#8FBC8F",
"color_scheme_1_heading": "#ffffff",
"color_scheme_1_text": "#ffffff"
```

### Logo ändern
Das Logo kann in der Shopify-Admin-Oberfläche unter "Online Store" > "Themes" > "Customize" > "Theme Settings" > "Logo" geändert werden.

### Startseite anpassen
Die Startseite kann in der Datei `templates/index.json` angepasst werden.

## Bekannte Probleme und Lösungen

### Problem: "Translation missing" Fehler
**Lösung**: Überprüfen Sie die Datei `locales/de.json` und fügen Sie fehlende Übersetzungen hinzu.

### Problem: Suchfunktion zeigt keine Ergebnisse
**Lösung**: Stellen Sie sicher, dass die Produkte korrekt kategorisiert und mit Tags versehen sind.

## Support und Wartung

Bei Fragen oder Problemen erstellen Sie bitte ein Issue in diesem Repository oder kontaktieren Sie den Support unter support@zweitliebe.de.

## Changelog

### Version 1.0.0 (16.07.2025)
- Initiale Version des Zweitliebe Themes
- Vollständige deutsche Übersetzung
- Buchshop-spezifische Anpassungen
- Zweitliebe-Branding
- SEO-Optimierung
