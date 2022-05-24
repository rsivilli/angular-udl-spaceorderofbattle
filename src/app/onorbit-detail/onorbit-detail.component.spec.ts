import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnorbitDetailComponent } from './onorbit-detail.component';

describe('OnorbitDetailComponent', () => {
  let component: OnorbitDetailComponent;
  let fixture: ComponentFixture<OnorbitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnorbitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnorbitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
