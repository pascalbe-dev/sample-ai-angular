import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TodoFormComponent } from './todo/todo-form.component';
import { TodoListComponent } from './todo/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatToolbarModule, TodoFormComponent, TodoListComponent],
  template: `
    <mat-toolbar color="primary">
      <span>My To-Do List</span>
    </mat-toolbar>

    <div class="page-content">
      <mat-card class="todo-card">
        <mat-card-content>
          <app-todo-form />
          <mat-divider />
          <app-todo-list />
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .page-content {
      display: flex;
      justify-content: center;
      padding: 32px 16px;
    }
    .todo-card {
      width: 100%;
      max-width: 680px;
    }
  `],
})
export class App {}
