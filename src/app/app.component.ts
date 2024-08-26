import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AppModule } from "./app.module";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule],
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
