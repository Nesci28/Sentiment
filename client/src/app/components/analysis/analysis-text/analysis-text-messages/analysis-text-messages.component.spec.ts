import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisTextMessagesComponent } from './analysis-text-messages.component';

describe('AnalysisTextMessagesComponent', () => {
  let component: AnalysisTextMessagesComponent;
  let fixture: ComponentFixture<AnalysisTextMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisTextMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisTextMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
