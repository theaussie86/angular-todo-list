import { Component } from "@angular/core";
import { TodoComponent } from "../todo/todo.component";
import { Todo, TodoService } from "../../services/todo.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-todos",
  standalone: true,
  imports: [TodoComponent, CommonModule],
  templateUrl: "./todos.component.html",
  styleUrl: "./todos.component.css",
})
export class TodosComponent {
  todos: Todo[] = [];
  index?: number;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.todos$.subscribe((todos) => {
      this.todos = todos;
    });
  }

  onTaskDragStart(event: DragEvent) {
    const id = Number(
      (event.target as HTMLElement).getAttribute("ng-reflect-todo-id")
    );
    if (id && typeof id === "number") {
      this.index = id;
    }
  }

  onTaskDrop(event: DragEvent) {
    event.preventDefault();
    const target = this._getParentAppTodo(event.target as HTMLElement);
    if (!target) {
      return;
    }
    const targetId = Number(target.getAttribute("ng-reflect-todo-id"));
    if (targetId && typeof targetId === "number") {
      this._swapTodos(this.index!, targetId);
      this.index = undefined;
    }
  }

  onTaskDragOver(event: DragEvent) {
    event.preventDefault();
  }

  private _getParentAppTodo(target: HTMLElement): HTMLElement | null {
    if (target.tagName === "APP-TODO") {
      return target;
    }
    if (target.parentElement) {
      return this._getParentAppTodo(target.parentElement);
    }
    return null;
  }

  private _swapTodos(startId: number, targetId: number) {
    const startIndex = this.todos.findIndex((t) => t.id === startId);
    const targetIndex = this.todos.findIndex((t) => t.id === targetId);
    // remove the item from the todos array
    const temp = this.todos.splice(startIndex, 1);
    // insert the item at the target index
    this.todos.splice(targetIndex, 0, ...temp);
  }
}
