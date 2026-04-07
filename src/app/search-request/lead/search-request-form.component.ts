import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { SearchRequestService } from '../search-request.service';

function atLeastOneContact(control: AbstractControl): ValidationErrors | null {
  const email = control.get('email')?.value;
  const phone = control.get('phone')?.value;
  return email || phone ? null : { atLeastOneContact: true };
}

@Component({
  selector: 'app-search-request-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  template: `
    <mat-card class="form-card">
      <mat-card-header>
        <mat-card-title>Gesuch anlegen</mat-card-title>
        <mat-card-subtitle>Tragen Sie sich in unsere Gesuchskartei ein</mat-card-subtitle>
      </mat-card-header>

      <mat-card-content>
        <form [formGroup]="form" (ngSubmit)="onSubmit()">

          <section>
            <h3>Kontakt</h3>
            <p class="contact-hint">Bitte geben Sie mindestens eine Kontaktmöglichkeit an.</p>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>E-Mail-Adresse</mat-label>
              <input matInput formControlName="email" type="email" />
            </mat-form-field>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Telefonnummer</mat-label>
              <input matInput formControlName="phone" type="tel" />
            </mat-form-field>
          </section>

          <section>
            <h3>Suchkriterien</h3>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Stadt *</mat-label>
              <input matInput formControlName="city" />
            </mat-form-field>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Stadtteil</mat-label>
              <input matInput formControlName="district" />
            </mat-form-field>
            <div class="row">
              <mat-form-field appearance="outline" class="half-width">
                <mat-label>Räume min.</mat-label>
                <input matInput formControlName="minRooms" type="number" min="1" />
              </mat-form-field>
              <mat-form-field appearance="outline" class="half-width">
                <mat-label>Räume max.</mat-label>
                <input matInput formControlName="maxRooms" type="number" min="1" />
              </mat-form-field>
            </div>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Maximale Miete (€)</mat-label>
              <input matInput formControlName="maxPrice" type="number" min="0" />
            </mat-form-field>
          </section>

          @if (submitted) {
            <p class="success-message">Ihr Gesuch wurde erfolgreich eingereicht.</p>
          }

          <button
            mat-raised-button
            color="primary"
            type="submit"
            [disabled]="form.invalid">
            Gesuch einreichen
          </button>

        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .form-card {
      max-width: 600px;
      margin: 32px auto;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding-top: 16px;
    }
    .full-width { width: 100%; }
    .row {
      display: flex;
      gap: 16px;
    }
    .half-width { flex: 1; }
    .contact-hint {
      font-size: 0.85rem;
      color: #666;
      margin: 0 0 8px;
    }
    .success-message {
      color: green;
      font-weight: 500;
    }
  `],
})
export class SearchRequestFormComponent {
  private route = inject(ActivatedRoute);
  private service = inject(SearchRequestService);
  private fb = inject(FormBuilder);

  submitted = false;

  form = this.fb.group(
    {
      email: [''],
      phone: [''],
      city: ['', Validators.required],
      district: [''],
      minRooms: [null as number | null],
      maxRooms: [null as number | null],
      maxPrice: [null as number | null],
    },
    { validators: atLeastOneContact }
  );

  onSubmit(): void {
    if (this.form.invalid) return;

    const companyId = this.route.snapshot.paramMap.get('companyId') ?? '';
    const { email, phone, city, district, minRooms, maxRooms, maxPrice } = this.form.value;

    this.service.add({
      companyId,
      city: city!,
      email: email || undefined,
      phone: phone || undefined,
      district: district || undefined,
      minRooms: minRooms ?? undefined,
      maxRooms: maxRooms ?? undefined,
      maxPrice: maxPrice ?? undefined,
    }).subscribe(() => {
      this.submitted = true;
      this.form.reset();
    });
  }
}
