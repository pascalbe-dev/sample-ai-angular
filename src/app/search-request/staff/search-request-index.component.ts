import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { SearchRequestService } from '../search-request.service';
import { SearchRequest } from '../search-request.model';
import { SearchRequestItemComponent } from './search-request-item.component';

@Component({
  selector: 'app-search-request-index',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    SearchRequestItemComponent,
  ],
  template: `
    <div class="page">
      <h2>Gesuchskartei</h2>

      <mat-card class="filter-card">
        <mat-card-content>
          <form [formGroup]="filterForm" class="filter-form">
            <mat-form-field appearance="outline">
              <mat-label>Stadt</mat-label>
              <input matInput formControlName="city" />
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Stadtteil</mat-label>
              <input matInput formControlName="district" />
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Räume min.</mat-label>
              <input matInput formControlName="minRooms" type="number" />
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Räume max.</mat-label>
              <input matInput formControlName="maxRooms" type="number" />
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Max. Preis (€)</mat-label>
              <input matInput formControlName="maxPrice" type="number" />
            </mat-form-field>
          </form>
        </mat-card-content>
      </mat-card>

      <p class="result-count">{{ filteredRequests().length }} Gesuch(e) gefunden</p>

      @for (request of filteredRequests(); track request.id) {
        <app-search-request-item [request]="request" />
      } @empty {
        <p class="empty">Keine Gesuche gefunden.</p>
      }
    </div>
  `,
  styles: [`
    .page {
      max-width: 800px;
      margin: 32px auto;
      padding: 0 16px;
    }
    .filter-card {
      margin-bottom: 24px;
    }
    .filter-form {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    .filter-form mat-form-field {
      flex: 1;
      min-width: 160px;
    }
    .result-count {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 12px;
    }
    .empty {
      color: #999;
      text-align: center;
      margin-top: 48px;
    }
  `],
})
export class SearchRequestIndexComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(SearchRequestService);
  private fb = inject(FormBuilder);

  allRequests = signal<SearchRequest[]>([]);

  filterForm = this.fb.group({
    city: [''],
    district: [''],
    minRooms: [null as number | null],
    maxRooms: [null as number | null],
    maxPrice: [null as number | null],
  });

  filter = signal(this.filterForm.value);

  filteredRequests = computed(() => {
    const f = this.filter();
    return this.allRequests().filter((r) => {
      if (f.city && !r.city.toLowerCase().includes(f.city.toLowerCase())) return false;
      if (f.district && (!r.district || !r.district.toLowerCase().includes(f.district.toLowerCase()))) return false;
      if (f.minRooms && (!r.maxRooms || r.maxRooms < f.minRooms)) return false;
      if (f.maxRooms && (!r.minRooms || r.minRooms > f.maxRooms)) return false;
      if (f.maxPrice && r.maxPrice && r.maxPrice > f.maxPrice) return false;
      return true;
    });
  });

  ngOnInit(): void {
    const companyId = this.route.snapshot.paramMap.get('companyId') ?? '';
    this.service.getByCompany(companyId).subscribe((requests) => {
      this.allRequests.set(requests);
    });

    this.filterForm.valueChanges.subscribe((value) => {
      this.filter.set(value);
    });
  }
}
