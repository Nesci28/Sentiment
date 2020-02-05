import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreationDotsComponent } from "./creation-dots.component";

describe("CreationDotsComponent", () => {
  let component: CreationDotsComponent;
  let fixture: ComponentFixture<CreationDotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreationDotsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
