import { Component, Input } from "@angular/core";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { CommonModule } from "@angular/common";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [CheckboxComponent, CommonModule],
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.css",
})
export class TodoComponent {
  @Input() done: boolean = false;
  @Input() todoId: number = 0;
  @Input() text: string = "";

  constructor(private todoService: TodoService) {}

  public toggle() {
    this.todoService.toggle(this.todoId);
  }

  public remove() {
    this.todoService.remove(this.todoId);
  }
}
