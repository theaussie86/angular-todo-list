import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FooterComponent } from "./footer.component";
import { TodoService } from "../../services/todo.service";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let todoService: jasmine.SpyObj<TodoService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj("TodoService", [
      "setFilter",
      "clearCompleted",
      "todos",
      // { todos: [{ text: "First Todos", done: false, id: 1 }] },
    ]);

    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [{ provide: TodoService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService) as jasmine.SpyObj<TodoService>;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should show all the buttons", () => {
    const buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons.length).toBe(4);
  });

  it('should call "showAll" when clicking on the "All" button', () => {
    const button = fixture.nativeElement.querySelector("button");
    button.click();
    expect(todoService.setFilter).toHaveBeenCalled();
  });

  it('should call "showActive" when clicking on the "Active" button', () => {
    const button = fixture.nativeElement.querySelector("button:nth-child(2)");
    button.click();
    expect(todoService.setFilter).toHaveBeenCalledWith("active");
  });

  it('should call "showCompleted" when clicking on the "Completed" button', () => {
    const button = fixture.nativeElement.querySelector("button:nth-child(3)");
    button.click();
    expect(todoService.setFilter).toHaveBeenCalledWith("completed");
  });

  it('should call "clearCompleted" when clicking on the "Clear completed" button', () => {
    const buttons = fixture.nativeElement.querySelectorAll("button");
    buttons[3].click();
    expect(todoService.clearCompleted).toHaveBeenCalled();
  });

  it("should show the number of todos", () => {
    const todos = fixture.nativeElement.querySelector(".todos");
    expect(todos.textContent).toBe("0 items left");
  });
});
