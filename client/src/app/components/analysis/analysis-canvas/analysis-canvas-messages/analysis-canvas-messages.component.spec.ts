import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisCanvasMessagesComponent } from './analysis-canvas-messages.component';

describe('AnalysisCanvasMessagesComponent', () => {
  let component: AnalysisCanvasMessagesComponent;
  let fixture: ComponentFixture<AnalysisCanvasMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisCanvasMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisCanvasMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
