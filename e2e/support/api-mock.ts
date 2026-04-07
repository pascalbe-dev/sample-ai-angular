import { Page } from '@playwright/test';
import { SearchRequest } from '../../src/app/search-request/search-request.model';

export async function mockSearchRequests(page: Page, companyId: string, requests: Omit<SearchRequest, 'id'>[]) {
  const data: SearchRequest[] = requests.map((r, i) => ({ ...r, id: String(i + 1) }));

  await page.route(`/api/companies/${companyId}/search-requests`, (route) => {
    if (route.request().method() === 'GET') {
      route.fulfill({ json: data });
    } else if (route.request().method() === 'POST') {
      route.fulfill({ status: 201, json: {} });
    }
  });
}
