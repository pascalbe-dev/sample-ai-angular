import { Injectable, computed, signal } from '@angular/core';
import { Task } from './task.model';

export type FilterType = 'all' | 'active' | 'completed';

const STORAGE_KEY = 'todo-tasks';

function loadFromStorage(): Task[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return (JSON.parse(raw) as Task[]).map((t) => ({
      ...t,
      dueDate: t.dueDate ? new Date(t.dueDate) : undefined,
    }));
  } catch {
    return [];
  }
}

function saveToStorage(tasks: Task[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private readonly _tasks = signal<Task[]>(loadFromStorage());
  readonly filter = signal<FilterType>('all');

  readonly filteredTasks = computed(() => {
    const f = this.filter();
    return this._tasks().filter((t) => {
      if (f === 'active') return !t.completed;
      if (f === 'completed') return t.completed;
      return true;
    });
  });

  addTask(title: string, dueDate?: Date): void {
    const task: Task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      dueDate,
      completed: false,
    };
    this._tasks.update((tasks) => {
      const updated = [...tasks, task];
      saveToStorage(updated);
      return updated;
    });
  }

  toggleTask(id: string): void {
    this._tasks.update((tasks) => {
      const updated = tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      );
      saveToStorage(updated);
      return updated;
    });
  }
}
