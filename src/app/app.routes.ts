import { Routes } from '@angular/router';
import { SearchRequestFormComponent } from './search-request/lead/search-request-form.component';
import { SearchRequestIndexComponent } from './search-request/staff/search-request-index.component';

export const routes: Routes = [
  {
    path: ':companyId/search-request/new',
    component: SearchRequestFormComponent,
  },
  {
    path: ':companyId/search-requests',
    component: SearchRequestIndexComponent,
  },
];
