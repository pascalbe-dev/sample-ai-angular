# Architecture Plan: Search Request Index

## Routing

| Route | Component | Nutzergruppe |
|---|---|---|
| `/:companyId/search-request/new` | `SearchRequestFormComponent` | Lead (anonym) |
| `/:companyId/search-requests` | `SearchRequestIndexComponent` | Staff Member |

Die `companyId` aus der URL bestimmt die Mandantenzugehörigkeit jedes Gesuchs.

## Dateistruktur

```
src/app/search-request/
  search-request.model.ts
  search-request.service.ts
  lead/
    search-request-form.component.ts      # Formular für Leads
  staff/
    search-request-index.component.ts     # Liste + Filter für Staff Member
    search-request-item.component.ts      # Einzelnes Gesuch (wird in Index geloopt)
```

## Model

```typescript
interface SearchRequest {
  id: string;
  companyId: string;
  city: string;
  district?: string;
  minRooms?: number;
  maxRooms?: number;
  maxPrice?: number;
  email?: string;
  phone?: string;
}
```

## SearchRequestService

Verhält sich wie ein HTTP-Service – Methoden geben `Observable<T>` zurück.
Intern: in-memory Array als Mock-Datenspeicher.
Später: Mock durch echte `HttpClient`-Calls ersetzen, ohne Komponenten anzufassen.

```typescript
getByCompany(companyId: string): Observable<SearchRequest[]>
add(searchRequest: Omit<SearchRequest, 'id'>): Observable<void>
```

## Datenfluss

**Lead (Form):**
Lead füllt Formular → `service.add(searchRequest)` → Observable

**Staff Member (Index):**
```
SearchRequestIndexComponent
  ├── Filter-Inputs (inline, AND-Verknüpfung)
  └── *ngFor → SearchRequestItemComponent (pro Gesuch)
```

`SearchRequestIndexComponent` hält die Filterlogik und reicht ein einzelnes
`SearchRequest`-Objekt per `@Input()` an `SearchRequestItemComponent` weiter.

## Hinweis Auth

Da Authentifizierung out of scope ist, ist der Staff Member Index vorerst ohne
Login-Schutz zugänglich. Datentrennung erfolgt ausschließlich über die `companyId` in der URL.
