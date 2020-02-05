import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDotsCanvasComponent } from './creation-dots-canvas.component';

describe('CreationDotsCanvasComponent', () => {
  let component: CreationDotsCanvasComponent;
  let fixture: ComponentFixture<CreationDotsCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationDotsCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationDotsCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
