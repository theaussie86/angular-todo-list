import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TodoComponent } from "./todo.component";
import { TodoService } from "../../services/todo.service";

describe("TodoComponent", () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let todoService: jasmine.SpyObj<TodoService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj("TodoService", ["toggle", "remove"]);

    await TestBed.configureTestingModule({
      imports: [TodoComponent],
      providers: [{ provide: TodoService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService) as jasmine.SpyObj<TodoService>;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a done, todoId and text property", () => {
    expect(component.done).toBeDefined();
    expect(component.done).toBeFalse();

    expect(component.todoId).toBeDefined();
    expect(typeof component.todoId).toBe("number");

    expect(component.text).toBeDefined();
    expect(typeof component.text).toBe("string");
  });

  it("should have a toggle method", () => {
    expect(component.toggle).toBeDefined();
    expect(typeof component.toggle).toBe("function");
  });

  it("should call the toggle method when clicking on the component", () => {
    const checkbox = fixture.nativeElement.querySelector("div");
    checkbox.click();
    expect(todoService.toggle).toHaveBeenCalled();
  });

  it("should have a remove method", () => {
    expect(component.remove).toBeDefined();
    expect(typeof component.remove).toBe("function");
  });

  it("should call the remove method when clicking on the remove button", () => {
    const button = fixture.nativeElement.querySelector("img");
    button.click();
    expect(todoService.remove).toHaveBeenCalled();
  });
});
