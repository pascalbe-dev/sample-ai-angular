import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { FilterType, TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [DatePipe, MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatListModule],
  template: `
    <div class="filter-bar">
      <mat-button-toggle-group
        [value]="todoService.filter()"
        (change)="todoService.filter.set($event.value)"
        aria-label="Task filter"
      >
        <mat-button-toggle value="all">All</mat-button-toggle>
        <mat-button-toggle value="active">Active</mat-button-toggle>
        <mat-button-toggle value="completed">Completed</mat-button-toggle>
      </mat-button-toggle-group>
    </div>

    @if (todoService.filteredTasks().length === 0) {
      <p class="empty-state">No tasks here.</p>
    } @else {
      <mat-list>
        @for (task of todoService.filteredTasks(); track task.id) {
          <mat-list-item class="task-item">
            <mat-checkbox
              [checked]="task.completed"
              (change)="todoService.toggleTask(task.id)"
              [class.completed-label]="task.completed"
            >
              {{ task.title }}
            </mat-checkbox>
            @if (task.dueDate) {
              <mat-chip-set class="due-chip">
                <mat-chip>{{ task.dueDate | date: 'mediumDate' }}</mat-chip>
              </mat-chip-set>
            }
          </mat-list-item>
        }
      </mat-list>
    }
  `,
  styles: [
    `
      .filter-bar {
        display: flex;
        justify-content: center;
        padding: 8px 0 16px;
      }
      .empty-state {
        text-align: center;
        color: #888;
        padding: 24px 0;
      }
      .task-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: auto !important;
        padding: 8px 0 !important;
      }
      .due-chip {
        margin-left: 8px;
      }
      :host ::ng-deep .completed-label .mdc-label {
        text-decoration: line-through;
        color: #aaa;
      }
    `,
  ],
})
export class TodoListComponent {
  readonly todoService = inject(TodoService);

  setFilter(value: FilterType): void {
    this.todoService.filter.set(value);
  }
}
