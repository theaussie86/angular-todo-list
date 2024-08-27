import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { TodoComponent } from "./todo/todo.component";
import { Todo, TodoService } from "../services/todo.service";
import { FormComponent } from "./form/form.component";
import { FooterComponent } from "./footer/footer.component";
import { Observable } from "rxjs";
import { FilterBtnsComponent } from "./filter-btns/filter-btns.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    CheckboxComponent,
    TodoComponent,
    FormComponent,
    FooterComponent,
    FilterBtnsComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "NHD Todo List";
  mode: "light" | "dark" = "light";
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.todos$.subscribe((todos) => {
      this.todos = todos;
    });
  }

  public toggleMode() {
    this.mode = this.mode === "light" ? "dark" : "light";
  }
}
