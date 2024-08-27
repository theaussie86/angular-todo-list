import { TestBed } from "@angular/core/testing";

import { TodoService } from "./todo.service";

describe("TodoService", () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should have a todos property", () => {
    expect(service.todos).toBeDefined();
    expect(service.todos.length).toEqual(3);
  });

  it("should have a todos$ observable", () => {
    expect(service.todos$).toBeDefined();
  });

  it("should have a toggle method", () => {
    expect(service.toggle).toBeDefined();
  });

  it("should toggle the done property of a todo", () => {
    const todo = service.todos[0];
    service.toggle(todo.id);
    expect(todo.done).toBeTrue();
  });

  it("should have a remove method", () => {
    expect(service.remove).toBeDefined();
  });

  it("should remove a todo", () => {
    const todo = service.todos[0];
    service.remove(todo.id);
    console.log(service.todos);
    expect(service.todos.length).toEqual(2);
  });

  it("should have an add method", () => {
    expect(service.add).toBeDefined();
  });

  it("should add a todo", () => {
    service.add("New todo");
    expect(service.todos.length).toEqual(4);
  });

  it("should have a setFilter method", () => {
    expect(service.setFilter).toBeDefined();
  });

  it("should filter completed todos", () => {
    service.setFilter("completed");
    expect(service.todos.length).toEqual(1);
  });

  it("should filter active todos", () => {
    service.setFilter("active");
    expect(service.todos.length).toEqual(2);
  });

  it("should have a clearCompleted method", () => {
    expect(service.clearCompleted).toBeDefined();
  });

  it("should clear completed todos", () => {
    service.clearCompleted();
    expect(service.todos.length).toEqual(2);
  });
});
