import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisCanvasComponent } from './analysis-canvas.component';

describe('AnalysisCanvasComponent', () => {
  let component: AnalysisCanvasComponent;
  let fixture: ComponentFixture<AnalysisCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
