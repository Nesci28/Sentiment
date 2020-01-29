import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisTextComponent } from './analysis-text.component';

describe('AnalysisTextComponent', () => {
  let component: AnalysisTextComponent;
  let fixture: ComponentFixture<AnalysisTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
