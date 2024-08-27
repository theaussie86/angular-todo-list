import { Injectable } from "@angular/core";
import todos from "../todos.json";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

@Injectable({
  providedIn: "root",
})
export class TodoService {
  todos: Todo[] = [];

  constructor() {
    this.todos = todos;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  toggle(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.done = !todo.done;
    }
  }

  remove(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  add(text: string) {
    const id = this.generateId();
    this.todos.push({ id, text, done: false });
  }

  /* helper function */
  private generateId(): number {
    const ids = this.todos.map((todo) => todo.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }
}
