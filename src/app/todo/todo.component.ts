import { Component, Input } from "@angular/core";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [CheckboxComponent, CommonModule],
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.css",
})
export class TodoComponent {
  done: boolean = false;
  @Input() text: string = "";

  public toggle() {
    this.done = !this.done;
  }

  public remove() {
    this.done = true;
  }
}
