import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotrcsComponent } from './plotrcs.component';

describe('PlotrcsComponent', () => {
  let component: PlotrcsComponent;
  let fixture: ComponentFixture<PlotrcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotrcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotrcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
