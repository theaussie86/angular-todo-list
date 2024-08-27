import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FormComponent } from "./form.component";
import { TodoService } from "../../services/todo.service";

describe("FormComponent", () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let todoService: jasmine.SpyObj<TodoService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj("TodoService", ["add"]);
    await TestBed.configureTestingModule({
      imports: [FormComponent],
      providers: [{ provide: TodoService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService) as jasmine.SpyObj<TodoService>;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a form property", () => {
    expect(component.form).toBeDefined();
  });

  it("should have a textIsInvalid getter", () => {
    expect(component.textIsInvalid).toBeDefined();
  });

  it('should return true if the "text" control is touched, dirty, and invalid', () => {
    component.form.controls.text.markAsTouched();
    component.form.controls.text.markAsDirty();
    // component.form.controls.text.setErrors({ required: true });
    expect(component.textIsInvalid).toBeTrue();
  });

  it('should return false if the "text" control is touched, dirty, and valid', () => {
    component.form.controls.text.markAsTouched();
    component.form.controls.text.markAsDirty();
    component.form.controls.text.setValue("abcd");
    expect(component.textIsInvalid).toBeFalse();
  });

  it("should have a textErrorMessage getter", () => {
    expect(component.textErrorMessage).toBeDefined();
  });

  it('should return "This field is required." if the "text" control is required', () => {
    component.form.controls.text.setErrors({ required: true });
    expect(component.textErrorMessage).toBe("This field is required.");
  });

  it('should return "Minimum 3 characters required." if the "text" control has a minlength error', () => {
    component.form.controls.text.setErrors({
      minlength: { requiredLength: 3 },
    });
    expect(component.textErrorMessage).toBe("Minimum 3 characters required.");
  });

  it("should return null if the control is valid", () => {
    component.form.controls.text.setValue("abcd");
    expect(component.textErrorMessage).toBeNull();
  });

  it("should have an onSubmit method", () => {
    expect(component.onSubmit).toBeDefined();
  });

  it("should call the onSubmit method when submitting the form", () => {
    const onSubmit = spyOn(component, "onSubmit");
    const form = fixture.nativeElement.querySelector("form");
    form.dispatchEvent(new Event("submit"));
    expect(onSubmit).toHaveBeenCalled();
  });

  it("should mark the form as touched when calling onSubmit", () => {
    component.onSubmit();
    expect(component.form.touched).toBeTrue();
  });

  it("should add a todo if the form is valid", () => {
    component.form.controls.text.setValue("abcd");
    component.onSubmit();
    expect(todoService.add).toHaveBeenCalled();
  });

  it("should reset the form if the form is valid", () => {
    component.form.controls.text.setValue("abcd");
    component.onSubmit();
    expect(component.form.controls.text.value).toBeNull();
  });

  it("should not add a todo if the form is invalid", () => {
    component.onSubmit();

    expect(component.form.invalid).toBeTrue();
    expect(todoService.add).not.toHaveBeenCalled();
  });
});
