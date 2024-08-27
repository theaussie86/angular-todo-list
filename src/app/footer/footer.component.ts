import { Component } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  constructor(private todoService: TodoService) {}

  get todos() {
    return this.todoService.todos.length;
  }

  get filterStatus() {
    return this.todoService.filter || "all";
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
