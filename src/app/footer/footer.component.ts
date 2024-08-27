import { Component } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { CommonModule } from "@angular/common";
import { FilterBtnsComponent } from "../filter-btns/filter-btns.component";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, FilterBtnsComponent],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  constructor(private todoService: TodoService) {}

  get todos() {
    return this.todoService.todos.length;
  }

  clearCompleted() {
    this.todoService.clearCompleted();
  }
}
