import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchRequest } from './search-request.model';

@Injectable({ providedIn: 'root' })
export class SearchRequestService {
  private http = inject(HttpClient);

  getByCompany(companyId: string): Observable<SearchRequest[]> {
    return this.http.get<SearchRequest[]>(`/api/companies/${companyId}/search-requests`);
  }

  add(searchRequest: Omit<SearchRequest, 'id'>): Observable<void> {
    return this.http.post<void>(
      `/api/companies/${searchRequest.companyId}/search-requests`,
      searchRequest
    );
  }
}
