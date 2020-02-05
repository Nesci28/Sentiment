import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDotsMessagesComponent } from './creation-dots-messages.component';

describe('CreationDotsMessagesComponent', () => {
  let component: CreationDotsMessagesComponent;
  let fixture: ComponentFixture<CreationDotsMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationDotsMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationDotsMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
