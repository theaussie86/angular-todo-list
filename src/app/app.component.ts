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
import { TodosComponent } from "./todos/todos.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    CheckboxComponent,
    FormComponent,
    FooterComponent,
    FilterBtnsComponent,
    TodosComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "NHD Todo List";
  mode: "light" | "dark" = "light";

  public toggleMode() {
    this.mode = this.mode === "light" ? "dark" : "light";
  }
}
