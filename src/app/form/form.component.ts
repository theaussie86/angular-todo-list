import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [ReactiveFormsModule, CheckboxComponent],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
})
export class FormComponent {
  form = new FormGroup({
    text: new FormControl("", {
      validators: [Validators.required, Validators.minLength(3)],
      updateOn: "change",
    }),
  });

  get textIsInvalid() {
    return (
      this.form.controls.text.touched &&
      this.form.controls.text.dirty &&
      this.form.controls.text.invalid
    );
  }

  get textErrorMessage() {
    const control = this.form.controls.text;
    if (control.errors?.["required"]) {
      return "This field is required.";
    } else if (control.errors?.["minlength"]) {
      return `Minimum ${control.errors["minlength"].requiredLength} characters required.`;
    }
    return null;
  }

  constructor(private todoService: TodoService) {}

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.form.pending || !this.form.value.text) {
      return;
    }

    this.todoService.add(this.form.value.text);
    this.form.reset();
  }
}
