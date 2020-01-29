import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisCanvasCanvasComponent } from './analysis-canvas-canvas.component';

describe('AnalysisCanvasCanvasComponent', () => {
  let component: AnalysisCanvasCanvasComponent;
  let fixture: ComponentFixture<AnalysisCanvasCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisCanvasCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisCanvasCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
