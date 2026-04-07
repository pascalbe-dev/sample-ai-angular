# Feature: Gesuchskartei (Search Request Index)

## Motivation

Wohnungsunternehmen verwalten Wohnungsgesuche heute manuell per Telefon und Excel. Das verursacht unnötigen Aufwand auf beiden Seiten. Dieses Feature ermöglicht Interessenten, sich selbst einzutragen, und gibt Sachbearbeitern ein effizientes Werkzeug, um passende Interessenten für freiwerdende Wohnungen zu finden.

## Nutzergruppen

- **Lead** – Anonym, nicht eingeloggt. Erreicht das Formular über eine unternehmens-spezifische URL.
- **Staff Member** – Eingeloggt, gehört zu genau einem Unternehmen. Sieht nur Daten seines Unternehmens.

## Beschreibung

### Datenfelder eines Search Request

**Kontakt:**
| Feld | Pflicht |
|---|---|
| E-Mail | mind. eines von beiden |
| Telefonnummer | mind. eines von beiden |

**Suchkriterien:**
| Feld | Pflicht |
|---|---|
| Stadt | ja |
| Stadtteil | nein |
| Anzahl Räume (min/max) | nein |
| Maximale Preisvorstellung | nein |

### Mandantentrennung

Jeder Search Request gehört zu genau einer Company. Der Bezug zur Company wird über die URL hergestellt (`/<company-id>/...`). Staff Members sehen ausschließlich Search Requests ihrer eigenen Company.

## User Stories & Akzeptanzkriterien

### Story 1 – Search Request anlegen

> Als Lead möchte ich über eine unternehmens-spezifische URL ein Gesuch anlegen, damit das Wohnungsunternehmen mich kontaktieren kann, wenn eine passende Wohnung verfügbar wird.

**Akzeptanzkriterien:**
- Der Lead kann das Formular nur absenden, wenn die Stadt angegeben ist
- Der Lead kann das Formular nur absenden, wenn mindestens E-Mail oder Telefonnummer angegeben ist
- Nach dem Absenden ist das Gesuch der Company aus der URL zugeordnet

---

### Story 2a – Search Request Index einsehen

> Als Staff Member möchte ich alle Gesuche meines Unternehmens in einer Übersicht sehen, damit ich einen Überblick über aktuelle Interessenten habe.

**Akzeptanzkriterien:**
- Der Staff Member sieht nur Search Requests seiner Company
- Pro Search Request werden alle erfassten Felder angezeigt (Kontakt, Stadt, optionale Kriterien)

---

### Story 2b – Search Requests filtern

> Als Staff Member möchte ich die Gesuche nach Suchkriterien filtern, damit ich schnell passende Interessenten für eine freiwerdende Wohnung finde.

**Akzeptanzkriterien:**
- Der Staff Member kann nach Stadt, Stadtteil, Anzahl Räume (min/max) und maximaler Preisvorstellung filtern
- Mehrere Filter können gleichzeitig aktiv sein (AND-Verknüpfung)
- Die Liste aktualisiert sich entsprechend der aktiven Filter

## Out of Scope (MVP)

- Bestätigung an den Lead nach dem Absenden
- Bearbeitung oder Löschung von Gesuchen durch den Lead
- Ablaufdatum von Gesuchen
- Admin-Rolle zur Verwaltung von Companies und Staff Members
