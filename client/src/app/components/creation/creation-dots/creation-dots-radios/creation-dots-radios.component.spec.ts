import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDotsRadiosComponent } from './creation-dots-radios.component';

describe('CreationDotsRadiosComponent', () => {
  let component: CreationDotsRadiosComponent;
  let fixture: ComponentFixture<CreationDotsRadiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationDotsRadiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationDotsRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
