import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FooterComponent } from "./footer.component";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
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
    const showAll = spyOn(component, "showAll");
    const button = fixture.nativeElement.querySelector("button");
    button.click();
    expect(showAll).toHaveBeenCalled();
  });

  it('should call "showActive" when clicking on the "Active" button', () => {
    const showActive = spyOn(component, "showActive");
    const button = fixture.nativeElement.querySelector("button:nth-child(2)");
    button.click();
    expect(showActive).toHaveBeenCalled();
  });

  it('should call "showCompleted" when clicking on the "Completed" button', () => {
    const showCompleted = spyOn(component, "showCompleted");
    const button = fixture.nativeElement.querySelector("button:nth-child(3)");
    button.click();
    expect(showCompleted).toHaveBeenCalled();
  });

  it('should call "clearCompleted" when clicking on the "Clear completed" button', () => {
    const clearCompleted = spyOn(component, "clearCompleted");
    const buttons = fixture.nativeElement.querySelectorAll("button");
    buttons[3].click();
    expect(clearCompleted).toHaveBeenCalled();
  });

  it("should show the number of todos", () => {
    const todos = fixture.nativeElement.querySelector(".todos");
    expect(todos.textContent).toBe("3 items left");
  });
});
