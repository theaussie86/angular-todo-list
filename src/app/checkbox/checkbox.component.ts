import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-checkbox",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./checkbox.component.html",
  styleUrl: "./checkbox.component.css",
})
export class CheckboxComponent {
  @Input() checked = false;
  @Input() isDisabled = false;

  public toggle() {
    this.checked = !this.checked;
  }
}
