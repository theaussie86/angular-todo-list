import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { TodoComponent } from "./todo/todo.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule, CheckboxComponent, TodoComponent],
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
