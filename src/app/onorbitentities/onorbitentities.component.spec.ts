import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnorbitentitiesComponent } from './onorbitentities.component';

describe('OnorbitentitiesComponent', () => {
  let component: OnorbitentitiesComponent;
  let fixture: ComponentFixture<OnorbitentitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnorbitentitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnorbitentitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
