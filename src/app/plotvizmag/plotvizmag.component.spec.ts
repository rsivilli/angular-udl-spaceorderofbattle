import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotvizmagComponent } from './plotvizmag.component';

describe('PlotvizmagComponent', () => {
  let component: PlotvizmagComponent;
  let fixture: ComponentFixture<PlotvizmagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotvizmagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotvizmagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
