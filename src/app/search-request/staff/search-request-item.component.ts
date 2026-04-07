import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { SearchRequest } from '../search-request.model';

@Component({
  selector: 'app-search-request-item',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatIconModule],
  template: `
    <mat-card class="item-card">
      <mat-card-content>
        <div class="header">
          <span class="city">{{ request.city }}</span>
          @if (request.district) {
            <span class="district"> – {{ request.district }}</span>
          }
        </div>

        <div class="contact">
          @if (request.email) {
            <span><mat-icon inline>email</mat-icon> {{ request.email }}</span>
          }
          @if (request.phone) {
            <span><mat-icon inline>phone</mat-icon> {{ request.phone }}</span>
          }
        </div>

        <div class="chips">
          @if (request.minRooms || request.maxRooms) {
            <mat-chip>
              Räume:
              {{ request.minRooms ?? '–' }} – {{ request.maxRooms ?? '–' }}
            </mat-chip>
          }
          @if (request.maxPrice) {
            <mat-chip>max. {{ request.maxPrice }} €</mat-chip>
          }
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .item-card {
      margin-bottom: 12px;
    }
    .header {
      font-size: 1.1rem;
      font-weight: 500;
      margin-bottom: 8px;
    }
    .district {
      color: #666;
    }
    .contact {
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 0.9rem;
      margin-bottom: 8px;
    }
    .contact span {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  `],
})
export class SearchRequestItemComponent {
  @Input({ required: true }) request!: SearchRequest;
}
