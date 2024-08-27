import { Injectable } from "@angular/core";
import todos from "../todos.json";
import { BehaviorSubject } from "rxjs";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private _todos: Todo[] = [];
  private _todosSubject = new BehaviorSubject<Todo[]>([]);
  public todos$ = this._todosSubject.asObservable();
  public filter?: "active" | "completed" = undefined;

  constructor() {
    this._todos = todos;
    this._todosSubject.next(this.filteredTodos);
  }

  get todos(): Todo[] {
    return this.filteredTodos;
  }

  private get filteredTodos(): Todo[] {
    return this.filter === "active"
      ? this._todos.filter((t) => t.done === false)
      : this.filter === "completed"
      ? this._todos.filter((t) => t.done === true)
      : this._todos;
  }

  toggle(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.done = !todo.done;
      this._todosSubject.next(this.filteredTodos);
    }
  }

  remove(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      this._todosSubject.next(this.filteredTodos);
    }
  }

  add(text: string) {
    const id = this.generateId();
    this.todos.push({ id, text, done: false });
    this._todosSubject.next(this.filteredTodos);
  }

  setFilter(filter?: "active" | "completed") {
    this.filter = filter;
    this._todosSubject.next(this.filteredTodos);
  }

  clearCompleted() {
    this._todos = this.todos.filter((todo) => !todo.done);
    this._todosSubject.next(this.filteredTodos);
  }

  /* helper function */
  private generateId(): number {
    const ids = this.todos.map((todo) => todo.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }
}
