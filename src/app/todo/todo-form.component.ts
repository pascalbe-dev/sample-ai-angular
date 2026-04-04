import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()" class="todo-form">
      <mat-form-field appearance="outline" class="title-field">
        <mat-label>Task title</mat-label>
        <input matInput formControlName="title" placeholder="What needs to be done?" />
      </mat-form-field>

      <mat-form-field appearance="outline" class="date-field">
        <mat-label>Due date (optional)</mat-label>
        <input matInput [matDatepicker]="picker" formControlName="dueDate" />
        <mat-datepicker-toggle matIconSuffix [for]="picker" />
        <mat-datepicker #picker />
      </mat-form-field>

      <button mat-raised-button color="primary" type="submit" [disabled]="form.invalid">
        Add Task
      </button>
    </form>
  `,
  styles: [`
    .todo-form {
      display: flex;
      gap: 12px;
      align-items: flex-start;
      flex-wrap: wrap;
      padding: 16px 0;
    }
    .title-field { flex: 2 1 200px; }
    .date-field { flex: 1 1 160px; }
  `],
})
export class TodoFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly todoService = inject(TodoService);

  readonly form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(1)]],
    dueDate: [null as Date | null],
  });

  submit(): void {
    if (this.form.invalid) return;
    const { title, dueDate } = this.form.getRawValue();
    this.todoService.addTask(title!, dueDate ?? undefined);
    this.form.reset();
  }
}
