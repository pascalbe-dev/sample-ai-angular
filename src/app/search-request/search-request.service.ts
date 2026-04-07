import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchRequest } from './search-request.model';

@Injectable({ providedIn: 'root' })
export class SearchRequestService {
  private mockData: SearchRequest[] = [
    {
      id: '1',
      companyId: 'abc',
      city: 'Berlin',
      district: 'Mitte',
      minRooms: 2,
      maxRooms: 4,
      maxPrice: 1200,
      email: 'anna.mueller@example.com',
    },
    {
      id: '2',
      companyId: 'abc',
      city: 'Hamburg',
      maxPrice: 900,
      phone: '01511234567',
    },
    {
      id: '3',
      companyId: 'abc',
      city: 'Berlin',
      minRooms: 3,
      email: 'hans.schmidt@example.com',
      phone: '01709876543',
    },
    {
      id: '4',
      companyId: 'xyz',
      city: 'München',
      email: 'other@example.com',
    },
  ];

  getByCompany(companyId: string): Observable<SearchRequest[]> {
    return of(this.mockData.filter((r) => r.companyId === companyId));
  }

  add(searchRequest: Omit<SearchRequest, 'id'>): Observable<void> {
    const newRequest: SearchRequest = {
      ...searchRequest,
      id: crypto.randomUUID(),
    };
    this.mockData = [...this.mockData, newRequest];
    return of(void 0);
  }
}
