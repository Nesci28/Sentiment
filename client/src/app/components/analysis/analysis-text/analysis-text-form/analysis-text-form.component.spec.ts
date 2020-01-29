import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisTextFormComponent } from './analysis-text-form.component';

describe('AnalysisTextFormComponent', () => {
  let component: AnalysisTextFormComponent;
  let fixture: ComponentFixture<AnalysisTextFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisTextFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisTextFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
