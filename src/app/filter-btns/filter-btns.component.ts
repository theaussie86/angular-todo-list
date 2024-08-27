import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-filter-btns",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./filter-btns.component.html",
  styleUrl: "./filter-btns.component.css",
})
export class FilterBtnsComponent {
  constructor(private todoService: TodoService) {}

  get filterStatus() {
    return this.todoService.filter || "all";
  }

  showAll() {
    console.log("Show all");
  }

  showActive() {
    console.log("Show active");
  }

  showCompleted() {
    console.log("Show completed");
  }
}
