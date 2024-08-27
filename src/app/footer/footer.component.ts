import { Component } from "@angular/core";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  constructor(private todoService: TodoService) {}

  get todos() {
    return this.todoService.todos.length;
  }

  showAll() {
    this.todoService.setFilter();
  }

  showActive() {
    this.todoService.setFilter("active");
  }

  showCompleted() {
    this.todoService.setFilter("completed");
  }

  clearCompleted() {
    this.todoService.clearCompleted();
  }
}
